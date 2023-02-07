<template>
  <div class="tong-console">
    <div class="output">
      <p v-for="(t, i) in resList" :key="i" :class="t.type" v-show="t.text">
        {{ t.text }}
      </p>
    </div>
    <div class="code_console">
      <input
        type="text"
        class="jsString"
        @keyup.enter="newLog"
        v-model="jsString"
        autocomplete="off"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "tongConsole",
  data() {
    return {
      resList: [],
      jsString: "console.log('可以在这里进行实时调试，输入代码后按Enter执行')",
    };
  },
  props: {},
  methods: {
    newLog() {
      try {
        let r = eval.call(window,this.jsString);
        this.pushString(r);
      } catch (e) {
        this.pushString("undefined")
        // this.tongMessage({
        //   type: "warning",
        //   message: "格式错误",
        // });
      }
    },
    pushString(newRes) {
      let arr = [
        {
          type: "code",
          text: this.jsString,
        },
        {
          type: "result",
          text: newRes,
        },
      ];
      this.jsString = "";
      this.resList.push.apply(this.resList, arr);
    },
    reset() {
      this.resList = [];
      this.jsString =
        "console.log('可以在这里进行实时调试，输入代码后按Enter执行')";
    },
  },
  mounted() {
    let _this = this;
    console.log = function (value) {
      _this.pushString(value);
    };
  },
};
</script>

<style lang="scss">
.tong-console {
  height: 100%;

  .normal {
    color: #999;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
  }

  .jsString {
    display: block;
    border: none;
    width: calc(100% - 20px);
    padding-left: 18px;
    background: url("../image/input.png") 5px 7px no-repeat;
    @extend .normal;
    border-bottom: 1px solid #efefef;
  }
  .output {
    p {
      margin: 0;
      padding-left: 18px;
      @extend .normal;
    }
    p.code {
      background: url("../image/output-code.png") 5px 7px no-repeat;
    }
    p.result {
      background: url("../image/output-result.png") 5px 7px no-repeat;
    }
  }
}
</style>
