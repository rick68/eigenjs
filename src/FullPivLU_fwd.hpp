//
// FullPivLU_fwd.cpp
// ~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_FULLPIVLU_FWD_HPP
#define EIGENJS_FULLPIVLU_FWD_HPP

#include <boost/config.hpp>

#include <eigen3/Eigen/Dense>

namespace EigenJS {

BOOST_CONSTEXPR char full_pivoting_lu_class_name[] = "FullPivLU";

template <
  typename ScalarType = double
, typename ValueType = Eigen::FullPivLU<
    Eigen::Matrix<
      ScalarType
    , Eigen::Dynamic
    , Eigen::Dynamic
    >
  >
, const char* ClassName = full_pivoting_lu_class_name
> class FullPivLU;

}  // namespace EigenJS

#endif  // EIGENJS_FULLPIVLU_FWD_HPP
