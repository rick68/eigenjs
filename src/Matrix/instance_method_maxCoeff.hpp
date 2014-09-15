//
// Matrix/instance_method_maxCoeff.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_MAXCOEFF_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_MAXCOEFF_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, maxCoeff,
{
  NanScope();

  const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
  const typename T::value_type& value = **obj;

  if (args.Length() == 1) {
    typename T::scalar_type max = typename T::scalar_type();
    typename T::value_type::Index rowId = typename T::value_type::Index();
    typename T::value_type::Index colId = typename T::value_type::Index();

    if (args[0]->IsFunction()) {
      max = value.maxCoeff(&rowId, &colId);

      v8::Local<v8::Value> argv[] = {
        NanNew<v8::Integer>(rowId)
      , NanNew<v8::Integer>(colId)
      };

      NanMakeCallback(
          args.This()
        , args[0].As<v8::Function>()
        , sizeof(argv) / sizeof(v8::Local<v8::Value>)
        , argv
        );

      NanReturnValue(NanNew<v8::Number>(max));
    } else if (args[0]->IsObject()) {
      v8::Local<v8::Object> result = args[0]->ToObject();

      max = value.maxCoeff(&rowId, &colId);

      const v8::Local<v8::Number>& result_max = NanNew<v8::Number>(max);

      result->Set(NanNew("maxCoeff"), result_max);
      result->Set(NanNew("rowId"), NanNew<v8::Integer>(rowId));
      result->Set(NanNew("colId"), NanNew<v8::Integer>(colId));

      NanReturnValue(result_max);
    }
  }

  NanReturnValue(NanNew<v8::Number>(value.maxCoeff()));
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_MAXCOEFF_HPP
