//
// definition.hpp
// ~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DEFINITION_HPP
#define EIGENJS_DEFINITION_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/preprocessor/cat.hpp>
#include <boost/preprocessor/stringize.hpp>
#include <boost/preprocessor/repetition/repeat.hpp>
#include <boost/preprocessor/punctuation/comma_if.hpp>
#include <boost/preprocessor/seq/elem.hpp>
#include <boost/preprocessor/seq/size.hpp>
#include <boost/preprocessor/seq/for_each_i.hpp>

#define BOOST_MPL_LIMIT_VECTOR_SIZE 50
#include <boost/mpl/vector.hpp>
#include <boost/mpl/for_each.hpp>

#include "Complex_fwd.hpp"
#include "Matrix_fwd.hpp"
#include "CMatrix_fwd.hpp"
#include "Vector_fwd.hpp"
#include "CVector_fwd.hpp"
#include "RowVector_fwd.hpp"
#include "CRowVector_fwd.hpp"
#include "MatrixBlock_fwd.hpp"
#include "CMatrixBlock_fwd.hpp"
#include "detail/initializer.hpp"
#include "detail/unwrap_block.hpp"
#include "detail/property_accessor_base.hpp"

#define EIGENJS_DETAIL_DEFINITION_COMMON_TYPEDEFS()                          \
  typedef typename detail::unwrap_block< T >::type U;                        \
  typedef typename T::scalar_type scalar_type;                               \
  typedef ::EigenJS::Complex< scalar_type > Complex;                         \
  typedef ::EigenJS::Matrix< scalar_type > Matrix;                           \
  typedef ::EigenJS::Vector< scalar_type > Vector;                           \
  typedef ::EigenJS::RowVector< scalar_type > RowVector;                     \
  typedef ::EigenJS::CMatrix< scalar_type > CMatrix;                         \
  typedef ::EigenJS::CVector< scalar_type > CVector;                         \
  typedef ::EigenJS::CRowVector< scalar_type > CRowVector;                   \
  typedef ::EigenJS::MatrixBlock< scalar_type > MatrixBlock;                 \
  typedef ::EigenJS::CMatrixBlock< scalar_type > CMatrixBlock;               \
  /**/

#define EIGENJS_CLASS_METHOD( CLASS, NAME, ... /* CODE */ )                  \
  template < typename T >                                                    \
  struct BOOST_PP_CAT( BOOST_PP_CAT( CLASS, _class_method_ ), NAME ) {       \
    EIGENJS_DETAIL_DEFINITION_COMMON_TYPEDEFS()                              \
    void operator()( v8::Local<v8::FunctionTemplate>& ft ) const {           \
      NODE_SET_METHOD(                                                       \
        ft                                                                   \
      , BOOST_PP_STRINGIZE( NAME )                                           \
      , NAME                                                                 \
      );                                                                     \
    }                                                                        \
   private:                                                                  \
    static NAN_METHOD( NAME ) __VA_ARGS__                                    \
  };                                                                         \
  /**/

#define EIGENJS_INSTANCE_METHOD( CLASS, NAME, ... /* CODE */ )               \
  template < typename T >                                                    \
  struct BOOST_PP_CAT( BOOST_PP_CAT( CLASS, _instance_method_ ), NAME ) {    \
    EIGENJS_DETAIL_DEFINITION_COMMON_TYPEDEFS()                              \
    void operator()( v8::Local<v8::FunctionTemplate>& ft ) const {           \
      NODE_SET_PROTOTYPE_METHOD(                                             \
        ft                                                                   \
      , BOOST_PP_STRINGIZE( NAME )                                           \
      , NAME                                                                 \
      );                                                                     \
    }                                                                        \
   private:                                                                  \
    static NAN_METHOD( NAME ) __VA_ARGS__                                    \
  };                                                                         \
  /**/

#define EIGENJS_PROPERTY_ACCESSOR_GETTER( CLASS, NAME, ... /* CODE */ )      \
  template < typename T >                                                    \
  struct BOOST_PP_CAT(                                                       \
    CLASS                                                                    \
  , BOOST_PP_CAT( _property_accessor_getter_, NAME )                         \
  ) : virtual ::EigenJS::detail::property_accessor_base                      \
  {                                                                          \
    EIGENJS_DETAIL_DEFINITION_COMMON_TYPEDEFS()                              \
    BOOST_PP_CAT(                                                            \
      CLASS                                                                  \
    , BOOST_PP_CAT( _property_accessor_getter_, NAME )                       \
    )() { g_ = BOOST_PP_CAT( get_, NAME ); }                                 \
    static NAN_GETTER( BOOST_PP_CAT( get_, NAME ) ) __VA_ARGS__              \
  };                                                                         \
  /**/

