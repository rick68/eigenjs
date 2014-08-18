//
// CVector.hpp
// ~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CVECTOR_HPP
#define EIGENJS_CVECTOR_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/mpl/at.hpp>
#include <boost/mpl/int.hpp>

#include <eigen3/Eigen/Dense>

#include "base.hpp"
#include "definition.hpp"
#include "Complex.hpp"
#include "Matrix.hpp"
#include "CMatrix.hpp"
#include "CVector_fwd.hpp"
#include "CVector/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class CVector : public base<CVector, ScalarType, ValueType, ClassName> {
 public:
  typedef base<::EigenJS::CVector, ScalarType, ValueType, ClassName> base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef Complex<scalar_type> Complex;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(CMatrix, tpl)
    EIGENJS_OBJECT_INITIALIZE(CVector, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

 private:
  explicit CVector(const base_type& base)
    : base_type(base)
  {}

  explicit CVector(const typename value_type::Index& rows)
    : base_type()
      { *base_type::value_ptr_ = value_type::Zero(rows, 1); }

  ~CVector() {}

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

      if (CVector::is_scalar(args[0])) {
        typename value_type::Index size = args[0]->Int32Value();
        CVector* obj = new CVector(size);
        obj->Wrap(args.This());
        NanReturnValue(args.This());
      } else if (args[0]->IsArray()) {
        const v8::Local<v8::Array>& array = args[0].As<v8::Array>();
        uint32_t len = array->Length();
        CVector* obj = new CVector(len);
        CVector::value_type& cvector = **obj;

        for (uint32_t i = 0; i < len; ++i) {
          const v8::Local<v8::Value>& elem = array->Get(i);

          if (CVector::is_scalar(elem)) {
            cvector(i, 0) = elem->NumberValue();
          } else if (Complex::is_complex(elem->ToObject())) {
            const Complex* const& rhs_obj =
                node::ObjectWrap::Unwrap<Complex>(elem->ToObject());
            const typename Complex::value_type& elem_value = **rhs_obj;
            cvector(i, 0) = elem_value;
          }
        }

        obj->Wrap(args.This());
        NanReturnValue(args.This());
      }
    } else if (args_length == 2) {
      if (CVector::is_scalar(args[0]) && CVector::is_scalar(args[1])) {
        const typename value_type::Index& rows = args[0]->Int32Value();
        const typename value_type::Index& cols = args[1]->Int32Value();
        v8::Local<v8::Value> argv[] = { args[0], args[1] };
        (void)cols;

        if (args.IsConstructCall()) {
          CVector* obj = new CVector(rows);
          obj->Wrap(args.This());
          NanReturnValue(args.This());
        } else {
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

#endif  // EIGENJS_CVECTOR_HPP
