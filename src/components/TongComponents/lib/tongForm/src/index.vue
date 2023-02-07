<template>
  <div class="tong-form" :style="{width}" :class="{'label-hidden':!labelShow}">
    <el-form
      ref="tongForm"
      :model="newFormData"
      :rules="rules"
      :label-width="labelWidth"
      :label-suffix="labelSuffix"
      :validate-on-rule-change="false"
      :class="formateAlign"
    >
      <el-form-item
        v-for="item in newFormModel"
        :key="item.prop"
        :label="item.label"
        :required="item.required"
        class="tong-form-item"
        :prop="item.prop"
        :style="{width:item.contentWidth || '100%'}"
      >
        <slot v-if="item.labelSlot" :name="item.labelSlot" slot="label"></slot>

        <slot
          v-if="item.contentSlot"
          :name="item.contentSlot"
          :tongFormData="newFormData"
          :item="item"
          @input="val=>updateValue(val,item.prop)"
          :value="newFormData[item.prop]"
        ></slot>

        <tong-render
          v-else-if="item.render"
          type="2"
          :render="item.render"
          :tongFormData="newFormData"
          v-model="newFormData[item.prop]"
        />

        <!-- 文本内容 -->
        <template v-else-if="item.type==='label'">
          <span>{{newFormData[item.prop]}}</span>
        </template>

        <!-- input|textarea -->
        <template v-else-if="item.type==='input'">
          <tong-input
            :type="item.config.prop.type || 'input'"
            v-model="newFormData[item.prop]"
            v-bind="item.config.prop"
            :placeholder="item.placeholder"
            @input="val => eventController('input',item,val)"
            @blur="val => eventController('blur',item,val)"
            @focus="val => eventController('focus',item,val)"
          />
        </template>

        <!-- inputNumber -->
        <template v-else-if="item.type==='inputNumber'">
          <tong-input
            type="inputNumber"
            v-model="newFormData[item.prop]"
            v-bind="item.config.prop"
            :preText="item.preText"
            :nextText="item.nextText"
            @input="val => eventController('input',item,newFormData[item.prop])"
            @blur="val => eventController('blur',item,newFormData[item.prop])"
            @focus="val => eventController('focus',item,newFormData[item.prop])"
            :width="item.width"
          />
        </template>

        <!-- select -->
        <template v-else-if="item.type==='select'">
          <tong-select
            :placeholder="item.placeholder"
            :value.sync="newFormData[item.prop]"
            v-bind="item.config.prop"
            @tongSelectChange="value=>eventController('selectChange',item,value)"
            @visible-change="visibleChange"
          />
        </template>

        <!-- switch -->
        <template v-else-if="item.type==='switch'">
          <el-switch
            v-model="newFormData[item.prop]"
            v-bind="item.config.prop"
            @change="value=>eventController('switchChange',item,value)"
          ></el-switch>
        </template>

        <!-- radio -->
        <template v-else-if="item.type==='radio'">
          <el-radio-group
            v-model="newFormData[item.prop]"
            :disabled="item.config.prop.disabled"
            @change="value=>eventController('radioChange',item,value)"
          >
            <component
              :is="item.childComponent || 'el-radio'"
              v-for="(radio,radioIndex) in item.config.prop.options"
              :key="radioIndex"
              :label="radio.value"
              :disabled="radio.disabled"
            >{{radio.label}}</component>
          </el-radio-group>
        </template>

        <!-- checkbox -->
        <template v-else-if="item.type==='checkbox'">
          <el-checkbox-group
            :disabled="item.config.prop.disabled"
            v-model="newFormData[item.prop]"
            @change="value=>eventController('checkboxChange',item,value)"
          >
            <el-checkbox
              v-for="(checkbox,checkboxIndex) in item.config.prop.options"
              :key="checkboxIndex"
              :label="checkbox.value"
              :disabled="checkbox.disabled"
            >{{checkbox.label}}</el-checkbox>
          </el-checkbox-group>
        </template>

        <!-- timePicker -->
        <template v-else-if="item.type==='timePicker'">
          <el-time-picker
            v-model="newFormData[item.prop]"
            v-bind="item.config.prop"
            :style="{width:item.width}"
            @change="value=>eventController('timePickerChange',item,value)"
            @blur="value=>eventController('timePickerBlur',item,newFormData[item.prop])"
            @focus="value=>eventController('timePickerFocus',item,newFormData[item.prop])"
          ></el-time-picker>
        </template>

        <!-- datePicker -->
        <template v-else-if="item.type==='datePicker'">
          <el-date-picker
            v-model="newFormData[item.prop]"
            v-bind="item.config.prop"
            :style="{width:item.width}"
            @change="value=>eventController('datePickerChange',item,value)"
            @blur="value=>eventController('datePickerBlur',item,newFormData[item.prop])"
            @focus="value=>eventController('datePickerFocus',item,newFormData[item.prop])"
          ></el-date-picker>
        </template>

        <!-- v-else-if="item.type==='upload'" -->
        <template v-else>
          <tong-upload
            v-bind="item.config.prop"
            @input="val=>updateValue(val,item.prop)"
            :on-change="item.config.methods.onChange"
            :on-success="item.config.methods.onSuccess"
            :on-error="item.config.methods.onError"
            :on-remove="item.config.methods.onRemove"
          ></tong-upload>
        </template>

        <el-tooltip
          v-if="item.tips.show"
          :effect="item.tips.effect"
          :placement="item.tips.placement"
          :popper-class="item.tips.popperClass"
        >
          <div slot="content" class="tong-tips-content" v-html="item.tips.content"></div>
          <tongIcon :imgUrl="item.tips.imgUrl" class="tong-form-item-help" />
        </el-tooltip>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import tongIcon from "../../tongIcon";
