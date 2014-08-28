//
// VectorBlock.hpp
// ~~~~~~~~~~~~~~~
//
// Copyright (c) 2014 Rick Yang (rick68 at gmail dot com)
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

#ifndef EIGENJS_VECTORBLOCK_HPP
#define EIGENJS_VECTORBLOCK_HPP

#include <v8.h>
#include <node.h>
#include <nan.h>

#include <boost/mpl/at.hpp>
#include <boost/mpl/int.hpp>

#include "base.hpp"
#include "definition.hpp"
#include "Matrix.hpp"
#include "Vector.hpp"
#include "VectorBlock_fwd.hpp"
#include "VectorBlock/definitions.hpp"
#include "throw_error.hpp"

namespace EigenJS {

template <
  typename ScalarType
, typename ValueType
, const char* ClassName
>
class VectorBlock
  : public base<VectorBlock, ScalarType, ValueType, ClassName> {
 public:
  typedef base<
      ::EigenJS::VectorBlock, ScalarType, ValueType, ClassName> base_type;

  typedef ScalarType scalar_type;
  typedef ValueType value_type;

  typedef ::EigenJS::Vector<scalar_type> Vector;

 public:
  static void Init(v8::Handle<v8::Object> exports) {
    NanScope();

    v8::Local<v8::FunctionTemplate> tpl = NanNew<v8::FunctionTemplate>(New);
    NanAssignPersistent(base_type::function_template, tpl);
    tpl->SetClassName(NanNew(ClassName));
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    EIGENJS_OBJECT_INITIALIZE(Matrix, tpl)
    EIGENJS_OBJECT_INITIALIZE(MatrixBlock, tpl)
    EIGENJS_OBJECT_INITIALIZE(Vector, tpl)

    exports->Set(NanNew(ClassName), tpl->GetFunction());
    NanAssignPersistent(base_type::constructor, tpl->GetFunction());
  }

  NAN_INLINE value_type& operator*() { return block_; }
  NAN_INLINE const value_type& operator*() const { return block_; }
  NAN_INLINE value_type* operator->() { return &block_; }
  NAN_INLINE const value_type* operator->() const { return &block_; }

 protected:
  explicit VectorBlock(
      const typename base_type::pointer_type& value_ptr
    , const typename value_type::Index& startRow
    , const typename value_type::Index& blockRows
  ) : base_type(value_ptr)
    , block_(
        base_type::value_ptr_->block(startRow, 0, blockRows, 1)
      ) {}

  ~VectorBlock() {}

  static NAN_METHOD(New) {
    NanScope();

    if (args.Length() != 3) {
      NanThrowError(
          "Tried creating a block without "
          "Vector, startRow and blockRows arguments");
      NanReturnUndefined();
    }

    if (Vector::is_vector(args[0]) &&
        args[1]->IsNumber() &&
        args[2]->IsNumber()
    ) {
      const Vector* const& rhs_obj =
          node::ObjectWrap::Unwrap<Vector>(args[0]->ToObject());
      const Vector& rhs_Vector = *rhs_obj;
      const typename Vector::value_type& rhs_vector = *rhs_Vector;
      const typename value_type::Index startRow = args[1]->Int32Value();
      const typename value_type::Index startCol = 0;
      const typename value_type::Index blockRows = args[2]->Int32Value();
      const typename value_type::Index blockCols = 1;

      const typename value_type::Index&& rows = startRow + blockRows - 1;
      const typename value_type::Index&& cols = startCol + blockCols - 1;

      if (Vector::is_out_of_range(rhs_vector, rows, cols)) {
        NanReturnUndefined();
      }

      if (startRow >= 0 && blockRows >= 0) {
        if (args.IsConstructCall()) {
          VectorBlock* obj = new VectorBlock(rhs_Vector, startRow, blockRows);
          obj->Wrap(args.This());
          NanReturnValue(args.This());
        } else {
          v8::Local<v8::Value> argv[] = { args[0], args[1], args[2] };
          NanReturnValue(
            base_type::new_instance(
              args
            , sizeof(argv) / sizeof(v8::Local<v8::Value>)
            , argv
            )
          );
        }
      }
    }

    EIGENJS_THROW_ERROR_INVALID_ARGUMENT()
    NanReturnUndefined();
  }

 private:
  value_type block_;
};

}  // namespace EigenJS

#endif  // EIGENJS_VECTORBLOCK_HPP
