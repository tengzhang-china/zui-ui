import Vue from "vue";
import { verifyType } from './rules';
let jsyaml = require("js-yaml");
import x2js from "x2js";

/**
 * 复制
 * @param {string} text 
 */
export const doCopy = function (text) {
    let dom = document.createElement("input")
    document.body.appendChild(dom)
    dom.value = text;
    dom.select();
    document.execCommand("Copy");
    dom.remove();
}

/**
 * 深层拷贝
 * @param {any} params 
 */
export const doDeepCopy = function (params) {
    const type = verifyType(params);
    let res = null;
    if (type === 'Array') {
        res = []
    } else if (type === 'Object') {
        res = {}
    } else {
        return params
    }
    for (var key in params) {
        const copyType = verifyType(params[key]);

        switch (copyType) {
            case "Array": ;
            case "Object": res[key] = doDeepCopy(params[key]); break;
            case "Function": res[key] = params[key]; break;
            default: if (params.hasOwnProperty && params.hasOwnProperty(key)) res[key] = params[key]; break;
        }
    }
    return res
}

/**
 * 合并对象
 */
export const mergeObject = function () {
    return Object.assign({}, ...arguments)
}

/**
 * 深层合并两个对象
 */
export const deepMergeObject = function (obj1, obj2) {
    for (var key in obj2) {
        obj1[key] = obj1[key] && obj1[key].toString() === "[object Object]" ?
            deepMergeObject(obj1[key], obj2[key]) : obj1[key] = obj2[key];
    }
    return obj1;
}


/**
 * 防抖
 * @param {*} fn 回调函数
 * @param {*} wait 等待时长
 */
export const debounce = function (fn, wait = 600) {
    let debounce_timer = null;
    return function () {
        debounce_timer !== null && clearTimeout(debounce_timer)
        debounce_timer = setTimeout(() => {
            fn.call(this, ...arguments)
        }, wait);
    }
}

/**
 * 节流
 * @param {Function} fn 回调函数
 * @param {number} wait 等待时长
 */
export const throttle = function (fn, wait = 200) {
    let throttle_timer = null;
    return async function () {
        if (!throttle_timer) {
            throttle_timer = true;
            await fn.call(this, ...arguments);
            throttle_timer = setTimeout(() => {
                throttle_timer = null
            }, wait);
        }
    }
}

/**
 * 日期格式化
 * @param {*} dataTime 
 * @param {*} foramteStyle 
 */
