//
// CMatrix/instance_method_mean.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_INSTANCE_METHOD_MEAN_HPP
#define EIGENJS_CMATRIX_INSTANCE_METHOD_MEAN_HPP

namespace EigenJS {

EIGENJS_INSTANCE_METHOD(CMatrix, mean,
{
  EIGENJS_CMATRIX_OPERATE_ALL_COEFFICIENTS_CONTEXT(mean)
})

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_INSTANCE_METHOD_MEAN_HPP
