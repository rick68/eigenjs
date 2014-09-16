//
// Vector/instance_method_normalize.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_VECTOR_INSTANCE_METHOD_NORMALIZE_HPP
#define EIGENJS_VECTOR_INSTANCE_METHOD_NORMALIZE_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(Vector, normalize,
{
  EIGENJS_COMMON_VECTOR_INSTANCE_METHOD_NORMALIZE_CONTEXT()
})

}  // namespace EigenJS

#endif  // EIGENJS_VECTOR_INSTANCE_METHOD_NORMALIZE_HPP
