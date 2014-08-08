//
// Matrix_instance_method_mul.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_MUL_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_MUL_HPP

#include "definition.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, mul,
{
  NanScope();

  if (args.Length() == 1) {
    const Matrix* const& obj = node::ObjectWrap::Unwrap<Matrix>( args.This() );
    const typename Matrix::matrix_type& matrix = **obj;
    const typename Matrix::matrix_type::Index& rows = matrix.rows();
    const typename Matrix::matrix_type::Index& cols = matrix.cols();

     if (Matrix::has_instance(args[0])) {
      const Matrix* rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::matrix_type& rhs_matrix = **rhs_obj;

      if (Matrix::is_invalid_matrix_product(obj, rhs_obj))
        NanReturnUndefined();

      v8::Local<v8::Value> argv[] = {
        NanNew<v8::Integer>(rows)
      , NanNew<v8::Integer>(cols)
      };

      v8::Local<v8::Object> instance = Matrix::new_instance(
       args
      ,sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      Matrix* new_obj = node::ObjectWrap::Unwrap<Matrix>(instance);
      typename Matrix::matrix_type& new_matrix = **new_obj;

      new_matrix = matrix * rhs_matrix;

      NanReturnValue(instance);
    } else if (Matrix::is_scalar(args[0])) {
      v8::Local<v8::Value> argv[] = {
        NanNew<v8::Integer>(rows)
      , NanNew<v8::Integer>(cols)
      };

      v8::Local<v8::Object> instance = Matrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      Matrix* new_obj = node::ObjectWrap::Unwrap<Matrix>(instance);
      typename Matrix::matrix_type& new_matrix = **new_obj;

      new_matrix = matrix * args[0]->NumberValue();

      NanReturnValue(instance);
    }
  }

  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_MUL_HPP
