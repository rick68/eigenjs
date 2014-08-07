//
// Complex_instance_method_diva.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_COMPLEX_INSTANCE_METHOD_DIVA_HPP
#define EIGENJS_COMPLEX_INSTANCE_METHOD_DIVA_HPP

#include "definition.hpp"
#include "Complex_macro.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Complex, diva,
{
  EIGENJS_COMPLEX_BINARY_OPERATOR_COMMUTATIVE_CONTEXT(/)
})

}  // namespace EigenJS

#endif  // EIGENJS_COMPLEX_INSTANCE_METHOD_DIVA_HPP
