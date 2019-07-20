/*
 * @Desc:
 * @Author: ykst
 * @Date: 2019-07-20 23:10:44
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-20 23:12:28
 */
export function getAjaxRequest(): Promise<JasmineAjaxRequest> {
  return new Promise(function(resolve) {
    setTimeout(() => {
      return resolve(jasmine.Ajax.requests.mostRecent())
    }, 0)
  })
}
