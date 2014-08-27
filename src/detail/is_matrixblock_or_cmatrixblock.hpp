//
// detail/is_matrixblock_or_cmatrixblock.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_IS_MATRIXBLOCK_OR_CMATRIXBLOCK_HPP
#define EIGENJS_DETAIL_IS_MATRIXBLOCK_OR_CMATRIXBLOCK_HPP

#include <boost/mpl/bool.hpp>
#include <boost/mpl/or.hpp>

#include <eigen3/Eigen/Dense>

#include <type_traits>

#include "../MatrixBlock_fwd.hpp"
#include "../CMatrixBlock_fwd.hpp"

namespace EigenJS {
namespace detail {

template <typename MatrixBlockOrCMatrixBlock>
struct is_matrixblock_or_cmatrixblock
  : boost::mpl::bool_<
      boost::mpl::or_<
        boost::mpl::bool_<
          std::is_same<
            MatrixBlockOrCMatrixBlock
          , MatrixBlock<typename MatrixBlockOrCMatrixBlock::scalar_type>
          >::value
        >
      , boost::mpl::bool_<
          std::is_same<
            MatrixBlockOrCMatrixBlock
          , CMatrixBlock<typename MatrixBlockOrCMatrixBlock::scalar_type>
          >::value
        >
      >::value
    >
{};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_IS_MATRIXBLOCK_OR_CMATRIXBLOCK_HPP
