//
// CMatrix/instance_method_redux.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_REDUX_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_REDUX_HPP

#include "../detail/scalar_op_from_js.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, redux,
{
  NanScope();

  if (args.Length() == 1 && args[0]->IsFunction()) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;

    const typename Complex::value_type& result = value.redux(
      detail::scalar_op_from_js<typename T::scalar_type>(
        args
      , args[0].As<v8::Function>()
      )
    );

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
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_REDUX_HPP
