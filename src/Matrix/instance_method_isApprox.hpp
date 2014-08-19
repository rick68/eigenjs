//
// Matrix/instance_method_isApprox.hpp
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

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, isApprox,
{
  const int& args_length = args.Length();

  NanScope();

  if (args_length == 1 || args_length == 2) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;
    const typename T::value_type& v = value;

    if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
          node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;
      const typename Matrix::value_type& w = rhs_matrix;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      typedef Eigen::NumTraits<typename T::value_type::Scalar> num_traits;
      const typename num_traits::Real& prec =
          args_length == 2
        ? args[1]->NumberValue()
        : num_traits::dummy_precision();

      NanReturnValue(NanNew(v.isApprox(w, prec)));
    } else if (Vector::is_vector(args[0])) {
      const Vector* const& rhs_obj =
          node::ObjectWrap::Unwrap<Vector>(args[0]->ToObject());
      const typename Vector::value_type& rhs_vector = **rhs_obj;
      const typename Vector::value_type& w = rhs_vector;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      typedef Eigen::NumTraits<typename T::value_type::Scalar> num_traits;
      const typename num_traits::Real& prec =
          args_length == 2
        ? args[1]->NumberValue()
        : num_traits::dummy_precision();

      NanReturnValue(NanNew(v.isApprox(w, prec)));
    } else if (RowVector::is_rowvector(args[0])) {
      const RowVector* const& rhs_obj =
          node::ObjectWrap::Unwrap<RowVector>(args[0]->ToObject());
      const typename RowVector::value_type& rhs_rowvector = **rhs_obj;
      const typename RowVector::value_type& w = rhs_rowvector;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      typedef Eigen::NumTraits<typename T::value_type::Scalar> num_traits;
      const typename num_traits::Real& prec =
          args_length == 2
        ? args[1]->NumberValue()
        : num_traits::dummy_precision();

      NanReturnValue(NanNew(v.isApprox(w, prec)));
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_ISAPPROX_HPP
