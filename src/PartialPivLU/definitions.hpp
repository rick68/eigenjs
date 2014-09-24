//
// PartialPivLU/definitions.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_PARTIALPIVLU_DEFINITIONS_HPP
#define EIGENJS_PARTIALPIVLU_DEFINITIONS_HPP

#include "../PartialPivLU_fwd.hpp"

#include "instance_method_permutationP.hpp"
#include "instance_method_matrixL.hpp"
#include "instance_method_matrixU.hpp"

namespace EigenJS {

EIGENJS_OBJECT_DEFINITIONS(
  PartialPivLU
, (instance_method_permutationP)
  (instance_method_matrixL)
  (instance_method_matrixU)
);

}  // namespace EigenJS

#endif  // EIGENJS_PARTIALPIVLU_DEFINITIONS_HPP
