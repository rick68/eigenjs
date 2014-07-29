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

#include <eigen3/Eigen/Dense>

#include <sstream>


#define EIGENJS_MATRIX_BINARY_OPERATOR( NAME, OP )                             \
static NAN_METHOD( NAME ) {                                                    \
  const Matrix* obj = node::ObjectWrap::Unwrap<Matrix>( args.This() );         \
  NanScope();                                                                  \
                                                                               \
  if ( args.Length() == 1 && HasInstance( args[0] ) ) {                        \
    const Matrix* rhs_obj =                                                    \
        node::ObjectWrap::Unwrap<Matrix>( args[0]->ToObject() );               \
                                                                               \
    if ( is_nonconformate_argument( obj, rhs_obj ) ) {                         \
      NanReturnUndefined();                                                    \
    }                                                                          \
                                                                               \
    const matrix_type::Index& rows = obj->matrix_.rows();                      \
    const matrix_type::Index& cols = obj->matrix_.cols();                      \
                                                                               \
    v8::Local<v8::Function> ctr = NanNew( constructor );                       \
    v8::Local<v8::Value> argv[] = {                                            \
        NanNew<v8::Integer>( rows )                                            \
      , NanNew<v8::Integer>( cols )                                            \
    };                                                                         \
                                                                               \
    v8::Local<v8::Object> new_matrix = ctr->NewInstance(                       \
        sizeof( argv ) / sizeof( v8::Local<v8::Value> )                        \
      , argv                                                                   \
    );                                                                         \
                                                                               \
    Matrix* new_obj = node::ObjectWrap::Unwrap<Matrix>( new_matrix );          \
    new_obj->matrix_ = obj->matrix_ OP rhs_obj->matrix_;                       \
                                                                               \
    NanReturnValue( new_matrix );                                              \
  }                                                                            \
                                                                               \
  NanReturnUndefined();                                                        \
}                                                                              \
/**/

#define EIGENJS_MATRIX_BINARY_OPERATOR_COMMUTATIVE( NAME, OP )                 \
static NAN_METHOD( NAME ) {                                                    \
  Matrix* obj = node::ObjectWrap::Unwrap<Matrix>( args.This() );               \
  NanScope();                                                                  \
                                                                               \
  if ( args.Length() == 1 && HasInstance( args[0] ) ) {                        \
    const Matrix* rhs_obj =                                                    \
        node::ObjectWrap::Unwrap<Matrix>( args[0]->ToObject() );               \
                                                                               \
    if ( is_nonconformate_argument( obj, rhs_obj ) ) {                         \
      NanReturnUndefined();                                                    \
    }                                                                          \
                                                                               \
    obj->matrix_ OP##= rhs_obj->matrix_;                                       \
                                                                               \
    NanReturnValue( args.This() );                                             \
  }                                                                            \
                                                                               \
  NanReturnUndefined();                                                        \
}                                                                              \
/**/


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

    NODE_SET_PROTOTYPE_METHOD(tpl, "add", add);
    NODE_SET_PROTOTYPE_METHOD(tpl, "adda", adda);
    NODE_SET_PROTOTYPE_METHOD(tpl, "sub", sub);
    NODE_SET_PROTOTYPE_METHOD(tpl, "suba", suba);

    NODE_SET_PROTOTYPE_METHOD(tpl, "toString", toString);

    NanAssignPersistent(constructor, tpl->GetFunction());
    exports->Set(NanNew("Matrix"), tpl->GetFunction());

    NanAssignPersistent(function_template, tpl);
  }

  static NAN_METHOD(rows) {
    const Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
    NanScope();

    NanReturnValue(NanNew<v8::Integer>(obj->matrix_.rows()));
  }

  static NAN_METHOD(cols) {
    const Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
    NanScope();

    NanReturnValue(NanNew<v8::Integer>(obj->matrix_.cols()));
  }

  static NAN_METHOD(set) {
    Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
    NanScope();

    if (args.Length() == 1 && args[0]->IsArray()) {
      v8::Local<v8::Array> array = args[0].As<v8::Array>();
      uint32_t len = array->Length();
      const matrix_type::Index& rows = obj->matrix_.rows();
      const matrix_type::Index& cols = obj->matrix_.cols();
      const matrix_type::Index& elems = rows * cols;

      if (len != elems) {
        len < rows * cols
          ? NanThrowError("Too few coefficients passed to Matrix")
          : NanThrowError("Too many coefficients passed to Matrix");
        NanReturnUndefined();
      }

      for (uint32_t i = 0; i < len; ++i) {
        v8::Local<v8::Value> elem = array->Get(i);
        obj->matrix_(i / cols, i % cols) = elem->NumberValue();
      }
    } else if (
        args.Length() == 3 &&
        args[0]->IsNumber() &&
        args[1]->IsNumber() &&
        args[2]->IsNumber()) {
      const matrix_type::Index& row = args[0]->Uint32Value();
      const matrix_type::Index& col = args[1]->Uint32Value();
      const element_type& value = args[2]->NumberValue();

      if (is_out_of_range(obj->matrix_, row, col))
        NanReturnUndefined();

      obj->matrix_(row, col) = value;
    }

    NanReturnValue(NanNew(args.This()));
  }

  static NAN_METHOD(get) {
    const Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
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
    }

    NanReturnUndefined();
  }

  EIGENJS_MATRIX_BINARY_OPERATOR(add, +)
  EIGENJS_MATRIX_BINARY_OPERATOR_COMMUTATIVE(adda, +)

  EIGENJS_MATRIX_BINARY_OPERATOR(sub, -)
  EIGENJS_MATRIX_BINARY_OPERATOR_COMMUTATIVE(suba, -)

  static NAN_METHOD(toString) {
    const Matrix* obj = node::ObjectWrap::Unwrap<Matrix>(args.This());
    NanScope();

    std::ostringstream result;
    result << obj->matrix_;

    NanReturnValue(NanNew(result.str().c_str()));
  }

 private:
  typedef double element_type;
  typedef Eigen::Matrix<
      element_type
    , Eigen::Dynamic
    , Eigen::Dynamic
  > matrix_type;

  Matrix(matrix_type::Index rows, matrix_type::Index cols)
    : matrix_(matrix_type::Zero(rows, cols))
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
              sizeof(argv) / sizeof(v8::Local<v8::Value>)
            , argv
          )
      );
    }
  }

  static bool HasInstance(const v8::Handle<v8::Value>& value) {
    v8::Local<v8::FunctionTemplate> tpl = NanNew(function_template);
    return tpl->HasInstance(value);
  }

  static v8::Persistent<v8::FunctionTemplate> function_template;
  static v8::Persistent<v8::Function> constructor;

 private:
  static bool is_out_of_range(
      const matrix_type& matrix
    , const matrix_type::Index& row
    , const matrix_type::Index& col) {
    return row < 0 || row >= matrix.rows() || col < 0 || col >= matrix.cols()
      ? NanThrowError("Row or column numbers are out of range"), true
      : false;
  }

  static bool is_nonconformate_argument(
      const Matrix* const& op1
    , const Matrix* const& op2) {
    return op1->matrix_.rows() != op2->matrix_.rows() ||
           op1->matrix_.cols() != op2->matrix_.cols()
      ? NanThrowError("Nonconformant arguments"), true
      : false;
  }

 private:
  matrix_type matrix_;
};

v8::Persistent<v8::FunctionTemplate> Matrix::function_template;
v8::Persistent<v8::Function> Matrix::constructor;

}  // namespace EigenJS

#undef EIGENJS_MATRIX_BINARY_OPERATOR

#endif  // EIGENJS_MATRIX_HPP
