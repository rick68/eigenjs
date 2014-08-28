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

#include "../throw_error.hpp"
#include "../detail/add_complex.hpp"

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
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        v8::Local< v8::Object > instance = U::new_instance(                  \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        U* new_obj = node::ObjectWrap::Unwrap< U >( instance );              \
        typename U::value_type& new_value = **new_obj;                       \
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
        v8::Local< v8::Object > instance = U::new_instance(                  \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        U* new_obj = node::ObjectWrap::Unwrap< U >( instance );              \
        typename U::value_type& new_value = **new_obj;                       \
                                                                             \
        new_value = value OP rhs_vector;                                     \
                                                                             \
        NanReturnValue( instance );                                          \
      } else if ( RowVector::is_rowvector( args[0] ) ) {                     \
        const RowVector* const& rhs_obj =                                    \
            node::ObjectWrap::Unwrap< RowVector >( args[0]->ToObject() );    \
        const typename RowVector::value_type& rhs_rowvector = **rhs_obj;     \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        v8::Local< v8::Object > instance = U::new_instance(                  \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        U* new_obj = node::ObjectWrap::Unwrap< U >( instance );              \
        typename U::value_type& new_value = **new_obj;                       \
                                                                             \
        new_value = value OP rhs_rowvector;                                  \
                                                                             \
        NanReturnValue( instance );                                          \
      } else if ( MatrixBlock::is_matrixblock( args[0] ) ) {                 \
        const MatrixBlock* const& rhs_obj =                                  \
            node::ObjectWrap::Unwrap< MatrixBlock >( args[0]->ToObject() );  \
        const typename MatrixBlock::value_type& rhs_matrixblock = **rhs_obj; \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        v8::Local< v8::Object > instance = U::new_instance(                  \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        U* new_obj = node::ObjectWrap::Unwrap< U >( instance );              \
        typename U::value_type& new_value = **new_obj;                       \
                                                                             \
        new_value = value OP rhs_matrixblock;                                \
                                                                             \
        NanReturnValue( instance );                                          \
      } else if ( VectorBlock::is_vectorblock( args[0] ) ) {                 \
        const VectorBlock* const& rhs_obj =                                  \
            node::ObjectWrap::Unwrap< VectorBlock >( args[0]->ToObject() );  \
        const typename VectorBlock::value_type& rhs_vectorblock = **rhs_obj; \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        v8::Local< v8::Object > instance = U::new_instance(                  \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        U* new_obj = node::ObjectWrap::Unwrap< U >( instance );              \
        typename U::value_type& new_value = **new_obj;                       \
                                                                             \
        new_value = value OP rhs_vectorblock;                                \
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
        typedef typename detail::add_complex<U>::type CU;                    \
                                                                             \
        v8::Local< v8::Object > instance = CU::new_instance(                 \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        CU* new_obj = node::ObjectWrap::Unwrap< CU >( instance );            \
        typename CU::value_type& new_value = **new_obj;                      \
                                                                             \
        new_value =                                                          \
          value.template cast< typename Complex::value_type >()              \
            OP                                                               \
          rhs_cmatrix;                                                       \
                                                                             \
        NanReturnValue( instance );                                          \
      } else if ( CVector::is_cvector( args[0]) ) {                          \
        const CVector* const& rhs_obj =                                      \
            node::ObjectWrap::Unwrap< CVector >( args[0]->ToObject() );      \
        const typename CVector::value_type& rhs_cvector = **rhs_obj;         \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        typedef typename detail::add_complex<U>::type CU;                    \
                                                                             \
        v8::Local< v8::Object > instance = CU::new_instance(                 \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        CU* new_obj = node::ObjectWrap::Unwrap< CU >( instance );            \
        typename CU::value_type& new_value = **new_obj;                      \
                                                                             \
        new_value =                                                          \
          value.template cast< typename Complex::value_type >()              \
            OP                                                               \
          rhs_cvector;                                                       \
                                                                             \
        NanReturnValue( instance );                                          \
      } else if ( CRowVector::is_crowvector( args[0] ) ) {                   \
        const CRowVector* const& rhs_obj =                                   \
            node::ObjectWrap::Unwrap< CRowVector >( args[0]->ToObject() );   \
        const typename CRowVector::value_type& rhs_crowvector = **rhs_obj;   \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        typedef typename detail::add_complex<U>::type CU;                    \
                                                                             \
        v8::Local< v8::Object > instance = CU::new_instance(                 \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        CU* new_obj = node::ObjectWrap::Unwrap< CU >( instance );            \
        typename CU::value_type& new_value = **new_obj;                      \
                                                                             \
        new_value =                                                          \
          value.template cast< typename Complex::value_type >()              \
            OP                                                               \
          rhs_crowvector;                                                    \
                                                                             \
        NanReturnValue( instance );                                          \
      } else if ( CMatrixBlock::is_cmatrixblock( args[0] ) ) {               \
        const CMatrixBlock* const& rhs_obj =                                 \
            node::ObjectWrap::Unwrap< CMatrixBlock >( args[0]->ToObject() ); \
        const typename CMatrixBlock::value_type& rhs_cmatrixblock =          \
            **rhs_obj;                                                       \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        typedef typename detail::add_complex<U>::type CU;                    \
                                                                             \
        v8::Local< v8::Object > instance = CU::new_instance(                 \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        CU* new_obj = node::ObjectWrap::Unwrap< CU >( instance );            \
        typename CU::value_type& new_value = **new_obj;                      \
                                                                             \
        new_value =                                                          \
          value.template cast< typename Complex::value_type >()              \
            OP                                                               \
          rhs_cmatrixblock;                                                  \
                                                                             \
        NanReturnValue( instance );                                          \
      } else if ( CVectorBlock::is_cvectorblock( args[0] ) ) {               \
        const CVectorBlock* const& rhs_obj =                                 \
            node::ObjectWrap::Unwrap< CVectorBlock >( args[0]->ToObject() ); \
        const typename CVectorBlock::value_type& rhs_cvectorblock =          \
            **rhs_obj;                                                       \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        typedef typename detail::add_complex<U>::type CU;                    \
                                                                             \
        v8::Local< v8::Object > instance = CU::new_instance(                 \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
        );                                                                   \
                                                                             \
        CU* new_obj = node::ObjectWrap::Unwrap< CU >( instance );            \
        typename CU::value_type& new_value = **new_obj;                      \
                                                                             \
        new_value =                                                          \
          value.template cast< typename Complex::value_type >()              \
            OP                                                               \
          rhs_cvectorblock;                                                  \
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
      } else if ( RowVector::is_rowvector( args[0] ) ) {                     \
        const RowVector* const& rhs_obj =                                    \
            node::ObjectWrap::Unwrap< RowVector >( args[0]->ToObject() );    \
        const typename RowVector::value_type& rhs_rowvector = **rhs_obj;     \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        value BOOST_PP_CAT( OP, = ) rhs_rowvector;                           \
                                                                             \
        NanReturnValue( args.This() );                                       \
      } else if ( MatrixBlock::is_matrixblock( args[0] ) ) {                 \
        const MatrixBlock* const& rhs_obj =                                  \
            node::ObjectWrap::Unwrap< MatrixBlock >( args[0]->ToObject() );  \
        const typename MatrixBlock::value_type& rhs_matrixblock = **rhs_obj; \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        value BOOST_PP_CAT( OP, = ) rhs_matrixblock;                         \
                                                                             \
        NanReturnValue( args.This() );                                       \
      } else if ( VectorBlock::is_vectorblock( args[0] ) ) {                 \
        const VectorBlock* const& rhs_obj =                                  \
            node::ObjectWrap::Unwrap< VectorBlock >( args[0]->ToObject() );  \
        const typename VectorBlock::value_type& rhs_vectorblock = **rhs_obj; \
                                                                             \
        if ( T::is_nonconformate_arguments( obj, rhs_obj ) ) {               \
          NanReturnUndefined();                                              \
        }                                                                    \
                                                                             \
        value BOOST_PP_CAT( OP, = ) rhs_vectorblock;                         \
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
