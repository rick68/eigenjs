//
// Matrix_instance_method_set.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_SET_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_SET_HPP

#include "definition.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, set,
{
  Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
  typename Matrix::matrix_type& matrix = **obj;

  NanScope();

  if (args.Length() == 1 && args[0]->IsArray()) {
    v8::Local<v8::Array> array = args[0].As<v8::Array>();
    uint32_t len = array->Length();
    const typename Matrix::matrix_type::Index& rows = matrix.rows();
    const typename Matrix::matrix_type::Index& cols = matrix.cols();
    const typename Matrix::matrix_type::Index& elems = rows * cols;

    if (len != elems) {
      len < rows * cols
        ? NanThrowError("Too few coefficients passed to Matrix")
        : NanThrowError("Too many coefficients passed to Matrix");
      NanReturnUndefined();
    }

    for (uint32_t i = 0; i < len; ++i) {
      v8::Local<v8::Value> elem = array->Get(i);
      matrix(i / cols, i % cols) = elem->NumberValue();
    }
  } else if (args.Length() == 3 &&
             args[0]->IsNumber() &&
             args[1]->IsNumber() &&
             Matrix::is_scalar(args[2])
  ) {
    const typename Matrix::matrix_type::Index& row = args[0]->Uint32Value();
    const typename Matrix::matrix_type::Index& col = args[1]->Uint32Value();
    const typename Matrix::element_type& value = args[2]->NumberValue();

    if (Matrix::is_out_of_range(matrix, row, col))
      NanReturnUndefined();

    matrix(row, col) = value;
  }

  NanReturnValue(args.This());
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_SET_HPP
