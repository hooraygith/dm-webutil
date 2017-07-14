
## md5
- 类型: `Function`

- 参数:   
  - (String)[必选]str: 要处理的字符串

- 用法:    

md5处理字符串，返回加密后的字符串，例如 `Util.md5('abc')`

## encode
- 类型: `Function`

- 参数:   
  - (String|object)[必选]data: 要base64编码的数据

- 用法:    

base64编码，返回编码后的字符串，例如 `Util.encode({a:1})`

## decode
- 类型: `Function`

- 参数:   
  - (String)[必选]str: 要base64解码的字符串

- 用法:    

base64解码，返回解码后的结果，例如 `Util.decode('e3N0cjon5oiR5pivYmFzZTY05a2X56ym5LiyJ30=')`
结果为`{str:'我是base64字符串'}`


## decodeJson
- 类型: `Function`

- 参数:   
  - (String)[必选]str: 要base64解码的字符串

- 用法:    

base64解码，返回解码后的json，例如 `Util.decode('e3N0cjon5oiR5pivYmFzZTY05a2X56ym5LiyJ30=')`
结果为`[Object object]`

## getCookie
- 类型: `Function`

- 参数:   
  - (String)[必选]key: key值
  - (Object)[可选]opt: 自定义配置项
    - (String)affix: 后缀

- 用法:    

读取cookie，例如 `Util.getCookie('abc')`

## getCache
- 类型: `Function`

- 参数:   
  - (String)[必选]key: key值
  - (Object)[可选]opt: 自定义配置项
    - (String)affix: 后缀

- 用法:    

读取localStorage，例如 `Util.getCache('abc')`

## getSession
- 类型: `Function`

- 参数:   
  - (String)[必选]key: key值
  - (Object)[可选]opt: 自定义配置项
    - (String)affix: 后缀

- 用法:    

读取SessionStorage，例如 `Util.getSession('abc')`

## setCookie
- 类型: `Function`

- 参数:   
  - (String)[必选]key: key值
  - (String)[必选]value: 要设置的value值
  - (Object)[可选]opt:自定义配置项
    - (String)affix:后缀
    - (String)path:存cookie的路径，默认为'/'
    - (String)domain:存cookie的域名，默认为内部的DOMAIN
    - (String)exp_day:过期时间，默认为内部的EXP_DAY

- 用法:    

设置cookie，例如 `Util.setCookie('abc','123')`

## setCache
- 类型: `Function`

- 参数:   
  - (String)[必选]key: key值
  - (String)[必选]value: 要设置的value值
  - (Object)[可选]opt:自定义配置项
    - (String)affix:后缀

- 用法:    

设置localStorage，例如 `Util.setCache('abc','123')`

## setSession
- 类型: `Function`

- 参数:   
  - (String)[必选]key: key值
  - (String)[必选]value: 要设置的value值
  - (Object)[可选]opt:自定义配置项
    - (String)affix:后缀

- 用法:    

设置SessionStorage，例如 `Util.setSession('abc','123')`

## delCookie
- 类型: `Function`

- 参数:   
  - (String)[必选]key: key值
  - (Object)[可选]config: 自定义配置项
    - (String)affix: 后缀
    - (String)path: 路径
    - (String)domian: 顶级域名

- 用法:    

删除cookie，例如 `Util.delCookie('abc')`

## removeCache
- 类型: `Function`

- 参数:   
  - (String)[必选]key: key值
  - (Object)[可选]opt:自定义配置项
    - (String)affix:后缀

- 用法:    

删除localStorage，例如 `Util.removeCache('abc')`

## removeSession
- 类型: `Function`

- 参数:   
  - (String)[必选]key: key值
  - (Object)[可选]opt:自定义配置项
    - (String)affix:后缀

- 用法:    

删除SessionStorage，例如 `Util.removeSession('abc')`

## clearCache
- 类型: `Function`

- 用法:    

清空localStorage，例如 `Util.clearCache()`

## clearSession
- 类型: `Function`

- 用法:    

清空SessionStorage，例如 `Util.clearSession()`

## createInstance
- 类型: `Function`

- 参数:   
  - (Object)[必选]opt: 配置

- 用法:    

用于继承并重写当前Util，返回一个新的Util实例，例如`Util.createInstance({affix:'-affix'})`
