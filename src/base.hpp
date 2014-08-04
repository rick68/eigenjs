//
// EigenJS.cpp
// ~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_BASIC_HPP
#define EIGENJS_BASIC_HPP

#include <node.h>
#include <v8.h>

#include <nan.h>

#include <eigen3/Eigen/Dense>

#include <complex>

#include "Complex_fwd.hpp"
#include "Matrix_fwd.hpp"

namespace EigenJS {

template <
  template <typename, const char*> class Derived
  , typename ValueType
  , const char* ClassName
  >
struct base {
  typedef ValueType element_type;
  typedef std::complex<element_type> complex_type;
  typedef Eigen::Matrix<
      element_type
    , Eigen::Dynamic
    , Eigen::Dynamic
    > matrix_type;

  typedef Derived<ValueType, ClassName> derived_type;

  static inline bool is_scalar(const v8::Handle<v8::Value>& arg) {
    return arg->IsNumber() ? true : false;
  }

  static inline bool is_complex(const v8::Handle<v8::Value>& arg) {
    return Complex<element_type>::base_type::HasInstance(arg);
  }

  static inline bool is_matrix(const v8::Handle<v8::Value>& arg) {
    return Matrix<element_type>::base_type::HasInstance(arg);
  }

 protected:
  static bool HasInstance(const v8::Handle<v8::Value>& value) {
    NanScope();
    v8::Local<v8::FunctionTemplate> tpl = NanNew(function_template);
    return tpl->HasInstance(value);
  }

  static v8::Persistent<v8::FunctionTemplate> function_template;
  static v8::Persistent<v8::Function> constructor;
};

template<
    template <typename, const char*> class Derived
  , typename ValueType
  , const char* ClassName
  >
v8::Persistent<v8::FunctionTemplate>
    base<Derived, ValueType, ClassName>::function_template;

template<
    template <typename, const char*> class Derived
  , typename ValueType
  , const char* ClassName
  >
v8::Persistent<v8::Function> base<Derived, ValueType, ClassName>::constructor;

}  // namespace EigenJS

#endif  // EIGENJS_BASIC_HPP
