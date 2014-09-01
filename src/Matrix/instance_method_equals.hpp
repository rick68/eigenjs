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
    } else if (MatrixBlock::is_matrixblock(args[0])) {
      const MatrixBlock* rhs_obj =
          node::ObjectWrap::Unwrap<MatrixBlock>(args[0]->ToObject());
      const typename MatrixBlock::value_type& rhs_matrixblock = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_matrixblock));
    } else if (VectorBlock::is_vectorblock(args[0])) {
      const VectorBlock* rhs_obj =
          node::ObjectWrap::Unwrap<VectorBlock>(args[0]->ToObject());
      const typename VectorBlock::value_type& rhs_vectorblock = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_vectorblock));
    } else if (RowVectorBlock::is_rowvectorblock(args[0])) {
      const RowVectorBlock* rhs_obj =
          node::ObjectWrap::Unwrap<RowVectorBlock>(args[0]->ToObject());
      const typename RowVectorBlock::value_type& rhs_rowvectorblock =
          **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      NanReturnValue(NanNew<v8::Boolean>(value == rhs_rowvectorblock));
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_EQUALS_HPP
