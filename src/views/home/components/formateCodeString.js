import { doDeepCopy } from "tong-zui-ui/js/usual"

/**
 * 拼接vue文本
 * @param {object} info {codeConfig,fileName,type}
 */
export const formateCodeString = function (info) {
  return `<template>
    ${(info.codeConfig.codeComponent.template || info.codeConfig.template).replace(/\s+/g," ").split(" ").join("\n      ")}
</template>

<script>
import {${info.fileName}} from "tong-zui-ui/${['modules','charts','canvas2d'].indexOf(info.type)>-1?(info.type + "/"):""}index";
${info.codeConfig.imports.join(";")}
export default {
    components:{${info.codeConfig.components?info.codeConfig.components.join(","):info.fileName+","}${info.codeConfig.imports.map(val=>val.match(/{.*?}/)[0].slice(1,-1)).join(",")}}${formateData(info)}${formateWatch(info)}${formateMethods(info)}${formateLife(info,'created')}${formateLife(info,'mounted')}
}
<\/script>
`
}

let beautifyJs = require("js-beautify").js;

const formateData = function (info) {
  if (!info.codeConfig.codeComponent.data) {
    info.codeConfig.codeComponent.data = function () { return {} }
  }
  return ",\n    data:" + beautifyJs(String(info.codeConfig.codeComponent.data).replace(/function\s(.*?)\(/g, "function("),{indent_level:1}).replace(/\s+/, '')
}


const formateMethods = function (info) {
  let methods = doDeepCopy(info.codeConfig.codeComponent.methods);
  let keyArr = Object.keys(methods);
  keyArr.map(key => { methods[key] = String(methods[key]) })
  return `${(keyArr.length > 0 &&
      `,\n    methods:{
        ${keyArr
        .map((key) => `${key}:${beautifyJs(methods[key],{indent_size:4,indent_level:2}).replace(/\s+/, '').replace(key, '')}`)
        .join(",\n        ")}
   }`) || ""}`
}

/**
 * 格式化生命周期
 * @param {*} info 
 * @param {*} type created mounted ...
 * @returns 
 */
const formateLife = function(info,type='created'){
  if (!info.codeConfig.codeComponent[type]) {
    info.codeConfig.codeComponent[type] = function () {}
  }
  return `,\n    ${type}:` + beautifyJs(String(info.codeConfig.codeComponent[type]).replace(/function\s(.*?)\(/g, "function("),{indent_level:1}).replace(/\s+/, '')
}

/**
* @author MasterYi 2022-01-04
* @description   格式化 watch
*/
const formateWatch = function (info) {
  if (!info.codeConfig.codeComponent.watch) {
    info.codeConfig.codeComponent.watch = {}
  }
  let watchs = doDeepCopy(info.codeConfig.codeComponent.watch);
  let keyArr = Object.keys(watchs);
  keyArr.map(key => { watchs[key] = String(watchs[key]) })
  return `${(keyArr.length > 0 &&
    `,\n    watch:{
      ${keyArr
      .map((key) => `${key}:${beautifyJs(watchs[key],{indent_size:4,indent_level:1}).replace(/\s+/, '').replace(key, '')}`)
      .join(",\n        ")}
 }`) || ""}`
  
}