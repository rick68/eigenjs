//
// Complex_macro.hpp
// ~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_MACRO_HPP
#define EIGENJS_COMPLEX_MACRO_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#define EIGENJS_COMPLEX_BINARY_OPERATOR_CONTEXT( OP )                        \
  {                                                                          \
    NanScope();                                                              \
                                                                             \
    if ( args.Length() == 1 ) {                                              \
      typename Complex::complex_type c;                                      \
                                                                             \
      if ( Complex::is_complex( args[0] ) ) {                                \
        new ( &c ) typename Complex::complex_type(                           \
          **node::ObjectWrap::Unwrap<Complex>( args[0]->ToObject() )         \
        );                                                                   \
      }  else if ( Complex::is_scalar( args[0] ) ) {                         \
        new ( &c ) typename Complex::complex_type                            \
          ( args[0]->NumberValue(), 0 );                                     \
      }                                                                      \
      const Complex* const& obj =                                            \
        node::ObjectWrap::Unwrap<Complex>( args.This() );                    \
      const typename Complex::complex_type& complex = **obj;                 \
                                                                             \
      c = complex OP c;                                                      \
                                                                             \
      v8::Local<v8::Value> argv[] = {                                        \
        NanNew<v8::Number>( c.real() )                                       \
      , NanNew<v8::Number>( c.imag() )                                       \
      };                                                                     \
                                                                             \
      NanReturnValue(                                                        \
        Complex::new_instance(                                               \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local<v8::Value> )                    \
        , argv                                                               \
        )                                                                    \
      );                                                                     \
    }                                                                        \
                                                                             \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#define EIGENJS_COMPLEX_BINARY_OPERATOR_COMMUTATIVE_CONTEXT( OP )            \
  {                                                                          \
    NanScope();                                                              \
                                                                             \
    if ( args.Length() == 1 ) {                                              \
      typename Complex::complex_type c;                                      \
                                                                             \
      if( Complex::is_complex( args[0] ) ) {                                 \
        new (&c) typename Complex::complex_type(                             \
          **node::ObjectWrap::Unwrap<Complex>(                               \
            args[0]->ToObject()                                              \
          )                                                                  \
        );                                                                   \
      } else if ( Complex::is_scalar( args[0] ) ) {                          \
        new (&c) typename Complex::complex_type                              \
          ( args[0]->NumberValue(), 0 );                                     \
      }                                                                      \
                                                                             \
      Complex* obj = node::ObjectWrap::Unwrap<Complex>( args.This() );       \
                                                                             \
      **obj OP##= c;                                                         \
                                                                             \
      NanReturnValue( args.This() );                                         \
    }                                                                        \
                                                                             \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#define EIGENJS_COMPLEX_CLASS_METHOD_CONTEXT( NAME )                         \
  {                                                                          \
    NanScope();                                                              \
                                                                             \
    if ( args.Length() == 1 ) {                                              \
      typename Complex::complex_type c;                                      \
                                                                             \
      if ( Complex::is_complex( args[0] ) ) {                                \
        new (&c) typename Complex::complex_type(                             \
            **node::ObjectWrap::Unwrap<Complex>(                             \
              args[0]->ToObject()                                            \
          )                                                                  \
        );                                                                   \
      } else if ( Complex::is_scalar( args[0] ) ) {                          \
        new (&c) typename Complex::complex_type                              \
          (args[0]->NumberValue(), 0);                                       \
      }                                                                      \
                                                                             \
      const typename Complex::complex_type& NAME = std::NAME( c );           \
      const typename Complex::element_type& real = NAME.real();              \
      const typename Complex::element_type& imag = NAME.imag();              \
                                                                             \
      v8::Local<v8::Value> argv[] = {                                        \
        NanNew<v8::Number>( real )                                           \
      , NanNew<v8::Number>( imag )                                           \
      };                                                                     \
                                                                             \
      NanReturnValue(                                                        \
        Complex::new_instance(                                               \
          args                                                               \
        , sizeof( argv ) / sizeof( v8::Local<v8::Value> )                    \
        , argv                                                               \
        )                                                                    \
      );                                                                     \
    }                                                                        \
                                                                             \
    NanReturnUndefined();                                                    \
  }                                                                          \
  /**/

#endif  // EIGENJS_COMPLEX_MACRO_HPP
