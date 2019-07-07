/*
 * @Author: ykst
 * @Date: 2019-07-04 22:19:47
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-07 15:01:20
 */
import { AxiosRequestConfig, AxiosStatic } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'
import mergeConfig from './core/mergeConfig'
import CancelToken from './cancel/cancelToken';
import Cancel, { isCancel } from './cancel/Cancel';

function createInstance(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config)
  // 这里有必要绑定绑定context吗 ? 我觉得没必要
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosStatic
}

const axios = createInstance(defaults)

axios.create = function create(config) {
  return createInstance(mergeConfig(defaults, config))
}

axios.CancelToken = CancelToken
axios.Cancel = Cancel
axios.isCancel = isCancel

export default axios
