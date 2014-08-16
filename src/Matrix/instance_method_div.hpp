//
// Matrix/instance_method_div.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_DIV_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_DIV_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, div,
{
  NanScope();

  if (args.Length() == 1) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>( args.This() );
    const typename T::value_type& value = **obj;
    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Integer>(value.rows())
    , NanNew<v8::Integer>(value.cols())
    };

    if (T::is_scalar(args[0])) {
      v8::Local<v8::Object> instance = T::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      T* new_obj = node::ObjectWrap::Unwrap<T>(instance);
      typename T::value_type& new_value = **new_obj;

      new_value = value / args[0]->NumberValue();

      NanReturnValue(instance);
    } else if (T::is_complex(args[0])) {
      const Complex* const& rhs_obj =
        node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::value_type& rhs_complex = **rhs_obj;

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix =
          value.template cast<typename Complex::value_type>()
            /
          rhs_complex;

      NanReturnValue(instance);
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_DIV_HPP
