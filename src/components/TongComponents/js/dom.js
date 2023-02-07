/**
 * 判断类名是否存在
 * @param {*} el 
 * @param {*} className 
 */
export const hasClass = (el, className) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

/**
 * 添加类名
 * @param {*} el 
 * @param {*} className 
 */
export const addClass = (el, className) => {
    if (hasClass(el, className)) return
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

/**
 * 删除类名
 * @param {*} el 
 * @param {*} className 
 */
export const removeClass = (el, className) => {
    if (!hasClass(el, className)) return
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
}

/**
 * 获取滚动坐标
 * @param {*} el 
 */
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

/**
 * 滚动回顶部
 */
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

/**
 * 判断超出
 * @param {*} el 
 * @returns Boolean
 */
export const isOverflow = function(el){
    return el.scrollWidth > el.offsetWidth
}