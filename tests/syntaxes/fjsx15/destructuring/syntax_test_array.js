// SYNTAX TEST "Packages/Naomi/syntaxes/naomi.fjsx15.sublime-syntax"

// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

   let [a=0,...b=0] = [1,2];
// ^^^ keyword.declaration.variable.js.fjsx15
//     ^ destructuring.array.js.fjsx15
//     ^ punctuation.delimiter.array.begin.js.fjsx15
//      ^ entity.name.variable.js.fjsx15
//       ^ keyword.operator.other.assignment.js.fjsx15
//        ^ constant.numeric.decimal.js.fjsx15
//         ^ destructuring.array.js.fjsx15
//         ^ punctuation.delimiter.array.js.fjsx15
//          ^^^ keyword.operator.other.rest.js.fjsx15
//             ^ entity.name.variable.js.fjsx15
//              ^ keyword.operator.other.assignment.js.fjsx15
//               ^ constant.numeric.decimal.js.fjsx15
//                ^ destructuring.array.js.fjsx15
//                ^ punctuation.delimiter.array.end.js.fjsx15
//                  ^ keyword.operator.other.assignment.js.fjsx15
//                    ^ punctuation.delimiter.array.begin.js.fjsx15
//                     ^ constant.numeric.decimal.js.fjsx15
//                      ^ punctuation.delimiter.array.js.fjsx15
//                       ^ constant.numeric.decimal.js.fjsx15
//                        ^ punctuation.delimiter.array.end.js.fjsx15
//                         ^ keyword.operator.other.terminator.js.fjsx15
   let [a=0,...b=0]:[number,number] = [1,2];
// ^^^ keyword.declaration.variable.js.fjsx15
//     ^ destructuring.array.js.fjsx15
//     ^ punctuation.delimiter.array.begin.js.fjsx15
//      ^ entity.name.variable.js.fjsx15
//       ^ keyword.operator.other.assignment.js.fjsx15
//        ^ constant.numeric.decimal.js.fjsx15
//         ^ destructuring.array.js.fjsx15
//         ^ punctuation.delimiter.array.js.fjsx15
//          ^^^ keyword.operator.other.rest.js.fjsx15
//             ^ entity.name.variable.js.fjsx15
//              ^ keyword.operator.other.assignment.js.fjsx15
//               ^ constant.numeric.decimal.js.fjsx15
//                ^ destructuring.array.js.fjsx15
//                ^ punctuation.delimiter.array.end.js.fjsx15
//                 ^ keyword.operator.other.association.flowtype
//                  ^ punctuation.delimiter.array.begin.flowtype
//                   ^^^^^^ support.flowtype
//                   ^^^^^^ entity.name.type.flowtype
//                         ^ punctuation.delimiter.array.flowtype
//                          ^^^^^^ support.flowtype
//                          ^^^^^^ entity.name.type.flowtype
//                                ^ punctuation.delimiter.array.end.flowtype
//                                  ^ keyword.operator.other.assignment.js.fjsx15
//                                    ^ punctuation.delimiter.array.begin.js.fjsx15
//                                     ^ constant.numeric.decimal.js.fjsx15
//                                      ^ punctuation.delimiter.array.js.fjsx15
//                                       ^ constant.numeric.decimal.js.fjsx15
//                                        ^ punctuation.delimiter.array.end.js.fjsx15
//                                         ^ keyword.operator.other.terminator.js.fjsx15
   let [[a=0,...b=0]] = [[1,2]];
// ^^^ keyword.declaration.variable.js.fjsx15
//     ^ destructuring.array.js.fjsx15
//     ^ punctuation.delimiter.array.begin.js.fjsx15
//      ^ destructuring.array.js.fjsx15
//      ^ punctuation.delimiter.array.begin.js.fjsx15
//       ^ entity.name.variable.js.fjsx15
//        ^ keyword.operator.other.assignment.js.fjsx15
//         ^ constant.numeric.decimal.js.fjsx15
//          ^ destructuring.array.js.fjsx15
//          ^ punctuation.delimiter.array.js.fjsx15
//           ^^^ keyword.operator.other.rest.js.fjsx15
//              ^ entity.name.variable.js.fjsx15
//               ^ keyword.operator.other.assignment.js.fjsx15
//                ^ constant.numeric.decimal.js.fjsx15
//                 ^ destructuring.array.js.fjsx15
//                 ^ punctuation.delimiter.array.end.js.fjsx15
//                  ^ destructuring.array.js.fjsx15
//                  ^ punctuation.delimiter.array.end.js.fjsx15
//                    ^ keyword.operator.other.assignment.js.fjsx15
//                      ^ punctuation.delimiter.array.begin.js.fjsx15
//                       ^ punctuation.delimiter.array.begin.js.fjsx15
//                        ^ constant.numeric.decimal.js.fjsx15
//                         ^ punctuation.delimiter.array.js.fjsx15
//                          ^ constant.numeric.decimal.js.fjsx15
//                           ^ punctuation.delimiter.array.end.js.fjsx15
//                            ^ punctuation.delimiter.array.end.js.fjsx15
//                             ^ keyword.operator.other.terminator.js.fjsx15
   let [[a=0,...b=0]]:[[number,number]] = [[1,2]];
