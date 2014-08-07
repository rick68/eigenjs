//
// Matrix_instance_method_toString.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_TOSTRING_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_TOSTRING_HPP

#include <sstream>

#include "definition.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, toString,
{
  const Matrix* const& obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
  const typename Matrix::matrix_type& matrix = **obj;

  std::ostringstream result;
  result << matrix;

  NanScope();
  NanReturnValue(NanNew(result.str().c_str()));
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_TOSTRING_HPP
