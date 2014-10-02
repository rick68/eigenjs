//
// CFullPivLU/instance_method_solve.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CFULLPIVLU_INSTANCE_METHOD_SOLVE_HPP
#define EIGENJS_CFULLPIVLU_INSTANCE_METHOD_SOLVE_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CFullPivLU, solve,
{
  const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
  const typename T::value_type& value = **obj;

  NanScope();

  if (!T::is_square_matrix(obj)) {
    NanReturnUndefined();
  }

  if (args.Length() == 1) {
    if (CMatrix::is_cmatrix(args[0])) {
      const CMatrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<CMatrix>(args[0]->ToObject());
      const typename CMatrix::value_type& rhs_cmatrix = **rhs_obj;

      if (value.cols() != rhs_cmatrix.rows()) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      v8::Local<v8::Value> argv[] = {
        NanNew<v8::Integer>(0)  /* rows */
      , NanNew<v8::Integer>(0)  /* cols */
      };

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::value_type& new_cmatrix = **new_obj;

      new_cmatrix = value.solve(rhs_cmatrix);

      NanReturnValue(instance);
    } else if (CVector::is_cvector(args[0])) {
      const CVector* const& rhs_obj =
        node::ObjectWrap::Unwrap<CVector>(args[0]->ToObject());
      const typename CVector::value_type& rhs_cvector = **rhs_obj;

      if (value.cols() != rhs_cvector.rows()) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      v8::Local<v8::Value> argv[] = {
        NanNew<v8::Integer>(rhs_cvector.rows())  /* rows */
      };

      v8::Local<v8::Object> instance = CVector::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CVector* new_obj = node::ObjectWrap::Unwrap<CVector>(instance);
      typename CVector::value_type& new_cvector = **new_obj;

      new_cvector = value.solve(rhs_cvector);

      NanReturnValue(instance);
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CFULLPIVLU_INSTANCE_METHOD_SOLVE_HPP
