//
// CMatrix/instance_method_mula.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_MULA_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_MULA_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, mula,
{
  NanScope();

  if (args.Length() == 1) {
    CMatrix* obj = node::ObjectWrap::Unwrap<CMatrix>(args.This());
    typename CMatrix::value_type& cmatrix = **obj;

    if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;

      if (CMatrix::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      cmatrix *= rhs_cmatrix;

      NanReturnValue(args.This());
    } else if (CVector::is_cvector(args[0])) {
      const CVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<CVector>(args[0]->ToObject());
      const typename CVector::value_type& rhs_cvector = **rhs_obj;

      if (CMatrix::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      cmatrix *= rhs_cvector;

      NanReturnValue(args.This());
    } else if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;

      if (Matrix::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      cmatrix *= rhs_matrix.template cast<typename Complex::value_type>();

      NanReturnValue(args.This());
    } else if (Vector::is_vector(args[0])) {
      const Vector* const& rhs_obj =
        node::ObjectWrap::Unwrap<Vector>(args[0]->ToObject());
      const typename Vector::value_type& rhs_vector = **rhs_obj;

      if (Vector::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      cmatrix *= rhs_vector.template cast<typename Complex::value_type>();

      NanReturnValue(args.This());
    } else if (CMatrix::is_scalar(args[0])) {
      cmatrix *= args[0]->NumberValue();

      NanReturnValue(args.This());
    } else if (Complex::is_complex(args[0])) {
      const Complex* const& rhs_obj =
        node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::value_type& rhs_complex = **rhs_obj;

      cmatrix *= rhs_complex;

      NanReturnValue(args.This());
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_MULA_HPP
