module.exports = {
  menuText: "Schema列表",
  menuOrder: 6,
  title: "tongSchemaList",
  desc: "内置调用Schema列表接口",
  recordList: [
    {
      version: "1.0.31",
      editor: "杨溆",
      time: "2020-08-06 10:15",
      contentList: ["调整说明文档"],
    },
  ],

  exampleList: [
      {
          title:"普通使用",
          desc:"下拉框形式展示Schema列表",
          codeConfig:{
              codeEditorHeight:"170px",
              template:"<tong-schema-list />",
              codeComponent: {
                  data(){
                      return {

                      }
                  },
              },
          },
      },
      {
          title:"有初始值",
          desc:"使用：value.sync='value', 如果value不存在，就展示value的值",
          codeConfig:{
              codeEditorHeight:"250px",
              // template:"<tong-schema-list: value.sync='value' />",
              codeComponent:{
                  template:"<tong-schema-list :value.sync='value' />",
                  data(){
                      return {
                          value:5
                      }
                  },
                  render(h){
                    return (<tong-schema-list value={this.value} />)
                  }
              },
          },
      }
  ],

  tableList: [
      {
          modelType: "propModel",
          listData: [
              {
                  param: "value.sync",
                  explain: "双向绑定",
                  type: "string",
              },{
                  param: "ip",
                  explain: "请求ip",
                  type: "string",
              },{
                  param: "labelKey",
                  explain: "展示文本使用的字段名",
                  type: "string",
                  defaultValue:"schema"
              },{
                  param: "valueKey",
                  explain: "值的字段名",
                  type: "string",
                  defaultValue:"dsId"
              }
          ]
      }
  ]
};
