//
// detail/unwrap_eigen_block.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_UNWRAP_EIGEN_BLOCK_HPP
#define EIGENJS_DETAIL_UNWRAP_EIGEN_BLOCK_HPP

#include <eigen3/Eigen/Core>

#include <type_traits>

namespace EigenJS {
namespace detail {

template <typename T>
struct unwrap_eigen_block {
  typedef T type;
};

template<typename XprType, int BlockRows, int BlockCols, bool InnerPanel>
struct unwrap_eigen_block<
  Eigen::Block<XprType, BlockRows, BlockCols, InnerPanel>
> {
  typedef XprType type;
};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_UNWRAP_EIGEN_BLOCK_HPP
