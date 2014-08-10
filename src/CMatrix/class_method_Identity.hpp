//
// CMatrix/class_method_Identity.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_CLASS_METHOD_IDENTITY_HPP
#define EIGENJS_CMATRIX_CLASS_METHOD_IDENTITY_HPP

namespace EigenJS {

EIGENJS_CLASS_METHOD(CMatrix, Identity,
{
  const int& args_length = args.Length();
  typename CMatrix::cmatrix_type::Index nbRows = 0;
  typename CMatrix::cmatrix_type::Index nbCols = 0;

  NanScope();

  if (args_length == 1 || args_length == 2) {
    nbRows = CMatrix::is_scalar(args[0]) ? args[0]->Uint32Value() : 0;
    nbCols = args_length == 2 && CMatrix::is_scalar(args[1])
        ? args[1]->Uint32Value() : nbRows;

    v8::Local<v8::Value> argv[] = {
      NanNew<v8::Number>(0)
    , NanNew<v8::Number>(0)
    };

    v8::Local<v8::Object> instance = CMatrix::new_instance(
      args
    , sizeof(argv) / sizeof(v8::Local<v8::Value>)
    , argv
    );

    CMatrix* new_obj = node::ObjectWrap::Unwrap<CMatrix>(instance);
    typename CMatrix::cmatrix_type& new_cmatrix = **new_obj;

    new_cmatrix =
        CMatrix::cmatrix_type::Identity(nbRows, nbCols);

    NanReturnValue(instance);
  }

  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_CLASS_METHOD_IDENTITY_HPP
