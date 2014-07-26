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

    NODE_SET_PROTOTYPE_METHOD(tpl, "rows", rows);
    NODE_SET_PROTOTYPE_METHOD(tpl, "cols", cols);

    NanAssignPersistent(constructor, tpl->GetFunction());
    exports->Set(NanNew("Matrix"), tpl->GetFunction());
  }

  static NAN_METHOD(rows) {
    NanScope();
    Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
    NanReturnValue(NanNew<v8::Number>(obj->matrix_.rows()));
  }

  static NAN_METHOD(cols) {
    NanScope();
    Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
    NanReturnValue(NanNew<v8::Number>(obj->matrix_.cols()));
  }

 private:
  typedef Eigen::Matrix<
      double
    , Eigen::Dynamic
    , Eigen::Dynamic
  > matrix_type;

  Matrix(matrix_type::Index rows, matrix_type::Index cols)
    : matrix_(rows, cols)
  {}
  ~Matrix() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() < 2) {
      NanThrowError("tried creating matrix without rows and columns arguments");
      NanReturnUndefined();
    }

    if (args.IsConstructCall()) {
      uint32_t rows = args[0]->Uint32Value();
      uint32_t columns = args[1]->Uint32Value();
      Matrix* obj = new Matrix(rows, columns);
      obj->Wrap(args.This());
      NanReturnValue(args.This());
    } else {
      v8::Local<v8::Function> ctr = NanNew(constructor);
      v8::Local<v8::Value> argv[] = {args[0], args[1]};
      NanReturnValue(
          ctr->NewInstance(
              sizeof(argv)/sizeof(v8::Local<v8::Value>)
            , argv
          )
      );
    }
  }

  static v8::Persistent<v8::Function> constructor;

 private:
  matrix_type matrix_;
};

v8::Persistent<v8::Function> Matrix::constructor;

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_HPP
