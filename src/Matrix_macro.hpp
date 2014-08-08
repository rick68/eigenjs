//
// Matrix_macro.hpp
// ~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_MACRO_HPP
#define EIGENJS_MATRIX_MACRO_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#define EIGENJS_MATRIX_BINARY_OPERATOR_CONTEXT( OP )                          \
  {                                                                           \
    if ( args.Length() == 1 && Matrix::has_instance( args[0] ) ) {            \
      const Matrix* const& obj =                                              \
        node::ObjectWrap::Unwrap<Matrix>( args.This() );                      \
      const typename Matrix::matrix_type& matrix = **obj;                     \
      const Matrix* const& rhs_obj =                                          \
          node::ObjectWrap::Unwrap<Matrix>( args[0]->ToObject() );            \
      const typename Matrix::matrix_type& rhs_matrix = **rhs_obj;             \
                                                                              \
      if ( Matrix::is_nonconformate_arguments( obj, rhs_obj ) ) {             \
        NanReturnUndefined();                                                 \
      }                                                                       \
                                                                              \
      const typename Matrix::matrix_type::Index& rows = matrix.rows();        \
      const typename Matrix::matrix_type::Index& cols = matrix.cols();        \
                                                                              \
      v8::Local<v8::Value> argv[] = {                                         \
        NanNew<v8::Integer>( rows )                                           \
      , NanNew<v8::Integer>( cols )                                           \
      };                                                                      \
                                                                              \
      v8::Local<v8::Object> instance = Matrix::new_instance(                  \
        args                                                                  \
      , sizeof( argv ) / sizeof( v8::Local<v8::Value> )                       \
      , argv                                                                  \
      );                                                                      \
                                                                              \
      Matrix* new_obj = node::ObjectWrap::Unwrap<Matrix>( instance );         \
      typename Matrix::matrix_type& new_matrix = **new_obj;                   \
      new_matrix = matrix OP rhs_matrix;                                      \
                                                                              \
      return instance;                                                        \
    }                                                                         \
                                                                              \
    NanScope();                                                               \
    NanReturnUndefined();                                                     \
  }                                                                           \
  /**/

#define EIGENJS_MATRIX_BINARY_OPERATOR_COMMUTATIVE_CONTEXT( OP )              \
  {                                                                           \
    NanScope();                                                               \
                                                                              \
    if ( args.Length() == 1 && Matrix::has_instance( args[0] ) ) {            \
      Matrix* obj = node::ObjectWrap::Unwrap<Matrix>( args.This() );          \
      typename Matrix::matrix_type& matrix = **obj;                           \
      const Matrix* const& rhs_obj =                                          \
          node::ObjectWrap::Unwrap<Matrix>( args[0]->ToObject() );            \
      const typename Matrix::matrix_type& rhs_matrix = **rhs_obj;             \
                                                                              \
      if ( Matrix::is_nonconformate_arguments( obj, rhs_obj ) ) {             \
        NanReturnUndefined();                                                 \
      }                                                                       \
                                                                              \
      matrix OP##= rhs_matrix;                                                \
                                                                              \
      NanReturnValue( args.This() );                                          \
    }                                                                         \
                                                                              \
    NanReturnUndefined();                                                     \
  }                                                                           \
  /**/

#endif  // EIGENJS_MATRIX_MACRO_HPP
