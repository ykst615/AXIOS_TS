/*
 * @Desc:
 * @Author: ykst
 * @Date: 2019-07-02 09:42:56
 * @LastEditors: ykst
 * @LastEditTime: 2019-07-07 22:47:16
 */
import { isDate, isPlainObject } from './util'

interface URLOrigin {
  protocol: string
  host: string
}

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/g, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/g, '[')
    .replace(/%5D/g, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach((key: string) => {
    const val: any = params[key]
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values: any[] = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams: string = parts.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}

export function isURLSameOrigin(requestURL: string): boolean {
  const parsedOrigin = resolvedURL(requestURL)
  return (Object.keys(parsedOrigin) as (keyof URLOrigin)[]).every(key => {
    return parsedOrigin[key] === currentOrigin[key]
  })
}

const urlParsingNode = document.createElement('a')
const currentOrigin = resolvedURL(window.location.href)

function resolvedURL(url: string): URLOrigin {
  urlParsingNode.setAttribute('href', url)
  const { protocol, host } = urlParsingNode
  return {
    protocol,
    host
  }
}
