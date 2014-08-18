//
// RowVector/instance_method_get.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_ROWVECTOR_INSTANCE_METHOD_GET_HPP
#define EIGENJS_ROWVECTOR_INSTANCE_METHOD_GET_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(RowVector, get,
{
  NanScope();

  if (args.Length() == 1 &&
      args[0]->IsNumber()
  ) {
    const RowVector* const& obj =
        node::ObjectWrap::Unwrap<RowVector>(args.This());
    const typename RowVector::value_type& rowvector = **obj;
    const typename RowVector::value_type::Index& col = args[0]->Int32Value();

    if (RowVector::is_out_of_range(rowvector, col, 0)) {
      NanReturnUndefined();
    }

    const typename RowVector::scalar_type& value = rowvector(0, col);
    NanReturnValue(NanNew(value));
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_ROWVECTOR_INSTANCE_METHOD_GET_HPP
