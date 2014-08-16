//
// Matrix/macro.hpp
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

#include <boost/preprocessor/cat.hpp>

#include "../common_macro.hpp"
#include "../throw_error.hpp"

#define EIGENJS_MATRIX_BINARY_OPERATOR_CONTEXT( OP )                         \
  {                                                                          \
    NanScope();                                                              \
                                                                             \
    if ( args.Length() == 1 ) {                                              \
      const T* const& obj =                                                  \
          node::ObjectWrap::Unwrap< T >( args.This() );                      \
      const typename T::value_type& value = **obj;                           \
      const typename T::value_type::Index& rows = value.rows();              \
      const typename T::value_type::Index& cols = value.cols();              \
      v8::Local<v8::Value> argv[] = {                                        \
        NanNew<v8::Integer>( rows )                                          \
      , NanNew<v8::Integer>( cols )                                          \
      };                                                                     \
                                                                             \
      if ( Matrix::is_matrix( args[0] ) ) {                                  \
        const Matrix* const& rhs_obj =                                       \
            node::ObjectWrap::Unwrap< Matrix >( args[0]->ToObject() );       \
        const typename Matrix::value_type& rhs_matrix = **rhs_obj;           \
                                                                             \
        if ( Matrix::is_nonconformate_arguments( obj, rhs_obj ) ) {          \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        v8::Local< v8::Object > instance = T::new_instance(                  \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        T* new_obj = node::ObjectWrap::Unwrap< T >( instance );              \
        typename T::value_type& new_value = **new_obj;                       \
                                                                             \
        new_value = value OP rhs_matrix;                                     \
                                                                             \
        NanReturnValue( instance );                                          \
      } else if ( Vector::is_vector( args[0] ) ) {                           \
        const Vector* const& rhs_obj =                                       \
            node::ObjectWrap::Unwrap< Vector >( args[0]->ToObject() );       \
        const typename Vector::value_type& rhs_vector = **rhs_obj;           \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        v8::Local< v8::Object > instance = T::new_instance(                  \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        T* new_obj = node::ObjectWrap::Unwrap< T >( instance );              \
        typename T::value_type& new_value = **new_obj;                       \
                                                                             \
        new_value = value OP rhs_vector;                                     \
                                                                             \
        NanReturnValue( instance );                                          \
      } else if ( CMatrix::is_cmatrix( args[0]) ) {                          \
        const CMatrix* const& rhs_obj =                                      \
            node::ObjectWrap::Unwrap< CMatrix >( args[0]->ToObject() );      \
        const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;         \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        v8::Local< v8::Object > instance = CMatrix::new_instance(            \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        CMatrix* new_obj = node::ObjectWrap::Unwrap< CMatrix >( instance );  \
        typename CMatrix::value_type& new_cmatrix = **new_obj;               \
                                                                             \
        new_cmatrix =                                                        \
          value.template cast< typename Complex::value_type >()              \
            OP                                                               \
          rhs_cmatrix;                                                       \
                                                                             \
        NanReturnValue( instance );                                          \
      }                                                                      \
    }                                                                        \
                                                                             \
    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()                                   \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#define EIGENJS_MATRIX_BINARY_OPERATOR_COMMUTATIVE_CONTEXT( OP )             \
  {                                                                          \
    NanScope();                                                              \
                                                                             \
    if ( args.Length() == 1) {                                               \
      T* obj = node::ObjectWrap::Unwrap< T >( args.This() );                 \
      typename T::value_type& value = **obj;                                 \
                                                                             \
      if ( Matrix::is_matrix( args[0] ) ) {                                  \
        const Matrix* const& rhs_obj =                                       \
            node::ObjectWrap::Unwrap< Matrix >( args[0]->ToObject() );       \
        const typename Matrix::value_type& rhs_matrix = **rhs_obj;           \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        value BOOST_PP_CAT( OP, = ) rhs_matrix;                              \
                                                                             \
        NanReturnValue( args.This() );                                       \
      } else if ( Vector::is_vector( args[0] ) ) {                           \
        const Vector* const& rhs_obj =                                       \
            node::ObjectWrap::Unwrap< Vector >( args[0]->ToObject() );       \
        const typename Vector::value_type& rhs_vector = **rhs_obj;           \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        value BOOST_PP_CAT( OP, = ) rhs_vector;                              \
                                                                             \
        NanReturnValue( args.This() );                                       \
      }                                                                      \
    }                                                                        \
                                                                             \
    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()                                   \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#endif  // EIGENJS_MATRIX_MACRO_HPP
