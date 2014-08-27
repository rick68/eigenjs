//
// RowVector.hpp
// ~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_ROWVECTOR_HPP
#define EIGENJS_ROWVECTOR_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/mpl/at.hpp>
#include <boost/mpl/int.hpp>

#include "base.hpp"
#include "definition.hpp"
#include "Matrix.hpp"
#include "CRowVector.hpp"
#include "RowVector_fwd.hpp"
#include "RowVector/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class RowVector : public base<RowVector, ScalarType, ValueType, ClassName> {
 public:
  typedef base<
      ::EigenJS::RowVector, ScalarType, ValueType, ClassName> base_type;

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
    EIGENJS_OBJECT_INITIALIZE(RowVector, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

 private:
  explicit RowVector(const typename value_type::Index& cols)
    : base_type()
      { *base_type::value_ptr_ = value_type::Zero(1, cols); }

  ~RowVector() {}

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
          RowVector* obj = new RowVector(size);
          obj->Wrap(args.This());
          NanReturnValue(args.This());
        }
      } else if (args[0]->IsArray()) {
        const v8::Local<v8::Array>& array = args[0].As<v8::Array>();
        uint32_t len = array->Length();
        RowVector* obj = new RowVector(len);
        RowVector::value_type& rowvector = **obj;

        for (uint32_t i = 0; i < len; ++i) {
          const v8::Local<v8::Value>& elem = array->Get(i);
          rowvector(0, i) = elem->NumberValue();
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

        if (rows >=0 && cols >=0) {
          if (args.IsConstructCall()) {
            RowVector* obj = new RowVector(cols);
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

#endif  // EIGENJS_ROWVECTOR_HPP
