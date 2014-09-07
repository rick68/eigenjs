//
// Matrix/instance_method_col.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_COL_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_COL_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, col,
{
  NanScope();

  if (args.Length() == 1 && args[0]->IsNumber()) {
    const T* const& obj = node::ObjectWrap::Unwrap<T>(args.This());
    const typename T::value_type& value = **obj;
    const typename T::value_type::Index& n = args[0]->Int32Value();

    if (T::is_out_of_range(value, 0, n)) {
      NanReturnUndefined();
    }

    v8::Local<v8::Value> argv[] = {
        args.This()
      , NanNew<v8::Integer>(0)             // startRow
      , args[0]                            // startCol
      , NanNew<v8::Integer>(value.rows())  // blockRows
      , NanNew<v8::Integer>(1)             // blockCols
      };

    NanReturnValue(
      MatrixBlock::new_instance(
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

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_COL_HPP
