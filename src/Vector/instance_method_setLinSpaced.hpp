//
// Vector/instance_method_setLinSpaced.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_VECTOR_INSTANCE_METHOD_SETLINSPACED_HPP
#define EIGENJS_VECTOR_INSTANCE_METHOD_SETLINSPACED_HPP

#include "../common_macro.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Vector, setLinSpaced,
{
  EIGENJS_COMMON_VECTOR_INSTANCE_METHOD_SETLINSPACED_CONTEXT()
})

}  // namespace EigenJS

#endif  // EIGENJS_VECTOR_INSTANCE_METHOD_SETLINSPACED_HPP
