/**
 * 清空session
 * @param {function} fn 回调
 */
export const clearSession = function (fn) {
    sessionStorage.clear();
    fn && fn()
}

/**
 * 设置session
 * @param {string} key 
 * @param {string} value 
 */
export const setSession = function (key, value) {
    sessionStorage.setItem(key, value)
}

/**
 * 获取session
 * @param {string} key 
 */
export const getSession = function (key) {
    return sessionStorage.getItem(key)
}


/**
 * 设置cookie
 * @param {string} cookie
 * @param {string} expires
 * @param {string} path
 */
export const setCookie = function (cookie, expires = "", path = "/") {
    document.cookie = `${cookie}; expires=${new Date(expires).toGMTString()}; path=${path}`;
}

/**
 * 删除名称name的cookie
 * @param {string} name cookie名
 */
export const delCookie = function (name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export const getCookie = function (name) {
    var cname = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
    }
    return "";
}