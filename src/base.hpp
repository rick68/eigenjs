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

  static bool HasInstance(const v8::Handle<v8::Value>& value) {
    NanScope();
    v8::Local<v8::FunctionTemplate> tpl = NanNew(function_template);
    return tpl->HasInstance(value);
  }

 protected:
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
