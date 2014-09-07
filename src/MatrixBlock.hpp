//
// MatrixBlock.hpp
// ~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_MATRIXBLOCK_HPP
#define EIGENJS_MATRIXBLOCK_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/mpl/at.hpp>
#include <boost/mpl/int.hpp>

#include "base.hpp"
#include "definition.hpp"
#include "Matrix.hpp"
#include "MatrixBlock_fwd.hpp"
#include "MatrixBlock/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class MatrixBlock
  : public base<MatrixBlock, ScalarType, ValueType, ClassName> {
 public:
  typedef base<
      ::EigenJS::MatrixBlock, ScalarType, ValueType, ClassName> base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef ::EigenJS::Matrix<scalar_type> Matrix;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(Matrix, tpl)
    EIGENJS_OBJECT_INITIALIZE(MatrixBlock, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

  NAN_INLINE value_type& operator*() { return block_; }
  NAN_INLINE const value_type& operator*() const { return block_; }
  NAN_INLINE value_type* operator->() { return &block_; }
  NAN_INLINE const value_type* operator->() const { return &block_; }

 protected:
  explicit MatrixBlock(
      const typename base_type::pointer_type& value_ptr
    , const typename value_type::Index& startRow
    , const typename value_type::Index& startCol
    , const typename value_type::Index& blockRows
    , const typename value_type::Index& blockCols
  ) : base_type(value_ptr)
    , start_row_(startRow)
    , start_column_(startCol)
    , block_(
        base_type::value_ptr_->block(startRow, startCol, blockRows, blockCols)
      ) {}

  ~MatrixBlock() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() != 5) {
      NanThrowError(
          "Tried creating a block without "
          "Matrix, startRow, startCol, blockRows and blockCols arguments");
      NanReturnUndefined();
    }

    if (!args.IsConstructCall()) {
      v8::Local<v8::Value> argv[] = {
          args[0], args[1], args[2], args[3], args[4] };
      NanReturnValue(
        base_type::new_instance(
          args
        , sizeof(argv) / sizeof(v8::Local<v8::Value>)
        , argv
        )
      );
    }

    if (args[1]->IsNumber() &&
        args[2]->IsNumber() &&
        args[3]->IsNumber() &&
        args[4]->IsNumber()
    ) {
      typename value_type::Index startRow = args[1]->Int32Value();
      typename value_type::Index startCol = args[2]->Int32Value();
      const typename value_type::Index& blockRows = args[3]->Int32Value();
      const typename value_type::Index& blockCols = args[4]->Int32Value();
      const typename value_type::Index&& rows = startRow + blockRows - 1;
      const typename value_type::Index&& cols = startCol + blockCols - 1;

      typename base_type::pointer_type value_ptr;

      if (Matrix::is_matrix(args[0])) {
        const Matrix* const& rhs_obj =
            node::ObjectWrap::Unwrap<Matrix>(args[0]->ToObject());
        const Matrix& rhs_Matrix = *rhs_obj;
        const typename Matrix::value_type& rhs_matrix = *rhs_Matrix;

        if (Matrix::is_out_of_range(rhs_matrix, rows, cols)) {
          NanReturnUndefined();
        }

        value_ptr = rhs_Matrix;
      } else if (MatrixBlock::is_matrixblock(args[0])) {
        const MatrixBlock* const& rhs_obj =
            node::ObjectWrap::Unwrap<MatrixBlock>(args[0]->ToObject());
        const MatrixBlock& rhs_MatrixBlock = *rhs_obj;
        const typename MatrixBlock::value_type& rhs_matrixblock =
            *rhs_MatrixBlock;

        if (MatrixBlock::is_out_of_range(rhs_matrixblock, rows, cols)) {
          NanReturnUndefined();
        }

        value_ptr = rhs_MatrixBlock;
        startRow += rhs_MatrixBlock.start_row_;
        startCol += rhs_MatrixBlock.start_column_;
      } else if (true) {
        EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
        NanReturnUndefined();
      }

      if (startRow >= 0 && startCol >= 0 &&
          blockRows >= 0 && blockCols >= 0
      ) {
        MatrixBlock* obj = new MatrixBlock(
            value_ptr, startRow, startCol, blockRows, blockCols);
        obj->Wrap(args.This());
        NanReturnValue(args.This());
      }
    }

    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }

 private:
  typename value_type::Index start_row_;
  typename value_type::Index start_column_;
  value_type block_;
};

}  // namespace EigenJS

#endif  // EIGENJS_MATRIXBLOCK_HPP
