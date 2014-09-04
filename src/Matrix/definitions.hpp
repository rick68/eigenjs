//
// Matrix/definitions.hpp
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

#include "../Matrix_fwd.hpp"

#include "instance_method_toString.hpp"

#include "instance_method_rows.hpp"
#include "instance_method_cols.hpp"

#include "instance_method_set.hpp"
#include "instance_method_get.hpp"

#include "instance_method_assign.hpp"
#include "instance_method_block.hpp"

#include "instance_method_add.hpp"
#include "instance_method_adda.hpp"
#include "instance_method_sub.hpp"
#include "instance_method_suba.hpp"

#include "instance_method_mul.hpp"
#include "instance_method_mula.hpp"

#include "instance_method_div.hpp"
#include "instance_method_diva.hpp"

#include "instance_method_transpose.hpp"
#include "instance_method_conjugate.hpp"
#include "instance_method_adjoint.hpp"
#include "instance_method_determinant.hpp"
#include "instance_method_inverse.hpp"

#include "instance_method_equals.hpp"
#include "instance_method_isApprox.hpp"
#include "instance_method_isSquare.hpp"

#include "class_method_Zero.hpp"
#include "class_method_Identity.hpp"
#include "class_method_Random.hpp"
#include "class_method_Constant.hpp"

namespace EigenJS {

EIGENJS_OBJECT_DEFINITIONS(
  Matrix
, (instance_method_toString)

  (instance_method_rows)
  (instance_method_cols)

  (instance_method_set)
  (instance_method_get)

  (instance_method_assign)
  (instance_method_block)

  (instance_method_add)
  (instance_method_adda)
  (instance_method_sub)
  (instance_method_suba)

  (instance_method_mul)
  (instance_method_mula)

  (instance_method_div)
  (instance_method_diva)

  (instance_method_transpose)
  (instance_method_conjugate)
  (instance_method_adjoint)
  (instance_method_determinant)
  (instance_method_inverse)

  (instance_method_equals)
  (instance_method_isApprox)
  (instance_method_isSquare)

  (class_method_Zero)
  (class_method_Identity)
  (class_method_Random)
  (class_method_Constant)
);

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_DEFINITIONS_HPP
