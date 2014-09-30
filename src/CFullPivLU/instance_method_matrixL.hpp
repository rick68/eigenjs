//
// CFullPivLU/instance_method_matrixL.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CFULLPIVLU_INSTANCE_METHOD_MATRIXL_HPP
#define EIGENJS_CFULLPIVLU_INSTANCE_METHOD_MATRIXL_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CFullPivLU, matrixL,
{
  const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
  const typename T::value_type& value = **obj;
  const typename T::value_type::Index& rows = value.rows();
  const typename T::value_type::Index& cols = value.cols();

  NanScope();

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

  new_cmatrix = CMatrix::value_type::Identity(rows, rows);

  if (rows == cols) {
    new_cmatrix.template triangularView<Eigen::StrictlyLower>() =
        value.matrixLU();
  } else if (rows > cols) {
    new_cmatrix.block(0, 0, rows, cols).template
        triangularView<Eigen::StrictlyLower>() = value.matrixLU();
  } else {
    new_cmatrix.template triangularView<Eigen::StrictlyLower>() =
        value.matrixLU().block(0, 0, rows, rows);
  }

  NanReturnValue(instance);
})

}  // namespace EigenJS

#endif  // EIGENJS_CFULLPIVLU_INSTANCE_METHOD_MATRIXL_HPP
