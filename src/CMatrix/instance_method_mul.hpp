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

#include "../detail/add_complex.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, mul,
{
  NanScope();

  if (args.Length() == 1) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;
    const typename T::value_type::Index& rows = value.rows();
    const typename T::value_type::Index& cols = value.cols();
    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Integer>(rows)
    , NanNew<v8::Integer>(cols)
    };

    if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* rhs_obj =
        node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = value * rhs_cmatrix;

      NanReturnValue(instance);
    } else if (CVector::is_cvector(args[0])) {
      const CVector* rhs_obj =
          node::ObjectWrap::Unwrap<CVector>(args[0]->ToObject());
      const typename CVector::value_type& rhs_cvector = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      v8::Local<v8::Object> instance = T::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      T* new_obj = node::ObjectWrap::Unwrap<T>(instance);
      typename T::value_type& new_value = **new_obj;

      new_value = value * rhs_cvector;

      NanReturnValue(instance);
    } else if (CRowVector::is_crowvector(args[0])) {
      const CRowVector* rhs_obj =
          node::ObjectWrap::Unwrap<CRowVector>(args[0]->ToObject());
      const typename CRowVector::value_type& rhs_crowvector = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      v8::Local<v8::Object> instance = T::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      T* new_obj = node::ObjectWrap::Unwrap<T>(instance);
      typename T::value_type& new_value = **new_obj;

      new_value = value * rhs_crowvector;

      NanReturnValue(instance);
    } else if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = value *
          rhs_matrix.template cast<typename Complex::value_type>();

      NanReturnValue(instance);
    } else if (Vector::is_vector(args[0])) {
      const Vector* const& rhs_obj =
        node::ObjectWrap::Unwrap<Vector>(args[0]->ToObject());
      const typename Vector::value_type& rhs_vector = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      T* new_obj = node::ObjectWrap::Unwrap<T>(instance);
      typename T::value_type& new_value = **new_obj;

      new_value = value *
          rhs_vector.template cast<typename Complex::value_type>();

      NanReturnValue(instance);
    } else if (RowVector::is_rowvector(args[0])) {
      const RowVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<RowVector>(args[0]->ToObject());
      const typename RowVector::value_type& rhs_rowvector = **rhs_obj;

      if (T::is_invalid_matrix_product(obj, rhs_obj)) {
        NanReturnUndefined();
      }

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      T* new_obj = node::ObjectWrap::Unwrap<T>(instance);
      typename T::value_type& new_value = **new_obj;

      new_value = value *
          rhs_rowvector.template cast<typename Complex::value_type>();

      NanReturnValue(instance);
    } else if (T::is_scalar(args[0])) {
      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      T* new_obj = node::ObjectWrap::Unwrap<T>(instance);
      typename T::value_type& new_value = **new_obj;

      new_value = value * args[0]->NumberValue();

      NanReturnValue(instance);
    } else if (Complex::is_complex(args[0])) {
      const Complex* const& rhs_obj =
          node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::value_type& rhs_complex = **rhs_obj;

      v8::Local<v8::Object> instance = T::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      T* new_obj = node::ObjectWrap::Unwrap<T>(instance);
      typename T::value_type& new_value = **new_obj;

      new_value = value * rhs_complex;

      NanReturnValue(instance);
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_MUL_HPP
