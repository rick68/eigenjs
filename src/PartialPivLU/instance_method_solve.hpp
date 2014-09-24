//
// PartialPivLU/instance_method_solve.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_PARTIALPIVLU_INSTANCE_METHOD_SOLVE_HPP
#define EIGENJS_PARTIALPIVLU_INSTANCE_METHOD_SOLVE_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(PartialPivLU, solve,
{
  NanScope();

  if (args.Length() == 1) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;

    if (Matrix::is_matrix(args[0])) {
      const Matrix* const& rhs_obj =
        node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
      const typename Matrix::value_type& rhs_matrix = **rhs_obj;

      if (value.cols() != rhs_matrix.rows()) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      v8::Local<v8::Value> argv[] = {
        NanNew<v8::Integer>(0)  /* rows */
      , NanNew<v8::Integer>(0)  /* cols */
      };

      v8::Local<v8::Object> instance = Matrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      Matrix* new_obj = node::ObjectWrap::Unwrap<Matrix>(instance);
      typename Matrix::value_type& new_matrix = **new_obj;

      new_matrix = value.solve(rhs_matrix);

      NanReturnValue(instance);
    } else if (Vector::is_vector(args[0])) {
      const Vector* const& rhs_obj =
        node::ObjectWrap::Unwrap<Vector>(args[0]->ToObject());
      const typename Vector::value_type& rhs_vector = **rhs_obj;

      if (value.cols() != rhs_vector.rows()) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      v8::Local<v8::Value> argv[] = {
        NanNew<v8::Integer>(rhs_vector.rows())  /* rows */
      };

      v8::Local<v8::Object> instance = Vector::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      Vector* new_obj = node::ObjectWrap::Unwrap<Vector>(instance);
      typename Vector::value_type& new_vector = **new_obj;

      new_vector = value.solve(rhs_vector);

      NanReturnValue(instance);
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_PARTIALPIVLU_INSTANCE_METHOD_SOLVE_HPP
