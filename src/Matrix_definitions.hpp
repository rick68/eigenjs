//
// Matrix_definitions.hpp
// ~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_DEFINITIONS_HPP
#define EIGENJS_MATRIX_DEFINITIONS_HPP

#include "definition.hpp"
#include "Matrix_fwd.hpp"

#include "Matrix_instance_method_rows.hpp"
#include "Matrix_instance_method_cols.hpp"

#include "Matrix_instance_method_set.hpp"
#include "Matrix_instance_method_get.hpp"

#include "Matrix_instance_method_add.hpp"
#include "Matrix_instance_method_adda.hpp"
#include "Matrix_instance_method_sub.hpp"
#include "Matrix_instance_method_suba.hpp"

#include "Matrix_instance_method_mul.hpp"
#include "Matrix_instance_method_mula.hpp"

#include "Matrix_instance_method_div.hpp"
#include "Matrix_instance_method_diva.hpp"

#include "Matrix_instance_method_equals.hpp"
#include "Matrix_instance_method_isApprox.hpp"

#include "Matrix_instance_method_toString.hpp"

namespace EigenJS {

EIGENJS_OBJECT_DEFINITIONS(
  Matrix
, (Matrix_instance_method_rows)
  (Matrix_instance_method_cols)

  (Matrix_instance_method_set)
  (Matrix_instance_method_get)

  (Matrix_instance_method_add)
  (Matrix_instance_method_adda)
  (Matrix_instance_method_sub)
  (Matrix_instance_method_suba)

  (Matrix_instance_method_mul)
  (Matrix_instance_method_mula)

  (Matrix_instance_method_div)
  (Matrix_instance_method_diva)

  (Matrix_instance_method_equals)
  (Matrix_instance_method_isApprox)

  (Matrix_instance_method_toString)
);

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_DEFINITIONS_HPP
