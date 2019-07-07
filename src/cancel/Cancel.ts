/*
 * @Desc:
 * @Author: ykst
 * @Date: 2019-07-07 14:13:33
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-07 14:17:19
 */
export default class Cancel {
  message?: string

  constructor(message?: string) {
    this.message = message
  }
}

export function isCancel(value: any): boolean {
  return value instanceof Cancel
}
