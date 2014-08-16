//
// Vector/instance_method_get.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_VECTOR_INSTANCE_METHOD_GET_HPP
#define EIGENJS_VECTOR_INSTANCE_METHOD_GET_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Vector, get,
{
  NanScope();

  if (args.Length() == 1 &&
      args[0]->IsNumber()
  ) {
    const Vector* const& obj = node::ObjectWrap::Unwrap<Vector>(args.This());
    const typename Vector::value_type& vector = **obj;
    const typename Vector::value_type::Index& row = args[0]->Int32Value();

    if (Vector::is_out_of_range(vector, row, 0)) {
      NanReturnUndefined();
    }

    const typename Vector::scalar_type& value = vector(row, 0);
    NanReturnValue(NanNew(value));
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_VECTOR_INSTANCE_METHOD_GET_HPP
