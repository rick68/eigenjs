//
// Matrix/instance_method_rows.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_INSTANCE_METHOD_ROWS_HPP
#define EIGENJS_MATRIX_INSTANCE_METHOD_ROWS_HPP

#include "../common_macro.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Matrix, rows,
{
  EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_ROWS_CONTEXT()
})

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_INSTANCE_METHOD_ROWS_HPP
