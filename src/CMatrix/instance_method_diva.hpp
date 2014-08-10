//
// CMatrix/instance_method_diva.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_DIVA_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_DIVA_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, diva,
{
  typedef typename CMatrix::Complex Complex;

  NanScope();

  if (args.Length() == 1) {
    CMatrix* obj = node::ObjectWrap::Unwrap<CMatrix>(args.This());
    typename CMatrix::cmatrix_type& cmatrix = **obj;

    if (CMatrix::is_scalar(args[0])) {
      cmatrix /= args[0]->NumberValue();

      NanReturnValue(args.This());
    } else if (CMatrix::is_complex(args[0])) {
      const Complex* const& rhs_obj =
        node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::complex_type& rhs_complex = **rhs_obj;

      cmatrix /= rhs_complex;

      NanReturnValue(args.This());
    }
  }

  EIGENJS_THROW_ERROR_INVAILD_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_DIVA_HPP
