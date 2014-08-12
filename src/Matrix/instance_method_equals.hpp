//
// Matrix/instance_method_equals.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_EQUALS_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_EQUALS_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, equals,
{
  NanScope();

  if (args.Length() == 1 && Matrix::is_matrix(args[0])) {
    const Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
    const typename Matrix::value_type& matrix = **obj;
    const Matrix* rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
    const typename Matrix::value_type& rhs_matrix = **rhs_obj;

    NanReturnValue(NanNew<v8::Boolean>(matrix == rhs_matrix));
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_EQUALS_HPP
