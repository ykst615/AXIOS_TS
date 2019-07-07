/*
 * @Desc:
 * @Author: ykst
 * @Date: 2019-07-07 15:13:00
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-07 15:26:12
 */
import axios, { Canceler } from '../../src/index'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios
  .get('/cancel/get', {
    cancelToken: source.token
  })
  .catch(error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message)
    }
  })

setTimeout(() => {
  source.cancel('Operation canceled by the user')

  axios.post('/cancel/post', { a: 1 }, { cancelToken: source.token }).catch(function(error) {
    if (axios.isCancel(error)) {
      console.log(error.message)
    }
  })
}, 100)

let cancel: Canceler

axios.get('/cancel/get',{
  cancelToken: new CancelToken(c => {
    cancel = c
  })
}).catch(function(error) {
  if(axios.isCancel(error)) {
    console.log('Request canceled')
  }
})

setTimeout(() => {
  cancel()
}, 200)
