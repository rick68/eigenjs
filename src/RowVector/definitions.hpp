//
// RowVector/definitions.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_ROWVECTOR_DEFINITIONS_HPP
#define EIGENJS_ROWVECTOR_DEFINITIONS_HPP

#include "../RowVector_fwd.hpp"

#include "instance_method_set.hpp"
#include "instance_method_get.hpp"

#include "instance_method_block.hpp"
#include "instance_method_row.hpp"
#include "instance_method_col.hpp"

#include "instance_method_mula.hpp"

#include "instance_method_dot.hpp"
#include "instance_method_asDiagonal.hpp"

#include "class_method_Constant.hpp"

namespace EigenJS {

EIGENJS_OBJECT_DEFINITIONS(
  RowVector
, (instance_method_set)
  (instance_method_get)

  (instance_method_block)
  (instance_method_row)
  (instance_method_col)

  (instance_method_mula)

  (instance_method_dot)
  (instance_method_asDiagonal)

  (class_method_Constant)
);

}  // namespace EigenJS

#endif  // EIGENJS_ROWVECTOR_DEFINITIONS_HPP
