//
// CMatrix/macro.hpp
// ~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_MACRO_HPP
#define EIGENJS_CMATRIX_MACRO_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/preprocessor/cat.hpp>

#define EIGENJS_CMATRIX_BINARY_OPERATOR_CONTEXT( OP )                        \
  {                                                                          \
    typedef typename CMatrix::Matrix Matrix;                                 \
                                                                             \
    NanScope();                                                              \
                                                                             \
    if ( args.Length() == 1 ) {                                              \
      const CMatrix* const& obj =                                            \
          node::ObjectWrap::Unwrap< CMatrix >( args.This() );                \
      const typename CMatrix::cmatrix_type& cmatrix = **obj;                 \
      const typename CMatrix::cmatrix_type::Index& rows = cmatrix.rows();    \
      const typename CMatrix::cmatrix_type::Index& cols = cmatrix.cols();    \
      v8::Local< v8::Value > argv[] = {                                      \
        NanNew<v8::Integer>( rows )                                          \
      , NanNew<v8::Integer>( cols )                                          \
      };                                                                     \
                                                                             \
      if ( CMatrix::has_instance( args[0] ) ) {                              \
        const CMatrix* const& rhs_obj =                                      \
            node::ObjectWrap::Unwrap<CMatrix>( args[0]->ToObject() );        \
        const typename CMatrix::cmatrix_type& rhs_cmatrix = **rhs_obj;       \
                                                                             \
        if ( CMatrix::is_nonconformate_arguments( obj, rhs_obj ) ) {         \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        v8::Local< v8::Object > instance = CMatrix::new_instance(            \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local<v8::Value> )                    \
        , argv                                                               \
        );                                                                   \
                                                                             \
        CMatrix* new_obj = node::ObjectWrap::Unwrap< CMatrix >( instance );  \
        typename CMatrix::cmatrix_type& new_cmatrix = **new_obj;             \
                                                                             \
        new_cmatrix = cmatrix OP rhs_cmatrix;                                \
                                                                             \
        NanReturnValue(instance);                                            \
      } else if ( Matrix::has_instance( args[0] ) ) {                        \
        const Matrix* const& rhs_obj =                                       \
            node::ObjectWrap::Unwrap< Matrix >( args[0]->ToObject() );       \
        const typename Matrix::matrix_type& rhs_matrix = **rhs_obj;          \
                                                                             \
        if ( CMatrix::template is_nonconformate_arguments( obj, rhs_obj ) )  \
        {                                                                    \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        v8::Local< v8::Object > instance = CMatrix::new_instance(            \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local<v8::Value> )                    \
        , argv                                                               \
        );                                                                   \
                                                                             \
        CMatrix* new_obj = node::ObjectWrap::Unwrap< CMatrix >( instance );  \
        typename CMatrix::cmatrix_type& new_cmatrix = **new_obj;             \
                                                                             \
        new_cmatrix =                                                        \
          cmatrix                                                            \
            OP                                                               \
          rhs_matrix.template cast< typename CMatrix::complex_type >();      \
                                                                             \
        NanReturnValue( instance );                                          \
      }                                                                      \
    }                                                                        \
                                                                             \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#define EIGENJS_CMATRIX_BINARY_OPERATOR_COMMUTATIVE_CONTEXT( OP )            \
  {                                                                          \
    typedef typename CMatrix::Matrix Matrix;                                 \
                                                                             \
    NanScope();                                                              \
                                                                             \
    if ( args.Length() == 1 ) {                                              \
        CMatrix* obj = node::ObjectWrap::Unwrap< CMatrix >( args.This() );   \
        typename CMatrix::cmatrix_type& cmatrix = **obj;                     \
                                                                             \
      if ( CMatrix::is_cmatrix( args[0] ) ) {                                \
        const CMatrix* const& rhs_obj =                                      \
            node::ObjectWrap::Unwrap< CMatrix >( args[0]->ToObject() );      \
        const typename CMatrix::cmatrix_type& rhs_cmatrix = **rhs_obj;       \
                                                                             \
        if ( CMatrix::is_nonconformate_arguments( obj, rhs_obj ) ) {         \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        cmatrix BOOST_PP_CAT( OP, = ) rhs_cmatrix;                           \
                                                                             \
        NanReturnValue( args.This() );                                       \
      } else if ( Matrix::is_matrix( args[0] ) ) {                           \
        const Matrix* const& rhs_obj =                                       \
            node::ObjectWrap::Unwrap< Matrix >( args[0]->ToObject() );       \
        const typename Matrix::matrix_type& rhs_matrix = **rhs_obj;          \
                                                                             \
        if ( CMatrix::is_nonconformate_arguments( obj, rhs_obj ) ) {         \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        cmatrix BOOST_PP_CAT( OP, = )                                        \
            rhs_matrix.template cast< typename CMatrix::complex_type >();    \
                                                                             \
        NanReturnValue( args.This() );                                       \
      }                                                                      \
    }                                                                        \
                                                                             \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#endif  // EIGENJS_CMATRIX_MACRO_HPP
