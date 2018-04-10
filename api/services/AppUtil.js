/**
 * 常用工具类
 */
const crypto = require('crypto');

class AppUtil {
    /**
    * 非空验证
    * @param args 传入需要验证的参数
    */
    static emptyVaild(...args) {
        let empty = false;
        for (let e of args) {
            if (e !== 0 && !e) {
                empty = true;
                break;
            }
        }
        return empty;
    }

    /**
    * 判断相等
    * @param str  传入需要验证的2个参数
    */
    static equalVaild(str1, str2) {
        let equal = false;
        if (str1 === str2) {
            equal = true;
        }
        return equal;
    }

    /**
    * 生成sha256加密
    * @param arg  传入需要hash的参数
    */
    static createSha256(arg) {
        let sha256 = crypto.createHash('sha256');
        return sha256.update(arg).digest('hex');
    }

    /**
     * 取小数点后两位
     * @param arg  传入需要的参数
     */
    static decimalTwo(arg) {
        return arg.toFixed(2);
    }
}

module.exports = AppUtil;