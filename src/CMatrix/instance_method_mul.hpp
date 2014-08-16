//
// CMatrix/instance_method_mul.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_MUL_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_MUL_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, mul,
{
  typedef typename CMatrix::Complex Complex;
  typedef typename CMatrix::Matrix Matrix;

  NanScope();

  if (args.Length() == 1) {
    const CMatrix* const& obj = node::ObjectWrap::Unwrap<CMatrix>(args.This());
    const typename CMatrix::value_type& cmatrix = **obj;
    const typename CMatrix::value_type::Index& rows = cmatrix.rows();
    const typename CMatrix::value_type::Index& cols = cmatrix.cols();
    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Integer>(rows)
    , NanNew<v8::Integer>(cols)
    };

    if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* rhs_obj =
        node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;

      if (CMatrix::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = cmatrix * rhs_cmatrix;

      NanReturnValue(instance);
    } else if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;

      if (Matrix::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = cmatrix *
          rhs_matrix.template cast<typename Complex::value_type>();

      NanReturnValue(instance);
    } else if (Complex::is_scalar(args[0])) {
      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = cmatrix * args[0]->NumberValue();

      NanReturnValue(instance);
    } else if (Complex::is_complex(args[0])) {
      const Complex* const& rhs_obj =
          node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::value_type& rhs_complex = **rhs_obj;

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = cmatrix * rhs_complex;

      NanReturnValue(instance);
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_MUL_HPP
