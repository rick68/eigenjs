//
// Matirx.hpp
// ~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_HPP
#define EIGENJS_MATRIX_HPP

#include <node.h>
#include <v8.h>

#include <nan.h>

#include <eigen3/Eigen/Eigen>

namespace EigenJS {

class Matrix : public node::ObjectWrap {
 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    tpl->SetClassName(NanNew("Matrix"));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    NanAssignPersistent(constructor, tpl->GetFunction());
    exports->Set(NanNew("Matrix"), tpl->GetFunction());
  }

 private:
  Matrix() {}
  ~Matrix() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.IsConstructCall()) {
      Matrix* obj = new Matrix();
      obj->Wrap(args.This());
      NanReturnValue(args.This());
    } else {
      v8::Local<v8::Function> ctr = NanNew(constructor);
      NanReturnValue(ctr->NewInstance());
    }
  }

  static v8::Persistent<v8::Function> constructor;
};

v8::Persistent<v8::Function> Matrix::constructor;

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_HPP
