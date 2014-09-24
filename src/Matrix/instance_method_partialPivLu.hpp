//
// Matrix/instance_method_partialPivLu.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_PARTIALPIVLU_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_PARTIALPIVLU_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, partialPivLu,
{
  NanScope();

  v8::Local<v8::Value> argv[] = {
    args.This()
  };

  NanReturnValue(
    PartialPivLU::new_instance(
      args
    , sizeof(argv) / sizeof(v8::Local<v8::Value>)
    , argv
    )
  );
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_PARTIALPIVLU_HPP
