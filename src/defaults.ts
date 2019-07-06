/*
 * @Author: ykst
 * @Date: 2019-07-06 16:38:17
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-06 21:52:59
 */
import { AxiosRequestConfig } from './types'

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json,text/plain,*/*'
    }
  }
}

const methodsNodeData = ['delete', 'get', 'head', 'options']

methodsNodeData.forEach(method => {
  defaults.headers[method] = {}
})

const methodsWithData = ['post', 'put', 'patch']

methodsWithData.forEach(method => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaults
