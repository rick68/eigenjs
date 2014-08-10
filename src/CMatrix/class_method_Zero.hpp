//
// CMatrix/class_method_Zero.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_CLASS_METHOD_ZERO_HPP
#define EIGENJS_CMATRIX_CLASS_METHOD_ZERO_HPP

namespace EigenJS {

EIGENJS_CLASS_METHOD(CMatrix, Zero,
{
  const int& args_length = args.Length();

  NanScope();

  if (args_length == 2 &&
      CMatrix::is_scalar(args[0]) &&
      CMatrix::is_scalar(args[1])
  ) {
    const typename CMatrix::matrix_type::Index& nbRows = args[0]->Uint32Value();
    const typename CMatrix::matrix_type::Index& nbCols = args[1]->Uint32Value();

    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Number>(nbRows)
    , NanNew<v8::Number>(nbCols)
    };

    v8::Local<v8::Object> instance = CMatrix::new_instance(
      args
    , sizeof(argv) / sizeof(v8::Local<v8::Value>)
    , argv
    );

    CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
    typename CMatrix::cmatrix_type& new_cmatrix = **new_obj;

    new_cmatrix = CMatrix::cmatrix_type::Zero(nbRows, nbCols);

    NanReturnValue(instance);
  }

  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_CLASS_METHOD_ZERO_HPP
