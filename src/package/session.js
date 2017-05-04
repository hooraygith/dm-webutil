/**
 * Created by otherlite on 2016/5/27.
 *
 */
import {config} from './config'

const session = {
    /**
     * 设置缓存
     */
    setSession(key, value, opt) {
        let {affix} = {
            ...config,
            ...opt
        };
        sessionStorage.setItem(`${key}${affix}`, value);
    },
    /**
     * 获取缓存
     */
    getSession(key, opt) {
        let {affix} = {
            ...config,
            ...opt
        };
        return sessionStorage.getItem(`${key}${affix}`);
    },
    /**
     * 移除缓存
     */
    removeSession(key, opt) {
        let {affix} = {
            ...config,
            ...opt
        };
        sessionStorage.removeItem(`${key}${affix}`);
    },
    /**
     * 清空所有缓存
     */
    clearSession() {
        sessionStorage.clear()
    }
};

export let setSession = session.setSession;
export let getSession = session.getSession;
export let removeSession = session.removeSession;
export let clearSession = session.clearSession;

export default session;