//
// CMatrix/instance_method_determinant.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_DETERMINANT_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_DETERMINANT_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, determinant,
{
  const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
  const typename T::value_type& value = **obj;

  NanScope();

  if (!T::is_square_matrix(obj)) {
    NanReturnUndefined();
  }

  const typename Complex::value_type&& result = value.determinant();

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

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_DETERMINANT_HPP
