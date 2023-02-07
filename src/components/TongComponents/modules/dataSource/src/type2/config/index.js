export const URL = {
    dataSource: "/servers/aam/metadata/treeview/v2/list",//源和库
    schema: "/servers/aam/dsrmdb/schview/v2/list",
    tables: "/servers/aam/dsrmdb/defview/v2/list",//查表
}


export const CONFIG_SELECT = {
    placeholder: "请选择",
    labelKey: "dbTypeName",
    valueKey: "dbType",
    filterable:true,
    clearable:true
}

export const CONFIG_INPUT = {
    placeholder: "模糊匹配",
}

export const CONFIG_TREE = {
    treeData: [],
    showCheckbox:true,
    lazy: true,
    nodeKey: "id",
    defaultProps: { label: "label", children: "children",isLeaf:"isLeaf"},
}