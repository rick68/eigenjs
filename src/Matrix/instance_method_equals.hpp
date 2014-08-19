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

  if (args.Length() == 1) {
    const T* obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;

    if (Matrix::is_matrix(args[0])) {
      const Matrix* rhs_obj =
          node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_matrix));
    } else if (Vector::is_vector(args[0])) {
      const Vector* rhs_obj =
          node::ObjectWrap::Unwrap<Vector>(args[0]->ToObject());
      const typename Vector::value_type& rhs_vector = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_vector));
    } else if (RowVector::is_rowvector(args[0])) {
      const RowVector* rhs_obj =
          node::ObjectWrap::Unwrap<RowVector>(args[0]->ToObject());
      const typename RowVector::value_type& rhs_rowvector = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_rowvector));
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_EQUALS_HPP
