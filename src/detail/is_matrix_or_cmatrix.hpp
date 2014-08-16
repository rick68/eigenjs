//
// detail/is_matrix_or_cmatrix.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_IS_MATRIX_OR_CMATRIX_HPP
#define EIGENJS_DETAIL_IS_MATRIX_OR_CMATRIX_HPP

#include <boost/mpl/bool.hpp>
#include <boost/mpl/or.hpp>

#include <eigen3/Eigen/Dense>

#include <type_traits>

#include "../Matrix_fwd.hpp"
#include "../CMatrix_fwd.hpp"

namespace EigenJS {
namespace detail {

template <typename MatrixOrCMatrix>
struct is_matrix_or_cmatrix
  : boost::mpl::bool_<
      boost::mpl::or_<
        boost::mpl::bool_<
          std::is_same<
            MatrixOrCMatrix
          , Matrix<typename MatrixOrCMatrix::scalar_type>
          >::value
        >
      , boost::mpl::bool_<
          std::is_same<
            MatrixOrCMatrix
          , CMatrix<typename MatrixOrCMatrix::scalar_type>
          >::value
        >
      >::value
    >
{};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_IS_MATRIX_OR_CMATRIX_HPP
