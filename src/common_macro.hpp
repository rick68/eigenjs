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

#define EIGENJS_COMMON_MATRIX_CLASS_METHOD_ZERO_CONTEXT( CLASS )             \
  {                                                                          \
    const int& args_length = args.Length();                                  \
                                                                             \
    NanScope();                                                              \
                                                                             \
    if ( args_length == 2 &&                                                 \
         CLASS::is_scalar( args[0] ) &&                                      \
         CLASS::is_scalar( args[1] )                                         \
    ) {                                                                      \
      const typename CLASS::value_type::Index& nbRows =                      \
          args[0]->Uint32Value();                                            \
      const typename CLASS::value_type::Index& nbCols =                      \
          args[1]->Uint32Value();                                            \
                                                                             \
      v8::Local< v8::Value > argv[] = {                                      \
        NanNew< v8::Number >( nbRows )                                       \
      , NanNew< v8::Number >( nbCols )                                       \
      };                                                                     \
                                                                             \
      v8::Local< v8::Object > instance = CLASS::new_instance(                \
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

#define EIGENJS_COMMON_MATRIX_CLASS_METHOD_IDENTITY_CONTEXT( CLASS )         \
  {                                                                          \
    const int& args_length = args.Length();                                  \
    typename CLASS::value_type::Index nbRows = 0;                            \
    typename CLASS::value_type::Index nbCols = 0;                            \
                                                                             \
    NanScope();                                                              \
                                                                             \
    if ( args_length == 1 || args_length == 2 ) {                            \
      nbRows = CLASS::is_scalar( args[0 ]) ? args[0]->Uint32Value() : 0;     \
      nbCols = args_length == 2 && CLASS::is_scalar( args[1] )               \
          ? args[1]->Uint32Value() : nbRows;                                 \
                                                                             \
      v8::Local<v8::Value> argv[] = {                                        \
        NanNew< v8::Number >( 0 )                                            \
      , NanNew< v8::Number >( 0 )                                            \
      };                                                                     \
                                                                             \
      v8::Local< v8::Object > instance = CLASS::new_instance(                \
        args                                                                 \
      , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                    \
      , argv                                                                 \
      );                                                                     \
                                                                             \
      CLASS* new_obj = node::ObjectWrap::Unwrap< CLASS >( instance );        \
      typename CLASS::value_type& new_value = **new_obj;                     \
                                                                             \
      new_value = CLASS::value_type::Identity( nbRows, nbCols );             \
                                                                             \
      NanReturnValue( instance );                                            \
    }                                                                        \
                                                                             \
    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()                                   \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#define EIGENJS_COMMON_MATRIX_CLASS_METHOD_RANDOM_CONTEXT( CLASS )           \
  {                                                                          \
    const int& args_length = args.Length();                                  \
                                                                             \
    NanScope();                                                              \
                                                                             \
    if ( args_length == 2 &&                                                 \
         CLASS::is_scalar( args[0] ) &&                                      \
         CLASS::is_scalar( args[1] )                                         \
    ) {                                                                      \
      const typename CLASS::value_type::Index& nbRows =                      \
          args[0]->Uint32Value();                                            \
      const typename CLASS::value_type::Index& nbCols =                      \
          args[1]->Uint32Value();                                            \
                                                                             \
      v8::Local< v8::Value > argv[] = {                                      \
        NanNew< v8::Number >( 0 )                                            \
      , NanNew< v8::Number >( 0 )                                            \
      };                                                                     \
                                                                             \
      v8::Local< v8::Object > instance = CLASS::new_instance(                \
        args                                                                 \
      , sizeof( argv ) / sizeof( v8::Local< v8::Value > )                    \
      , argv                                                                 \
      );                                                                     \
                                                                             \
      CLASS* new_obj = node::ObjectWrap::Unwrap< CLASS >( instance );        \
      typename CLASS::value_type& new_value = **new_obj;                     \
                                                                             \
      new_value = CLASS::value_type::Random( nbRows, nbCols );               \
                                                                             \
      NanReturnValue( instance );                                            \
    }                                                                        \
                                                                             \
    EIGENJS_THROW_ERROR_INVALID_ROWS_AND_COLUMNS_ARGUMENTS()                 \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#endif  // EIGENJS_COMMON_MACRO_HPP
