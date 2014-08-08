//
// Complex_instance_method_conj.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_INSTANCE_METHOD_CONJ_HPP
#define EIGENJS_COMPLEX_INSTANCE_METHOD_CONJ_HPP

#include "definition.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Complex, conj,
{
  const Complex* const& obj = node::ObjectWrap::Unwrap<Complex>(args.This());
  const typename Complex::complex_type& complex = **obj;
  const typename Complex::complex_type& c = std::conj(complex);
  const typename Complex::element_type& real = c.real();
  const typename Complex::element_type& imag = c.imag();

  v8::Local<v8::Value> argv[] = {
    NanNew<v8::Number>(real)
  , NanNew<v8::Number>(imag)
  };

  return Complex::new_instance(
      args
    , sizeof(argv) / sizeof(v8::Local<v8::Value>)
    , argv
    );
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_INSTANCE_METHOD_CONJ_HPP
