//
// PartialPivLU_fwd.cpp
// ~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_PARTIALPIVLU_FWD_HPP
#define EIGENJS_PARTIALPIVLU_FWD_HPP

#include <boost/config.hpp>

#include <eigen3/Eigen/Dense>

namespace EigenJS {

BOOST_CONSTEXPR char partial_pivoting_lu_class_name[] = "PartialPivLU";

template <
  typename ScalarType = double
, typename ValueType = Eigen::PartialPivLU<
    Eigen::Matrix<
      ScalarType
    , Eigen::Dynamic
    , Eigen::Dynamic
    >
  >
, const char* ClassName = partial_pivoting_lu_class_name
> class PartialPivLU;

}  // namespace EigenJS

#endif  // EIGENJS_PARTIALPIVLU_FWD_HPP
