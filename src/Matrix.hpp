//
// Matirx.hpp
// ~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_HPP
#define EIGENJS_MATRIX_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <eigen3/Eigen/Dense>

#include "base.hpp"
#include "definition.hpp"
#include "Complex.hpp"
#include "Matrix/definitions.hpp"

namespace EigenJS {

template <typename ValueType, const char* ClassName>
class Matrix : public base<Matrix, ValueType, ClassName> {
 public:
  typedef base<::EigenJS::Matrix, ValueType, ClassName> base_type;
  typedef typename base_type::element_type element_type;
  typedef typename base_type::complex_type complex_type;
  typedef typename base_type::matrix_type matrix_type;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(Matrix, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());

    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

  static NAN_INLINE bool is_out_of_range(
      const matrix_type& matrix
    , const typename matrix_type::Index& row
    , const typename matrix_type::Index& col) {
    return row < 0 || row >= matrix.rows() || col < 0 || col >= matrix.cols()
      ? NanThrowError("Row or column numbers are out of range"), true
      : false;
  }

  static NAN_INLINE bool is_nonconformate_arguments(
      const Matrix* const& op1
    , const Matrix* const& op2) {
    return op1->matrix_.rows() != op2->matrix_.rows() ||
           op1->matrix_.cols() != op2->matrix_.cols()
      ? NanThrowError("Nonconformant arguments"), true
      : false;
  }

  static NAN_INLINE bool is_invalid_matrix_product(
      const Matrix* const& op1
    , const Matrix* const& op2) {
    return op1->matrix_.cols() != op2->matrix_.rows()
      ? NanThrowError("Invalid matrix product"), true
      : false;
  }

 public:
  NAN_INLINE matrix_type& operator*() {
    return matrix_;
  }

  NAN_INLINE const matrix_type& operator*() const {
    return matrix_;
  }

  NAN_INLINE matrix_type* operator->() {
    return &matrix_;
  }

  NAN_INLINE const matrix_type* operator->() const {
    return &matrix_;
  }

 private:
  Matrix(
      const typename matrix_type::Index& rows
    , const typename matrix_type::Index& cols
    ) : matrix_(matrix_type::Zero(rows, cols))
  {}

  ~Matrix() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() < 2) {
      NanThrowError("Tried creating matrix without rows and columns arguments");
      NanReturnUndefined();
    }

    if (args.IsConstructCall()) {
      typename matrix_type::Index rows = args[0]->Uint32Value();
      typename matrix_type::Index columns = args[1]->Uint32Value();
      Matrix* obj = new Matrix(rows, columns);
      obj->Wrap(args.This());
      NanReturnValue(args.This());
    } else {
      v8::Local<v8::Function> ctor = NanNew(base_type::constructor);
      v8::Local<v8::Value> argv[] = {args[0], args[1]};
      NanReturnValue(
        ctor->NewInstance(
          sizeof(argv) / sizeof(v8::Local<v8::Value>)
        , argv
        )
      );
    }
  }

 private:
  matrix_type matrix_;
};

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_HPP
