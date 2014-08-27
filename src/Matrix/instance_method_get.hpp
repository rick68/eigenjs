//
// Matrix/instance_method_get.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_GET_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_GET_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, get,
{
  NanScope();

  if (args.Length() == 2 &&
      args[0]->IsNumber() &&
      args[1]->IsNumber()
  ) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;
    const typename T::value_type::Index& row = args[0]->Int32Value();
    const typename T::value_type::Index& col = args[1]->Int32Value();

    if (T::is_out_of_range(value, row, col)) {
      NanReturnUndefined();
    }

    const typename T::scalar_type& elem = value(row, col);
    NanReturnValue(NanNew(elem));
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_GET_HPP
