//
// detail/unwrap_block.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_UNWRAP_BLOCK_HPP
#define EIGENJS_DETAIL_UNWRAP_BLOCK_HPP

#include <eigen3/Eigen/Core>

#include <type_traits>


#include "is_eigen_matrix.hpp"
#include "../Matrix_fwd.hpp"
#include "../CMatrix_fwd.hpp"
#include "../Vector_fwd.hpp"
#include "../CVector_fwd.hpp"
#include "../RowVector_fwd.hpp"
#include "../CRowVector_fwd.hpp"
#include "../MatrixBlock_fwd.hpp"
#include "../CMatrixBlock_fwd.hpp"
#include "../VectorBlock_fwd.hpp"
#include "../CVectorBlock_fwd.hpp"
#include "../RowVectorBlock_fwd.hpp"
#include "../CRowVectorBlock_fwd.hpp"

namespace EigenJS {
namespace detail {

template <typename T>
struct unwrap_block {
  typedef T type;
};

template<
  typename ScalarType
, typename XprType
, int BlockRows
, int BlockCols
, bool InnerPanel
>
struct unwrap_block<
  MatrixBlock<
    ScalarType
  , Eigen::Block<XprType, BlockRows, BlockCols, InnerPanel>
  >
> {
  typedef typename std::enable_if<
      is_eigen_matrix<XprType>::value
    , Matrix<ScalarType, XprType>
    >::type type;
};

template<
  typename ScalarType
, typename XprType
, int BlockRows
, int BlockCols
, bool InnerPanel
>
struct unwrap_block<
  CMatrixBlock<
    ScalarType
  , Eigen::Block<XprType, BlockRows, BlockCols, InnerPanel>
  >
> {
  typedef typename std::enable_if<
      is_eigen_matrix<XprType>::value
    , CMatrix<ScalarType, XprType>
    >::type type;
};

template<
  typename ScalarType
, typename XprType
, int BlockRows
, int BlockCols
, bool InnerPanel
>
struct unwrap_block<
  VectorBlock<
    ScalarType
  , Eigen::Block<XprType, BlockRows, BlockCols, InnerPanel>
  >
> {
  typedef typename std::enable_if<
      is_eigen_matrix<XprType>::value
    , Vector<ScalarType, XprType>
    >::type type;
};

template<
  typename ScalarType
, typename XprType
, int BlockRows
, int BlockCols
, bool InnerPanel
>
struct unwrap_block<
  CVectorBlock<
    ScalarType
  , Eigen::Block<XprType, BlockRows, BlockCols, InnerPanel>
  >
> {
  typedef typename std::enable_if<
      is_eigen_matrix<XprType>::value
    , CVector<ScalarType, XprType>
    >::type type;
};

template<
  typename ScalarType
, typename XprType
, int BlockRows
, int BlockCols
, bool InnerPanel
>
struct unwrap_block<
  RowVectorBlock<
    ScalarType
  , Eigen::Block<XprType, BlockRows, BlockCols, InnerPanel>
  >
> {
  typedef typename std::enable_if<
      is_eigen_matrix<XprType>::value
    , RowVector<ScalarType, XprType>
    >::type type;
};

template<
  typename ScalarType
, typename XprType
, int BlockRows
, int BlockCols
, bool InnerPanel
>
struct unwrap_block<
  CRowVectorBlock<
    ScalarType
  , Eigen::Block<XprType, BlockRows, BlockCols, InnerPanel>
  >
> {
  typedef typename std::enable_if<
      is_eigen_matrix<XprType>::value
    , CRowVector<ScalarType, XprType>
    >::type type;
};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_UNWRAP_BLOCK_HPP
