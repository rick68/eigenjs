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

#include <node.h>
#include <v8.h>

#include <nan.h>

namespace EigenJS {

void Init(v8::Handle<v8::Object> exports)
{
}

} // nampspace EigenJS

NODE_MODULE(eigen, EigenJS::Init)
