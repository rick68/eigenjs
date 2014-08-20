//
// CRowVector.hpp
// ~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CROWVECTOR_HPP
#define EIGENJS_CROWVECTOR_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/mpl/at.hpp>
#include <boost/mpl/int.hpp>

#include <eigen3/Eigen/Dense>

#include "base.hpp"
#include "definition.hpp"
#include "Complex.hpp"
#include "CMatrix.hpp"
#include "CRowVector_fwd.hpp"
#include "CRowVector/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class CRowVector : public base<CRowVector, ScalarType, ValueType, ClassName> {
 public:
  typedef base<
      ::EigenJS::CRowVector, ScalarType, ValueType, ClassName> base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef ::EigenJS::Complex<scalar_type> Complex;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(CMatrix, tpl)
    EIGENJS_OBJECT_INITIALIZE(CRowVector, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

 private:
  explicit CRowVector(const typename value_type::Index& cols)
    : base_type()
      { *base_type::value_ptr_ = value_type::Zero(1, cols); }

  ~CRowVector() {}

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
        typename value_type::Index size = args[0]->Int32Value();
        if (size >= 0) {
          CRowVector* obj = new CRowVector(size);
          obj->Wrap(args.This());
          NanReturnValue(args.This());
        }
      } else if (args[0]->IsArray()) {
        const v8::Local<v8::Array>& array = args[0].As<v8::Array>();
        uint32_t len = array->Length();
        CRowVector* obj = new CRowVector(len);
        CRowVector::value_type& crowvector = **obj;

        for (uint32_t i = 0; i < len; ++i) {
          const v8::Local<v8::Value>& elem = array->Get(i);

          if (CRowVector::is_scalar(elem)) {
            crowvector(0, i) = elem->NumberValue();
          } else if (Complex::is_complex(elem->ToObject())) {
            const Complex* const& rhs_obj =
                node::ObjectWrap::Unwrap<Complex>(elem->ToObject());
            const typename Complex::value_type& elem_value = **rhs_obj;
            crowvector(0, i) = elem_value;
          }
        }

        obj->Wrap(args.This());
        NanReturnValue(args.This());
      }
    } else if (args_length == 2) {
      if (args[0]->IsNumber() && args[1]->IsNumber()) {
        const typename value_type::Index& rows = args[0]->Int32Value();
        const typename value_type::Index& cols = args[1]->Int32Value();
        v8::Local<v8::Value> argv[] = { args[0], args[1] };
        (void)rows;

        if (rows >= 0 && cols >= 0) {
          if (args.IsConstructCall()) {
            CRowVector* obj = new CRowVector(cols);
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
    }

    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }
};

}  // namespace EigenJS

#endif  // EIGENJS_CROWVECTOR_HPP
