//
// detail/is_complex.hpp
// ~~~~~~~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_DETAIL_IS_COMPLEX_HPP
#define EIGENJS_DETAIL_IS_COMPLEX_HPP

#include <type_traits>

#include "../CMatrix_fwd.hpp"
#include "../CVector_fwd.hpp"
#include "../CRowVector_fwd.hpp"
#include "../CMatrixBlock_fwd.hpp"
#include "../CVectorBlock_fwd.hpp"
#include "../CRowVectorBlock_fwd.hpp"

namespace EigenJS {
namespace detail {


template <typename T>
struct is_complex : std::false_type
{};

template <typename ScalarType>
struct is_complex<CMatrix<ScalarType> > : std::true_type
{};

template <typename ScalarType>
struct is_complex<CVector<ScalarType> > : std::true_type
{};

template <typename ScalarType>
struct is_complex<CRowVector<ScalarType> > : std::true_type
{};

template <typename ScalarType>
struct is_complex<CMatrixBlock<ScalarType> > : std::true_type
{};

template <typename ScalarType>
struct is_complex<CVectorBlock<ScalarType> > : std::true_type
{};

template <typename ScalarType>
struct is_complex<CRowVectorBlock<ScalarType> > : std::true_type
{};

}  // namespace detail
}  // namespace EigenJS

#endif  // EIGENJS_DETAIL_IS_COMPLEX_HPP
