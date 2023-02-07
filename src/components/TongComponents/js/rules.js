export const EXP_cellPhone = /^1[3|4|5|6|7|8|9]\d{9}$/;//手机正则
export const EXP_email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;//邮箱正则
export const EXP_phone = /^([0-9]{3,4})?-([0-9]{7,8})$/;//座机: 027-12345685
export const EXP_url = /^http[s]?:\/\//; //url地址
export const EXP_id = /^\d{15}|\d{18}$/; //15|18位数字
export const EXP_width = /^\d+?(px|%)$/; //px,%
export const EXP_ip = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;//ip
export const EXP_ipv4 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/; 
export const EXP_ipv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

/**
 * 正则校验方法
 * @param {*} string   待校验参数
 * @param {*} exp     校验规则
 */
export const  verifyRule = function(string,exp){
    const res = exp.test(string)
    if(!res)console.error(new Error(`入参 ${string} 不符合${EXP_width}`))
    return res
}

/**
 * 校验param是否是type类型,不传type则返回param类型
 * @param {*} param 
 * @param {string} type 
 */
export const verifyType = function(param,type){
    const paramType = Object.prototype.toString.call(param).slice(8,-1);
    return type?type===paramType:paramType
}

/**
 * 校验手机号
 * @param {*} string 
 */
export const verifyCellPhone = function(string){
    return verifyRule(string,EXP_cellPhone);
}

/**
 * 校验邮箱
 * @param {*} string 
 */
export const verifyEmail = function(string){
    return verifyRule(string,EXP_email);
}

/**
 * 校验电话号码
 * @param {*} string 
 */
export const verifyPhone = function(string){
    return verifyRule(string,EXP_phone);
}


/**
 * 校验url
 * @param {*} string 
 */
export const verifyUrl = function(string){
    return verifyRule(string,EXP_url);
}

/**
 * 校验ID
 * @param {*} string 
 */
export const verifyID = function(string){
    return verifyRule(string,EXP_id);
}

/**
 * 校验px|%
 * @param {*} string 
 */
export const verifyWidth = function(string){
    return verifyRule(string,EXP_width);
}
export const verifyIp = function(string){
    return verifyRule(string,EXP_ip);
    }

/**
 * 校验ipv4
 * @param {*} ip 
 */
export const checkIPV4 = function (ip){  
    return verifyRule(ip,EXP_ipv4);
} 

/**
 * 校验ipv6
 * @param {*} ip 
 */
export const checkIPV6 = function (ip){  
    return verifyRule(ip,EXP_ipv6);
} 

