/**
 * Created by otherlite on 2016/7/3.
 */
import './package/pushstream'
import {init} from './package/config'
import {bug, bugInit} from './package/error'
import md5 from './package/md5/md5'
import {encode, decode} from './package/base64/base64'
import {getCookie, setCookie, delCookie} from './package/cookie'
import {setSession,getSession,removeSession,clearSession} from './package/session'
import {setCache,getCache,removeCache,clearCache} from './package/cache'

module.exports = {
    //设置config
    init,
    //error收集
    bug,bugInit,
    //md5加密
    md5,
    //base64
    encode, decode,
    //cookie
    getCookie, setCookie, delCookie,
    //cache
    setCache, getCache, removeCache, clearCache,
    //session
    setSession, getSession, removeSession, clearSession
};

