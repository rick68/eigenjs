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

#include <eigen3/Eigen/Dense>

#include <type_traits>

namespace EigenJS {
namespace detail {

template <typename EigenMatrix>
struct is_eigen_matrix : std::false_type
{};

template<
  typename _Scalar
, int _Rows
, int _Cols
, int _Options
, int _MaxRows
, int _MaxCols
>
struct is_eigen_matrix<
  Eigen::Matrix<
    _Scalar
  , _Rows
  , _Cols
  , _Options
  , _MaxRows
  , _MaxCols
  >
>
  : std::true_type
{};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_IS_EIGEN_MATRIX_HPP
