//
// Vector.hpp
// ~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_VECTOR_HPP
#define EIGENJS_VECTOR_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <eigen3/Eigen/Dense>

#include "Matrix.hpp"
#include "Vector/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class Vector : public Matrix<ScalarType, ValueType> {
 public:
  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef Matrix<ScalarType, ValueType> Matrix;
  typedef typename Matrix::Complex Complex;
  typedef typename Matrix::CMatrix CMatrix;

  typedef typename Matrix::base_type base_type;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(Matrix, tpl)
    EIGENJS_OBJECT_INITIALIZE(Vector, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

 private:
  explicit Vector(const base_type& base) : base_type(base) {}

  Vector(const typename value_type::Index& size)
    : Matrix(size, 1)
  {}

  ~Vector() {}

  static NAN_METHOD(New) {
    const int& args_length = args.Length();

    NanScope();

    if (args_length == 1) {
      if (!args.IsConstructCall()) {
        v8::Local<v8::Value> argv[] = { args[0] };
        NanReturnValue(
          base_type::new_instance(
            args
          , sizeof(argv) / sizeof(v8::Local<v8::Value>)
          , argv
          )
        );
      }

      if (args[0]->IsNumber()) {
        typename value_type::Index size = args[0]->Uint32Value();
        Vector* obj = new Vector(size);
        obj->Wrap(args.This());
        NanReturnValue(args.This());
      } else if (args[0]->IsArray()) {
        const v8::Local<v8::Array>& array = args[0].As<v8::Array>();
        uint32_t len = array->Length();
        Vector* obj = new Vector(len);
        Vector::value_type& vector = **obj;

        for (uint32_t i = 0; i < len; ++i) {
          const v8::Local<v8::Value>& elem = array->Get(i);
          vector(i, 0) = elem->NumberValue();
        }

        obj->Wrap(args.This());
        NanReturnValue(args.This());
      }
    }

    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }
};

}  // namespace EigenJS

#endif  // EIGENJS_VECTOR_HPP
