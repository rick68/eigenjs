//
// Vector/instance_method_set.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_VECTOR_INSTANCE_METHOD_SET_HPP
#define EIGENJS_VECTOR_INSTANCE_METHOD_SET_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Vector, set,
{
  Vector* obj = node::ObjectWrap::Unwrap<Vector>(args.This());
  typename Vector::value_type& vector = **obj;
  const int& args_length = args.Length();

  NanScope();

  if (args_length == 1 && args[0]->IsArray()) {
    const v8::Local<v8::Array>& array = args[0].As<v8::Array>();
    uint32_t len = array->Length();
    const typename Vector::value_type::Index& rows = vector.rows();

    if (len != rows) {
      len < rows
        ? NanThrowError("Too few coefficients")
        : NanThrowError("Too many coefficients");
      NanReturnUndefined();
    }

    for (uint32_t i = 0; i < len; ++i) {
      v8::Local<v8::Value> elem = array->Get(i);
      vector(i, 0) = elem->NumberValue();
    }
  } else if (args_length == 2 &&
             args[0]->IsNumber() &&
             Vector::is_scalar(args[1])
  ) {
    const typename Vector::value_type::Index& row = args[0]->Int32Value();
    const typename Vector::scalar_type& value = args[1]->NumberValue();

    if (Vector::is_out_of_range(vector, row, 0)) {
      NanReturnUndefined();
    }

    vector(row, 0) = value;
  } else if (true) {
    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }

  NanReturnValue(args.This());
})

}  // namespace EigenJS

#endif  // EIGENJS_VECTOR_INSTANCE_METHOD_SET_HPP
