//
// FullPivLU/definitions.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_FULLPIVLU_DEFINITIONS_HPP
#define EIGENJS_FULLPIVLU_DEFINITIONS_HPP

#include "../FullPivLU_fwd.hpp"

#include "instance_method_permutationP.hpp"
#include "instance_method_permutationQ.hpp"
#include "instance_method_matrixL.hpp"
#include "instance_method_matrixU.hpp"

#include "instance_method_determinant.hpp"
#include "instance_method_inverse.hpp"
#include "instance_method_solve.hpp"

#include "instance_method_rank.hpp"
#include "instance_method_dimensionOfKernel.hpp"
#include "instance_method_kernel.hpp"

namespace EigenJS {

EIGENJS_OBJECT_DEFINITIONS(
  FullPivLU
, (instance_method_permutationP)
  (instance_method_permutationQ)
  (instance_method_matrixL)
  (instance_method_matrixU)

  (instance_method_determinant)
  (instance_method_inverse)
  (instance_method_solve)

  (instance_method_rank)
  (instance_method_dimensionOfKernel)
  (instance_method_kernel)
);

}  // namespace EigenJS

#endif  // EIGENJS_FULLPIVLU_DEFINITIONS_HPP
