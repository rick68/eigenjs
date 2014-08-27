//
// CMatrixBlock/instance_method_mula.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIXBLOCK_INSTANCE_METHOD_MULA_HPP
#define EIGENJS_CMATRIXBLOCK_INSTANCE_METHOD_MULA_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrixBlock, mula,
{
  NanScope();

  if (args.Length() == 1) {
    CMatrixBlock* obj = node::ObjectWrap::Unwrap<CMatrixBlock>(args.This());
    typename CMatrixBlock::value_type& value = **obj;

    if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      if (value.cols() != rhs_cmatrix.rows() ||
          value.cols() != rhs_cmatrix.cols()) {
        NanThrowError("The complex matrix block size must be mxm");
        NanReturnUndefined();
      }

      value *= rhs_cmatrix;

      NanReturnValue(args.This());
    } else if (CVector::is_cvector(args[0])) {
      const CVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<CVector>(args[0]->ToObject());
      const typename CVector::value_type& rhs_cvector = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      if (value.cols() != rhs_cvector.rows() ||
          value.cols() != rhs_cvector.cols()
      ) {
        NanThrowError("The operation result is out of range");
        NanReturnUndefined();
      }

      value *= rhs_cvector;

      NanReturnValue(args.This());
    } else if (CRowVector::is_crowvector(args[0])) {
      const CRowVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<CRowVector>(args[0]->ToObject());
      const typename CRowVector::value_type& rhs_crowvector = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      if (value.rows() != 1 ||
          value.cols() != 1 ||
          rhs_crowvector.rows() != 1 ||
          rhs_crowvector.cols() != 1
      ) {
        NanThrowError("The operation result is out of range");
        NanReturnUndefined();
      }

      value *= rhs_crowvector;

      NanReturnValue(args.This());
    } else if (CMatrixBlock::is_cmatrixblock(args[0])) {
      const CMatrixBlock* const& rhs_obj =
        node::ObjectWrap::Unwrap<CMatrixBlock>(args[0]->ToObject());
      const typename CMatrixBlock::value_type& rhs_cmatrixblock = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      if (value.cols() != rhs_cmatrixblock.rows() ||
          value.cols() != rhs_cmatrixblock.cols()) {
        NanThrowError("The complex matrix block size must be mxm");
        NanReturnUndefined();
      }

      value *= rhs_cmatrixblock;

      NanReturnValue(args.This());
    } else if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      if (value.cols() != rhs_matrix.rows() ||
          value.cols() != rhs_matrix.cols()) {
        NanThrowError("The matrix block size must be mxm");
        NanReturnUndefined();
      }

      value *= rhs_matrix;

      NanReturnValue(args.This());
    } else if (Vector::is_vector(args[0])) {
      const Vector* const& rhs_obj =
        node::ObjectWrap::Unwrap<Vector>(args[0]->ToObject());
      const typename Vector::value_type& rhs_vector = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      if (value.cols() != rhs_vector.rows() ||
          value.cols() != rhs_vector.cols()
      ) {
        NanThrowError("The operation result is out of range");
        NanReturnUndefined();
      }

      value *= rhs_vector;

      NanReturnValue(args.This());
    } else if (RowVector::is_rowvector(args[0])) {
      const RowVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<RowVector>(args[0]->ToObject());
      const typename RowVector::value_type& rhs_rowvector = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      if (value.rows() != 1 ||
          value.cols() != 1 ||
          rhs_rowvector.rows() != 1 ||
          rhs_rowvector.cols() != 1
      ) {
        NanThrowError("The operation result is out of range");
        NanReturnUndefined();
      }

      value *= rhs_rowvector;

      NanReturnValue(args.This());
    } else if (MatrixBlock::is_matrixblock(args[0])) {
      const MatrixBlock* const& rhs_obj =
        node::ObjectWrap::Unwrap<MatrixBlock>(args[0]->ToObject());
      const typename MatrixBlock::value_type& rhs_matrixblock = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      if (value.cols() != rhs_matrixblock.rows() ||
          value.cols() != rhs_matrixblock.cols()) {
        NanThrowError("The matrix block size must be mxm");
        NanReturnUndefined();
      }

      value *= rhs_matrixblock;

      NanReturnValue(args.This());
    } else if (T::is_scalar(args[0])) {
      value *= args[0]->NumberValue();

      NanReturnValue(args.This());
    } else if (Complex::is_complex(args[0])) {
      const Complex* const& rhs_obj =
        node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::value_type& rhs_complex = **rhs_obj;

      value *= rhs_complex;

      NanReturnValue(args.This());
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIXBLOCK_INSTANCE_METHOD_MULA_HPP
