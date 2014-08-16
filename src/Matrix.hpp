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

#include <boost/mpl/at.hpp>
#include <boost/mpl/int.hpp>

#include <eigen3/Eigen/Dense>

#include "base.hpp"
#include "definition.hpp"
#include "Complex.hpp"
#include "Matrix_fwd.hpp"
#include "Matrix/definitions.hpp"
#include "Vector_fwd.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class Matrix : public base<Matrix, ScalarType, ValueType, ClassName> {
 public:
  typedef base<::EigenJS::Matrix, ScalarType, ValueType, ClassName> base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef ::EigenJS::Complex<scalar_type> Complex;
  typedef ::EigenJS::CMatrix<scalar_type> CMatrix;

  typedef ::EigenJS::Vector<scalar_type> Vector;

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

 protected:
  explicit Matrix(const base_type& base) : base_type(base) {}

  Matrix(
    const typename value_type::Index& rows
  , const typename value_type::Index& cols
  ) : base_type()
      { *base_type::value_ptr_ = value_type::Zero(rows, cols); }

  ~Matrix() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() < 2) {
      NanThrowError
          ("Tried creating a matrix without rows and columns arguments");
      NanReturnUndefined();
    }

    if (Matrix::is_scalar(args[0]) && Matrix::is_scalar(args[1])) {
      if (args.IsConstructCall()) {
        typename value_type::Index rows = args[0]->Uint32Value();
        typename value_type::Index cols = args[1]->Uint32Value();
        Matrix* obj = new Matrix(rows, cols);
        obj->Wrap(args.This());
        NanReturnValue(args.This());
      } else {
        v8::Local<v8::Value> argv[] = { args[0], args[1] };
        NanReturnValue(
          base_type::new_instance(
            args
          , sizeof(argv) / sizeof(v8::Local<v8::Value>)
          , argv
          )
        );
      }
    }

    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }
};

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_HPP
