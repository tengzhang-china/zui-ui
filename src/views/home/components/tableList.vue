<template>
  <div class="table-list">
    <div class="table-list-item" v-for="(item,index) in formateList" :key="'table-list-'+index">
      <h3>{{item.title}}</h3>
      <p class="desc" v-if="item.desc">{{item.desc}}</p>
      <tong-table
        :indexShow="false"
        :expandShow="!!item.expand"
        :tableModel="item.model"
        :tableData="item.listData"
      >
        <tong-editor
          v-if="!!item.expand"
          slot="expand"
          :indexShow="false"
          :cursorShow="false"
          lang="javascript"
          :height="rowInfo.exampleHeight || '100px'"
          slot-scope="{rowInfo}"
          :value="rowInfo.example && rowInfo.example.join('\n')"
        />
      </tong-table>
    </div>
  </div>
</template>
<script>
import { tongTable, tongEditor } from "@/components/TongComponents/index";
export default {
  props: ["tableList"],
  components: { tongTable, tongEditor },
  data() {
    return {
      // 属性模板
      propModel: [
        {
          label: "属性名",
          prop: "param",
          width: "150px",
        },
        {
          label: "说明",
          prop: "explain",
        },
        {
          label: "类型",
          prop: "type",
          width:"100px"
        },
        {
          label: "可选值",
          prop: "values",
        },
        {
          label: "默认值",
          prop: "defaultValue",
        },
      ],

      // 方法模板
      methodModel: [
        {
          label: "方法名",
          prop: "name",
          width: "150px",
        },
        {
          label: "说明",
          prop: "explain",
        },
        {
          label: "参数",
          prop: "param",
        },
        {
          label: "返回值",
          prop: "returns",
        },
      ],

      // 事件
      eventModel: [
        {
          label: "事件名",
          prop: "name",
          width: "150px",
        },
        {
          label: "说明",
          prop: "explain",
        },
        {
          label: "参数",
          prop: "param",
        },
      ],

      slotModel:[
        {
          label: "插槽名称",
          prop: "name",
          width: "150px",
        },{
          label: "说明",
          prop: "explain",
        },
      ],

      // 接口
      interfaceModel: [
        {
          label: "接口名称",
          prop: "name",
          width: "150px",
        },{
          label: "说明",
          prop: "explain",
        },{
          label: "参数",
          prop: "param",
          width:"150px",
        },{
          label: "使用示例",
          prop: "example",
        },
      ],

      reflectInfo: {
        propModel: {
          title: "属性说明",
          desc: "v-bind:属性='属性' 或 :属性='属性'",
        },
        methodModel: {
          title: "方法说明",
        },
        eventModel: {
          title: "事件说明",
          desc: "v-on:事件='事件' 或 @事件='事件'",
        },
        slotModel: {
          title: "插槽说明",
        },
        interfaceModel: {
          title: "接口说明",
        },
      },
    };
  },
  computed: {
    formateList() {
      return this.tableList.map((val) => {
        const info = this.reflectInfo[val.modelType];
        const model = this[val.modelType];
        const defaultValue = Object.assign(
          {},
          ...this[val.modelType].map((obj) => ({ [obj.prop]: "-" }))
        );

        return {
          title: val.title===undefined?info.title:val.title,
          desc: val.desc===undefined?info.desc:val.desc,
          model: val.model || model,
          ...val,
          listData: val.listData.map((item) => ({
            ...defaultValue,
            ...item,
          })),
        };
      });
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.table-list {
  &-item {
    margin-top: 30px;

    .desc {
      font-size: 12px;
      line-height: 30px;
      color: #666;
    }
    ::v-deep.tong-table {
      .el-table__expanded-cell {
        padding: 10px 0;
      }
      .ace_bracket {
        display: none;
      }
    }
  }
}
</style>