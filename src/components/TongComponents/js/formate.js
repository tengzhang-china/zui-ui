import { verifyType } from './rules';

/**
 * 格式化json
 * @param {string} str 
 */
export const formateJson = function (str = "") {
    return JSON.stringify(verifyType(str, 'Object') ? str : JSON.parse(str), null, '\t')
}

/**
 * 日期格式化
 * @param {*} dataTime 
 * @param {*} foramteStyle 
 */
export const formateDate = function (dataTime, foramteStyle) {
    dataTime = new Date(dataTime);
    var obj = {
        yyyy: dataTime.getFullYear(),
        yy: ("" + dataTime.getFullYear()).slice(-2),
        MM: ("0" + (dataTime.getMonth() + 1)).slice(-2),
        M: dataTime.getMonth() + 1,
        dd: ("0" + dataTime.getDate()).slice(-2),
        d: dataTime.getDate(),
        HH: ("0" + dataTime.getHours()).slice(-2),
        H: dataTime.getHours(),
        hh: ("0" + (dataTime.getHours() % 12)).slice(-2),
        h: dataTime.getHours() % 12,
        mm: ("0" + dataTime.getMinutes()).slice(-2),
        m: dataTime.getMinutes(),
        ss: ("0" + dataTime.getSeconds()).slice(-2),
        s: dataTime.getSeconds(),
        w: ["日", "一", "二", "三", "四", "五", "六"][dataTime.getDay()]
    };
    return foramteStyle.replace(/([a-z]+)/gi, function ($1) {
        return obj[$1];
    });
}

/**
 * 转换成时间戳
 * @param {*} time 
 */
export const formateTimestamp = function (time) {
    return new Date(time).getTime();
}

import formateXmlStr from "./formateXml.js";
/**
 * 格式化xml
 * @param {string} xmlStr 
 */
export const formateXml = formateXmlStr;