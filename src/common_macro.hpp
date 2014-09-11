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
#include <boost/mpl/or.hpp>

#include <eigen3/Eigen/Dense>

#include <sstream>
#include <tuple>
#include <type_traits>

#include "detail/is_vector_or_cvector.hpp"
#include "detail/is_rowvector_or_crowvector.hpp"
#include "detail/is_matrix_or_cmatrix.hpp"
#include "detail/transpose.hpp"
#include "detail/is_complex.hpp"

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

#define EIGENJS_COMMON_MATRIX_CLASS_METHOD_ONES_CONTEXT()                    \
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
      , [&]{ return U::value_type::Ones( nbRows, 1 ).col( 0 ); }             \
      , [&]{ return U::value_type::Ones( 1, nbCols ).row( 0 ); }             \
      , [&]{ return U::value_type::Ones( nbRows, nbCols ); }                 \
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
    const int& args_length = args.Length();                                  \
    std::ostringstream result;                                               \
                                                                             \
    NanScope();                                                              \
                                                                             \
    if ( args_length == 0 ) {                                                \
      result << value;                                                       \
    } else if ( args_length == 1 && args[0]->IsObject() ) {                  \
      const v8::Local< v8::Object >& options = args[0]->ToObject();          \
                                                                             \
      int precision = Eigen::StreamPrecision;                                \
      const v8::Local< v8::String >& precision_string =                      \
          NanNew( "precision" );                                             \
      if ( options->Has( precision_string ) ) {                              \
        const v8::Local< v8::Value >& precision_value =                      \
            options->Get( precision_string );                                \
        if ( precision_value->IsNumber() ) {                                 \
          precision = precision_value->Int32Value();                         \
        }                                                                    \
      }                                                                      \
                                                                             \
      const v8::Local< v8::String >& full_precision_string =                 \
          NanNew( "fullPrecision" );                                         \
      if ( options->Has( full_precision_string ) ) {                         \
        const v8::Local< v8::Value >& full_precision_value =                 \
            options->Get( full_precision_string );                           \
        if ( full_precision_value->IsTrue() ) {                              \
          precision = Eigen::FullPrecision;                                  \
        }                                                                    \
      }                                                                      \
                                                                             \
      int flags = 0;                                                         \
      const v8::Local< v8::String >& dont_align_cols_string =                \
          NanNew( "dontAlignCols" );                                         \
      if ( options->Has( dont_align_cols_string ) ) {                        \
        const v8::Local< v8::Value >& dont_align_cols_value =                \
            options->Get( dont_align_cols_string );                          \
        if ( dont_align_cols_value->IsTrue() ) {                             \
          flags = Eigen::DontAlignCols;                                      \
        }                                                                    \
      }                                                                      \
                                                                             \
      std::string coefficient_separator = " ";                               \
      const v8::Local< v8::String >& coefficient_separator_string =          \
          NanNew( "coeffSeparator" );                                        \
      if ( options->Has( coefficient_separator_string ) ) {                  \
        const v8::Local< v8::Value >& coefficient_separator_value =          \
            options->Get( coefficient_separator_string );                    \
        if ( coefficient_separator_value->IsString() ) {                     \
          coefficient_separator =                                            \
              *NanUtf8String( coefficient_separator_value );                 \
        }                                                                    \
      }                                                                      \
                                                                             \
      std::string row_separator = "\n";                                      \
      const v8::Local< v8::String >& row_separator_string =                  \
          NanNew( "rowSeparator" );                                          \
      if ( options->Has( row_separator_string ) ) {                          \
        const v8::Local< v8::Value >& row_separator_value =                  \
            options->Get( row_separator_string );                            \
        if ( row_separator_value->IsString() ) {                             \
          row_separator =                                                    \
              *NanUtf8String( row_separator_value );                         \
        }                                                                    \
      }                                                                      \
                                                                             \
      std::string row_prefix = "";                                           \
      const v8::Local< v8::String >& row_prefix_string =                     \
          NanNew( "rowPrefix" );                                             \
      if ( options->Has( row_prefix_string ) ) {                             \
        const v8::Local< v8::Value >& row_prefix_value =                     \
            options->Get( row_prefix_string );                               \
        if ( row_prefix_value->IsString() ) {                                \
          row_prefix = *NanUtf8String( row_prefix_value );                   \
        }                                                                    \
      }                                                                      \
                                                                             \
      std::string row_suffix = "";                                           \
      const v8::Local< v8::String >& row_suffix_string =                     \
          NanNew( "rowSuffix" );                                             \
      if ( options->Has( row_suffix_string ) ) {                             \
        const v8::Local< v8::Value >& row_suffix_value =                     \
            options->Get( row_suffix_string );                               \
        if ( row_suffix_value->IsString() ) {                                \
          row_suffix = *NanUtf8String( row_suffix_value );                   \
        }                                                                    \
      }                                                                      \
                                                                             \
      std::string mat_prefix = "";                                           \
      const v8::Local< v8::String >& mat_prefix_string =                     \
          NanNew( "matPrefix" );                                             \
      if ( options->Has( mat_prefix_string ) ) {                             \
        const v8::Local< v8::Value >& mat_prefix_value =                     \
            options->Get( mat_prefix_string );                               \
        if ( mat_prefix_value->IsString() ) {                                \
          mat_prefix = *NanUtf8String( mat_prefix_value );                   \
        }                                                                    \
      }                                                                      \
                                                                             \
      std::string mat_suffix = "";                                           \
      const v8::Local< v8::String >& mat_suffix_string =                     \
          NanNew( "matSuffix" );                                             \
      if ( options->Has( mat_suffix_string ) ) {                             \
        const v8::Local< v8::Value >& mat_suffix_value =                     \
            options->Get( mat_suffix_string );                               \
        if ( mat_suffix_value->IsString() ) {                                \
          mat_suffix = *NanUtf8String( mat_suffix_value );                   \
        }                                                                    \
      }                                                                      \
                                                                             \
      Eigen::IOFormat fmt(                                                   \
            precision                                                        \
          , flags                                                            \
          , coefficient_separator                                            \
          , row_separator                                                    \
          , row_prefix                                                       \
          , row_suffix                                                       \
          , mat_prefix                                                       \
          , mat_suffix                                                       \
          );                                                                 \
                                                                             \
      result << value.format( fmt );                                         \
    }                                                                        \
                                                                             \
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

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_SETZERO_CONTEXT()              \
  {                                                                          \
    T* obj = node::ObjectWrap::Unwrap< T >( args.This() );                   \
    typename T::value_type& value = **obj;                                   \
                                                                             \
    NanScope();                                                              \
                                                                             \
    value.setZero();                                                         \
                                                                             \
    NanReturnValue( args.This() );                                           \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_SETONES_CONTEXT()              \
  {                                                                          \
    T* obj = node::ObjectWrap::Unwrap< T >( args.This() );                   \
    typename T::value_type& value = **obj;                                   \
                                                                             \
    NanScope();                                                              \
                                                                             \
    value.setOnes();                                                         \
                                                                             \
    NanReturnValue( args.This() );                                           \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_SETRANDOM_CONTEXT()            \
  {                                                                          \
    T* obj = node::ObjectWrap::Unwrap< T >( args.This() );                   \
    typename T::value_type& value = **obj;                                   \
                                                                             \
    NanScope();                                                              \
                                                                             \
    value.setRandom();                                                       \
                                                                             \
    NanReturnValue( args.This() );                                           \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_TRANSPOSE_CONTEXT()            \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
    v8::Local< v8::Value > argv[] = {                                        \
      NanNew<v8::Integer>( 0 )  /* rows */                                   \
    , NanNew<v8::Integer>( 0 )  /* cols */                                   \
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

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_CONJUGATE_CONTEXT()            \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
    v8::Local< v8::Value > argv[] = {                                        \
      NanNew<v8::Integer>( 0 )  /* rows */                                   \
    , NanNew<v8::Integer>( 0 )  /* cols */                                   \
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

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_ADJOINT_CONTEXT()              \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
    v8::Local< v8::Value > argv[] = {                                        \
      NanNew<v8::Integer>( 0 )  /* rows */                                   \
    , NanNew<v8::Integer>( 0 )  /* cols */                                   \
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

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_ISSQUARE_CONTEXT()             \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
                                                                             \
    NanScope();                                                              \
    NanReturnValue( NanNew< v8::Boolean >( value.rows() == value.cols() ) ); \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_ISZERO_CONTEXT()               \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
                                                                             \
    typedef Eigen::NumTraits< typename T::value_type::Scalar > num_traits;   \
    const typename num_traits::Real& prec =                                  \
        args.Length() == 1 && args[0]->IsNumber()                            \
      ? args[0]->NumberValue()                                               \
      : num_traits::dummy_precision();                                       \
                                                                             \
    NanScope();                                                              \
                                                                             \
    NanReturnValue( NanNew< v8::Boolean >( value.isZero( prec ) ) );         \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_ISONES_CONTEXT()               \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >(args.This());        \
    const typename T::value_type& value = **obj;                             \
                                                                             \
    typedef Eigen::NumTraits< typename T::value_type::Scalar > num_traits;   \
    const typename num_traits::Real& prec =                                  \
        args.Length() == 1 && args[0]->IsNumber()                            \
      ? args[0]->NumberValue()                                               \
      : num_traits::dummy_precision();                                       \
                                                                             \
    NanScope();                                                              \
                                                                             \
    NanReturnValue( NanNew< v8::Boolean >( value.isOnes( prec ) ) );         \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_ISIDENTITY_CONTEXT()           \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
                                                                             \
    typedef Eigen::NumTraits< typename T::value_type::Scalar > num_traits;   \
    const typename num_traits::Real& prec =                                  \
        args.Length() == 1 && args[0]->IsNumber()                            \
      ? args[0]->NumberValue()                                               \
      : num_traits::dummy_precision();                                       \
                                                                             \
    NanScope();                                                              \
                                                                             \
    NanReturnValue( NanNew< v8::Boolean >( value.isIdentity( prec ) ) );     \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_ISDIAGONAL_CONTEXT()           \
  {                                                                          \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
                                                                             \
    typedef Eigen::NumTraits< typename T::value_type::Scalar > num_traits;   \
    const typename num_traits::Real& prec =                                  \
        args.Length() == 1 && args[0]->IsNumber()                            \
      ? args[0]->NumberValue()                                               \
      : num_traits::dummy_precision();                                       \
                                                                             \
    NanScope();                                                              \
                                                                             \
    NanReturnValue( NanNew< v8::Boolean >( value.isDiagonal( prec ) ) );     \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_VECTOR_INSTANCE_METHOD_ASDIAGONAL_CONTEXT()           \
  {                                                                          \
    NanScope();                                                              \
                                                                             \
    const T* const& obj = node::ObjectWrap::Unwrap< T >( args.This() );      \
    const typename T::value_type& value = **obj;                             \
                                                                             \
    if ( value.rows() && value.cols() ) {                                    \
      v8::Local<v8::Value> argv[] = {                                        \
        NanNew<v8::Integer>( 0 )  /* rows */                                 \
      , NanNew<v8::Integer>( 0 )  /* cols */                                 \
      };                                                                     \
                                                                             \
      typedef typename std::conditional<                                     \
          detail::is_complex< T >::value                                     \
        , CMatrix                                                            \
        , Matrix                                                             \
        >::type MT;                                                          \
                                                                             \
      v8::Local< v8::Object > instance = MT::new_instance(                   \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                  \
        , argv                                                               \
      );                                                                     \
                                                                             \
      MT* new_obj = node::ObjectWrap::Unwrap< MT >( instance );              \
      typename MT::value_type& new_matrix_or_cmatirx = **new_obj;            \
                                                                             \
      typedef typename U::value_type UV;                                     \
                                                                             \
      auto codes = std::make_tuple(                                          \
          [&]{ new_matrix_or_cmatirx = UV( value ).asDiagonal(); }           \
        , [&]{ new_matrix_or_cmatirx = value.asDiagonal(); }                 \
        );                                                                   \
      std::get<                                                              \
        boost::mpl::or_<                                                     \
          detail::is_vector_or_cvector< T >                                  \
        , detail::is_rowvector_or_crowvector< T >                            \
        >::value                                                             \
      >( codes )();                                                          \
                                                                             \
      NanReturnValue( instance );                                            \
    }                                                                        \
                                                                             \
    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()                                   \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#endif  // EIGENJS_COMMON_MACRO_HPP
