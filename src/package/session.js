/**
 * Created by otherlite on 2016/5/27.
 *
 */
const session = {
    /**
     * 设置缓存
     */
    setSession(key, value, opt) {
        let {
            affix
        } = {
            ...this.config,
            ...opt
        }
        sessionStorage.setItem(`${key}${affix}`, value)
    },
    /**
     * 获取缓存
     */
    getSession(key, opt) {
        let {
            affix
        } = {
            ...this.config,
            ...opt
        }
        return sessionStorage.getItem(`${key}${affix}`)
    },
    /**
     * 移除缓存
     */
    delSession(key, opt) {
        let {
            affix
        } = {
            ...this.config,
            ...opt
        }
        sessionStorage.removeItem(`${key}${affix}`)
    },
    /**
     * 清空所有缓存
     */
    clearSession() {
        sessionStorage.clear()
    }
}

export let setSession = session.setSession
export let getSession = session.getSession
export let delSession = session.delSession
export let clearSession = session.clearSession

export default session
