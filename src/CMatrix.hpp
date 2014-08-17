//
// CMatirx.hpp
// ~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_CMATRIX_HPP
#define EIGENJS_CMATRIX_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/mpl/at.hpp>
#include <boost/mpl/int.hpp>

#include <eigen3/Eigen/Dense>

#include "base.hpp"
#include "definition.hpp"
#include "Complex.hpp"
#include "Matrix.hpp"
#include "CMatrix_fwd.hpp"
#include "CMatrix/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class CMatrix : public base<CMatrix, ScalarType, ValueType, ClassName> {
 public:
  typedef base<::EigenJS::CMatrix, ScalarType, ValueType, ClassName> base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(CMatrix, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

 private:
  explicit CMatrix(const base_type& base)
    : base_type(base)
  {}

  CMatrix(
    const typename value_type::Index& rows
  , const typename value_type::Index& cols
  ) : base_type()
      { *base_type::value_ptr_ = value_type::Zero(rows, cols); }

  ~CMatrix() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() < 2) {
      NanThrowError(
          "Tried creating a complex matrix without rows and columns arguments");
      NanReturnUndefined();
    }

    if (CMatrix::is_scalar(args[0]) && CMatrix::is_scalar(args[1])) {
      if (args.IsConstructCall()) {
        typename value_type::Index rows = args[0]->Int32Value();
        typename value_type::Index cols = args[1]->Int32Value();
        CMatrix* obj = new CMatrix(rows, cols);
        obj->Wrap(args.This());
        NanReturnValue(args.This());
      } else {
        v8::Local<v8::Value> argv[] = { args[0], args[1] };
        NanReturnValue(
          base_type::new_instance(
            args
          , sizeof(argv) / sizeof(v8::Local<v8::Value>)
          , argv
          )
        );
      }
    }

    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }
};

}  // namespace EigenJS

#endif  // EIGENJS_CMATRIX_HPP
