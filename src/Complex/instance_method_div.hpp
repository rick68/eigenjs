//
// Complex/instance_method_div.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_INSTANCE_METHOD_DIV_HPP
#define EIGENJS_COMPLEX_INSTANCE_METHOD_DIV_HPP

#include "macro.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Complex, div,
{
  EIGENJS_COMPLEX_BINARY_OPERATOR_CONTEXT(/)
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_INSTANCE_METHOD_DIV_HPP
