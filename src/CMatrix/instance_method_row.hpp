//
// CMatrix/instance_method_row.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_ROW_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_ROW_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, row,
{
  NanScope();

  if (args.Length() == 1 && args[0]->IsNumber()) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;
    const typename T::value_type::Index& n = args[0]->Int32Value();

    if (T::is_out_of_range(value, n, 0)) {
      NanReturnUndefined();
    }

    v8::Local<v8::Value> argv[] = {
        args.This()
      , args[0]                            // startRow
      , NanNew<v8::Integer>(0)             // startCol
      , NanNew<v8::Integer>(1)             // blockRows
      , NanNew<v8::Integer>(value.cols())  // blockCols
      };

    NanReturnValue(
      CMatrixBlock::new_instance(
        args
      , sizeof(argv) / sizeof(v8::Local<v8::Value>)
      , argv
      )
    );
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_ROW_HPP
