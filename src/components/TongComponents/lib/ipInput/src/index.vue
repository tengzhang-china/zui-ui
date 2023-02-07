<template>
  <div class="tong-ip-input">
    <el-input v-model="ip1"></el-input>
    <el-input v-model="ip2"></el-input>
    <el-input v-model="ip3"></el-input>
    <el-input v-model="ip4"></el-input>
  </div>
</template>

<script>
export default {
  name: "ipInput",
  props: {
    value: {
      type: String,
      default: ""
    },
    openError:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      ip1: "",
      ip2: "",
      ip3: "",
      ip4: ""
    };
  },
  methods: {
    emitIp: function() {
      var ipArr = [this.ip1, this.ip2, this.ip3, this.ip4];
      this.$emit("input", ipArr.join("."));
    },
    formatValue: function() {
      var ipArr = this.value.split(".");
      ipArr.forEach((ele,index)=>{
        this['ip'+(1+index)]=ele
      })
    },

    verifyValue(key){
      let verifyResult = /^(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test(this[key]);
      if(this[key]==="")verifyResult=true;
      if(!verifyResult){
        this[key]="";
        this.tongMessage({
          type:"warning",
          message:"输入ip格式不正确"
        })
      }
      return verifyResult
    }
  },
  watch: {
    ip1: function() {
      this.verifyValue("ip1") && this.emitIp();
    },
    ip2: function(value) {
      this.verifyValue("ip2") && this.emitIp();
    },
    ip3: function(value) {
      this.verifyValue("ip3") && this.emitIp();
    },
    ip4: function(value) {
      this.verifyValue("ip4") && this.emitIp();
    },
    value:{
      handler:function(){
        this.formatValue();
      },
      immediate:true
    }
  },
};
</script>