/*
 * @Desc:
 * @Author: ykst
 * @Date: 2019-07-10 23:31:55
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-20 23:04:09
 */
const JasmineCore = require('jasmine-core')
// @ts-ignore
global.getJasmineRequireObj = function() {
  return JasmineCore
}

require('jasmine-ajax')
