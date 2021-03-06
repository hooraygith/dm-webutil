/**
 * Created by otherlite on 2016/5/4.
 */
import CryptoJS from './Cryptojs/enc-base64-min'

const base64 = {
    // base64编码
    encode(data) {
        if (typeof data === 'object') {
            data = JSON.stringify(data)
        }
        var str = CryptoJS.enc.Utf8.parse(data)
        return CryptoJS.enc.Base64.stringify(str)
    },
    // base64解码
    decode(str) {
        var words = CryptoJS.enc.Base64.parse(str)
        return words.toString(CryptoJS.enc.Utf8)
    },
    // base64解码&&JSON.parse
    decodeJson(str) {
        var words = CryptoJS.enc.Base64.parse(str)
        return (JSON.parse(words.toString(CryptoJS.enc.Utf8)))
    }
}

export let encode = base64.encode
export let decode = base64.decode
export let decodeJson = base64.decodeJson
export default base64
