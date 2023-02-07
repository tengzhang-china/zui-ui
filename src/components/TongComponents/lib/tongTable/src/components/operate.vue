<template>
  <div class="tong-table-operate-box">
    <p>
      <span
        v-for="(btn, index) in formateOperateList.list"
        :key="index"
        class="no-select cursor operate-blue"
        :class="[
          btn.customClass,
          {
            'operate-disabled': isDisabled(btn,scope)
          },
        ]"
        @click="doOperateClick(scope.row, btn, scope)"
      >
        <tong-icon
          v-show="btn.icon"
          :class="[btn.type || '']"
          :imgUrl="btn.icon"
        ></tong-icon>
         <el-dropdown v-if="btn.__config__&&btn.__config__.children.length>0" trigger="click" @command="(btn)=>doOperateClick(scope.row, btn, scope)">
          <span class="operate-blue cursor">
            {{btn.__slot__.default}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown"  class="tong-table-operate-dropdown">
            <el-dropdown-item
              v-for="(el, index) in btn.__config__.children"
              :key="index"
              :command="el"
              :disabled="isDisabled(el,scope)"
            >
              <tong-icon
                v-show="el.icon"
                :class="[el.type || '']"
                :imgUrl="el.icon"
              ></tong-icon>
              {{ el.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span v-else>{{ btn.label }}</span>
      </span>

      <!-- 操作按钮过多以下拉形式展示 -->
      <el-dropdown v-if="formateOperateList.more.length>0" trigger="click" @command="(btn)=>doOperateClick(scope.row, btn, scope)">
        <span class="operate-blue cursor">
          {{formateMoreConfig.text}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown"  class="tong-table-operate-dropdown">
          <el-dropdown-item
            v-for="(btn, index) in formateOperateList.more"
            :key="index"
            :command="btn"
            :disabled="isDisabled(btn,scope)"
          >
            <tong-icon
              v-show="btn.icon"
              :class="[btn.type || '']"
              :imgUrl="btn.icon"
            ></tong-icon>
            {{ btn.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </p>
  </div>
</template>
<script>
import tongIcon from "../../../tongIcon/index";
import mixOperate from "../modules/operate";
export default {
  components: {
    tongIcon,
  },
  data() {
    return {};
  },
  methods:{
    isDisabled(btn,scope){
      return (btn.disabled===true || btn.disabled===false)?btn.disabled : (btn.disabled && btn.disabled(scope.row, btn, scope))
    }
  },
  mixins: [mixOperate],
};
</script>
