//
// VectorBlock_fwd.hpp
// ~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_VECTORBLOCK_FWD_HPP
#define EIGENJS_VECTORBLOCK_FWD_HPP

#include <boost/config.hpp>

#include <eigen3/Eigen/Dense>

namespace EigenJS {

BOOST_CONSTEXPR char vectorblock_class_name[] = "VectorBlock";

template <
  typename ScalarType = double
, typename ValueType = Eigen::Block<
    Eigen::Matrix<
      ScalarType
    , Eigen::Dynamic
    , 1
    >
  , Eigen::Dynamic
  , Eigen::Dynamic
  >
, const char* ClassName = vectorblock_class_name
> class VectorBlock;

}  // namespace EigenJS

#endif  // EIGENJS_VECTORBLOCK_FWD_HPP
