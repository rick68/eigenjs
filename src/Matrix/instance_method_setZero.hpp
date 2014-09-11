//
// Matrix/instance_method_setZero.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_SETZERO_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_SETZERO_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, setZero,
{
  EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_SETZERO_CONTEXT()
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_SETZERO_HPP
