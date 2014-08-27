//
// CMatrixBlock/instance_method_assign.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIXBLOCK_INSTANCE_METHOD_ASSIGN_HPP
#define EIGENJS_CMATRIXBLOCK_INSTANCE_METHOD_ASSIGN_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrixBlock, assign,
{
  NanScope();

  if (args.Length() == 1) {
    CMatrixBlock* obj =
        node::ObjectWrap::Unwrap<CMatrixBlock>( args.This() );
    typename CMatrixBlock::value_type& value = **obj;

    if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      value = rhs_cmatrix;

      NanReturnValue(args.This());
    } else if (CVector::is_cvector(args[0])) {
      const CVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<CVector>(args[0]->ToObject());
      const typename CVector::value_type& rhs_cvector = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      value = rhs_cvector;

      NanReturnValue(args.This());
    } else if (CRowVector::is_crowvector(args[0])) {
      const CRowVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<CRowVector>(args[0]->ToObject());
      const typename CRowVector::value_type& rhs_crowvector = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      value = rhs_crowvector;

      NanReturnValue(args.This());
    } else if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      value = rhs_matrix.template cast<typename Complex::value_type>();

      NanReturnValue(args.This());
    } else if (Vector::is_vector(args[0])) {
      const Vector* const& rhs_obj =
        node::ObjectWrap::Unwrap<Vector>(args[0]->ToObject());
      const typename Vector::value_type& rhs_vector = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      value = rhs_vector.template cast<typename Complex::value_type>();

      NanReturnValue(args.This());
    } else if (RowVector::is_rowvector(args[0])) {
      const RowVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<RowVector>(args[0]->ToObject());
      const typename RowVector::value_type& rhs_rowvector = **rhs_obj;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      value = rhs_rowvector.template cast<typename Complex::value_type>();

      NanReturnValue(args.This());
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIXBLOCK_INSTANCE_METHOD_ASSIGN_HPP
