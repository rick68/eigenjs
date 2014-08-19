//
// RowVector/instance_method_set.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_ROWVECTOR_INSTANCE_METHOD_SET_HPP
#define EIGENJS_ROWVECTOR_INSTANCE_METHOD_SET_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(RowVector, set,
{
  RowVector* obj = node::ObjectWrap::Unwrap<RowVector>(args.This());
  typename RowVector::value_type& rowvector = **obj;
  const int& args_length = args.Length();

  NanScope();

  if (args_length == 1 && args[0]->IsArray()) {
    const v8::Local<v8::Array>& array = args[0].As<v8::Array>();
    uint32_t len = array->Length();
    const typename RowVector::value_type::Index& cols = rowvector.cols();

    if (len != cols) {
      len < cols
        ? NanThrowError("Too few coefficients")
        : NanThrowError("Too many coefficients");
      NanReturnUndefined();
    }

    for (uint32_t i = 0; i < len; ++i) {
      v8::Local<v8::Value> elem = array->Get(i);
      rowvector(0, i) = elem->NumberValue();
    }
  } else if (args_length == 2 &&
             args[0]->IsNumber() &&
             RowVector::is_scalar(args[1])
  ) {
    const typename RowVector::value_type::Index& col = args[0]->Int32Value();
    const typename RowVector::scalar_type& elem_value = args[1]->NumberValue();

    if (RowVector::is_out_of_range(rowvector, 0, col)) {
      NanReturnUndefined();
    }

    rowvector(0, col) = elem_value;
  } else if (true) {
    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }

  NanReturnValue(args.This());
})

}  // namespace EigenJS

#endif  // EIGENJS_ROWVECTOR_INSTANCE_METHOD_SET_HPP
