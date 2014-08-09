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
  typedef typename CMatrix::Complex Complex;
  typedef typename CMatrix::Matrix Matrix;

  NanScope();

  if (args.Length() == 1) {
    CMatrix* obj = node::ObjectWrap::Unwrap<CMatrix>(args.This());
    typename CMatrix::cmatrix_type& cmatrix = **obj;

    if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::cmatrix_type& rhs_cmatrix = **rhs_obj;

      if (CMatrix::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      cmatrix *= rhs_cmatrix;

      NanReturnValue(args.This());
    } else if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::matrix_type& rhs_matrix = **rhs_obj;

      if (Matrix::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      cmatrix *= rhs_matrix.template cast<typename CMatrix::complex_type>();

      NanReturnValue(args.This());
    } else if (CMatrix::is_scalar(args[0])) {
      cmatrix *= args[0]->NumberValue();

      NanReturnValue(args.This());
    } else if (Complex::is_complex(args[0])) {
      const Complex* const& rhs_obj =
        node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::complex_type& rhs_complex = **rhs_obj;

      cmatrix *= rhs_complex;

      NanReturnValue(args.This());
    }
  }

  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_MULA_HPP
