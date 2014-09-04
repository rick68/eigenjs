//
// common_macro.hpp
// ~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMMON_MACRO_HPP
#define EIGENJS_COMMON_MACRO_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/mpl/plus.hpp>
#include <boost/mpl/multiplies.hpp>
#include <boost/mpl/int.hpp>

#include <sstream>
#include <tuple>
#include <type_traits>

#include "detail/is_vector_or_cvector.hpp"
#include "detail/is_rowvector_or_crowvector.hpp"
#include "detail/is_matrix_or_cmatrix.hpp"
#include "detail/transpose.hpp"

#define EIGENJS_COMMON_MATRIX_CLASS_METHOD_ZERO_CONTEXT()                    \
  {                                                                          \
    const int& args_length = args.Length();                                  \
                                                                             \
    typename U::value_type::Index nbRows = 0;                                \
    typename U::value_type::Index nbCols = 0;                                \
                                                                             \
    switch ( args_length ) {                                                 \
      case 1:                                                                \
        nbRows = nbCols = args[0]->IsNumber()                                \
            ? args[0]->Int32Value() : 0;                                     \
        break;                                                               \
      case 2:                                                                \
        nbRows = args[0]->IsNumber() ? args[0]->Int32Value() : 0;            \
        nbCols = args[1]->IsNumber() ? args[1]->Int32Value() : 0;            \
        break;                                                               \
      default:                                                               \
        break;                                                               \
    }                                                                        \
                                                                             \
    NanScope();                                                              \
                                                                             \
    if ( nbRows && nbCols ) {                                                \
      v8::Local< v8::Value > argv[] = {                                      \
        NanNew< v8::Number >( nbRows )                                       \
      , NanNew< v8::Number >( nbCols )                                       \
      };                                                                     \
                                                                             \
      v8::Local< v8::Object > instance = U::new_instance(                    \
        args                                                                 \
      , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                    \
      , argv                                                                 \
      );                                                                     \
                                                                             \
      NanReturnValue( instance );                                            \
    }                                                                        \
                                                                             \
    EIGENJS_THROW_ERROR_INVALID_ROWS_AND_COLUMNS_ARGUMENTS()                 \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_CLASS_METHOD_IDENTITY_CONTEXT()                \
  {                                                                          \
    const int& args_length = args.Length();                                  \
    typename U::value_type::Index nbRows = 0;                                \
    typename U::value_type::Index nbCols = 0;                                \
                                                                             \
    switch ( args_length ) {                                                 \
      case 1:                                                                \
        nbRows = nbCols = args[0]->IsNumber()                                \
            ? args[0]->Int32Value() : 0;                                     \
        break;                                                               \
      case 2:                                                                \
        nbRows = args[0]->IsNumber() ? args[0]->Int32Value() : 0;            \
        nbCols = args[1]->IsNumber() ? args[1]->Int32Value() : 0;            \
        break;                                                               \
      default:                                                               \
        break;                                                               \
    }                                                                        \
                                                                             \
    NanScope();                                                              \
                                                                             \
    v8::Local<v8::Value> argv[] = {                                          \
      NanNew< v8::Number >( 0 )                                              \
    , NanNew< v8::Number >( 0 )                                              \
    };                                                                       \
                                                                             \
    v8::Local< v8::Object > instance = U::new_instance(                      \
      args                                                                   \
    , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                      \
    , argv                                                                   \
    );                                                                       \
                                                                             \
    U* new_obj = node::ObjectWrap::Unwrap< U >( instance );                  \
    typename U::value_type& new_value = **new_obj;                           \
                                                                             \
    auto codes = std::make_tuple(                                            \
        [&]{}                                                                \
      , [&]{ return U::value_type::Identity( nbRows, 1 ).col( 0 ); }         \
      , [&]{ return U::value_type::Identity( 1, nbCols ).row( 0 ); }         \
      , [&]{ return U::value_type::Identity( nbRows, nbCols ); }             \
      );                                                                     \
    new_value = std::get<                                                    \
      boost::mpl::plus<                                                      \
        boost::mpl::multiplies<                                              \
          detail::is_vector_or_cvector< U >                                  \
        , boost::mpl::int_< 1 >                                              \
        >                                                                    \
      , boost::mpl::multiplies<                                              \
          detail::is_rowvector_or_crowvector< U >                            \
        , boost::mpl::int_< 2 >                                              \
        >                                                                    \
      , boost::mpl::multiplies<                                              \
          detail::is_matrix_or_cmatrix< U >                                  \
        , boost::mpl::int_< 3 >                                              \
        >                                                                    \
      >::value                                                               \
    >( codes )();                                                            \
                                                                             \
    NanReturnValue( instance );                                              \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_CLASS_METHOD_RANDOM_CONTEXT()                  \
  {                                                                          \
    const int& args_length = args.Length();                                  \
                                                                             \
    typename U::value_type::Index nbRows = 0;                                \
    typename U::value_type::Index nbCols = 0;                                \
                                                                             \
    switch ( args_length ) {                                                 \
      case 1:                                                                \
        nbRows = nbCols = args[0]->IsNumber()                                \
            ? args[0]->Int32Value() : 0;                                     \
        break;                                                               \
      case 2:                                                                \
        nbRows = args[0]->IsNumber() ? args[0]->Int32Value() : 0;            \
        nbCols = args[1]->IsNumber() ? args[1]->Int32Value() : 0;            \
        break;                                                               \
      default:                                                               \
        break;                                                               \
    }                                                                        \
                                                                             \
    NanScope();                                                              \
                                                                             \
    if ( nbRows && nbCols ) {                                                \
      v8::Local< v8::Value > argv[] = {                                      \
        NanNew< v8::Number >( 0 )                                            \
      , NanNew< v8::Number >( 0 )                                            \
      };                                                                     \
                                                                             \
      v8::Local< v8::Object > instance = U::new_instance(                    \
        args                                                                 \
      , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                    \
      , argv                                                                 \
      );                                                                     \
                                                                             \
      U* new_obj = node::ObjectWrap::Unwrap< U >( instance );                \
      typename U::value_type& new_value = **new_obj;                         \
                                                                             \
      auto codes = std::make_tuple(                                          \
          [&]{}                                                              \
        , [&]{ return U::value_type::Random( nbRows, 1 ).col( 0 ); }         \
        , [&]{ return U::value_type::Random( 1, nbCols ).row( 0 ); }         \
        , [&]{ return U::value_type::Random( nbRows, nbCols ); }             \
        );                                                                   \
      new_value = std::get<                                                  \
        boost::mpl::plus<                                                    \
          boost::mpl::multiplies<                                            \
            detail::is_vector_or_cvector< U >                                \
          , boost::mpl::int_< 1 >                                            \
          >                                                                  \
        , boost::mpl::multiplies<                                            \
            detail::is_rowvector_or_crowvector< U >                          \
          , boost::mpl::int_< 2 >                                            \
          >                                                                  \
        , boost::mpl::multiplies<                                            \
            detail::is_matrix_or_cmatrix< U >                                \
          , boost::mpl::int_< 3 >                                            \
          >                                                                  \
        >::value                                                             \
      >( codes )();                                                          \
                                                                             \
      NanReturnValue( instance );                                            \
    }                                                                        \
                                                                             \
    EIGENJS_THROW_ERROR_INVALID_ROWS_AND_COLUMNS_ARGUMENTS()                 \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_TOSTRING_CONTEXT()             \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
                                                                             \
    std::ostringstream result;                                               \
    result << value;                                                         \
                                                                             \
    NanScope();                                                              \
    NanReturnValue( NanNew( result.str().c_str() ) );                        \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_ROWS_CONTEXT()                 \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
                                                                             \
    NanScope();                                                              \
    NanReturnValue( NanNew< v8::Integer >( value.rows() ) );                 \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_COLS_CONTEXT()                 \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
                                                                             \
    NanScope();                                                              \
    NanReturnValue( NanNew< v8::Integer >( value.cols() ) );                 \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_ISSQUARE_CONTEXT()             \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
                                                                             \
    NanScope();                                                              \
    NanReturnValue( NanNew< v8::Boolean >( value.rows() == value.cols() ) ); \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_TRANSPOSE_CONTEXT()            \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
    v8::Local< v8::Value > argv[] = {                                        \
      NanNew< v8::Number >( 0 )                                              \
    , NanNew< v8::Number >( 0 )                                              \
    };                                                                       \
                                                                             \
    NanScope();                                                              \
                                                                             \
    typedef typename detail::transpose< U >::type TT;                        \
                                                                             \
    v8::Local< v8::Object > instance = TT::new_instance(                     \
      args                                                                   \
    , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                      \
    , argv                                                                   \
    );                                                                       \
                                                                             \
    TT* new_obj = node::ObjectWrap::Unwrap< TT >( instance );                \
    typename TT::value_type& new_value = **new_obj;                          \
                                                                             \
    new_value = value.transpose();                                           \
                                                                             \
    NanReturnValue( instance );                                              \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_ADJOINT_CONTEXT()              \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
    v8::Local< v8::Value > argv[] = {                                        \
      NanNew< v8::Number >( 0 )                                              \
    , NanNew< v8::Number >( 0 )                                              \
    };                                                                       \
                                                                             \
    NanScope();                                                              \
                                                                             \
    typedef typename detail::transpose< U >::type TT;                        \
                                                                             \
    v8::Local< v8::Object > instance = TT::new_instance(                     \
      args                                                                   \
    , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                      \
    , argv                                                                   \
    );                                                                       \
                                                                             \
    TT* new_obj = node::ObjectWrap::Unwrap< TT >( instance );                \
    typename TT::value_type& new_value = **new_obj;                          \
                                                                             \
    new_value = value.adjoint();                                             \
                                                                             \
    NanReturnValue( instance );                                              \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_CONJUGATE_CONTEXT()            \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
    v8::Local< v8::Value > argv[] = {                                        \
      NanNew< v8::Number >( 0 )                                              \
    , NanNew< v8::Number >( 0 )                                              \
    };                                                                       \
                                                                             \
    NanScope();                                                              \
                                                                             \
    v8::Local< v8::Object > instance = U::new_instance(                      \
      args                                                                   \
    , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                      \
    , argv                                                                   \
    );                                                                       \
                                                                             \
    U* new_obj = node::ObjectWrap::Unwrap< U >( instance );                  \
    typename U::value_type& new_value = **new_obj;                           \
                                                                             \
    new_value = value.conjugate();                                           \
                                                                             \
    NanReturnValue( instance );                                              \
  }                                                                          \
  /**/

#endif  // EIGENJS_COMMON_MACRO_HPP
