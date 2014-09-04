//
// detail/transpose.hpp
// ~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_TRANSPOSE_HPP
#define EIGENJS_DETAIL_TRANSPOSE_HPP

#include "../Vector_fwd.hpp"
#include "../CVector_fwd.hpp"
#include "../RowVector_fwd.hpp"
#include "../CRowVector_fwd.hpp"

namespace EigenJS {
namespace detail {

template <typename T>
struct transpose {
  typedef T type;
};

template <typename ScalarType>
struct transpose<Vector<ScalarType> > {
  typedef RowVector<ScalarType> type;
};

template <typename ScalarType>
struct transpose<RowVector<ScalarType> > {
  typedef Vector<ScalarType> type;
};

template <typename ScalarType>
struct transpose<CVector<ScalarType> > {
  typedef CRowVector<ScalarType> type;
};

template <typename ScalarType>
struct transpose<CRowVector<ScalarType> > {
  typedef CVector<ScalarType> type;
};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_TRANSPOSE_HPP
