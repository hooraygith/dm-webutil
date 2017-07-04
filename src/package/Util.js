import {bug, bugInit} from './error'
import md5 from './md5/md5'
import {encode, decode, decodeJson} from './base64/base64'
import {getCookie, setCookie, delCookie} from './cookie'
import {setSession, getSession, delSession, clearSession} from './session'
import {setCache, getCache, delCache, clearCache} from './cache'

class Util {
  constructor (config) {
    this.config = config
    Object.assign(this, {
      bug,
      bugInit,
      md5,
      encode,
      decode,
      decodeJson,
      // cookie
      getCookie,
      setCookie,
      delCookie,
      // cache
      setCache,
      getCache,
      delCache,
      clearCache,
      // session
      setSession,
      getSession,
      delSession,
      clearSession
    })
  }
  createInstance (config) {
    return new Util(Object.assign(this.config, config))
  }
}

export default Util
