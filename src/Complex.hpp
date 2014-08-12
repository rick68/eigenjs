//
// Complex.hpp
// ~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_HPP
#define EIGENJS_COMPLEX_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <complex>

#include "base.hpp"
#include "definition.hpp"
#include "Complex/definitions.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class Complex : public base<Complex, ScalarType, ValueType, ClassName> {
 public:
  typedef base<::EigenJS::Complex, ScalarType, ValueType, ClassName> base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef typename base_type::complex_type complex_type;
  typedef typename base_type::matrix_type matrix_type;
  typedef typename base_type::cmatrix_type cmatrix_type;

  typedef typename base_type::Matrix Matrix;
  typedef typename base_type::CMatrix CMatrix;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(Complex, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

 private:
  explicit Complex(const base_type& base) : base_type(base) {}

  Complex(const scalar_type& real, const scalar_type& imag)
    : base_type()
      { *base_type::value_ptr_ = value_type(real, imag); }

  ~Complex() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() < 2) {
      NanThrowError("Tried creating complex without real and imag arguments");
      NanReturnUndefined();
    }

    if (args.IsConstructCall()) {
      const scalar_type& real = args[0]->NumberValue();
      const scalar_type& imag = args[1]->NumberValue();
      Complex* obj = new Complex(real, imag);
      obj->Wrap(args.This());
      NanReturnValue(args.This());
    } else {
      v8::Local<v8::Value> argv[] = { args[0], args[1] };
      NanReturnValue(
        base_type::new_instance(
          args
        , sizeof(argv) / sizeof(v8::Local<v8::Value>)
        , argv
        )
      );
    }
  }
};

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_HPP
