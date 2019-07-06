/*
 * @Desc:
 * @Author: ykst
 * @Date: 2019-07-06 22:35:17
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-06 22:37:48
 */
import { AxiosTransformer } from '../types'

export default function transform(
  data: any,
  headers: any,
  fns: AxiosTransformer | AxiosTransformer[]
): any {
  if (!fns) {
    return data
  }

  if (!Array.isArray(fns)) {
    fns = [fns]
  }
  fns.forEach(fn => {
    data = fn(data, headers)
  })
  return data
}
