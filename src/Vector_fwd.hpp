//
// Vector_fwd.hpp
// ~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_VECTOR_FWD_HPP
#define EIGENJS_VECTOR_FWD_HPP

#include <boost/config.hpp>

namespace EigenJS {

BOOST_CONSTEXPR char vector_class_name[] = "Vector";

template <
  typename ScalarType = double
, typename ValueType = Eigen::Matrix<
    ScalarType
  , Eigen::Dynamic
  , 1
  >
, const char* ClassName = vector_class_name
> class Vector;

}  // namespace EigenJS

#endif  // EIGENJS_VECTOR_FWD_HPP
