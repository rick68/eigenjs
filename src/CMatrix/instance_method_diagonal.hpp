//
// CMatrix/instance_method_diagonal.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_DIAGONAL_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_DIAGONAL_HPP

#include "../common_macro.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, diagonal,
{
  const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
  const typename T::value_type& value = **obj;
  typename T::value_type::Index index = 0;
  v8::Local<v8::Value> argv[] = { NanNew<v8::Integer>(0) };

  NanScope();

  if (args.Length() == 1 && args[0]->IsNumber()) {
    index = args[0]->Int32Value();
  }

  if (index <= -value.rows() || index >= value.cols()) {
    EIGENJS_THROW_ERROR_INVALID_INDEX_ARGUMENT()
    NanReturnUndefined();
  }

  v8::Local<v8::Object> instance = CVector::new_instance(
    args
  , sizeof(argv) / sizeof(v8::Local<v8::Value>)
  , argv
  );

  CVector* new_obj = node::ObjectWrap::Unwrap<CVector>(instance);
  typename CVector::value_type& new_value = **new_obj;

  new_value = value.diagonal(index);

  NanReturnValue(instance);
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_DIAGONAL_HPP
