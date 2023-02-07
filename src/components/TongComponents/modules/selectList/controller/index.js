// modules/selectList 中使用

/**
 * 系统列表
 * @param {string} ip
 */

 //系统下拉选
export const systemList = async function(ip){
   return this.$axios.post(ip+"/servers/aab/bussystem/sysview/v2/list",{type:1})
}
//域下拉选
export const domainList = async function(ip){
   return this.$axios.post(ip+"/servers/aab/serdomain/domview/v2/list",{type:1})
}

//Schema下拉选
export const schemaList = async function(ip,dsId){
   return this.$axios.post(ip+"/servers/aam/dsrmdb/schview/v2/list", {dsId})
}

//数据源下拉选(关系型数据源)
export const dataSourceList = async function(ip){
   return this.$axios.post(ip+"/servers/aam/dsrmdb/rmdbview/v2/list",{type: 1,
      ifacm: 1,
      ifApply: 1
   })
}

//数据源下拉选(文档型数据源)
export const dataSourceList2 = async function(ip){
   return this.$axios.post(ip+"/servers/aam/dsdoc/docview/v2/list", {type: 1,
      ifacm: 1,
      ifApply: 1})
}

//数据源下拉选(列式型数据源)
export const dataSourceList3 = async function(ip){
   return this.$axios.post(ip+"/servers/aam/dscol/colview/v2/list", {type: 1,
      ifacm: 1,
      ifApply: 1})
}

//数据库下拉选列表
export const dataBaseList = async function(ip,dsId){
   return this.$axios.post(ip+"/servers/aam/dsrmdb/rmdbview/v2/detail", {dsId})
}

//分类树tree数据
export const classTreeList = async function(ip){
   return this.$axios.post(ip+"/auth/aaa/resource/instance/v1/tree", {schemaId: "3re7",
   sortField: "sortId",
   sortType: 1})
}