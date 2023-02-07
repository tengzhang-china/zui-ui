<template>
  <div id="tongSelectMode" class="tong-select-mode">
    <el-popover
      placement="bottom-start"
      trigger="click"
      >
      <div class="popper">
        <div class="showTag">
          <div class="head">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkedAll"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <input type="text" v-model="filterValue" :placeholder="placeholder" />
          </div>
          <div class="body" style="height:260px">
            <el-scrollbar style="height:100%;">
              <el-checkbox-group
                v-model="checkedLabelList"
              >
                <el-checkbox
                  v-for="(item,i) in selectOptions"
                  :key="i"
                  :label="item[label]"
                >{{item[label]}}</el-checkbox>
              </el-checkbox-group>
            </el-scrollbar>
          </div>
        </div>
      </div>
      <el-button
        slot="reference"
        icon="el-icon-plus"
        style="padding: 5px 7px;border-radius:2px;"
      ></el-button>
    </el-popover>
    <div v-if="checkedOptions.length>0">
      <div class="spanList" :style="{height:height, width: width}">
        <el-scrollbar style="height:calc(100% - 20px)">
          <span
            v-for="(item,i) in checkedOptions"
            :key="i"
            @mouseover="mouseOver(i)"
            @mouseleave="mouseLeave(i)"
            :style="{background:(index == i?'#d9eaf3':'#f6f6f6')}"
          >
            {{item[label]}}
            <i v-show="index == i" @click="delList(i)">x</i>
          </span>
        </el-scrollbar>
        <div class="showmore">
          <img @click="clear" src="./image/del_red.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doDeepCopy } from "../../../js/usual";
import { verifyType } from "../../../js/rules";
export default {
  name: "tongSelectMode",
  props: {
    label: {
      type: String,
      default: "label"
    },
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selectedOptions: {
      type: Array,
      default() {
        return []
      }
    },
    placeholder: {
      type: String,
      default: "请输入查找内容"
    },
    width: {
      type: String,
      default: "580px"
    },
    height: {
      type: String,
      default: "150px"
    }
  },
  data() {
    return {
      opType: 1, // 传入数组元素格式，简单String为0，Object为1
      index: null,
      selectOptions: [], // 正在显示的下拉选项
      selectAllOptions: [], // 下拉选项所有数据
      checkedOptions: [], // 下拉项选中项列表
      filterValue: "" // 输入的搜索内容
    }
  },
  watch: {
    options: {
      handler(v) {
        const res = v.map(val => {
          if(verifyType(val, "Object")) {
            return val
          } else {
            this.opType = 0
            return {
              label: val.toString(),
              value: val
            }
          }
        });
        this.selectAllOptions = doDeepCopy(res);
        this.selectOptions = doDeepCopy(res);
      },
      immediate: true
    },
    selectedOptions: {
      handler(v) {
        const res = v.map(val =>
          verifyType(val, "Object")
          ? val
          : {
              label: val.toString(),
              value: val,
            }
        );
        this.checkedOptions = doDeepCopy(res);
      },
      immediate: true
    },
    filterValue(v) {
      this.selectOptions = this.selectAllOptions.filter(
        val => val[this.label].indexOf(v) > -1
      );
    },
  },
  computed: {
    checkedLabelList: {
      get() {
        let list = []
        this.checkedOptions.forEach(item => {
          list.push(item[this.label])
        })
        return list
      },
      set(val) {
        this.checkedOptions = this.selectOptions.filter(
          item => val.includes(item[this.label])
        )
        this.update()
      }
    },
    checkedAll: {
      get() {
        let num = 0
        this.selectOptions.forEach(item => {
          this.checkedOptions.forEach(cItem => {
            if(item[this.label] == cItem[this.label]) {
              num++
            }
          })
        })
        return this.selectOptions.length > 0 && this.selectOptions.length == num
      },
      set(val) {
        if(val) {
          this.checkedOptions = JSON.parse(JSON.stringify(this.selectOptions))
        } else {
          this.checkedOptions.length = 0
        }
        this.update()
      }
    },
    isIndeterminate() {
      return !this.checkedAll
    }
  },
  methods: {
    update() {
      let list = []
      let v = this.checkedOptions
      if(this.opType == 0) {
        v.forEach(item => {
          list.push(item[this.label])
        })
      } else {
        list = v
      }
      console.log('update:selectedOptions', list)
      this.$emit('update:selectedOptions', list)
    },
    handleCheckAllChange(val) {
      let list = JSON.parse(JSON.stringify(this.selectOptions));
      this.checkedOptions = val ? list : [];
      this.update()
    },
    delList(i) {
      this.checkedOptions.splice(i, 1);
      this.update()
    },
    clear() {
      this.checkedOptions = [];
      this.update()
    },
    mouseOver(i) {
      this.index = i;
    },
    mouseLeave(i) {
      this.index = null;
    },
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 12px;
}
.showTag {
  width: 200px;
  height: 300px;
  // box-shadow: 0px 0px 7px #ebecef;
  // position: absolute;
  // top: 35px;
  // left: -10px;
  // z-index: 100;

  .head {
    background-color: #f7f7f7;
    height: 40px;
    line-height: 40px;
    padding: 0 8px;

    input {
      border-radius: 10px;
      border: 1px solid #ebecef;
      padding: 5px 10px;
      width: 120px!important;
      margin-left: 10px;
      height: 22px;
    }
    input::-webkit-input-placeholder{
        color: #999;
    }
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */
        color: #999;
    }
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        color: #999;
    }
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
        color: #999;
    }
  }

  .body {
    padding: 5px 12px;
    background-color: #fff;

    .el-checkbox {
      display: block;
    }
  }
}

.spanList {
  min-height: 50px;
  min-width: 400px;
  border: 1px solid #ebecef;
  padding: 5px;
  border-radius: 3px;
  margin-top: 5px;

  span {
    height: 20px;
    /* width: 70px; */
    padding:0 10px;
    line-height: 20px;
    display: inline-block;
    text-align: center;
    background-color: #f6f6f6;
    border-radius: 3px;
    position: relative;
    margin-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;

    i {
     /*  position: absolute; */
      right: 10px;
      font-style: normal;
      cursor: pointer;
    }
  }

  .showmore {
    height: 20px;
    line-height: 20px;

    p {
      display: inline;
      cursor: pointer;
      color: #1489d4;
    }

    img {
      float: right;
      margin-top: 5px;
      cursor: pointer;
    }
  }
}
</style>
