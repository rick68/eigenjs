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
#include "is_eigen_block.hpp"
#include "../Matrix_fwd.hpp"
#include "../CMatrix_fwd.hpp"
#include "../Vector_fwd.hpp"
#include "../CVector_fwd.hpp"
#include "../RowVector_fwd.hpp"
#include "../CRowVector_fwd.hpp"
#include "../MatrixBlock_fwd.hpp"
#include "../CMatrixBlock_fwd.hpp"

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

template <typename ScalarType, typename ValueType>
struct add_complex<Matrix<ScalarType, ValueType>, true, true> {
  typedef typename std::enable_if<
      is_eigen_matrix<ValueType>::value
    , CMatrix<ScalarType>
    >::type type;
};

template <typename ScalarType, typename ValueType>
struct add_complex<Vector<ScalarType, ValueType>, true, true> {
  typedef typename std::enable_if<
      is_eigen_matrix<ValueType>::value
    , CVector<ScalarType>
    >::type type;
};

template <typename ScalarType, typename ValueType>
struct add_complex<RowVector<ScalarType, ValueType>, true, true> {
  typedef typename std::enable_if<
      is_eigen_matrix<ValueType>::value
    , CRowVector<ScalarType>
    >::type type;
};

template <typename ScalarType, typename ValueType>
struct add_complex<MatrixBlock<ScalarType, ValueType>, true, true> {
  typedef typename std::enable_if<
      is_eigen_block<ValueType>::value
    , CMatrixBlock<ScalarType>
    >::type type;
};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_ADD_COMPLEX_HPP
