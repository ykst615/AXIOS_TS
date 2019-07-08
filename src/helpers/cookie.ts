/*
 * @Desc:
 * @Author: ykst
 * @Date: 2019-07-07 22:48:50
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-07 22:54:32
 */
const cookie = {
  read(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'))
    return match ? decodeURIComponent(match[3]) : null
  }
}

export default cookie
