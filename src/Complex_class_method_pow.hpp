//
// Complex_class_method_pow.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_CLASS_METHOD_POW_HPP
#define EIGENJS_COMPLEX_CLASS_METHOD_POW_HPP

#include "definition.hpp"
#include "Complex_macro.hpp"

namespace EigenJS {

EIGENJS_CLASS_METHOD(Complex, pow,
{
  if (args.Length() == 2 &&
      Complex::is_complex_or_saclar(args[0]) &&
      Complex::is_complex_or_saclar(args[1])
  ) {
    const bool& arg0_is_complex = Complex::is_complex(args[0]);
    const bool& arg1_is_complex = Complex::is_complex(args[1]);
    const bool& arg0_is_scalar = Complex::is_scalar(args[0]);
    const bool& arg1_is_scalar = Complex::is_scalar(args[1]);
    typename Complex::complex_type c;

    if (arg0_is_complex && arg1_is_complex) {
      const Complex* obj0 =
        node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const Complex* obj1 =
        node::ObjectWrap::Unwrap<Complex>(args[1]->ToObject());
      c = std::pow(**obj0, **obj1);
    } else if (arg0_is_complex && arg1_is_scalar) {
      const Complex* obj0 =
        node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::element_type& scalar1 = args[1]->NumberValue();
      c = std::pow(**obj0, scalar1);
    } else if (arg0_is_scalar && arg1_is_complex) {
      const typename Complex::element_type& scalar0 = args[0]->NumberValue();
      const Complex* obj1 =
        node::ObjectWrap::Unwrap<Complex>(args[1]->ToObject());
      c = std::pow(scalar0, **obj1);
    } else if (arg0_is_scalar && arg1_is_scalar) {
      const typename Complex::element_type& scalar0 = args[0]->NumberValue();
      const typename Complex::element_type& scalar1 = args[1]->NumberValue();
      c = std::pow(scalar0, scalar1);
    }

    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Number>(c.real())
    , NanNew<v8::Number>(c.imag())
    };

    return Complex::new_instance(
        args
      , sizeof( argv ) / sizeof( v8::Local<v8::Value> )
      , argv
      );
  }

  NanScope();
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_CLASS_METHOD_POW_HPP
