import util from '../src/index'

console.log(util)

const webutil = util.createInstance({
    affix: '-dmwebutiltest'
})

// md5
console.log(webutil.md5('aaaaa'))

// base64
let base64Str = `{str:'我是base64字符串'}`
console.log(webutil.encode(base64Str))
console.log(webutil.decode(webutil.encode(base64Str)))
console.log(webutil.decodeJson(webutil.encode({
    a: '123'
})))

// cookie
webutil.setCookie('a', '我是cookie a值')
console.log(webutil.getCookie('a'))
webutil.delCookie('a')
console.log(webutil.getCookie('a'))

// session
webutil.setSession('a', '我是session a值')
webutil.setSession('b', '我是session b值')
console.log(webutil.getSession('a'))
webutil.delSession('a')
console.log(webutil.getCookie('a'))
webutil.clearSession()
console.log(webutil.getSession('b'))

// cache
webutil.setCache('a', '我是cache a值')
webutil.setCache('b', '我是cache b值')
console.log(webutil.getCache('a'))
webutil.delCache('a')
console.log(webutil.getCache('a'))
webutil.clearCache()
console.log(webutil.getCache('b'))
