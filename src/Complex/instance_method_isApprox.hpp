//
// Complex/instance_method_isApprox.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_INSTANCE_METHOD_ISAPPROX_HPP
#define EIGENJS_COMPLEX_INSTANCE_METHOD_ISAPPROX_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Complex, isApprox,
{
  const int& args_length = args.Length();
  NanScope();

  if (args_length == 0 || args_length > 2)
    NanReturnUndefined();

  const Complex* const& obj = node::ObjectWrap::Unwrap<Complex>(args.This());
  const Complex* const& rhs_obj =
    node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
  const typename Complex::complex_type& v = **obj;
  const typename Complex::complex_type& w = **rhs_obj;

  typedef Eigen::NumTraits<typename Complex::complex_type> num_traits;
  const typename num_traits::Real& prec =
      args_length == 2
    ? args[1]->NumberValue()
    : num_traits::dummy_precision();

  NanReturnValue(
    NanNew(
      std::norm(v - w) <= prec * prec * (std::min)(std::norm(v), std::norm(w))
    )
  );
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_INSTANCE_METHOD_ISAPPROX_HPP
