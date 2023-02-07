module.exports = {
    title:"穿梭树",
    desc:"树形穿梭",
    menuOrder:3.1,
    recordList:[
        {
            version:"1.2.11",
            editor:"张腾",
            time:"2022年3月2日10:10:50",
            contentList:[
                "点击按钮，会自动清空原树的选中",
                "增加moveFilterData字段，标识全部移动仅仅移动过滤后的数据"
            ]
        },
        {
            version:"1.1.25",
            editor:"张腾",
            time:"2021年8月25日11:17:57",
            contentList:[
                "修复穿梭树穿梭数据为空的问题",
                "优化穿梭树展开问题",
                "处理穿梭树穿梭treeData警告"
            ]
        },
        {
            version:"1.1.21",
            editor:"张腾",
            time:"2021年7月29日11:39:47",
            contentList:[
                "穿梭树增加全部移动限制（存在禁用的，则全部移动按钮失效）"
            ]
        },
        {
            version:"1.1.16",
            editor:"张腾",
            time:"2021-6-23",
            contentList:[
                "增加过滤字母，首字母排序配置",
            ]
        },
        {
            version:"1.1.8",
            editor:"张腾",
            time:"2021-4-12 15:30",
            contentList:[
                "增加searchShow（是否展示搜索栏）配置"
            ]
        },
        {
            version:"1.1.5",
            editor:"张腾",
            time:"2021-3-27 16:30",
            contentList:[
                "修复统计按钮联动"
            ]
        },
        {
            version:"1.1.3-25",
            editor:"张腾",
            time:"2021-3-15 16:30",
            contentList:[
                "增加height配置项",
                "增加countShow配置显隐右上角计数（仅适用于普通穿梭）"
            ]
        },
        {
            version: "1.1.3-11",
            editor: "张腾",
            time: "2021-3-2 14:30",
            contentList:[
                "新增"
            ]
        }
    ],

    exampleList:[
        {
            title: "展示树",
            desc: "树形结构展示数据,首字母过滤，排序，搜索",

            codeConfig: {
                codeEditorHeight: "510px",
                codeComponent: {
                    template: `<tong-trans-tree :moveFilterData="true" :treeData.sync="treeData" :title="title" :defaultProps="defaultProps" height="120px" nodeKey="oid" :orderChanged="[orderChanged,orderChanged]" :filterShow="filterShow" :filter="[filter,filter]">
                    
    </tong-trans-tree>`,
                    data() {
                        return {
                            title:["leftTitle","rightTitle"],
                            defaultProps:{
                                label:"oName",
                                children:"children"
                            },
                            filterShow:[true,true],
                            treeData:[
                                [{
                                    "oid":300000007,
                                    "rid":300000007,
                                    "cAbb":"后端",
                                    "eAbb":"oamHD",
                                    "idDir":"300000000-300000007",
                                    "oName":"oam后端",
                                    "rTime":"2020-12-21 17:04:38",
                                    "rUName":"guolj",
                                    "status":0,
                                },
                                {
                                    "oid":300000013,
                                    "rid":300000013,
                                    "cAbb":"test111",
                                    "eAbb":"SHIFLTEST",
                                    "idDir":"300000000-300000013",
                                    "oName":"shifltest",
                                    "rTime":"2020-12-21 17:04:38",
                                    "rUName":"guolj",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"0",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000009,
                                    "rid":300000009,
                                    "cAbb":"武汉市局",
                                    "eAbb":"WHSGAJ",
                                    "idDir":"300000000-300000009",
                                    "oName":"武汉市公安局",
                                    "rTime":"2020-12-21 17:04:38",
                                    "rUName":"guolj",
                                    "status":0,
                                    "address":"发展大道特一号",
                                    "description":"武汉市局机关大楼",
                                    "telephoneNumber":"027110",
                                    "businessCategory":"1",
                                    "departmentNumber":"420100",
                                },
                                {
                                    "oid":300000022,
                                    "rid":300000022,
                                    "cAbb":"行业拓展中心",
                                    "eAbb":"HYTZZX",
                                    "idDir":"300000000-300000022",
                                    "oName":"行业拓展中心",
                                    "rTime":"2020-12-21 17:04:38",
                                    "rUName":"guolj",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"0",
                                    "departmentNumber":"产品部",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000014,
                                    "rid":300000014,
                                    "cAbb":"数据计算",
                                    "eAbb":"SJJSYFB",
                                    "idDir":"300000000-300000014",
                                    "oName":"数据计算研发部",
                                    "rTime":"2020-12-21 17:04:38",
                                    "rUName":"guolj",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"1",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000102,
                                    "rid":300000102,
                                    "cAbb":"TongIS",
                                    "eAbb":"TONGIS",
                                    "idDir":"300000000-300000102",
                                    "oName":"TongIS",
                                    "rTime":"2021-01-22 10:37:54",
                                    "rUName":"admin",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"2",
                                    "departmentNumber":"TongIS",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000070,
                                    "rid":300000070,
                                    "cAbb":"风险管理系统",
                                    "eAbb":"RMS",
                                    "idDir":"300000000-300000070",
                                    "oName":"RMS",
                                    "rTime":"2021-01-25 19:47:28",
                                    "rUName":"admin",
                                    "status":0,
                                    "shareFlag":1,
                                    "businessCategory":"1",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000109,
                                    "rid":300000109,
                                    "cAbb":"DXP",
                                    "eAbb":"DXP",
                                    "idDir":"300000000-300000109",
                                    "oName":"DXP",
                                    "rTime":"2021-03-31 17:48:07",
                                    "rUName":"admin",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"2",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000114,
                                    "rid":300000114,
                                    "cAbb":"测试",
                                    "eAbb":"TEST333",
                                    "idDir":"300000000-300000114",
                                    "oName":"test333",
                                    "rTime":"2021-05-19 15:41:02",
                                    "rUName":"admin",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"2",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000115,
                                    "rid":300000115,
                                    "cAbb":"测试1",
                                    "eAbb":"TEST444",
                                    "idDir":"300000000-300000115",
                                    "oName":"test444",
                                    "rTime":"2021-05-19 15:43:56",
                                    "rUName":"admin",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"2",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000116,
                                    "rid":300000116,
                                    "cAbb":"ceshi5",
                                    "eAbb":"TEST555",
                                    "idDir":"300000000-300000116",
                                    "oName":"test555",
                                    "rTime":"2021-05-19 15:48:02",
                                    "rUName":"admin",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"2",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000122,
                                    "rid":300000122,
                                    "cAbb":"sss4",
                                    "eAbb":"SSS4",
                                    "idDir":"300000000-300000122",
                                    "oName":"sss4",
                                    "rTime":"2021-05-20 09:31:00",
                                    "rUName":"admin",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"2",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000123,
                                    "rid":300000123,
                                    "cAbb":"sss5",
                                    "eAbb":"SSS5",
                                    "idDir":"300000000-300000123",
                                    "oName":"sss5",
                                    "rTime":"2021-05-20 09:35:44",
                                    "rUName":"admin",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"2",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000124,
                                    "rid":300000124,
                                    "cAbb":"sss6",
                                    "eAbb":"SSS6",
                                    "idDir":"300000000-300000124",
                                    "oName":"sss6",
                                    "rTime":"2021-05-20 09:40:22",
                                    "rUName":"admin",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"2",
                                    "children":[
                
                                    ]
                                },
                                {
                                    "oid":300000025,
                                    "rid":300000025,
                                    "cAbb":"网关部门",
                                    "eAbb":"GWE",
                                    "idDir":"300000000-300000025",
                                    "oName":"gw额",
                                    "rTime":"2021-07-23 11:02:04",
                                    "rUName":"admin",
                                    "status":0,
                                    "shareFlag":0,
                                    "businessCategory":"1",
                                    "children":[
                
                                    ]
                                }],
                                []
                            ]
                        }
                    },
                    methods: {
                        orderChanged({type,order}){
                            console.log(`点击了${type}排序--${order}`)
                        },
                        filter({type,word}){
                            console.log(`点击了${type}字母--${word}`)
                        }
                    },
                },
            },
        },{
            title: "配置不展示搜索栏",
            desc: "配置 searchShow=[false,false] ",

            codeConfig: {
                codeEditorHeight: "510px",
                codeComponent: {
                    template: `<tong-trans-tree ref="tongTransTree" :treeData.sync="treeData" :title="title" :lazy="true"
                    :load="load" height="120px" nodeKey="id" :defaultProps="{isLeaf:'isLeaf'}" :searchShow="searchShow">
    </tong-trans-tree>`,
                    data() {
                        return {
                            title:["leftTitle","rightTitle"],
                            searchShow:[false,false],
                            treeData:[
                                [
                                  {
                                    id:"1",
                                    label: "label-1",
                                    disabled:true,
                                    children: [
                                      {
                                          id:"1-2",
                                          label: "label-1-2",
                                          children:[{
                                              id:"1-2-1",
                                              label:"label-1-2-1"
                                          }]
                                      },{
                                        id:"1-3",
                                        label: "label-1-3",
                                        children:[{
                                            id:"1-3-1",
                                            label:"label-1-3-1"
                                        }]
                                      },
                                    ],
                                  },
                                  {
                                    id:"2",
                                    label: "label-2",
                                    children:[]
                                  },
                                ],
                                [
                                    {
                                        id:"1",
                                        label: "label-1",
                                        children: [
                                          {
                                              id:"1-1",
                                              label: "label-1-1",
                                          },
                                        ],
                                    },
                                ],
                              ]
                        }
                    },
                    methods:{
                        load(node,resolve){
                            if (node.level === 0) {
                                return resolve(node.data);
                            }else if(node.data.children?.length||node.data.loaded===true){
                                return resolve(node.data.children);
                            }

                            setTimeout(()=>{
                                let list = [{
                                    label:String(new Date().getTime()),
                                    id:String(new Date().getTime()),
                                    isLeaf:true,
                                    loaded:true
                                },{
                                    label:String(new Date().getTime()-1000),
                                    id:String(new Date().getTime()-1000),
                                    isLeaf:true,
                                    loaded:true
                                }]

                                node.data.children = list
                                resolve(list)
                            },200)
                        }
                    }
                },
            },
        }
    ],

    tableList:[
        {
            modelType:"propModel",
            listData:[
                {
                    param:"title",
                    explain:"两边标题设置",
                    type:'array',
                    defaultValue:"['左标题','右标题']"
                },{
                    param:"countShow",
                    explain:"显隐右上角计数（仅适用于普通穿梭）",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param:"search",
                    explain:"左右默认搜索配置,若参数是function就直接执行,否则过滤树",
                    type:"array",
                    defaultValue:"[undefined,undefined]"
                },{
                    param:"searchShow",
                    explain:"是否展示搜索栏",
                    type:"array",
                    default:"[true, true]"
                },{
                    param:"filter",
                    explain:"点击字母执行的函数,若参数是function就直接执行,否则过滤首字母",
                    type:"array",
                    defaultValue:"[undefined,undefined]"
                },{
                    param:"filterShow",
                    explain:"是否展示字母过滤",
                    type:"array",
                    defaultValue:"[undefined,undefined]"
                },{
                    param:"moveFilterData",
                    type:"boolean",
                    explain:"标识全部移动仅仅移动过滤后的数据",
                    defaultValue:"false"
                },{
                    param:"orderChanged",
                    explain:"修改字母排序的回调函数数组",
                    type:"array",
                    defaultValue:"[undefined,undefined]"
                },{
                    param:"nodeKey",
                    explain:"树节点key字段，需要保持唯一",
                    type:"string",
                    defaultValue:"value"
                },{
                    param:"height",
                    explain:"树容器的高度，超出滚动",
                    type:"string",
                    defaultValue:"100%"
                },{
                    param:"treeData",
                    explain:"左右树的起始数据配置,使用.sync修饰符",
                    type:"array",
                    defaultValue:"[[ ],[ ]]"
                },{
                    param:"支持其他tongTree配置项"
                }
            ]
        },
    ]
}