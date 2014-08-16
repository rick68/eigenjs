//
// CMatrix/instance_method_set.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_SET_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_SET_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, set,
{
  typedef typename CMatrix::Complex Complex;

  CMatrix* obj = node::ObjectWrap::Unwrap<CMatrix>(args.This());
  typename CMatrix::value_type& cmatrix = **obj;

  NanScope();

  switch(args.Length()) {
    case 1:
      if (args[0]->IsArray()) {
        const v8::Local<v8::Array>& array = args[0].As<v8::Array>();
        uint32_t len = array->Length();
        const typename CMatrix::value_type::Index& rows = cmatrix.rows();
        const typename CMatrix::value_type::Index& cols = cmatrix.cols();
        const typename CMatrix::value_type::Index& elems = rows * cols;

        if (len != elems) {
          len < rows * cols
            ? NanThrowError("Too few coefficients")
            : NanThrowError("Too many coefficients");
          NanReturnUndefined();
        }

        for (uint32_t i = 0; i < len; ++i) {
          v8::Local<v8::Value> elem = array->Get(i);

          if (elem->IsNumber()) {
            cmatrix(i / cols, i % cols) = elem->NumberValue();
          } else if (Complex::is_complex(elem->ToObject())) {
            const Complex* const& rhs_obj =
                node::ObjectWrap::Unwrap<Complex>(elem->ToObject());
            const typename Complex::value_type complex = **rhs_obj;

            cmatrix(i / cols, i % cols) = complex;
          }
        }
      }
      break;

    case 3:
      if (args[0]->IsNumber() && args[1]->IsNumber()) {
        const typename CMatrix::value_type::Index& row =
            args[0]->Int32Value();
        const typename CMatrix::value_type::Index& col =
            args[1]->Int32Value();

        if (CMatrix::is_complex(args[2]->ToObject())) {
          const Complex* const& rhs_obj =
              node::ObjectWrap::Unwrap<Complex>(args[2]->ToObject());
          const typename Complex::value_type complex = **rhs_obj;

          cmatrix(row, col) = complex;

        } else if (CMatrix::is_scalar(args[2])) {
          const typename CMatrix::scalar_type& value = args[2]->NumberValue();

          if (CMatrix::is_out_of_range(cmatrix, row, col)) {
            NanReturnUndefined();
          }

          cmatrix(row, col) = value;
        }
      }
      break;

    default:
      EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
      NanReturnUndefined();
      break;
  }

  NanReturnValue(args.This());
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_SET_HPP
