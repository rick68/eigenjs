//
// detail/is_vector_or_cvector.hpp
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_IS_VECTOR_OR_CVECTOR_HPP
#define EIGENJS_DETAIL_IS_VECTOR_OR_CVECTOR_HPP

#include <boost/mpl/bool.hpp>
#include <boost/mpl/or.hpp>

#include <eigen3/Eigen/Dense>

#include <type_traits>

#include "../Vector_fwd.hpp"
#include "../CVector_fwd.hpp"

namespace EigenJS {
namespace detail {

template <typename VectorOrCVector>
struct is_vector_or_cvector
  : boost::mpl::bool_<
      boost::mpl::or_<
        boost::mpl::bool_<
          std::is_same<
            VectorOrCVector
          , Vector<typename VectorOrCVector::scalar_type>
          >::value
        >
      , boost::mpl::bool_<
          std::is_same<
            VectorOrCVector
          , CVector<typename VectorOrCVector::scalar_type>
          >::value
        >
      >::value
    >
{};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_IS_VECTOR_OR_CVECTOR_HPP
