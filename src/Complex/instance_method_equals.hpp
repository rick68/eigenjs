//
// Complex/instance_method_equals.hpp
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

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Complex, equals,
{
  NanScope();

  if (args.Length() == 1) {
    const Complex* const& obj =
      node::ObjectWrap::Unwrap<Complex>(args.This());
    const typename Complex::value_type& complex = **obj;

    if (Complex::is_scalar(args[0])) {
      const typename Complex::value_type rhs_scalar(args[0]->NumberValue());

      NanReturnValue(NanNew<v8::Boolean>(complex == rhs_scalar));
    } else if (Complex::is_complex(args[0])) {
      const Complex* const& rhs_obj =
        node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::value_type& rhs_complex = **rhs_obj;

      NanReturnValue(NanNew<v8::Boolean>(complex == rhs_complex));
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_INSTANCE_METHOD_EQUALS_HPP
