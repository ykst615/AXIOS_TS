/*
 * @Desc:
 * @Author: ykst
 * @Date: 2019-07-07 20:17:44
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-08 09:18:58
 */
import axios from '../../src/index'

document.cookie = 'a=b'

// axios.get('/more/get').then(res => {
//   console.log(res)
// })

// axios
//   .post(
//     'http://127.0.0.1:8088/more/server2',
//     {},
//     {
//       withCredentials: true
//     }
//   )
//   .then(res => {
//     console.log(res)
//   })

const instance = axios.create({
  xsrfCookieName: 'XSRF-TOKEN_D',
  xsrfHeaderName: 'X-XSRF-TOKEN_D'
})

instance.get('/more/get').then(res => {
  console.log(res)
})
