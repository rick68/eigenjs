//
// Block/instance_method_toString.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_BLOCK_INSTANCE_METHOD_TOSTRING_HPP
#define EIGENJS_BLOCK_INSTANCE_METHOD_TOSTRING_HPP

#include <sstream>

#include "../common_macro.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Block, toString,
{
  EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_TOSTRING_CONTEXT()
})

}  // namespace EigenJS

#endif  // EIGENJS_BLOCK_INSTANCE_METHOD_TOSTRING_HPP
