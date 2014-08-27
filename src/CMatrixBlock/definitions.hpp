//
// CMatrixBlock/definitions.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIXBLOCK_DEFINITIONS_HPP
#define EIGENJS_CMATRIXBLOCK_DEFINITIONS_HPP

#include "../CMatrixBlock_fwd.hpp"

#include "instance_method_assign.hpp"
#include "instance_method_mula.hpp"

namespace EigenJS {

EIGENJS_OBJECT_DEFINITIONS(
  CMatrixBlock
, (instance_method_assign)
);

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIXBLOCK_DEFINITIONS_HPP
