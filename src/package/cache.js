/**
 * Created by otherlite on 2016/5/27.
 *
 */
import {config} from './config'

const cache = {
    /**
     * 设置缓存
     */
  setCache (key, value, opt) {
    let {affix} = {
      ...config,
      ...opt
    }
    localStorage.setItem(`${key}${affix}`, value)
  },
    /**
     * 获取缓存
     */
  getCache (key, opt) {
    let {affix} = {
      ...config,
      ...opt
    }
    return localStorage.getItem(`${key}${affix}`)
  },
    /**
     * 移除缓存
     */
  removeCache (key, opt) {
    let {affix} = {
      ...config,
      ...opt
    }
    localStorage.removeItem(`${key}${affix}`)
  },
    /**
     * 清空所有缓存
     */
  clearCache () {
    localStorage.clear()
  }
}

export let setCache = cache.setCache
export let getCache = cache.getCache
export let removeCache = cache.removeCache
export let clearCache = cache.clearCache

export default cache
