/**
 * Created by otherlite on 2016/3/15.
 */

let expiresTime = (day) => { // 获取过期时间
    var exp = new Date()
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000)
    return exp.toUTCString()
}

const cookie = {
    getAllCookie() { // 获取所有cookie
        if (!document.cookie) return {}

        let cookies = document.cookie.split('; ')
        let result = {}

        for (let cookie of cookies) {
            let index = cookie.indexOf('=')
            result[decodeURIComponent(cookie.substr(0, index))] = decodeURIComponent(cookie.substr(index + 1))
        }
        return result
    },
    // 获取指定cookie
    getCookie(key, opt) { // 获取指定cookie
        let {affix} = {
            ...this.config,
            ...opt
        }
        return cookie.getAllCookie()[`${key}${affix}`]
    },
    // 设置cookie
    setCookie(key, value, opt) {
        let {affix, domain, path, exp_day} = {
            ...this.config,
            ...opt
        }
        let str = `${key}${affix}=${encodeURIComponent(value)};path=${path};expires=${expiresTime(exp_day)};`
        if (domain !== 'localhost') {
            str += `domain=${domain};`
        }
        document.cookie = str
    },
    // 删除cookie
    delCookie(key, opt) {
        let {affix, domain, path} = {
            ...this.config,
            ...opt
        }
        let str = `${key}${affix}=0;expires=${new Date(0).toUTCString()};path=${path};domain=${domain};`
        document.cookie = str
    }
}

export let getCookie = cookie.getCookie
export let setCookie = cookie.setCookie
export let delCookie = cookie.delCookie
export default cookie
