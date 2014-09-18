//
// detail/visitor_from_js.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_VISITOR_FROM_JS_HPP
#define EIGENJS_DETAIL_VISITOR_FROM_JS_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <eigen3/Eigen/Dense>

#include <complex>

#include "../Complex.hpp"

namespace EigenJS {
namespace detail {

template <typename T>
struct visitor_from_js {
  typedef typename T::value_type::Index Index;
  typedef typename T::scalar_type scalar_type;

  visitor_from_js(
    _NAN_METHOD_ARGS_TYPE args
  , v8::Handle<v8::Function> func
  ) : args_(args), func_(func)
  {}

  ~visitor_from_js() {}

  inline void init(const scalar_type& value, Index i, Index j) const {
    this->operator()(value, i, j);
  }

  inline void init(const std::complex<scalar_type>& value, Index i, Index j)
  const {
    this->operator()(value, i, j);
  }

  void operator()(const scalar_type& value, Index i, Index j) const {
    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Number>(value)
    , NanNew<v8::Integer>(i)
    , NanNew<v8::Integer>(j)
    };

    NanMakeCallback(
        args_.This()
      , func_
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );
  }

  void operator()(
    const std::complex<scalar_type>& value, Index i, Index j
  ) const {
    v8::Local<v8::Value> value_argv[] = {
      NanNew<v8::Number>(value.real())
    , NanNew<v8::Number>(value.imag())
    };

    v8::Local<v8::Value> argv[] = {
      NanNew(
        Complex<scalar_type>::new_instance(
          args_
        , sizeof(value_argv) / sizeof(v8::Local<v8::Value>)
        , value_argv
        )
      )
    , NanNew<v8::Integer>(i)
    , NanNew<v8::Integer>(j)
    };
  
    NanMakeCallback(
        args_.This()
      , func_
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );
  }

 private:
  _NAN_METHOD_ARGS_TYPE args_;
  v8::Handle<v8::Function> func_;
};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_VISITOR_FROM_JS_HPP
