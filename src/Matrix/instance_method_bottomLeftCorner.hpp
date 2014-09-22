//
// Matrix/instance_method_bottomLeftCorner.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_BOTTOMLEFTCORNER_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_BOTTOMLEFTCORNER_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, bottomLeftCorner,
{
  NanScope();

  if (args.Length() == 2) {
    if (args[0]->IsNumber() && args[1]->IsNumber()) {
      const T* obj = node::ObjectWrap::Unwrap<T>(args.This());
      const typename T::value_type& value = **obj;
      const typename T::value_type::Index& cRows = args[0]->Int32Value();
      const typename T::value_type::Index& cCols = args[1]->Int32Value();

      if (cRows <= 0 || cRows > value.rows() ||
          cCols <= 0 || cCols > value.cols()
      ) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      v8::Local<v8::Value> argv[] = {
          args.This()
        , NanNew<v8::Integer>(value.rows() - cRows)  /* startRow */
        , NanNew<v8::Integer>(0)                     /* startCol */
        , NanNew<v8::Integer>(cRows)                 /* blockRows */
        , NanNew<v8::Integer>(cCols)                 /* blockCols */
      };

      NanReturnValue(
        MatrixBlock::new_instance(
          args
        , sizeof(argv) / sizeof(v8::Local<v8::Value>)
        , argv
        )
      );
    }
  }

  EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
  NanReturnUndefined();
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_BOTTOMLEFTCORNER_HPP