import tongSelect from "../../tongSelect";
import tongUpload from "../../tongUpload";
import tongRender from "../../tongRender";
import tongInput from "../../tongInput";
import { EXP_width, verifyRule } from "../../../js/rules";
import { doDeepCopy, mergeObject, getArrayValue } from "../../../js/usual";
import { setTips, setPlaceholder, setConfig, setRules } from "../config/index";

export default {
  name: "tongForm",
  components: { tongIcon, tongSelect, tongRender, tongUpload, tongInput },
  props: {
    width: {
      type: String,
      validator: function (val) {
        return verifyRule(val, EXP_width);
      },
      default: "100%",
    },
    itemAlign:{
      type:String,
      default:"row",
      validator:function(val){
        return ['column','row'].indexOf(val)>-1
      }
    },
    formModel: {
      type: Array,
      default: function () {
        return [];
      },
    },
    formData: {
      type: Object,
      default: function () {
        return {};
      },
    },
    labelWidth: {
      type: String,
      default: "100px",
    },
    labelSuffix: {
      type: String
    },
    labelShow: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    formData: {
      handler: function () {
        this.initFormData();
      },
      immediate: true,
      deep: true,
    },

    formModel:{
      handler(newValue,oldValue){
        if(this.inited)this.inited = !this.noChangeModel(newValue,oldValue);
        if(this.inited)return this.newFormModel;
        let newFormModel = doDeepCopy(this.formModel.filter(val=>val.show!==false));
        let formData = {};
        let initRules = {};
        newFormModel.forEach((ele) => {
          //处理formModel
          ele.type = ele.type || "label";
          ele.tips = setTips(ele);
          ele.placeholder = setPlaceholder(ele);
          ele.config = setConfig(ele);
          //处理formData
          formData[ele.prop] = getArrayValue([this.newFormData[ele.prop], ele.defaultValue,this.formData[ele.prop],""]);
          //处理rules
          initRules[ele.prop] = setRules(ele);
        });

        this.rules = initRules;
        this.newFormData = formData
        this.inited = true;
        this.newFormModel = newFormModel;
      },
      deep:true,
      immediate:true
    }
  },
  computed: {
    formateAlign(){
      return {
        ["tong-form-" + this.itemAlign]:true
      }
    }
  },
  data() {
    return {
      newFormModel: [],
      newFormData: {}, //复制的formData
      inited: false, //是否已经初始化
      rules: {},
      formInstance: null, //form实例

      canSelect:false,//是否可以触发selectChange事件
    };
  },
  methods: {
    resetFields() {
      this.formInstance && this.formInstance.resetFields();
    },

    /**
     * 控制model显隐
     */
    noChangeModel(newModel=[],oldModel=[]){
      let newList = newModel.map(val=>val.show);
      let oldList = oldModel.map(val=>val.show);
      return JSON.stringify(newList) == JSON.stringify(oldList);
    },

    /**
     * 初始化formData
     */
    initFormData() {
      this.newFormData = mergeObject(
        this.newFormData,
        doDeepCopy(this.formData || {})
      );
      this.resetFields();
    },

    /**
     * 获取表单数据
     */
    getFormData() {
      return this.newFormData;
    },


    // 是和可选
    visibleChange(val){
      this.canSelect=val
    },

    /**
     * 公共的事件控制器
     */
    eventController(eventType, item, value) {
      if (item.config.methods[eventType])
        item.config.methods[eventType](this.newFormData, item, value);

      if(eventType!=="selectChange"){
        this.$emit(eventType, this.newFormData, item, value);
      }else if(this.canSelect){
        this.$emit(eventType, this.newFormData, item, value);
      }
    },

    /**
     * 更新值，并自动校验
     */
    updateValue(value, prop) {
      this.newFormData[prop] = value;
      this.validateField(prop);
    },

    /**
     * 主动校验prop
     */
    validateField(prop,fn) {
      this.formInstance.validateField(prop,fn);
    },

    /**
     * 校验所有
     * @param {function} fn 校验回调函数
     */
    validate(fn){
      this.formInstance.validate(fn);
      this.$nextTick(()=>{
          let isError = document.querySelector('.is-error.tong-form-item')
          if(isError)isError.scrollIntoView({
              block: 'center',
              behavior: 'smooth',
          })
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.formInstance = this.$refs.tongForm;
      this.resetFields();
    });
  },
};
</script>
