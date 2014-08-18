//
// CVector/instance_method_set.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CVECTOR_INSTANCE_METHOD_SET_HPP
#define EIGENJS_CVECTOR_INSTANCE_METHOD_SET_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CVector, set,
{
  CVector* obj = node::ObjectWrap::Unwrap<CVector>(args.This());
  typename CVector::value_type& value = **obj;
  const int& args_length = args.Length();

  NanScope();

  if (args_length == 1 && args[0]->IsArray()) {
    const v8::Local<v8::Array>& array = args[0].As<v8::Array>();
    uint32_t len = array->Length();
    const typename CVector::value_type::Index& rows = value.rows();

    if (len != rows) {
      len < rows
        ? NanThrowError("Too few coefficients")
        : NanThrowError("Too many coefficients");
      NanReturnUndefined();
    }

    for (uint32_t i = 0; i < len; ++i) {
      v8::Local<v8::Value> elem = array->Get(i);
      if (CVector::is_scalar(elem)) {
        value(i, 0) = elem->NumberValue();
      } else if (Complex::is_complex(elem->ToObject())) {
        const Complex* const& rhs_obj =
            node::ObjectWrap::Unwrap<Complex>(elem->ToObject());
        const typename Complex::value_type& elem_value = **rhs_obj;
        value(i, 0) = elem_value;
      }
    }
  } else if (args_length == 2 && args[0]->IsNumber()) {
    const typename CVector::value_type::Index& row = args[0]->Int32Value();

    if (CVector::is_out_of_range(value, row, 0)) {
      NanReturnUndefined();
    }

    if (CVector::is_scalar(args[1])) {
      const typename CVector::scalar_type& new_real = args[1]->NumberValue();
      value(row, 0) = typename Complex::value_type(new_real, 0);
    } else if (Complex::is_complex(args[1])) {
      const Complex* const& rhs_obj =
          node::ObjectWrap::Unwrap<Complex>(args[1]->ToObject());
      const typename Complex::value_type& rhs_value = **rhs_obj;
      value(row, 0) = rhs_value;
    }
  } else if (true) {
    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }

  NanReturnValue(args.This());
})

}  // namespace EigenJS

#endif  // EIGENJS_CVECTOR_INSTANCE_METHOD_SET_HPP
