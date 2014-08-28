//
// CRowVectorBlock_fwd.hpp
// ~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CROWVECTORBLOCK_FWD_HPP
#define EIGENJS_CROWVECTORBLOCK_FWD_HPP

#include <boost/config.hpp>

#include <eigen3/Eigen/Dense>

#include <complex>

namespace EigenJS {

BOOST_CONSTEXPR char crowvectorblock_class_name[] = "CRowVectorBlock";

template <
  typename ScalarType = double
, typename ValueType = Eigen::Block<
    Eigen::Matrix<
      std::complex<ScalarType>
    , 1
    , Eigen::Dynamic
    >
  , Eigen::Dynamic
  , Eigen::Dynamic
  >
, const char* ClassName = crowvectorblock_class_name
> class CRowVectorBlock;

}  // namespace EigenJS

#endif  // EIGENJS_CROWVECTORBLOCK_FWD_HPP
