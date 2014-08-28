//
// CRowVector/instance_method_block.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CROWVECTOR_INSTANCE_METHOD_BLOCK_HPP
#define EIGENJS_CROWVECTOR_INSTANCE_METHOD_BLOCK_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CRowVector, block,
{
  NanScope();

  if (args.Length() == 2) {
    if (args[0]->IsNumber() /* startCol */ &&
        args[1]->IsNumber() /* blockCols */
    ) {
      v8::Local<v8::Value> argv[] = {
          args.This(), args[0], args[1] };

      NanReturnValue(
        CRowVectorBlock::new_instance(
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

#endif  // EIGENJS_CROWVECTOR_INSTANCE_METHOD_BLOCK_HPP
