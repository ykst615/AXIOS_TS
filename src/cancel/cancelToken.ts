/*
 * @Desc:
 * @Author: ykst
 * @Date: 2019-07-07 00:42:50
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-07 15:02:20
 */
import { CancelExecutor, CancelTokenSource, Canceler } from '../types'
import Cancel from './Cancel';

interface ResolvePromise {
  (reason?: Cancel): void
}

export default class CancelToken {
  static source(): CancelTokenSource {
    let cancel!: Canceler
    const token = new CancelToken(c => {
      cancel = c
    })
    return {
      cancel,
      token: token,
    }
  }

  promise: Promise<Cancel>
  reason?: Cancel

  constructor(executor: CancelExecutor) {
    let resolvePromise: ResolvePromise
    this.promise = new Promise<Cancel>(resolve => {
      resolvePromise = resolve
    })

    executor(message => {
      if (this.reason) {
        return
      }
      this.reason = new Cancel(message)
      resolvePromise(this.reason)
    })
  }

  throwIfRequested() {
    if(this.reason) {
      throw this.reason
    }
  }
}