// ^^^ keyword.declaration.variable.js.fjsx15
//     ^ destructuring.array.js.fjsx15
//     ^ punctuation.delimiter.array.begin.js.fjsx15
//      ^ destructuring.array.js.fjsx15
//      ^ punctuation.delimiter.array.begin.js.fjsx15
//       ^ entity.name.variable.js.fjsx15
//        ^ keyword.operator.other.assignment.js.fjsx15
//         ^ constant.numeric.decimal.js.fjsx15
//          ^ destructuring.array.js.fjsx15
//          ^ punctuation.delimiter.array.js.fjsx15
//           ^^^ keyword.operator.other.rest.js.fjsx15
//              ^ entity.name.variable.js.fjsx15
//               ^ keyword.operator.other.assignment.js.fjsx15
//                ^ constant.numeric.decimal.js.fjsx15
//                 ^ destructuring.array.js.fjsx15
//                 ^ punctuation.delimiter.array.end.js.fjsx15
//                  ^ destructuring.array.js.fjsx15
//                  ^ punctuation.delimiter.array.end.js.fjsx15
//                   ^ keyword.operator.other.association.flowtype
//                    ^ punctuation.delimiter.array.begin.flowtype
//                     ^ punctuation.delimiter.array.begin.flowtype
//                      ^^^^^^ support.flowtype
//                      ^^^^^^ entity.name.type.flowtype
//                            ^ punctuation.delimiter.array.flowtype
//                             ^^^^^^ support.flowtype
//                             ^^^^^^ entity.name.type.flowtype
//                                   ^ punctuation.delimiter.array.end.flowtype
//                                    ^ punctuation.delimiter.array.end.flowtype
//                                      ^ keyword.operator.other.assignment.js.fjsx15
//                                        ^ punctuation.delimiter.array.begin.js.fjsx15
//                                         ^ punctuation.delimiter.array.begin.js.fjsx15
//                                          ^ constant.numeric.decimal.js.fjsx15
//                                           ^ punctuation.delimiter.array.js.fjsx15
//                                            ^ constant.numeric.decimal.js.fjsx15
//                                             ^ punctuation.delimiter.array.end.js.fjsx15
//                                              ^ punctuation.delimiter.array.end.js.fjsx15
//                                               ^ keyword.operator.other.terminator.js.fjsx15
    function foo([a=0,...b=0]){}
//  ^^^^^^^^ keyword.declaration.function.js.fjsx15
//           ^^^ entity.name.function.js.fjsx15
//              ^ punctuation.delimiter.function.parameters.begin.js.fjsx15
//               ^ destructuring.array.js.fjsx15
//               ^ punctuation.delimiter.array.begin.js.fjsx15
//                ^ entity.name.variable.js.fjsx15
//                 ^ keyword.operator.other.assignment.js.fjsx15
//                  ^ constant.numeric.decimal.js.fjsx15
//                   ^ destructuring.array.js.fjsx15
//                   ^ punctuation.delimiter.array.js.fjsx15
//                    ^^^ keyword.operator.other.rest.js.fjsx15
//                       ^ entity.name.variable.js.fjsx15
//                        ^ keyword.operator.other.assignment.js.fjsx15
//                         ^ constant.numeric.decimal.js.fjsx15
//                          ^ destructuring.array.js.fjsx15
//                          ^ punctuation.delimiter.array.end.js.fjsx15
//                           ^ punctuation.delimiter.function.parameters.end.js.fjsx15
//                            ^ punctuation.delimiter.function.body.begin.js.fjsx15
//                             ^ punctuation.delimiter.function.body.end.js.fjsx15
    function foo([a=0,...b=0]:[number,number]){}
