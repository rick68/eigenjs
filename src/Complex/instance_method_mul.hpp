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
  NanScope();

  if (args.Length() == 1) {
    const Complex* const& obj =
      node::ObjectWrap::Unwrap<Complex>(args.This());
    const typename Complex::value_type& complex = **obj;
    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Integer>(0)  /* rows */
    , NanNew<v8::Integer>(0)  /* cols */
    };

    if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
          node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = complex * rhs_matrix;

      NanReturnValue(instance);
    } else if (Vector::is_vector(args[0])) {
      const Vector* const& rhs_obj =
          node::ObjectWrap::Unwrap<Vector>(args[0]->ToObject());
      const typename Vector::value_type& rhs_vector = **rhs_obj;

      v8::Local<v8::Object> instance = CVector::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CVector* new_obj = node::ObjectWrap::Unwrap<CVector>(instance);
      typename CVector::value_type& new_cvector = **new_obj;

      new_cvector = complex * rhs_vector;

      NanReturnValue(instance);
    } else if (RowVector::is_rowvector(args[0])) {
      const RowVector* const& rhs_obj =
          node::ObjectWrap::Unwrap<RowVector>(args[0]->ToObject());
      const typename RowVector::value_type& rhs_rowvector = **rhs_obj;

      v8::Local<v8::Object> instance = CRowVector::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CRowVector* new_obj = node::ObjectWrap::Unwrap<CRowVector>(instance);
      typename CRowVector::value_type& new_crowvector = **new_obj;

      new_crowvector = complex * rhs_rowvector;

      NanReturnValue(instance);
    } else if (MatrixBlock::is_matrixblock(args[0])) {
      const MatrixBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<MatrixBlock>(args[0]->ToObject());
      const typename MatrixBlock::value_type& rhs_matrixblock = **rhs_obj;

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = complex * rhs_matrixblock;

      NanReturnValue(instance);
    } else if (VectorBlock::is_vectorblock(args[0])) {
      const VectorBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<VectorBlock>(args[0]->ToObject());
      const typename VectorBlock::value_type& rhs_vectorblock = **rhs_obj;

      v8::Local<v8::Object> instance = CVector::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CVector* new_obj = node::ObjectWrap::Unwrap<CVector>(instance);
      typename CVector::value_type& new_cvector = **new_obj;

      new_cvector = complex * rhs_vectorblock;

      NanReturnValue(instance);
    } else if (RowVectorBlock::is_rowvectorblock(args[0])) {
      const RowVectorBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<RowVectorBlock>(args[0]->ToObject());
      const typename RowVectorBlock::value_type& rhs_rowvectorblock =
          **rhs_obj;

      v8::Local<v8::Object> instance = CRowVector::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CRowVector* new_obj = node::ObjectWrap::Unwrap<CRowVector>(instance);
      typename CRowVector::value_type& new_crowvector = **new_obj;

      new_crowvector = complex * rhs_rowvectorblock;

      NanReturnValue(instance);
    } else if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* const& rhs_obj =
          node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = complex * rhs_cmatrix;

      NanReturnValue(instance);
    } else if (CVector::is_cvector(args[0])) {
      const CVector* const& rhs_obj =
          node::ObjectWrap::Unwrap<CVector>(args[0]->ToObject());
      const typename CVector::value_type& rhs_cvector = **rhs_obj;

      v8::Local<v8::Object> instance = CVector::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CVector* new_obj = node::ObjectWrap::Unwrap<CVector>(instance);
      typename CVector::value_type& new_cvector = **new_obj;

      new_cvector = complex * rhs_cvector;

      NanReturnValue(instance);
    } else if (CRowVector::is_crowvector(args[0])) {
      const CRowVector* const& rhs_obj =
          node::ObjectWrap::Unwrap<CRowVector>(args[0]->ToObject());
      const typename CRowVector::value_type& rhs_crowvector = **rhs_obj;

      v8::Local<v8::Object> instance = CRowVector::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CRowVector* new_obj = node::ObjectWrap::Unwrap<CRowVector>(instance);
      typename CRowVector::value_type& new_crowvector = **new_obj;

      new_crowvector = complex * rhs_crowvector;

      NanReturnValue(instance);
    } else if (CMatrixBlock::is_cmatrixblock(args[0])) {
      const CMatrixBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<CMatrixBlock>(args[0]->ToObject());
      const typename CMatrixBlock::value_type& rhs_cmatrixblock = **rhs_obj;

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = complex * rhs_cmatrixblock;

      NanReturnValue(instance);
    } else if (CVectorBlock::is_cvectorblock(args[0])) {
      const CVectorBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<CVectorBlock>(args[0]->ToObject());
      const typename CVectorBlock::value_type& rhs_cvectorblock = **rhs_obj;

      v8::Local<v8::Object> instance = CVector::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CVector* new_obj = node::ObjectWrap::Unwrap<CVector>(instance);
      typename CVector::value_type& new_cvector = **new_obj;

      new_cvector = complex * rhs_cvectorblock;

      NanReturnValue(instance);
    } else if (CRowVectorBlock::is_crowvectorblock(args[0])) {
      const CRowVectorBlock* const& rhs_obj =
          node::ObjectWrap::Unwrap<CRowVectorBlock>(args[0]->ToObject());
      const typename CRowVectorBlock::value_type& rhs_crowvectorblock =
          **rhs_obj;

      v8::Local<v8::Object> instance = CRowVector::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CRowVector* new_obj = node::ObjectWrap::Unwrap<CRowVector>(instance);
      typename CRowVector::value_type& new_crowvector = **new_obj;

      new_crowvector = complex * rhs_crowvectorblock;

      NanReturnValue(instance);
    } else {
      typename Complex::value_type c;

      if (Complex::is_complex(args[0])) {
        new (&c) typename Complex::value_type(
          **node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject())
        );
      }  else if (Complex::is_scalar(args[0])) {
        new (&c) typename Complex::value_type
          (args[0]->NumberValue(), 0);
      } else if (true) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      const typename Complex::value_type&& result = complex * c;

      v8::Local<v8::Value> argv[] = {
        NanNew<v8::Number>(result.real())
      , NanNew<v8::Number>(result.imag())
      };

      NanReturnValue(
        Complex::new_instance(
          args
        , sizeof(argv) / sizeof(v8::Local<v8::Value>)
        , argv
        )
      );
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_INSTANCE_METHOD_MUL_HPP
