/**
 * 数据源默认配置
 */
export const CONFIG_SEARCH_SOURCE = {
    placeholder:"请选择数据源",
    filterable:true,
    labelKey:"dsName",
    valueKey:"dsId"
}

/**
 * 表默认配置
 */
export const CONFIG_SEARCH_TABLE = {
    placeholder:"查找表名",
}

export const CONFIG_SEARCH_TREE = {
    nodeKey:"id",
    showCheckbox:true,
    defaultProps:{label:"label",value:"id",isLeaf: 'leaf'},
    renderIcon:function(){return "iconfont tong-icon-table"}
}