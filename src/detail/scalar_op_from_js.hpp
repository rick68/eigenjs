//
// detail/scalar_op_from_js.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_SCALAR_OP_FROM_JS_HPP
#define EIGENJS_DETAIL_SCALAR_OP_FROM_JS_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <eigen3/Eigen/Dense>

#include <complex>

#include "../Complex.hpp"

namespace EigenJS {
namespace detail {

template <typename ScalarType>
struct scalar_op_from_js {
  typedef Complex<ScalarType> Complex;

  scalar_op_from_js(
    _NAN_METHOD_ARGS_TYPE args
  , v8::Handle<v8::Function> func
  ) : args_(args), func_(func)
  {}

  ~scalar_op_from_js() {}

  const ScalarType operator()(const ScalarType& a, const ScalarType& b) const {
    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Number>(a)
    , NanNew<v8::Number>(b)
    };

    return NanMakeCallback(
        args_.This()
      , func_
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      )->NumberValue();
  }

  const std::complex<ScalarType> operator()(
    const std::complex<ScalarType>& a, const std::complex<ScalarType>& b
  ) const {
    v8::Local<v8::Value> a_argv[] = {
      NanNew<v8::Number>(a.real())
    , NanNew<v8::Number>(a.imag())
    };

    v8::Local<v8::Value> b_argv[] = {
      NanNew<v8::Number>(b.real())
    , NanNew<v8::Number>(b.imag())
    };

    v8::Local<v8::Value> argv[] = {
      NanNew(
        Complex::new_instance(
          args_
        , sizeof(a_argv) / sizeof(v8::Local<v8::Value>)
        , a_argv
        )
      )
    , NanNew(
        Complex::new_instance(
          args_
        , sizeof(b_argv) / sizeof(v8::Local<v8::Value>)
        , b_argv
        )
      )
    };

    const v8::Local<v8::Value>&& result = NanMakeCallback(
        args_.This()
      , func_
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

    if (Complex::is_complex(result)) {
      const Complex* const& obj =
          node::ObjectWrap::Unwrap<Complex>(result->ToObject());
      const typename Complex::value_type& value = **obj;

      return value;
    }

    return std::complex<ScalarType>(result->NumberValue());
  }

 private:
  _NAN_METHOD_ARGS_TYPE args_;
  v8::Handle<v8::Function> func_;
};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_SCALAR_OP_FROM_JS_HPP
