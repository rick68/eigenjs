//
// Complex/instance_method_mul.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_INSTANCE_METHOD_MUL_HPP
#define EIGENJS_COMPLEX_INSTANCE_METHOD_MUL_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Complex, mul,
{
  typedef typename Complex::Matrix Matrix;
  typedef typename Complex::CMatrix CMatrix;

  NanScope();

  if (args.Length() == 1) {
    const Complex* const& obj =
      node::ObjectWrap::Unwrap<Complex>(args.This());
    const typename Complex::complex_type& complex = **obj;

    if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
          node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::matrix_type& rhs_matrix = **rhs_obj;
      v8::Local<v8::Value> argv[] = {
        NanNew<v8::Integer>(rhs_matrix.rows())
      , NanNew<v8::Integer>(rhs_matrix.cols())
      };

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::cmatrix_type& new_cmatrix = **new_obj;

      new_cmatrix = complex * rhs_matrix;

      NanReturnValue(instance);
    } else if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* const& rhs_obj =
          node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::cmatrix_type& rhs_cmatrix = **rhs_obj;

      v8::Local<v8::Value> argv[] = {
        NanNew<v8::Integer>(rhs_cmatrix.rows())
      , NanNew<v8::Integer>(rhs_cmatrix.cols())
      };

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::cmatrix_type& new_cmatrix = **new_obj;

      new_cmatrix = complex * rhs_cmatrix;

      NanReturnValue(instance);
    }

    typename Complex::complex_type c;

    if (Complex::is_complex(args[0])) {
      new (&c) typename Complex::complex_type(
        **node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject())
      );
    }  else if (Complex::is_scalar(args[0])) {
      new (&c) typename Complex::complex_type
        (args[0]->NumberValue(), 0);
    } else if (true) {
      NanReturnUndefined();
    }

    c = complex * c;

    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Number>(c.real())
    , NanNew<v8::Number>(c.imag())
    };

    NanReturnValue(
      Complex::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      )
    );
  }

  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_INSTANCE_METHOD_MUL_HPP
