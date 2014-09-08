//
// detail/add_block.hpp
// ~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_ADD_BLOCK_HPP
#define EIGENJS_DETAIL_ADD_BLOCK_HPP

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
struct add_block {
  typedef T type;
};

template <typename ScalarType>
struct add_block<Matrix<ScalarType> > {
  typedef MatrixBlock<ScalarType> type;
};

template <typename ScalarType>
struct add_block<CMatrix<ScalarType> > {
  typedef CMatrixBlock<ScalarType> type;
};

template <typename ScalarType>
struct add_block<Vector<ScalarType> > {
  typedef VectorBlock<ScalarType> type;
};

template <typename ScalarType>
struct add_block<CVector<ScalarType> > {
  typedef CVectorBlock<ScalarType> type;
};

template <typename ScalarType>
struct add_block<RowVector<ScalarType> > {
  typedef RowVectorBlock<ScalarType> type;
};

template <typename ScalarType>
struct add_block<CRowVector<ScalarType> > {
  typedef CRowVectorBlock<ScalarType> type;
};


}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_ADD_BLOCK_HPP
