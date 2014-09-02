//
// Vector/class_method_Constant.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_VECTOR_CLASS_METHOD_CONSTANT_HPP
#define EIGENJS_VECTOR_CLASS_METHOD_CONSTANT_HPP

#include "../common_macro.hpp"
#include "../detail/add_complex.hpp"

namespace EigenJS {

EIGENJS_CLASS_METHOD(Vector, Constant,
{
  const int& args_length = args.Length();

  NanScope();

  if ( args_length == 2 &&
       args[0]->IsNumber()
  ) {
    const typename T::value_type::Index& rows = args[0]->Int32Value();
    v8::Local<v8::Value> argv[] = {
      NanNew< v8::Number >(0)
    };

    if (T::is_scalar(args[1])) {
      v8::Local<v8::Object> instance = U::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      U* new_obj = node::ObjectWrap::Unwrap<U>(instance);
      typename U::value_type& new_value = **new_obj;

      new_value = U::value_type::Constant(
          rows
        , args[1]->NumberValue()
        );

      NanReturnValue(instance);
    } else if (Complex::is_complex(args[1])) {
      const Complex* const& rhs_obj =
          node::ObjectWrap::Unwrap<Complex>(args[1]->ToObject());
      const typename Complex::value_type& constant = **rhs_obj;

      typedef typename detail::add_complex<U>::type CU;

      v8::Local<v8::Object> instance = CU::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CU* new_obj = node::ObjectWrap::Unwrap<CU>(instance);
      typename CU::value_type& new_value = **new_obj;

      new_value = CU::value_type::Constant(
          rows
        , constant
        );

      NanReturnValue(instance);
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_VECTOR_CLASS_METHOD_CONSTANT_HPP
