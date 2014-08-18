//
// Vector/instance_method_mula.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_VECTOR_INSTANCE_METHOD_MULA_HPP
#define EIGENJS_VECTOR_INSTANCE_METHOD_MULA_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Vector, mula,
{
  NanScope();

  if (args.Length() == 1) {
    Vector* obj = node::ObjectWrap::Unwrap<Vector>(args.This());
    typename Vector::value_type& value = **obj;

    if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;

      if (Matrix::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      if (rhs_matrix.cols() != 1) {
        NanThrowError("The matrix size must be 1x1");
        NanReturnUndefined();
      }

      value *= rhs_matrix;

      NanReturnValue(args.This());
    } else if (Vector::is_vector(args[0])) {
      const Vector* const& rhs_obj =
        node::ObjectWrap::Unwrap<Vector>(args[0]->ToObject());
      const typename Vector::value_type& rhs_vector = **rhs_obj;

      if (Vector::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      value *= rhs_vector;

      NanReturnValue(args.This());
    } else if (RowVector::is_rowvector(args[0])) {
      const RowVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<RowVector>(args[0]->ToObject());
      const typename RowVector::value_type& rhs_rowvector = **rhs_obj;

      if (RowVector::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      value *= rhs_rowvector;

      NanReturnValue(args.This());
    } else if (T::is_scalar(args[0])) {
      value *= args[0]->NumberValue();

      NanReturnValue(args.This());
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_VECTOR_INSTANCE_METHOD_MULA_HPP
