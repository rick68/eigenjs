//
// Matrix/instance_method_setConstant.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_SETCONSTANT_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_SETCONSTANT_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, setConstant,
{
  T* obj = node::ObjectWrap::Unwrap<T>(args.This());
  typename T::value_type& value = **obj;

  NanScope();

  if (args.Length() == 1 && T::is_scalar(args[0])) {
    const typename T::scalar_type& scalar = args[0]->NumberValue();

    value.setConstant(scalar);

    NanReturnValue(args.This());
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_SETCONSTANT_HPP
