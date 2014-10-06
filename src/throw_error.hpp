//
// throw_error.hpp
// ~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_THROW_ERROR_HPP
#define EIGENJS_THROW_ERROR_HPP

#include <nan.h>

#define EIGENJS_THROW_ERROR_INVALID_ARGUMENT()                               \
  NanThrowError("Invalid argument");                                         \
  /**/

#define EIGENJS_THROW_ERROR_INVALID_ROWS_AND_COLUMNS_ARGUMENTS()             \
  NanThrowError("Invalid rows or columns arguments");                        \
  /**/

#define EIGENJS_THROW_ERROR_INVALID_INDEX_ARGUMENT()                         \
  NanThrowError("Invalid index argument");                                   \
  /**/

#define EIGENJS_THROW_ERROR_THE_MATRIX_SIZE_MUST_BE_1XN_OR_MX1()             \
  NanThrowError("The matrix size must be 1xN or Mx1");                       \
  /**/

#endif  // EIGENJS_THROW_ERROR_HPP
