//
// EigenJS.cpp
// ~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_BASIC_HPP
#define EIGENJS_BASIC_HPP

#include <eigen3/Eigen/Dense>

#include <complex>

namespace EigenJS {

template <typename ValueType>
struct base {
  typedef ValueType element_type;
  typedef std::complex<element_type> complex_type;
  typedef Eigen::Matrix<
      element_type
    , Eigen::Dynamic
    , Eigen::Dynamic
    > matrix_type;
};

}  // namespace EigenJS

#endif  // EIGENJS_BASIC_HPP
