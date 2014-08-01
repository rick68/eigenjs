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

#define EIGENJS_COMPLEX_CLASS_METHOD( NAME )                                  \
  static NAN_METHOD( NAME ) {                                                 \
    NanScope();                                                               \
                                                                              \
    if (args.Length() == 1 && HasInstance(args[0])) {                         \
      const Complex* obj =                                                    \
          node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());             \
                                                                              \
      const complex_type& NAME = std::NAME(obj->complex_);                    \
      const element_type& real = NAME.real();                                 \
      const element_type& imag = NAME.imag();                                 \
                                                                              \
      v8::Local<v8::Function> ctor = NanNew(constructor);                     \
      v8::Local<v8::Value> argv[] = {                                         \
          NanNew<v8::Number>(real)                                            \
        , NanNew<v8::Number>(imag)                                            \
      };                                                                      \
                                                                              \
      v8::Local<v8::Object> new_complex = ctor->NewInstance(                  \
          sizeof(argv) / sizeof(v8::Local<v8::Value>)                         \
        , argv                                                                \
      );                                                                      \
                                                                              \
      NanReturnValue(new_complex);                                            \
    }                                                                         \
                                                                              \
    NanReturnUndefined();                                                     \
  }                                                                           \
/**/

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

    NODE_SET_PROTOTYPE_METHOD(tpl, "abs", abs);
    NODE_SET_PROTOTYPE_METHOD(tpl, "arg", arg);
    NODE_SET_PROTOTYPE_METHOD(tpl, "norm", norm);
    NODE_SET_PROTOTYPE_METHOD(tpl, "conj", conj);

    NODE_SET_METHOD(tpl, "polar", polar);
    NODE_SET_METHOD(tpl, "proj", proj);

    NODE_SET_METHOD(tpl, "cos", cos);
    NODE_SET_METHOD(tpl, "cosh", cosh);
    NODE_SET_METHOD(tpl, "exp", exp);
    NODE_SET_METHOD(tpl, "log", log);
    NODE_SET_METHOD(tpl, "log10", log10);

    NODE_SET_PROTOTYPE_METHOD(tpl, "toString", toString);

    v8::Local<v8::ObjectTemplate> proto = tpl->PrototypeTemplate();
    proto->SetAccessor(NanNew("real"), get_real, set_real);
    proto->SetAccessor(NanNew("imag"), get_imag, set_imag);

    NanAssignPersistent(constructor, tpl->GetFunction());
    exports->Set(NanNew("Complex"), tpl->GetFunction());

    NanAssignPersistent(function_template, tpl);
  }

  static NAN_METHOD(abs) {
    const Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());
    NanScope();

    NanReturnValue(NanNew(std::abs(obj->complex_)));
  }

  static NAN_METHOD(arg) {
    const Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());
    NanScope();

    NanReturnValue(NanNew(std::arg(obj->complex_)));
  }

  static NAN_METHOD(norm) {
    const Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());
    NanScope();

    NanReturnValue(NanNew(std::norm(obj->complex_)));
  }

  static NAN_METHOD(conj) {
    const Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());
    const complex_type& c = std::conj(obj->complex_);
    const element_type& real = c.real();
    const element_type& imag = c.imag();
    NanScope();

    v8::Local<v8::Function> ctor = NanNew(constructor);
    v8::Local<v8::Value> argv[] = {
        NanNew<v8::Number>(real)
      , NanNew<v8::Number>(imag)
    };

    v8::Local<v8::Object> new_complex = ctor->NewInstance(
        sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
    );

    NanReturnValue(new_complex);
  }

  static NAN_METHOD(polar) {
    NanScope();

    if (args.Length() == 2 &&
        args[0]->IsNumber() &&
        args[1]->IsNumber()) {
      const element_type& rho = args[0]->NumberValue();
      const element_type& theta = args[1]->NumberValue();

      v8::Local<v8::Function> ctor = NanNew(constructor);
      v8::Local<v8::Value> argv[] = {
          NanNew<v8::Number>(rho)
        , NanNew<v8::Number>(theta)
      };

      v8::Local<v8::Object> new_complex = ctor->NewInstance(
          sizeof(argv) / sizeof(v8::Local<v8::Value>)
        , argv
      );

      NanReturnValue(new_complex);
    }

    NanReturnUndefined();
  }

  EIGENJS_COMPLEX_CLASS_METHOD(proj)
  EIGENJS_COMPLEX_CLASS_METHOD(cos)
  EIGENJS_COMPLEX_CLASS_METHOD(cosh)
  EIGENJS_COMPLEX_CLASS_METHOD(exp)
  EIGENJS_COMPLEX_CLASS_METHOD(log)
  EIGENJS_COMPLEX_CLASS_METHOD(log10)

  static NAN_METHOD(toString) {
    const Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());
    NanScope();

    std::ostringstream result;
    result << obj->complex_;

    NanReturnValue(NanNew(result.str().c_str()));

    NanReturnUndefined();
  }

  static NAN_GETTER(get_real) {
    NanScope();

    if (!NanGetInternalFieldPointer(args.This(), 0))
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

  static NAN_GETTER(get_imag) {
    NanScope();

    if (!NanGetInternalFieldPointer(args.This(), 0))
      NanReturnValue(args.This());

    const Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());

    NanReturnValue(NanNew(obj->complex_.imag()));
  }

  static NAN_SETTER(set_imag) {
    if (value->IsNumber()) {
      Complex* obj = node::ObjectWrap::Unwrap<Complex>(args.This());
      obj->complex_ = complex_type(
          obj->complex_.real()
        , value->NumberValue()
      );
    }
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

  static bool HasInstance(const v8::Handle<v8::Value>& value) {
    NanScope();
    v8::Local<v8::FunctionTemplate> tpl = NanNew(function_template);
    return tpl->HasInstance(value);
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

#undef EIGENJS_COMPLEX_CLASS_METHOD

#endif  // EIGENJS_COMPLEX_HPP
