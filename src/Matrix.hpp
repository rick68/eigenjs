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

#include <sstream>

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
    NODE_SET_PROTOTYPE_METHOD(tpl, "set", set);
    NODE_SET_PROTOTYPE_METHOD(tpl, "get", get);

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

  static NAN_METHOD(set) {
    NanScope();
    if (args.Length() == 3 &&
        args[0]->IsNumber() &&
        args[1]->IsNumber() &&
        args[2]->IsNumber()) {
      matrix_type::Index row = args[0]->Uint32Value();
      matrix_type::Index col = args[1]->Uint32Value();
      element_type value = args[2]->NumberValue();

      Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
      if (is_out_of_range(obj->matrix_, row, col))
        NanReturnUndefined();
      obj->matrix_(row, col) = value;
    }
    NanReturnUndefined();
  }

  static NAN_METHOD(get) {
    Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());

    NanScope();
    if (args.Length() == 2 &&
        args[0]->IsNumber() &&
        args[1]->IsNumber()) {
      matrix_type::Index row = args[0]->Uint32Value();
      matrix_type::Index col = args[1]->Uint32Value();
      if (is_out_of_range(obj->matrix_, row, col))
        NanReturnUndefined();
      element_type value = obj->matrix_(row, col);
      NanReturnValue(NanNew(value));
    } else {
      std::ostringstream result;
      result << obj->matrix_;
      NanReturnValue(NanNew(result.str().c_str()));
    }
  }


 private:
  typedef double element_type;
  typedef Eigen::Matrix<
      element_type
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
      NanThrowError("Tried creating matrix without rows and columns arguments");
      NanReturnUndefined();
    }

    if (args.IsConstructCall()) {
      matrix_type::Index rows = args[0]->Uint32Value();
      matrix_type::Index columns = args[1]->Uint32Value();
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
  static bool is_out_of_range(
      const matrix_type& matrix
    , const matrix_type::Index& row
    , const matrix_type::Index& col) {
    return row >= matrix.rows() || col >= matrix.cols() ?
        NanThrowError("Row or column numbers are out of range"), true
      : false;
  }

 private:
  matrix_type matrix_;
};

v8::Persistent<v8::Function> Matrix::constructor;

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_HPP
