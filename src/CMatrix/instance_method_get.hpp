//
// CMatrix/instance_method_get.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_GET_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_GET_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, get,
{
  NanScope();

  if (args.Length() == 2 &&
      args[0]->IsNumber() &&
      args[1]->IsNumber()
  ) {
    const CMatrix* const& obj = node::ObjectWrap::Unwrap<CMatrix>(args.This());
    const typename CMatrix::value_type& cmatrix = **obj;
    const typename CMatrix::value_type::Index& row = args[0]->Int32Value();
    const typename CMatrix::value_type::Index& col = args[1]->Int32Value();

    if (CMatrix::is_out_of_range(cmatrix, row, col)) {
      NanReturnUndefined();
    }

    const typename Complex::value_type& c = cmatrix(row, col);

    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Number>(c.real())
    , NanNew<v8::Number>(c.imag())
    };

    NanReturnValue(
      Complex::new_instance(
        args
      , sizeof( argv ) / sizeof( v8::Local<v8::Value> )
      , argv
      )
    );
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_GET_HPP
