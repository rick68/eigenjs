//
// Complex/instance_method_abs.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_INSTANCE_METHOD_ABS_HPP
#define EIGENJS_COMPLEX_INSTANCE_METHOD_ABS_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Complex, abs,
{
  const Complex* const& obj = node::ObjectWrap::Unwrap<Complex>(args.This());
  const typename Complex::value_type& complex = **obj;

  NanScope();
  NanReturnValue(NanNew(std::abs(complex)));
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_INSTANCE_METHOD_ABS_HPP
