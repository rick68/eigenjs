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

  if (args_length == 0 || args_length > 2 || !CMatrix::is_cmatrix(args[0]))
    NanReturnUndefined();

  const CMatrix* const& obj = node::ObjectWrap::Unwrap<CMatrix>(args.This());
  const typename CMatrix::cmatrix_type& cmatrix = **obj;
  const CMatrix* const& rhs_obj =
      node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
  const typename CMatrix::cmatrix_type& rhs_cmatrix = **rhs_obj;
  const typename CMatrix::cmatrix_type& v = cmatrix;
  const typename CMatrix::cmatrix_type& w = rhs_cmatrix;

  typedef Eigen::NumTraits<typename CMatrix::cmatrix_type::Scalar> num_traits;
  const typename num_traits::Real& prec =
      args_length == 2
    ? args[1]->NumberValue()
    : num_traits::dummy_precision();

  NanReturnValue(NanNew(v.isApprox(w, prec)));
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_ISAPPROX_HPP
