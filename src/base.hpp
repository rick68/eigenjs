//
// base.hpp
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

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/utility/enable_if.hpp>
#include <boost/mpl/and.hpp>
#include <boost/mpl/or.hpp>
#include <boost/type_traits/is_same.hpp>

#include <eigen3/Eigen/Dense>

#include <complex>

#include "Complex_fwd.hpp"
#include "Matrix_fwd.hpp"
#include "CMatrix_fwd.hpp"

namespace EigenJS {

template <
  template <typename, const char*> class Derived
, typename ValueType
, const char* ClassName
>
struct base : node::ObjectWrap {
  typedef ValueType element_type;

  typedef std::complex<element_type> complex_type;
  typedef Eigen::Matrix<
      element_type, Eigen::Dynamic, Eigen::Dynamic> matrix_type;
  typedef Eigen::Matrix<
      complex_type, Eigen::Dynamic, Eigen::Dynamic> cmatrix_type;

  typedef Complex<element_type> Complex;
  typedef Matrix<element_type> Matrix;
  typedef CMatrix<element_type> CMatrix;

  typedef Derived<ValueType, ClassName> derived_type;

  static NAN_INLINE bool is_scalar(const v8::Handle<v8::Value>& arg) {
    return arg->IsNumber() ? true : false;
  }

  static NAN_INLINE bool is_complex(const v8::Handle<v8::Value>& arg) {
    return Complex::base_type::has_instance(arg);
  }

  static NAN_INLINE bool
  is_complex_or_saclar(const v8::Handle<v8::Value>& arg) {
    return
      Complex::base_type::has_instance(arg) || arg->IsNumber()
      ? true : false;
  }

  static NAN_INLINE bool is_matrix(const v8::Handle<v8::Value>& arg) {
    return Matrix::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_cmatrix(const v8::Handle<v8::Value>& arg) {
    return CMatrix::base_type::has_instance(arg);
  }

  static NAN_INLINE bool has_instance(const v8::Handle<v8::Value>& value) {
    NanScope();
    v8::Local<v8::FunctionTemplate> tpl = NanNew(function_template);
    return tpl->HasInstance(value);
  }

  template <typename T>
  static NAN_INLINE v8::Local<v8::Object>
  new_instance(const T& args, int argc, v8::Handle<v8::Value> argv[]) {
    v8::Local<v8::Function> ctor = NanNew(constructor);
    v8::Local<v8::Object> instance = ctor->NewInstance(argc, argv);
    return instance;
  }

  template <typename T>
  static NAN_INLINE bool is_out_of_range(
      const Eigen::Matrix<T, Eigen::Dynamic, Eigen::Dynamic>& eigen_matrix
    , const typename Eigen::Matrix<
          T, Eigen::Dynamic, Eigen::Dynamic>::Index& row
    , const typename Eigen::Matrix<
          T, Eigen::Dynamic, Eigen::Dynamic>::Index& col) {
    return row < 0 || row >= eigen_matrix.rows() ||
           col < 0 || col >= eigen_matrix.cols()
      ? NanThrowError("Row or column numbers are out of range"), true
      : false;
  }

  template <typename T, typename U>
  static NAN_INLINE
  typename boost::enable_if_c<
    boost::mpl::and_<
      boost::mpl::or_<boost::is_same<T, Matrix>, boost::is_same<T, CMatrix> >
    , boost::mpl::or_<boost::is_same<U, Matrix>, boost::is_same<U, CMatrix> >
    >::value
  , bool
  >::type
  is_nonconformate_arguments(
      const T* const& op1
    , const U* const& op2) {
    return (*op1)->rows() != (*op2)->rows() ||
           (*op1)->cols() != (*op2)->cols()
      ? NanThrowError("Nonconformant arguments"), true
      : false;
  }

  template <typename T, typename U>
  static NAN_INLINE
  typename boost::enable_if_c<
    boost::mpl::and_<
      boost::mpl::or_<boost::is_same<T, Matrix>, boost::is_same<T, CMatrix> >
    , boost::mpl::or_<boost::is_same<U, Matrix>, boost::is_same<U, CMatrix> >
    >::value
  , bool
  >::type
  is_invalid_matrix_product(
      const T* const& op1
    , const U* const& op2) {
    return (*op1)->cols() != (*op2)->rows()
      ? NanThrowError("Invalid matrix product"), true
      : false;
  }

 protected:
  static v8::Persistent<v8::FunctionTemplate> function_template;
  static v8::Persistent<v8::Function> constructor;
};

template<
  template <typename, const char*> class Derived
, typename ValueType
, const char* ClassName
>
v8::Persistent<v8::FunctionTemplate>
    base<Derived, ValueType, ClassName>::function_template;

template<
  template <typename, const char*> class Derived
, typename ValueType
, const char* ClassName
>
v8::Persistent<v8::Function> base<Derived, ValueType, ClassName>::constructor;

}  // namespace EigenJS

#endif  // EIGENJS_BASIC_HPP
