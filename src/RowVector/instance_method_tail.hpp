//
// RowVector/instance_method_tail.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_ROWVECTOR_INSTANCE_METHOD_TAIL_HPP
#define EIGENJS_ROWVECTOR_INSTANCE_METHOD_TAIL_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(RowVector, tail,
{
  NanScope();

  if (args.Length() == 1) {
    if (args[0]->IsNumber()) {
      const T* obj = node::ObjectWrap::Unwrap<T>(args.This());
      const typename T::value_type& value = **obj;
      const typename T::value_type::Index& n = args[0]->Int32Value();

      if (n <= 0 || n > value.cols()) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      v8::Local<v8::Value> argv[] = {
          args.This()
        , NanNew<v8::Integer>(value.cols() - n)  /* startCol */
        , NanNew<v8::Integer>(n)                 /* blockCols */
      };

      NanReturnValue(
        RowVectorBlock::new_instance(
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

#endif  // EIGENJS_ROWVECTOR_INSTANCE_METHOD_TAIL_HPP
