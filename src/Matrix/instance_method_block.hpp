//
// Matrix/instance_method_block.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_BLOCK_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_BLOCK_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, block,
{
  NanScope();

  if (args.Length() == 4) {
    if (args[0]->IsNumber() &&
        args[1]->IsNumber() &&
        args[2]->IsNumber() &&
        args[3]->IsNumber()
    ) {
      // typename Matrix::value_type::Index& startRow = args[0]->Int32Value();
      // typename Matrix::value_type::Index& startCol = args[1]->Int32Value();
      // typename Matrix::value_type::Index& blockRows = args[2]->Int32Value();
      // typename Matrix::value_type::Index& blockCols = args[3]->Int32Value();
      v8::Local<v8::Value> argv[] = {
          args.This(), args[0], args[1], args[2], args[3], args[4] };

      NanReturnValue(
        Block::new_instance(
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

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_BLOCK_HPP
