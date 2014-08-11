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

  typedef typename base_type::complex_type complex_type;
  typedef typename base_type::matrix_type matrix_type;
  typedef typename base_type::cmatrix_type cmatrix_type;

  typedef typename base_type::Complex Complex;
  typedef typename base_type::CMatrix CMatrix;

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

 private:
  Matrix(
    const typename matrix_type::Index& rows
  , const typename matrix_type::Index& cols
  )
      { base_type::value_ = value_type::Zero(rows, cols); }

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
};

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_HPP
