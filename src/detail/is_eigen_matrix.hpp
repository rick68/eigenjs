//
// detail/is_eigen_matrix.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_IS_EIGEN_MATRIX_HPP
#define EIGENJS_DETAIL_IS_EIGEN_MATRIX_HPP

#include <boost/mpl/bool.hpp>

#include <eigen3/Eigen/Dense>

#include <type_traits>

namespace EigenJS {
namespace detail {

template <typename EigenMatrix>
struct is_eigen_matrix
  : boost::mpl::bool_<
      std::is_same<
        EigenMatrix
      , Eigen::Matrix<
          typename Eigen::internal::traits<EigenMatrix>::Scalar
        , Eigen::internal::traits<EigenMatrix>::RowsAtCompileTime
        , Eigen::internal::traits<EigenMatrix>::ColsAtCompileTime
        >
      >::value
    >
{};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_IS_EIGEN_MATRIX_HPP
