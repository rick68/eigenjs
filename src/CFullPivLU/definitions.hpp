//
// CFullPivLU/definitions.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CFULLPIVLU_DEFINITIONS_HPP
#define EIGENJS_CFULLPIVLU_DEFINITIONS_HPP

#include "../CFullPivLU_fwd.hpp"

#include "instance_method_permutationP.hpp"

namespace EigenJS {

EIGENJS_OBJECT_DEFINITIONS(
  CFullPivLU
, (instance_method_permutationP)
);

}  // namespace EigenJS

#endif  // EIGENJS_CFULLPIVLU_DEFINITIONS_HPP
