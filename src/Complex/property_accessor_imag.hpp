//
// Complex/property_accessor_imag.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_PROPERTY_ACCESSOR_IMAG_HPP
#define EIGENJS_COMPLEX_PROPERTY_ACCESSOR_IMAG_HPP

namespace EigenJS {

EIGENJS_PROPERTY_ACCESSOR_GETTER(Complex, imag,
{
  NanScope();

  if (!NanGetInternalFieldPointer(args.This(), 0))
    NanReturnValue(args.This());

  const Complex* const& obj = node::ObjectWrap::Unwrap<Complex>(args.This());
  const typename Complex::complex_type& complex = **obj;

  NanReturnValue(NanNew(complex.imag()));
})

EIGENJS_PROPERTY_ACCESSOR_SETTER(Complex, imag,
{
  if (value->IsNumber()) {
    Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());
    typename Complex::complex_type& complex = **obj;

    new (&complex) typename Complex::complex_type(
      complex.real()
    , value->NumberValue()
    );
  }
})

EIGENJS_PROPERTY_ACCESSOR(Complex, imag, (getter)(setter))

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_PROPERTY_ACCESSOR_IMAG_HPP
