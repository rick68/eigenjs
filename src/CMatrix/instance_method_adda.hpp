//
// CMatrix/instance_method_adda.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_ADDA_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_ADDA_HPP

#include "macro.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, adda,
{
  EIGENJS_CMATRIX_BINARY_OPERATOR_COMMUTATIVE_CONTEXT(+)
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_ADDA_HPP
