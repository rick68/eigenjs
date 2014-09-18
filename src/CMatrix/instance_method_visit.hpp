//
// CMatrix/instance_method_visit.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_VISIT_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_VISIT_HPP

#include "../detail/visitor_from_js.hpp"

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, visit,
{
  EIGENJS_COMMON_MATRIX_INSTANCE_METHOD_VISIT_CONTEXT()
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_VISIT_HPP
