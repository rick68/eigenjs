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

#include "base.hpp"
#include "definition.hpp"
#include "Matrix_fwd.hpp"
#include "Matrix/definitions.hpp"
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

    if (args[0]->IsNumber() && args[1]->IsNumber()) {
      typename value_type::Index rows = args[0]->Int32Value();
      typename value_type::Index cols = args[1]->Int32Value();

      if (rows >= 0 && cols >= 0) {
        if (args.IsConstructCall()) {
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
    }

    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }
};

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_HPP
