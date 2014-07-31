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

#ifndef EIGENJS_COMPLEX_HPP
#define EIGENJS_COMPLEX_HPP

#include <node.h>
#include <v8.h>

#include <nan.h>

#include <complex>
#include <sstream>

namespace EigenJS {

template <typename ValueType>
class Complex : public node::ObjectWrap {
  typedef ValueType element_type;
  typedef std::complex<element_type> complex_type;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    tpl->SetClassName(NanNew("Complex"));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    NODE_SET_PROTOTYPE_METHOD(tpl, "toString", toString);

    v8::Local<v8::ObjectTemplate> proto = tpl->PrototypeTemplate();
    proto->SetAccessor(NanNew("real"), get_real, set_real);

    NanAssignPersistent(constructor, tpl->GetFunction());
    exports->Set(NanNew("Complex"), tpl->GetFunction());

    NanAssignPersistent(function_template, tpl);
  }

  static NAN_GETTER(get_real) {
    NanScope();

    if (!args.This()->GetPointerFromInternalField(0))
      NanReturnValue(args.This());

    const Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());

    NanReturnValue(NanNew(obj->complex_.real()));
  }

  static NAN_SETTER(set_real) {
    if (value->IsNumber()) {
      Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());
      obj->complex_ = complex_type(
          value->NumberValue()
        , obj->complex_.imag()
      );
    }
  }

  static NAN_METHOD(toString) {
    const Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());
    NanScope();

    std::ostringstream result;
    result << obj->complex_;

    NanReturnValue(NanNew(result.str().c_str()));

    NanReturnUndefined();
  }

 private:
  Complex(const element_type& real, const element_type& imag)
    : complex_(real, imag)
  {}
  ~Complex() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() < 2) {
      NanThrowError("Tried creating complex without real and imag arguments");
      NanReturnUndefined();
    }

    if (args.IsConstructCall()) {
      const element_type& real = args[0]->NumberValue();
      const element_type& imag = args[1]->NumberValue();
      Complex* obj = new Complex(real, imag);
      obj->Wrap(args.This());
      NanReturnValue(args.This());
    } else {
      v8::Local<v8::Function> ctr = NanNew(constructor);
      v8::Local<v8::Value> argv[] = {args[0], args[1]};
      NanReturnValue(
        ctr->NewInstance(
            sizeof(argv) / sizeof(v8::Local<v8::Value>)
          , argv
        )
      );
    }
  }

 private:
  static v8::Persistent<v8::FunctionTemplate> function_template;
  static v8::Persistent<v8::Function> constructor;

 private:
  complex_type complex_;
};

template<typename ValueType>
v8::Persistent<v8::FunctionTemplate> Complex<ValueType>::function_template;

template<typename ValueType>
v8::Persistent<v8::Function> Complex<ValueType>::constructor;

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_HPP
