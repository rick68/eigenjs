//
// Matrix/instance_method_div.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_DIV_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_DIV_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, div,
{
  typedef typename CMatrix::Complex Complex;

  NanScope();

  if (args.Length() == 1) {
    const CMatrix* const& obj = node::ObjectWrap::Unwrap<CMatrix>(args.This());
    const typename CMatrix::cmatrix_type& cmatrix = **obj;
    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Integer>(cmatrix.rows())
    , NanNew<v8::Integer>(cmatrix.cols())
    };

    if (CMatrix::is_scalar(args[0])) {
      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::cmatrix_type& new_cmatrix = **new_obj;

      new_cmatrix = cmatrix / args[0]->NumberValue();

      NanReturnValue(instance);
    } else if (Complex::is_complex(args[0])) {
      const Complex* const& rhs_obj =
        node::ObjectWrap::Unwrap<Complex>(args[0]->ToObject());
      const typename Complex::complex_type& rhs_complex = **rhs_obj;

      v8::Local<v8::Object> instance = CMatrix::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      );

      CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
      typename CMatrix::cmatrix_type& new_cmatrix = **new_obj;

      new_cmatrix = cmatrix / rhs_complex;

      NanReturnValue(instance);
    }
  }

  EIGENJS_THROW_ERROR_INVAILD_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_DIV_HPP
