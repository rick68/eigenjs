//
// CMatrix/instance_method_trace.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_TRACE_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_TRACE_HPP

#include "../common_macro.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, trace,
{
  const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
  const typename T::value_type& value = **obj;

  NanScope();

  const typename Complex::value_type&& result = value.trace();

  v8::Local<v8::Value> argv[] = {
    NanNew<v8::Number>(result.real())
  , NanNew<v8::Number>(result.imag())
  };

  NanReturnValue(
    Complex::new_instance(
      args
    , sizeof(argv) / sizeof(v8::Local<v8::Value>)
    , argv
    )
  );
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_TRACE_HPP
