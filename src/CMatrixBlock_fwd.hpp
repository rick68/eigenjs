//
// CMatrixBlock_fwd.hpp
// ~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIXBLOCK_FWD_HPP
#define EIGENJS_CMATRIXBLOCK_FWD_HPP

#include <boost/config.hpp>

#include <eigen3/Eigen/Core>
#include <eigen3/Eigen/Dense>

#include <complex>

namespace EigenJS {

BOOST_CONSTEXPR char cmatrixblock_class_name[] = "CMatrixBlock";

template <
  typename ScalarType = double
, typename ValueType = Eigen::Block<
    Eigen::Matrix<
      std::complex<ScalarType>
    , Eigen::Dynamic
    , Eigen::Dynamic
    >
  , Eigen::Dynamic
  , Eigen::Dynamic
  >
, const char* ClassName = cmatrixblock_class_name
> class CMatrixBlock;

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIXBLOCK_FWD_HPP
