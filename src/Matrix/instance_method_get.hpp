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
    const Matrix* const& obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
    const typename Matrix::matrix_type& matrix = **obj;
    const typename Matrix::matrix_type::Index& row = args[0]->Uint32Value();
    const typename Matrix::matrix_type::Index& col = args[1]->Uint32Value();

    if (Matrix::is_out_of_range(matrix, row, col)) {
      NanReturnUndefined();
    }

    const typename Matrix::scalar_type& value = matrix(row, col);
    NanReturnValue(NanNew(value));
  }

  EIGENJS_THROW_ERROR_INVAILD_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_GET_HPP