//  ^^^^^^^^ keyword.declaration.function.js.fjsx15
//           ^^^ entity.name.function.js.fjsx15
//              ^ punctuation.delimiter.function.parameters.begin.js.fjsx15
//               ^ destructuring.array.js.fjsx15
//               ^ punctuation.delimiter.array.begin.js.fjsx15
//                ^ entity.name.variable.js.fjsx15
//                 ^ keyword.operator.other.assignment.js.fjsx15
//                  ^ constant.numeric.decimal.js.fjsx15
//                   ^ destructuring.array.js.fjsx15
//                   ^ punctuation.delimiter.array.js.fjsx15
//                    ^^^ keyword.operator.other.rest.js.fjsx15
//                       ^ entity.name.variable.js.fjsx15
//                        ^ keyword.operator.other.assignment.js.fjsx15
//                         ^ constant.numeric.decimal.js.fjsx15
//                          ^ destructuring.array.js.fjsx15
//                          ^ punctuation.delimiter.array.end.js.fjsx15
//                           ^ keyword.operator.other.association.flowtype
//                            ^ punctuation.delimiter.array.begin.flowtype
//                             ^^^^^^ support.flowtype
//                             ^^^^^^ entity.name.type.flowtype
//                                   ^ punctuation.delimiter.array.flowtype
//                                    ^^^^^^ support.flowtype
//                                    ^^^^^^ entity.name.type.flowtype
//                                          ^ punctuation.delimiter.array.end.flowtype
//                                           ^ punctuation.delimiter.function.parameters.end.js.fjsx15
//                                            ^ punctuation.delimiter.function.body.begin.js.fjsx15
//                                             ^ punctuation.delimiter.function.body.end.js.fjsx15
    function foo([[a=0,...b=0]]){}
//  ^^^^^^^^ keyword.declaration.function.js.fjsx15
//           ^^^ entity.name.function.js.fjsx15
//              ^ punctuation.delimiter.function.parameters.begin.js.fjsx15
//               ^ destructuring.array.js.fjsx15
//               ^ punctuation.delimiter.array.begin.js.fjsx15
//                ^ destructuring.array.js.fjsx15
//                ^ punctuation.delimiter.array.begin.js.fjsx15
//                 ^ entity.name.variable.js.fjsx15
//                  ^ keyword.operator.other.assignment.js.fjsx15
//                   ^ constant.numeric.decimal.js.fjsx15
//                    ^ destructuring.array.js.fjsx15
//                    ^ punctuation.delimiter.array.js.fjsx15
//                     ^^^ keyword.operator.other.rest.js.fjsx15
//                        ^ entity.name.variable.js.fjsx15
//                         ^ keyword.operator.other.assignment.js.fjsx15
//                          ^ constant.numeric.decimal.js.fjsx15
//                           ^ destructuring.array.js.fjsx15
//                           ^ punctuation.delimiter.array.end.js.fjsx15
//                            ^ destructuring.array.js.fjsx15
//                            ^ punctuation.delimiter.array.end.js.fjsx15
//                             ^ punctuation.delimiter.function.parameters.end.js.fjsx15
//                              ^ punctuation.delimiter.function.body.begin.js.fjsx15
//                               ^ punctuation.delimiter.function.body.end.js.fjsx15
    function foo([[a=0,...b=0]]:[[number,number]]){}
//  ^^^^^^^^ keyword.declaration.function.js.fjsx15
//           ^^^ entity.name.function.js.fjsx15
//              ^ punctuation.delimiter.function.parameters.begin.js.fjsx15
//               ^ destructuring.array.js.fjsx15
//               ^ punctuation.delimiter.array.begin.js.fjsx15
//                ^ destructuring.array.js.fjsx15
//                ^ punctuation.delimiter.array.begin.js.fjsx15
//                 ^ entity.name.variable.js.fjsx15
//                  ^ keyword.operator.other.assignment.js.fjsx15
//                   ^ constant.numeric.decimal.js.fjsx15
//                    ^ destructuring.array.js.fjsx15
//                    ^ punctuation.delimiter.array.js.fjsx15
//                     ^^^ keyword.operator.other.rest.js.fjsx15
//                        ^ entity.name.variable.js.fjsx15
//                         ^ keyword.operator.other.assignment.js.fjsx15
//                          ^ constant.numeric.decimal.js.fjsx15
//                           ^ destructuring.array.js.fjsx15
//                           ^ punctuation.delimiter.array.end.js.fjsx15
//                            ^ destructuring.array.js.fjsx15
//                            ^ punctuation.delimiter.array.end.js.fjsx15
//                             ^ keyword.operator.other.association.flowtype
//                              ^ punctuation.delimiter.array.begin.flowtype
//                               ^ punctuation.delimiter.array.begin.flowtype
//                                ^^^^^^ support.flowtype
//                                ^^^^^^ entity.name.type.flowtype
//                                      ^ punctuation.delimiter.array.flowtype
//                                       ^^^^^^ support.flowtype
//                                       ^^^^^^ entity.name.type.flowtype
//                                             ^ punctuation.delimiter.array.end.flowtype
//                                              ^ punctuation.delimiter.array.end.flowtype
//                                               ^ punctuation.delimiter.function.parameters.end.js.fjsx15
//                                                ^ punctuation.delimiter.function.body.begin.js.fjsx15
//                                                 ^ punctuation.delimiter.function.body.end.js.fjsx15

[a,b] = [1,2];
