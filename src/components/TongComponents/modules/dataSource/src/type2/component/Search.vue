<template>
  <div class='search'>
    <tongSelect :value.sync="value" :options="formateOptions" v-bind="selectConfig" v-on="$listeners" />
  </div>
</template>
<script>
import {tongSelect} from "../../../../../index";
export default {
  props:{
    dataSourceList:Array,
    selectConfig:Object,
    value:String|Number
  },
  components:{tongSelect},
  computed:{
    formateOptions(){
      return this.dataSourceList
    },
  }
}
</script>
