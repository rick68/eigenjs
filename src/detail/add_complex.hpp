//
// detail/add_complex.hpp
// ~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_ADD_COMPLEX_HPP
#define EIGENJS_DETAIL_ADD_COMPLEX_HPP

#include <v8.h>

#include <boost/mpl/has_xxx.hpp>

#include <eigen3/Eigen/Dense>

#include <complex>
#include <type_traits>

#include "is_eigen_matrix.hpp"

namespace EigenJS {
namespace detail {

BOOST_MPL_HAS_XXX_TRAIT_DEF(scalar_type)
BOOST_MPL_HAS_XXX_TRAIT_DEF(value_type)

template <
  typename T
, bool HasScalarType = has_scalar_type<T>::value
, bool HasValueType = has_value_type<T>::value
>
struct add_complex {
  typedef T type;
};

template <typename T>
struct add_complex<T, true, true> {
  typedef typename std::conditional<
      is_eigen_matrix<typename T::value_type>::value
    , typename T::template rebind<typename T::scalar_type,
        Eigen::Matrix<
          std::complex<typename T::scalar_type>
        , Eigen::internal::traits<typename T::value_type>::RowsAtCompileTime
        , Eigen::internal::traits<typename T::value_type>::ColsAtCompileTime
        >
      >::other
    , T
    >::type type;
};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_ADD_COMPLEX_HPP
