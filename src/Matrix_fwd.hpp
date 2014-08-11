//
// Matrix_fwd.cpp
// ~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIX_FWD_HPP
#define EIGENJS_MATRIX_FWD_HPP

#include <boost/config.hpp>

#include <eigen3/Eigen/Dense>

namespace EigenJS {

BOOST_CONSTEXPR char matrix_class_name[] = "Matrix";

template <
  typename ScalarType = double
, typename ValueType = Eigen::Matrix<
    ScalarType
  , Eigen::Dynamic
  , Eigen::Dynamic
  >
, const char* ClassName = matrix_class_name
> class Matrix;

}  // namespace EigenJS

#endif  // EIGENJS_MATRIX_FWD_HPP
