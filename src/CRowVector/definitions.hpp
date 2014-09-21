//
// CRowVector/definitions.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CROWVECTOR_DEFINITIONS_HPP
#define EIGENJS_CROWVECTOR_DEFINITIONS_HPP

#include "../CRowVector_fwd.hpp"

#include "instance_method_set.hpp"
#include "instance_method_get.hpp"

#include "instance_method_block.hpp"
#include "instance_method_row.hpp"
#include "instance_method_col.hpp"
#include "instance_method_topRows.hpp"
#include "instance_method_bottomRows.hpp"
#include "instance_method_middleRows.hpp"
#include "instance_method_leftCols.hpp"
#include "instance_method_rightCols.hpp"
#include "instance_method_middleCols.hpp"
#include "instance_method_topLeftCorner.hpp"
#include "instance_method_topRightCorner.hpp"

#include "instance_method_mula.hpp"

#include "instance_method_dot.hpp"
#include "instance_method_asDiagonal.hpp"

#include "instance_method_normalize.hpp"

#include "class_method_Constant.hpp"

namespace EigenJS {

EIGENJS_OBJECT_DEFINITIONS(
  CRowVector
, (instance_method_set)
  (instance_method_get)

  (instance_method_block)
  (instance_method_row)
  (instance_method_col)
  (instance_method_topRows)
  (instance_method_bottomRows)
  (instance_method_middleRows)
  (instance_method_leftCols)
  (instance_method_rightCols)
  (instance_method_middleCols)
  (instance_method_topLeftCorner)
  (instance_method_topRightCorner)

  (instance_method_mula)

  (instance_method_dot)
  (instance_method_asDiagonal)

  (instance_method_normalize)

  (class_method_Constant)
);

}  // namespace EigenJS

#endif  // EIGENJS_CROWVECTOR_DEFINITIONS_HPP
