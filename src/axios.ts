/*
 * @Author: ykst
 * @Date: 2019-07-04 22:19:47
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-06 00:13:08
 */
import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxiosInstance {
  const context = new Axios()
  // 这里有必要绑定绑定context吗 ? 我觉得没必要
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
