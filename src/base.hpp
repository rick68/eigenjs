//
// base.hpp
// ~~~~~~~~
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

#include <boost/mpl/and.hpp>
#include <boost/mpl/or.hpp>

#include <eigen3/Eigen/Dense>

#include <complex>
#include <memory>
#include <type_traits>

#include "Complex_fwd.hpp"
#include "Matrix_fwd.hpp"
#include "CMatrix_fwd.hpp"

namespace EigenJS {

template <
  template <typename, typename, const char*> class Derived
, typename ScalarType
, typename ValueType
, const char* ClassName
>
struct base : node::ObjectWrap {
  typedef Derived<ScalarType, ValueType, ClassName> derived_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef std::shared_ptr<value_type> pointer_type;

  static NAN_INLINE bool is_scalar(const v8::Handle<v8::Value>& arg) {
    return arg->IsNumber() ? true : false;
  }

  static NAN_INLINE bool is_complex(const v8::Handle<v8::Value>& arg) {
    return Complex<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool
  is_complex_or_saclar(const v8::Handle<v8::Value>& arg) {
    return
      Complex<scalar_type>::base_type::has_instance(arg) || arg->IsNumber()
      ? true : false;
  }

  static NAN_INLINE bool is_matrix(const v8::Handle<v8::Value>& arg) {
    return Matrix<scalar_type, value_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_cmatrix(const v8::Handle<v8::Value>& arg) {
    return CMatrix<scalar_type, value_type>::base_type::has_instance(arg);
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

  template <typename T, int Rows, int Cols>
  static NAN_INLINE bool is_out_of_range(
      const Eigen::Matrix<T, Rows, Cols>& eigen_matrix
    , const typename Eigen::Matrix<T, Rows, Cols>::Index& row
    , const typename Eigen::Matrix<T, Rows, Cols>::Index& col) {
    return row < 0 || row >= eigen_matrix.rows() ||
           col < 0 || col >= eigen_matrix.cols()
      ? NanThrowError("Row or column numbers are out of range"), true
      : false;
  }

  template <typename T, typename U>
  static NAN_INLINE
  typename std::enable_if<
    boost::mpl::and_<
      std::is_same<
        typename T::value_type
      , Eigen::Matrix<
          typename Eigen::internal::traits<typename T::value_type>::Scalar
        , Eigen::internal::traits<typename T::value_type>::RowsAtCompileTime
        , Eigen::internal::traits<typename T::value_type>::ColsAtCompileTime
        , Eigen::internal::traits<typename T::value_type>::Options
        , Eigen::internal::traits<typename T::value_type>::MaxRowsAtCompileTime
        , Eigen::internal::traits<typename T::value_type>::MaxColsAtCompileTime
        >
      >
    , std::is_same<
        typename U::value_type
      , Eigen::Matrix<
          typename Eigen::internal::traits<typename U::value_type>::Scalar
        , Eigen::internal::traits<typename U::value_type>::RowsAtCompileTime
        , Eigen::internal::traits<typename U::value_type>::ColsAtCompileTime
        , Eigen::internal::traits<typename U::value_type>::Options
        , Eigen::internal::traits<typename U::value_type>::MaxRowsAtCompileTime
        , Eigen::internal::traits<typename U::value_type>::MaxColsAtCompileTime
        >
      >
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
  typename std::enable_if<
    boost::mpl::and_<
      std::is_same<
        typename T::value_type
      , Eigen::Matrix<
          typename Eigen::internal::traits<typename T::value_type>::Scalar
        , Eigen::internal::traits<typename T::value_type>::RowsAtCompileTime
        , Eigen::internal::traits<typename T::value_type>::ColsAtCompileTime
        , Eigen::internal::traits<typename T::value_type>::Options
        , Eigen::internal::traits<typename T::value_type>::MaxRowsAtCompileTime
        , Eigen::internal::traits<typename T::value_type>::MaxColsAtCompileTime
        >
      >
    , std::is_same<
        typename U::value_type
      , Eigen::Matrix<
          typename Eigen::internal::traits<typename U::value_type>::Scalar
        , Eigen::internal::traits<typename U::value_type>::RowsAtCompileTime
        , Eigen::internal::traits<typename U::value_type>::ColsAtCompileTime
        , Eigen::internal::traits<typename U::value_type>::Options
        , Eigen::internal::traits<typename U::value_type>::MaxRowsAtCompileTime
        , Eigen::internal::traits<typename U::value_type>::MaxColsAtCompileTime
        >
      >
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

 public:
  NAN_INLINE value_type& operator*() {
    return *value_ptr_;
  }

  NAN_INLINE const value_type& operator*() const {
    return *value_ptr_;
  }

  NAN_INLINE value_type* operator->() {
    return value_ptr_.get();
  }

  NAN_INLINE const value_type* operator->() const {
    return value_ptr_.get();
  }

 protected:
  base() : value_ptr_(new value_type()) {}

  base(const base& other)
    : value_ptr_(other.value_ptr_)
  {}

  ~base() {}

  static v8::Persistent<v8::FunctionTemplate> function_template;
  static v8::Persistent<v8::Function> constructor;

 private:
  friend derived_type;
  pointer_type value_ptr_;
};

template<
  template <typename, typename, const char*> class Derived
, typename ScalarType
, typename ValueType
, const char* ClassName
>
v8::Persistent<v8::FunctionTemplate>
    base<Derived, ScalarType, ValueType, ClassName>::function_template;

template<
  template <typename, typename, const char*> class Derived
, typename ScalarType
, typename ValueType
, const char* ClassName
>
v8::Persistent<v8::Function>
    base<Derived, ScalarType, ValueType, ClassName>::constructor;

}  // namespace EigenJS

#endif  // EIGENJS_BASIC_HPP