#define EIGENJS_PROPERTY_ACCESSOR_SETTER( CLASS, NAME, ... /* CODE */ )      \
  template < typename T >                                                    \
  struct BOOST_PP_CAT(                                                       \
    CLASS                                                                    \
  , BOOST_PP_CAT( _property_accessor_setter_, NAME )                         \
  ) : virtual ::EigenJS::detail::property_accessor_base                      \
  {                                                                          \
    EIGENJS_DETAIL_DEFINITION_COMMON_TYPEDEFS()                              \
    BOOST_PP_CAT(                                                            \
      CLASS                                                                  \
    , BOOST_PP_CAT( _property_accessor_setter_, NAME )                       \
    )() { s_ = BOOST_PP_CAT( set_, NAME ); }                                 \
    static NAN_SETTER( BOOST_PP_CAT( set_, NAME ) ) __VA_ARGS__              \
  };                                                                         \
  /**/

#define EIGENJS_DETAIL_PROPERTY_ACCESSOR_DECL( z, n, data )                  \
  BOOST_PP_COMMA_IF( n )                                                     \
  BOOST_PP_CAT(                                                              \
    BOOST_PP_CAT(                                                            \
      BOOST_PP_SEQ_ELEM( 0, data )                                           \
    , _property_accessor_                                                    \
    )                                                                        \
  , BOOST_PP_CAT(                                                            \
      BOOST_PP_SEQ_ELEM( n, BOOST_PP_SEQ_ELEM( 1, data ) )                   \
    , BOOST_PP_CAT( _, BOOST_PP_SEQ_ELEM( 2, data ) )                        \
    )                                                                        \
  ) < T >                                                                    \
  /**/

#define EIGENJS_PROPERTY_ACCESSOR( CLASS, NAME, ACCESSORS )                  \
  template < typename T >                                                    \
  struct BOOST_PP_CAT(                                                       \
    CLASS                                                                    \
  , BOOST_PP_CAT( _property_accessor_, NAME )                                \
  ) : BOOST_PP_REPEAT(                                                       \
        BOOST_PP_SEQ_SIZE( ACCESSORS )                                       \
      , EIGENJS_DETAIL_PROPERTY_ACCESSOR_DECL                                \
      , ( CLASS )( ACCESSORS )( NAME )                                       \
      )                                                                      \
  {                                                                          \
    void operator()( v8::Local< v8::FunctionTemplate >& ft ) const {         \
      v8::Local< v8::ObjectTemplate > proto = ft->PrototypeTemplate();       \
      proto->SetAccessor(                                                    \
        NanNew( BOOST_PP_STRINGIZE( NAME ) )                                 \
      , detail::property_accessor_base::g_                                   \
      , detail::property_accessor_base::s_                                   \
      );                                                                     \
    }                                                                        \
  };                                                                         \
  /**/

#define EIGENJS_DETAIL_OBJECT_DEFINITIONS_MACRO( r, data, i, elem )          \
  BOOST_PP_COMMA_IF( i )                                                     \
  BOOST_PP_CAT(                                                              \
    BOOST_PP_CAT( data , _ )                                                 \
  , elem                                                                     \
  ) < T >                                                                    \
  /**/

#define EIGENJS_DETAIL_OBJECT_DEFINITIONS_NAME( NAME )                       \
  BOOST_PP_CAT( NAME, _definitions )                                         \
  /**/

#define EIGENJS_OBJECT_DEFINITIONS( NAME, SEQ )                              \
  template < typename T >                                                    \
  struct EIGENJS_DETAIL_OBJECT_DEFINITIONS_NAME( NAME ) {                    \
    typedef BOOST_PP_CAT(                                                    \
        boost::mpl::vector                                                   \
      , BOOST_PP_SEQ_SIZE( SEQ )                                             \
      )                                                                      \
      <                                                                      \
        BOOST_PP_SEQ_FOR_EACH_I(                                             \
          EIGENJS_DETAIL_OBJECT_DEFINITIONS_MACRO                            \
        , NAME                                                               \
        , SEQ                                                                \
        )                                                                    \
      > type;                                                                \
  };                                                                         \
  /**/

#define EIGENJS_OBJECT_INITIALIZE( NAME, FT )                                \
  boost::mpl::for_each<                                                      \
    typename EIGENJS_DETAIL_OBJECT_DEFINITIONS_NAME( NAME )                  \
        < typename base_type::derived_type >::type                           \
  > ( detail::initializer( FT ) );                                           \
  /**/

#endif  // EIGENJS_DEFINITION_HPP
