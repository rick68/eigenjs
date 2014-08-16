//
// detail/is_rowvector_or_crowvector.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_IS_ROWVECTOR_OR_CROWVECTOR_HPP
#define EIGENJS_DETAIL_IS_ROWVECTOR_OR_CROWVECTOR_HPP

#include <boost/mpl/bool.hpp>
#include <boost/mpl/or.hpp>

#include <eigen3/Eigen/Dense>

#include <type_traits>

#include "../RowVector_fwd.hpp"
#include "../CRowVector_fwd.hpp"

namespace EigenJS {
namespace detail {

template <typename RowVectorOrCRowVector>
struct is_rowvector_or_crowvector
  : boost::mpl::bool_<
      boost::mpl::or_<
        boost::mpl::bool_<
          std::is_same<
            RowVectorOrCRowVector
          , RowVector<typename RowVectorOrCRowVector::scalar_type>
          >::value
        >
      , boost::mpl::bool_<
          std::is_same<
            RowVectorOrCRowVector
          , CRowVector<typename RowVectorOrCRowVector::scalar_type>
          >::value
        >
      >::value
    >
{};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_IS_ROWVECTOR_OR_CROWVECTOR_HPP
