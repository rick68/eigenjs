//
// Complex_instance_method_equals.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_INSTANCE_METHOD_EQUALS_HPP
#define EIGENJS_COMPLEX_INSTANCE_METHOD_EQUALS_HPP

#include "definition.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Complex, equals,
{
  NanScope();

  if (args.Length() == 1 && Complex::is_complex(args[0])) {
    const Complex* const& obj =
      node::ObjectWrap::Unwrap<Complex>(args.This());
    const typename Complex::complex_type& complex = **obj;
    const Complex* const& rhs_obj =
      node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
    const typename Complex::complex_type& rhs_complex = **rhs_obj;

    NanReturnValue(NanNew<v8::Boolean>(complex == rhs_complex));
  }

  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_INSTANCE_METHOD_EQUALS_HPP
