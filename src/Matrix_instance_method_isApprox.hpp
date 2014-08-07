//
// Matrix_instance_method_isApprox.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_ISAPPROX_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_ISAPPROX_HPP

#include "definition.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, isApprox,
{
  const int& args_length = args.Length();

  NanScope();

  if (args_length == 0 || args_length > 2)
    NanReturnUndefined();

  const Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
  const typename Matrix::matrix_type& matrix = **obj;
  const Matrix* rhs_obj =
      node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
  const typename Matrix::matrix_type& rhs_matrix = **rhs_obj;
  const typename Matrix::matrix_type& v = matrix;
  const typename Matrix::matrix_type& w = rhs_matrix;

  typedef Eigen::NumTraits<typename Matrix::matrix_type::Scalar> num_traits;
  const typename num_traits::Real& prec =
      args_length == 2
    ? args[1]->NumberValue()
    : num_traits::dummy_precision();

  NanReturnValue(NanNew(v.isApprox(w, prec)));
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_ISAPPROX_HPP
