//
// CVector/instance_method_middleCols.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CVECTOR_INSTANCE_METHOD_MIDDLECOLS_HPP
#define EIGENJS_CVECTOR_INSTANCE_METHOD_MIDDLECOLS_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CVector, middleCols,
{
  NanScope();

  if (args.Length() == 2) {
    if (args[0]->IsNumber() && args[1]->IsNumber()) {
      const T* obj = node::ObjectWrap::Unwrap<T>(args.This());
      const typename T::value_type& value = **obj;
      const typename T::value_type::Index& startCol = args[0]->Int32Value();
      const typename T::value_type::Index& n = args[1]->Int32Value();

      const typename T::value_type::Index& cols = value.cols();

      if (startCol < 0 || startCol >= cols || n <= 0 || n > cols) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      v8::Local<v8::Value> argv[] = {
          args.This()
        , NanNew<v8::Integer>(0)             /* startRow */
        , NanNew<v8::Integer>(value.rows())  /* blockRows */
      };

      NanReturnValue(
        CVectorBlock::new_instance(
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

#endif  // EIGENJS_CVECTOR_INSTANCE_METHOD_MIDDLECOLS_HPP