export const formatDate = function (dataTime, foramteStyle) {
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
 * 去掉空格
 * @param string str 
 * @param number type: 1-所有空格 2-前后空格 3-前空格 4-后空格 
 */
export const trim = (str, type = 1) => {
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}

/**
 * 通过key扁平化数组arr
 * @param {Array} arr 
 * @param {string} key 
 * @param {Array} res
 */
export const flatArray = function (arr, key = "children", res = [], deleteOld = true) {
    for (var item of arr) {
        if (!item) continue;
        let copyItem = doDeepCopy(item);
        if (deleteOld) delete copyItem[key]
        res.push(copyItem)
        if (item[key] && Array.isArray(item[key])) {
            flatArray(item[key], key, res, deleteOld)
        }
    }
    return res
}


/**
 * 扁平数据处理成树形数据 通过key匹配，子项放在children字段中
 * @param {Array} arr 待转换数组
 * @param {String} initValue 当前pid
 * @param {String} id id的key
 * @param {String} pId pId的key
 */
export const transferTreeData = function (arr, initValue, id = 'id', pId = 'pId') {
    let res = [];
    if (arr.length === 0) return res;
    for (let item of arr) {
        if (item && item[pId] === initValue) {
            let children = transferTreeData(arr, item[id], id, pId);
            item.children = children;
            res.push(item)
        }
    }
    return res
}

/**
 * 获取简单数组中满足exp的第一个值并且返回
 * @param {Array} arr 
 * @param {exp} exp 
 */
export const getArrayValue = function (arr) {
    return arr.find(val => val !== undefined)
}

export const setBus = function () {
    return Vue.prototype._bus || new Vue()
}

/**
 * 非空判断，判断对象是否为空字符串、null、undefined等
 * @param {Object} obj
 */
export const verifyNotNull = function (obj) {
    if (obj === null || typeof obj == "undefined" || obj === '') {
        return false;
    }
    return true;
}

/**
 * 删除数组指定位置的元素
 * @param {Array} arr
 * @param {number} index
 */
export const deleteByIndex = function (arr, index) {
    if (index > -1 && index < arr.length) {
        arr.splice(index, 1);
    }
    return arr
}

/**
 * 删除数组指定元素值
 * @param {Array} arr
 * @param {string} val
 */
export const deleteByValue = function (arr, val) {
    var index = arr.indexOf(val);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr
}

/**
 * 删除对象数组指定的某个属性值的元素
 * @param {Array} arr
 * @param {string} key
 * @param {*} val
 */
export const deleteByKeyValue = function (arr, key, val) {
    var index = -1;
    for (var i in arr) {
        if (arr[i][key] == val) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr
}

/**
 * 获取组件结构，支持require,()=>import()
 */
export const getComponent = async function (component) {
    let res = null;
    if (verifyType(component) === "Function") {
        res = await component()
    } else {
        res = component
    }

    return res.default || res
}

/**
 * ymal数据转换json数据方法
 * @param {*} yamlVar   yaml数据
 */
export const YamlToJson = function (yamlVar) {
    if (yamlVar) {
        return jsyaml.load(yamlVar)
    }
}
/**
 * json数据转换yaml数据方法
 * @param {*} json   yaml数据
 */
export const JsonToYaml = function (json) {
    if (json) {
        try {
            return jsyaml.dump(json);
        } catch (e) {
            alert(e)
        }
    }
}

/**
 * 登记store子模块
 * @param {object} vueInstance vue实例
 * @param {object} module 待登记模块 {name} 通过name登记名
 */
export const registerModule = function (vueInstance, module) {
    if (!module.name) throw new Error("带登记模块需要有name属性，并且name保持单一")
    if (!vueInstance.$store.state.tongBreadDialog) vueInstance.$store.registerModule(module.name, module);
}


/**
 * xml 转 json
 * @param {*} xml 
 */
export const xmlToJson = function (xml) {
    return new x2js().xml2js(xml)
}

/**
 * json转xml
 * @param {*} json 
 * @returns 
 */
export const jsonToXml = function (json) {
    return new x2js().js2xml(json)
}

/**
 * 获取所有的父级
 * @param {*} arr 数组 
 * @param {*} value 
 * @param {string} idKey id的key
 * @param {string} childKey children的key
 */
export const getParents = function (arr, value, idKey = "id", childKey = "children") {
    if (value === undefined) return [];

    let res = [];
    for (var i in arr) {
        if (arr[i][idKey] == value) {
            res.push(arr[i])
            return res.concat(getParents(arr, arr[i].pid, idKey, childKey))
        }
    }
    return res;
}

/**
 * 获取数据所有子集
 * @author 胡思琪
 * @time 2020-11-16
 *
 * @param {*} arr 
 * @param {*} value 
 * @param {*} idKey 
 * @param {*} childKey 
 * @param {*} res 
 */
export const getChild = function (arr, value, idKey = "id", childKey = "children", res = []) {
    for (let el of arr) {
        if (el[idKey] === value) {
            if (el[childKey]) {
                res.push(...flatArray(el[childKey], []));
            }
        } else if (el[childKey]) {
            getChild(el[childKey], value, idKey, childKey, res);
        }
    }
    return res;
}

/**
 * axios同步处理
 */
export const commonAxios = {
    list: [],//请求列表
    index: -1,//当前正在执行
    add(fn) {
        this.list.push(fn);
        if (this.index === -1) {
            this.index = 0;
            this.start()
        }
    },
    async start() {
        if (this.list[this.index]) {
            await this.list[this.index]();
            this.index++;
            await this.start();
        } else {
            console.log("commonAxios done");
            this.init();
        }
    },

    init() {
        this.index = -1;
        this.list = [];
    }
}

/**
 * 获取首字母
 * @param {*} str 
 */
export const getFirstWord = function (str) {
    str = String(str);
    if (/.*?([\u4E00-\u9FA5])/.test(str[0])) {
        return getFirstWord_cn(str)
    } else {
        return str[0]
    }
}
function getFirstWord_cn(str) {
    if (!String.prototype.localeCompare) return "浏览器不支持";
    let letters = "*abcdefghjklmnopqrstwxyz".split('');
    let zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫在".split('');
    for (let i in letters) {
        if ((!zh[i - 1] || zh[i - 1].localeCompare(str) <= 0) && str.localeCompare(zh[i]) == -1) {
            return letters[i]
        }
    }
}

/**
 * 下载文件流
 * @param {*} res 流
 * @param {*} name 文件名
 * @param {*} type 文件格式 1=xlsx
 */
export const downloadBlob = function (res, name = "", type = "1") {
    let fileType = {
        "1": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    }
    let blob = new Blob([res], {
        type: fileType[type]
    }); // res为接口返回的文件流 设置下载格式.xlsx
    let objectUrl = URL.createObjectURL(blob);
    // let link = document.createElement("a");
    // link.href = objectUrl;
    // link.download = name; // 自定义文件名
    // link.click(); // 下载文件

    downloadUrl(objectUrl, name);

    URL.revokeObjectURL(objectUrl); // 释放内存
}

export const downloadUrl = function (url, name = "") {
    let link = document.createElement("a");
    link.href = url;
    link.download = name; // 自定义文件名
    link.click(); // 下载文件
}