//
// Complex_class_method_polar.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_CLASS_METHOD_POLAR_HPP
#define EIGENJS_COMPLEX_CLASS_METHOD_POLAR_HPP

#include "definition.hpp"
#include "Complex_macro.hpp"

namespace EigenJS {

EIGENJS_CLASS_METHOD(Complex, polar,
{
  NanScope();

  if (args.Length() == 2 &&
      Complex::is_scalar(args[0]) &&
      Complex::is_scalar(args[1])
  ) {
    const typename Complex::element_type& rho = args[0]->NumberValue();
    const typename Complex::element_type& theta = args[1]->NumberValue();

    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Number>(rho)
    , NanNew<v8::Number>(theta)
    };

    NanReturnValue(
      Complex::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      )
    );
  }

  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_CLASS_METHOD_POLAR_HPP
