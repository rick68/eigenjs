//
// CMatrix/instance_method_isApprox.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_ISAPPROX_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_ISAPPROX_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, isApprox,
{
  const int& args_length = args.Length();

  NanScope();

  if (args_length == 1 || args_length == 2) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;
    const typename CMatrix::value_type& v = value;

    if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;
      const typename CMatrix::value_type& w = rhs_cmatrix;

      if (T::is_nonconformate_arguments(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      typedef Eigen::NumTraits<typename T::value_type::Scalar> num_traits;
      const typename num_traits::Real& prec =
          args_length == 2
        ? args[1]->NumberValue()
        : num_traits::dummy_precision();

      NanReturnValue(NanNew(v.isApprox(w, prec)));
    } else if (CVector::is_cmatrix(args[0])) {
      const CVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<CVector>(args[0]->ToObject());
      const typename CVector::value_type& rhs_cvector = **rhs_obj;
      const typename CVector::value_type& w = rhs_cvector;

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

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_ISAPPROX_HPP
