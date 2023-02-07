<template>
  <div class="tong-date-picker">
    <!-- 汇总 -->
    <div class="block" v-if="dateType == '7'" style="width:250px">
      <date-picker v-model="value1" valuetype="format" confirm class="boxTime"></date-picker>
    </div>

    <!-- 日 -->
    <div class="block" v-else style="width:250px">
      <date-picker
        v-model="value1"
        range
        :type="newType"
        :value-format="newFormat"
        :format="newFormat"
        confirm
        class="boxTime"
      ></date-picker>
    </div>
    <!-- 月 -->
    <!-- <div class="block" v-if="dateData[3].dateFlag" style="width:250px">

        <date-picker v-model="value1" range type="month" format="YYYY-MM" confirm class="boxTime" ></date-picker>

    </div>-->
    <!-- 季 -->
    <!-- <div class="block" v-if="dateData[2].dateFlag">
           <date-picker v-model="value1" type="month" format="YYYY-MM" confirm></date-picker>
    </div>-->
    <!-- 年 -->
    <!-- <div class="block" v-if="dateData[1].dateFlag" style="width:250px">

        <date-picker v-model="value1" range type="year" format="YYYY" confirm class="boxTime"  style="border:none"></date-picker>

    </div>-->
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
import $utils from "../../../js/utils";
export default {
  name: "T_datePicker",
  props: {
    dateType: ""
  },
  components: {
    DatePicker
  },
  data() {
    return {
      value1: "",
      newType: "",
      newFormat: "",
      startDate: "",
      endDate: "",
      newAA: "7"
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    if (this.dateType == "2") {
      this.newFormat = "YYYY-MM-DD";
    } else if (this.dateType == "4") {
      this.newType = "month";
      this.newFormat = "YYYY-MM";
    } else if (this.dateType == "6") {
      this.newType = "year";
      this.newFormat = "YYYY";
    }

    if (this.dateType == "7") {
      this.value1 = "2019-09-05";
      this.startDate = "";
      this.endDate = "2019-09-05";
      var dateArr = [this.startDate, this.endDate];
      this.$emit("dateData", dateArr);
    } else {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 14);
      this.startDate = $utils.newdateFormat(date, 2);
      var day2 = new Date();
      day2.setTime(day2.getTime());
      var endDate =
        day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
      this.endDate = $utils.newdateFormat(endDate, 2);
      this.value1 = [this.startDate, this.endDate];
      var dateArr = [this.startDate, this.endDate];
      this.$emit("dateData", dateArr);
    }
  },
  watch: {
    value1(val) {
      if (val.length != 2) {
        this.endDate = $utils.newdateFormat(val, this.newAA);
      } else {
        this.startDate = $utils.newdateFormat(val[0], this.newAA);
        this.endDate = $utils.newdateFormat(val[1], this.newAA);
      }
      var dateArr = [this.startDate, this.endDate];
      this.$emit("dateData", dateArr);
    },
    dateType(val) {
      // console.log(val);
      this.newAA = val;
      if (val == "2") {
        this.newFormat = "YYYY-MM-DD";
      } else if (val == "4") {
        this.newType = "month";
        this.newFormat = "YYYY-MM";
      } else if (val == "6") {
        this.newType = "year";
        this.newFormat = "YYYY";
      }
    }
  }
};
</script>

<style lang="scss">
  .tong-date-picker {
    .boxTime {
      width: 250px;
      height: 30px;
    }

    .block {
      font-size: 12px;
      height: 30px;
    }

    .ipt {
      width: 250px;
      height: 30px;
      border: none;
    }

    table tr:hover td {
      background: #ebf3fe;
    }
    .boxTime .mx-input {
      height: 30px;
      font-size: 12px;
      border: 1px solid #dcdfe6;
      border-radius: 1px;
    }

    .boxTime .mx-input-append {
      width: 24px;
    }
    .boxTime .mx-input {
      height: 30px;
      font-size: 12px;
      border: 1px solid #DCDFE6;
      border-radius: 1px;
    }

    .boxTime .mx-input-append {
      width: 24px;
    }
    .boxTime .mx-datepicker-popup{
      z-index: 5000;
    }
  }
</style>
