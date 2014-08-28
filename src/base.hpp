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
#include "Vector_fwd.hpp"
#include "CVector_fwd.hpp"
#include "RowVector_fwd.hpp"
#include "CRowVector_fwd.hpp"
#include "MatrixBlock_fwd.hpp"
#include "CMatrixBlock_fwd.hpp"
#include "VectorBlock_fwd.hpp"
#include "CVectorBlock_fwd.hpp"
#include "RowVectorBlock_fwd.hpp"
#include "CRowVectorBlock_fwd.hpp"

#include "detail/unwrap_eigen_block.hpp"
#include "detail/is_eigen_block.hpp"
#include "detail/is_eigen_matrix.hpp"

namespace EigenJS {

namespace detail {
  template <typename ScalarType>
  struct std_complex_dummy_ptr {
    typedef ScalarType scalar_type;
    typedef std::complex<scalar_type> value_type;

    NAN_INLINE value_type& operator*() { return value_; }
    NAN_INLINE const value_type& operator*() const { return value_; }
    NAN_INLINE value_type* operator->() { return &value_; }
    NAN_INLINE const value_type* operator->() const { return &value_; }

   private:
    value_type value_;
  };

}  // namespace detail

template <
  template <typename, typename, const char*> class Derived
, typename ScalarType
, typename ValueType
, const char* ClassName
>
struct base : node::ObjectWrap {
  typedef Derived<ScalarType, ValueType, ClassName> derived_type;

  typedef ScalarType scalar_type;
  typedef typename detail::unwrap_eigen_block<ValueType>::type value_type;

  typedef typename std::conditional<
      std::is_same<
        value_type
      , typename detail::std_complex_dummy_ptr<scalar_type>::value_type
      >::value
    , detail::std_complex_dummy_ptr<scalar_type>
    , std::shared_ptr<value_type>
    >::type pointer_type;

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
    return Matrix<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_cmatrix(const v8::Handle<v8::Value>& arg) {
    return CMatrix<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_vector(const v8::Handle<v8::Value>& arg) {
    return Vector<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_cvector(const v8::Handle<v8::Value>& arg) {
    return CVector<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_rowvector(const v8::Handle<v8::Value>& arg) {
    return RowVector<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_crowvector(const v8::Handle<v8::Value>& arg) {
    return CRowVector<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_matrixblock(const v8::Handle<v8::Value>& arg) {
    return MatrixBlock<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_cmatrixblock(const v8::Handle<v8::Value>& arg) {
    return CMatrixBlock<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_vectorblock(const v8::Handle<v8::Value>& arg) {
    return VectorBlock<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_cvectorblock(const v8::Handle<v8::Value>& arg) {
    return CVectorBlock<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_rowvectorblock(const v8::Handle<v8::Value>& arg) {
    return RowVectorBlock<scalar_type>::base_type::has_instance(arg);
  }

  static NAN_INLINE bool is_crowvectorblock(const v8::Handle<v8::Value>& arg) {
    return CRowVectorBlock<scalar_type>::base_type::has_instance(arg);
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

  template <
    typename XprType
  , int BlockRows
  , int BlockCols
  , bool InnerPanel
  >
  static NAN_INLINE bool is_out_of_range(
      const Eigen::Block<
        XprType
      , BlockRows
      , BlockCols
      , InnerPanel
      >& eigen_block
    , const typename XprType::Index& row
    , const typename XprType::Index& col) {
    return row < 0 || row >= eigen_block.rows() ||
           col < 0 || col >= eigen_block.cols()
      ? NanThrowError("Row or column numbers are out of range"), true
      : false;
  }

  template <typename T, typename U>
  static NAN_INLINE
  typename std::enable_if<
    boost::mpl::and_<
      boost::mpl::or_<
        detail::is_eigen_block<typename T::value_type>
      , detail::is_eigen_matrix<typename T::value_type>
      >
    , boost::mpl::or_<
        detail::is_eigen_block<typename U::value_type>
      , detail::is_eigen_matrix<typename U::value_type>
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
      boost::mpl::or_<
        detail::is_eigen_block<typename T::value_type>
      , detail::is_eigen_matrix<typename T::value_type>
      >
    , boost::mpl::or_<
        detail::is_eigen_block<typename U::value_type>
      , detail::is_eigen_matrix<typename U::value_type>
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
  NAN_INLINE value_type& operator*() { return *value_ptr_; }
  NAN_INLINE const value_type& operator*() const { return *value_ptr_; }
  NAN_INLINE value_type* operator->() { return value_ptr_.get(); }
  NAN_INLINE const value_type* operator->() const { return value_ptr_.get(); }

  NAN_INLINE operator const pointer_type&() const {
    return value_ptr_;
  }

 protected:
  base() : value_ptr_(new value_type()) {}

  explicit base(const Complex<scalar_type>&) : value_ptr_() {}

  explicit base(const pointer_type& value_ptr)
    : value_ptr_(value_ptr)
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
