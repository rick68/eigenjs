//
// Matrix/instance_method_redux.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_REDUX_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_REDUX_HPP

#include "../detail/scalar_op_from_js.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, redux,
{
  NanScope();

  if (args.Length() == 1 && args[0]->IsFunction()) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;

    NanReturnValue(NanNew<v8::Number>(
        value.redux(
          detail::scalar_op_from_js<typename T::scalar_type>(
            args
          , args[0].As<v8::Function>()
          )
        )
      )
    );
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_REDUX_HPP
