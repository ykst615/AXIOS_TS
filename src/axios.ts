/*
 * @Author: ykst
 * @Date: 2019-07-04 22:19:47
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-06 17:06:13
 */
import { AxiosInstance, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'

function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  // 这里有必要绑定绑定context吗 ? 我觉得没必要
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance(defaults)

export default axios
