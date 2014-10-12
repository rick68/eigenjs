//
// CFullPivLU/instance_method_isInvertible.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CFULLPIVLU_INSTANCE_METHOD_ISINVERTIBLE_HPP
#define EIGENJS_CFULLPIVLU_INSTANCE_METHOD_ISINVERTIBLE_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CFullPivLU, isInvertible,
{
  const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
  const typename T::value_type& value = **obj;

  NanScope();

  NanReturnValue(NanNew<v8::Boolean>(value.isInvertible()));
})

}  // namespace EigenJS

#endif  // EIGENJS_CFULLPIVLU_INSTANCE_METHOD_ISINVERTIBLE_HPP
