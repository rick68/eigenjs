//
// CMatrix/definitions.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_DEFINITIONS_HPP
#define EIGENJS_CMATRIX_DEFINITIONS_HPP

#include "../CMatrix_fwd.hpp"

#include "instance_method_toString.hpp"

#include "instance_method_rows.hpp"
#include "instance_method_cols.hpp"

#include "instance_method_set.hpp"
#include "instance_method_get.hpp"

#include "instance_method_add.hpp"
#include "instance_method_adda.hpp"
#include "instance_method_sub.hpp"
#include "instance_method_suba.hpp"

#include "instance_method_mul.hpp"
#include "instance_method_mula.hpp"

#include "instance_method_div.hpp"
#include "instance_method_diva.hpp"

#include "instance_method_equals.hpp"
#include "instance_method_isApprox.hpp"

#include "class_method_Identity.hpp"
#include "class_method_Zero.hpp"

namespace EigenJS {

EIGENJS_OBJECT_DEFINITIONS(
  CMatrix
, (instance_method_toString)

  (instance_method_rows)
  (instance_method_cols)

  (instance_method_set)
  (instance_method_get)

  (instance_method_add)
  (instance_method_adda)
  (instance_method_sub)
  (instance_method_suba)

  (instance_method_mul)
  (instance_method_mula)

  (instance_method_div)
  (instance_method_diva)

  (instance_method_equals)
  (instance_method_isApprox)

  (class_method_Identity)
  (class_method_Zero)
);

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_DEFINITIONS_HPP
