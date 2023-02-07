<template>
  <div style="width: 100%;height: auto;display: flex;">
    <div class="transferTreeBox">
      <div class="transferTreeDiv">
        <div class="transferTreeTitle">
          <span class="title-t">{{leftTitle}}</span>
          <span class="title-s">{{leftChecked}}/{{leftAll}}</span>
        </div>
        <vue-scroll ref="treeScroll">
          <T_zTree
            ref="tree1"
            :treeData="treeData1"
            v-if="flag1"
            :backgroundColor="backgroundColor"
            :treeDemoId="'treeDemo1'"
            :checkShow="true"
            :queryDiv="false"
            :hoverDiv="false"
            :chkStyle="'checkbox'"
            :chkboxType="{ 'Y': 'ps', 'N': 's' }"
            :radioType="''"
            :zNodes="zNodes1"
            @listenToChildCheckNode="handleCheckNode1"
            @listenToChildClickNode="handleClickNode"
            @listenToOnExpand="onExpand"
            @listenToOnCollapse="onCollapse"
            @listenToAllLength="allLength1"
          ></T_zTree>
        </vue-scroll>
      </div>
      <div class="ChooseDir">
        <el-button
          :type="arrowType1"
          size="medium"
          :disabled="LeftDis"
          circle
          class="el-icon-arrow-left transfer-allLeft"
          @click="transferLeft"
        ></el-button>
        <el-button
          :type="arrowType2"
          size="medium"
          :disabled="RightDis"
          circle
          class="el-icon-arrow-right transfer-allRight"
          @click="transferRight"
        ></el-button>
        <el-button
          :type="arrowType3"
          size="medium"
          :disabled="allLeftDis"
          circle
          class="el-icon-d-arrow-left transfer-allLeft"
          @click="transferAllLeft"
        ></el-button>
        <el-button
          :type="arrowType4"
          size="medium"
          :disabled="allRightDis"
          circle
          class="el-icon-d-arrow-right transfer-allRight"
          @click="transferAllRight"
        ></el-button>
      </div>
      <div class="transferTreeDiv">
        <div class="transferTreeTitle">
          <span class="title-t">{{rightTitle}}</span>
          <span class="title-s">{{rightChecked}}/{{rightAll}}</span>
        </div>
        <vue-scroll ref="treeScroll">
          <T_zTree
            ref="tree2"
            :treeData="treeData2"
            v-if="flag2"
            :backgroundColor="backgroundColor"
            :treeDemoId="'treeDemo2'"
            :checkShow="true"
            :queryDiv="false"
            :hoverDiv="false"
            :chkStyle="'checkbox'"
            :chkboxType="{ 'Y': 'ps', 'N': 's' }"
            :radioType="''"
            :zNodes="zNodes2"
            @listenToChildCheckNode="handleCheckNode2"
            @listenToChildClickNode="handleClickNode"
            @listenToOnExpand="onExpand"
            @listenToOnCollapse="onCollapse"
            @listenToAllLength="allLength2"
          ></T_zTree>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import T_zTree from "../../zTree";
import vueScroll from 'vuescroll';
import $utils from '../../../js/utils'
export default {
  components: { T_zTree,vueScroll},
  name: "T_transferTree",
  props: [
    "backgroundColor",
    "leftTitle",
    "rightTitle",
    "queryIng",
    "zNodes1",
    "zNodes2",
    "flag1",
    "flag2",
    "Nodes1",
    "Nodes2"
  ],
  data: function() {
    return {
      treeData1: {},
      treeData2: {},
      leftChecked: 0,
      leftAll: 0,
      rightChecked: 0,
      rightAll: 0,
      LeftDis: true,
      RightDis: true,
      allLeftDis: false,
      allRightDis: false,
      arrowType1: "primary",
      arrowType2: "primary",
      arrowType3: "primary",
      arrowType4: "primary"
    };
  },
  watch: {},
  methods: {
    // 节点点击事件
    handleClickNode(treeNode) {
      console.log(treeNode);
      // this.$refs.tree.lazyLoad(treeNode,url,data);
    },
    // 节点被选中或取消
    handleCheckNode1(treeNode) {
      this.leftChecked = this.treeData1.zTreeObj.getCheckedNodes(true).length;
      this.btnDis();
    },
    handleCheckNode2(treeNode) {
      this.rightChecked = this.treeData2.zTreeObj.getCheckedNodes(true).length;
      this.btnDis();
    },
    // 节点被展开事件
    onExpand(treeNode) {
      this.$emit("listenToOnExpand", treeNode);
    },
    // 节点被折叠事件
    onCollapse(treeNode) {
      this.$emit("listenToOnCollapse", treeNode);
    },
    transferLeft() {
      this.moveTreeNode(this.treeData2.zTreeObj, this.treeData1.zTreeObj);
      this.btnDis();
    },
    transferRight() {
      this.moveTreeNode(this.treeData1.zTreeObj, this.treeData2.zTreeObj);
      this.treeData2.zTreeObj.expandAll(true);
      this.btnDis();
    },
    transferAllLeft() {
      this.treeData2.zTreeObj.checkAllNodes(true);
      this.moveTreeNode(this.treeData2.zTreeObj, this.treeData1.zTreeObj);
      this.btnDis();
    },
    transferAllRight() {
      this.treeData1.zTreeObj.checkAllNodes(true);
      this.moveTreeNode(this.treeData1.zTreeObj, this.treeData2.zTreeObj);
      this.treeData2.zTreeObj.expandAll(true);
      this.btnDis();
    },
    moveTreeNode(zTree1, zTree2) {
      let nodes = zTree1.getCheckedNodes(); //获取选中需要移动的数据
      for (var i = 0; i < nodes.length; i++) {
        //把选中的数据从根开始一条一条往右添加
        var node = nodes[i];
        var strs = {}; //新建一个JSON 格式数据,表示为一个节点,可以是根也可以是叶
        strs.id = node.id;
        strs.name = node.name;
        strs.idDir = node.idDir;
        if (node.isParent) {
          strs.isParent = node.isParent;
        }
        strs.children = new Array(); //树节点里面有个 nodes 集合,用来存储父子之间的包涵关系
        //调用添加方法
        //strs : json 格式..拼装成树的一个节点
        //zTree2: 表示需要添加节点的树
        this.zTreeDataAddNode(strs, zTree2);
        //获取这个被添加的code 如果是右增加  用来把它从左边移除掉
        var scode = strs.idDir;
        scode = scode.substring(0, scode.lastIndexOf("-"));
        //使用递归移除 移除的时候从叶子开始找  和增加的时候刚好相反
        //参数1就是数组最后一个数据
        //scode  : 上面截取的code 表示父亲节点
        //zTree1 : 需要移除的树,在zTree1 里面移除此对象
        this.zTreeDataDelete(nodes[nodes.length - (i + 1)], scode, zTree1);
      }
      //把选中状态改为未选择
      zTree2.checkAllNodes(false);
      zTree1.checkAllNodes(false);
      //刷新
      zTree2.refresh();
      zTree1.refresh();
      this.leftChecked = this.treeData1.zTreeObj.getCheckedNodes(true).length;
      this.rightChecked = this.treeData2.zTreeObj.getCheckedNodes(true).length;
      this.leftAll = this.treeData1.zTreeObj.transformToArray(
        this.treeData1.zTreeObj.getNodes()
      ).length;
      this.rightAll = this.treeData2.zTreeObj.transformToArray(
        this.treeData2.zTreeObj.getNodes()
      ).length;
      this.Nodes1.nodes = JSON.parse(
        JSON.stringify(this.treeData1.zTreeObj.getNodes())
      );
      this.Nodes2.nodes = JSON.parse(
        JSON.stringify(this.treeData2.zTreeObj.getNodes())
      );
    },
    zTreeDataAddNode(strs, zTree2) {
      var nodes = zTree2.transformToArray(zTree2.getNodes()); //获取需要添加数据的树下面所有节点数据
      //如果有多个数据需要遍历,找到strs 属于那个父亲节点下面的元素.然后把自己添加进去
      if (nodes.length > 0) {
        //这个循环判断是否已经存在,true表示不存在可以添加,false存在不能添加
        var isadd = true;
        for (var j = 0; j < nodes.length; j++) {
          if (strs.idDir == nodes[j].idDir) {
            isadd = false;
            break;
          }
        }
        //找到父亲节点
        var scode = strs.idDir;
        scode = scode.substring(0, scode.lastIndexOf("-"));
        var i = 0;
        var flag = false;
        for (i; i < nodes.length; i++) {
          if (scode == nodes[i].idDir) {
            flag = true;
            break;
          }
        }
        //同时满足两个条件就加进去,就是加到父亲节点下面去
        if (flag && isadd) {
          // var treeNode1=nodes[i];
          // // treeNode1.nodes[treeNode1.nodes.length <=0 ? 0 : treeNode1.nodes.length++]=strs;
          // zTree2.addNodes(treeNode1, strs);
          var treeNode1 = nodes[i];
          if (!treeNode1.children) {
            treeNode1.children = [];
          }
          treeNode1.children[
            treeNode1.children.length <= 0 ? 0 : treeNode1.children.length++
          ] = strs;
          //如果zTree2 里面找不到,也找不到父亲节点.就把自己作为一个根add进去
        } else if (isadd) {
          zTree2.addNodes(null, strs);
        }
      } else {
        //树没任何数据时,第一个被加进来的元素
        zTree2.addNodes(null, strs);
      }
    },
    //数据移除
    zTreeDataDelete(node, scode, zTree1) {
      if (node.isParent) {
        //判断是不是一个根节点,如果是一个根几点从叶子开始遍历寻找
        if (!node.children) {
          node.children = [];
        }
        //如果是个根就检测nodes里面是否有数据
        if (node.children.length > 0) {
          //取出来
          var fnodes = node.children;
          for (var x = 0; x < fnodes.length; x++) {
            //不是根节点.并且code 相当就是需要移除的元素
            if (!fnodes[x].isParent && fnodes[x].idDir == scode) {
              //调用ztree 的移除方法,参数是一个节点json格式数据
              zTree1.removeNode(fnodes[x]);
              //如果当前这个节点又是个根节点.开始递归
            } else if (fnodes[x].isParent) {
              this.zTreeDataDelete(fnodes[x], scode);
            }
          }
        } else {
          //如果是个根,但是下面的元素没有了.就把这个根移除掉
          zTree1.removeNode(node);
        }
      } else {
        //不是就直接移除
        zTree1.removeNode(node);
      }
    },
    getallNodes() {
      $utils.getNodes(this.Nodes1.nodes);
      $utils.getNodes(this.Nodes2.nodes);
    },
    btnDis() {
      if (this.leftAll != 0) {
        this.allRightDis = false;
        this.arrowType4 = "primary";
      } else {
        this.allRightDis = true;
        this.arrowType4 = "";
      }
      if (this.rightAll != 0) {
        this.allLeftDis = false;
        this.arrowType3 = "primary";
      } else {
        this.allLeftDis = true;
        this.arrowType3 = "";
      }
      if (this.leftChecked > 0) {
        this.RightDis = false;
        this.arrowType2 = "primary";
      } else {
        this.RightDis = true;
        this.arrowType2 = "";
      }
      if (this.rightChecked > 0) {
        this.LeftDis = false;
        this.arrowType1 = "primary";
      } else {
        this.LeftDis = true;
        this.arrowType1 = "";
      }
      // this.$emit("listenToZNodes",(this.zNodes1,this.zNodes2))
    },
    allLength2(length) {
      this.rightAll = length;
      this.btnDis();
    },
    allLength1(length) {
      this.leftAll = length;
      this.btnDis();
    }
  },
  watch: {
    flag2(val) {
      var self = this;
      if (val) {
        self.$nextTick(() => {
          var nodes = self.treeData1.zTreeObj.transformToArray(
            self.treeData1.zTreeObj.getNodes()
          );
          var nodes2 = self.treeData2.zTreeObj.transformToArray(
            self.treeData2.zTreeObj.getNodes()
          );
          for (var i = 0, l = nodes.length; i < l; i++) {
            for (var j = 0; j < nodes2.length; j++) {
              if (nodes2[j].id == nodes[i].id)
                self.treeData1.zTreeObj.checkNode(nodes[i], true, false);
            }
          }
          this.moveTreeNode(this.treeData1.zTreeObj, this.treeData2.zTreeObj);
          this.btnDis();
        });
      }
    }
  },
  mounted() {
    if (this.zNodes1 == null) {
      this.Nodes1.nodes = [];
    } else {
      this.Nodes1.nodes = this.zNodes1;
    }
    if (this.zNodes2 == null) {
      this.Nodes2.nodes = [];
    } else {
      this.Nodes2.nodes = this.zNodes2;
    }
  }
};
</script>
<style lang="scss" scoped>
.transferTreeBox {
  position: relative;
  display: inline-block;

  .transferTreeDiv {
    width: 300px;
    height: 400px;
    display: inline-block;
    border: 1px solid #d7dbe6;
    border-radius: 5px;
    overflow: hidden;

    .transferTreeTitle{
        height: 38px;
        line-height: 38px;
        padding: 0 10px;
        background: #f0f4f7;
        border-bottom: 1px solid #ebeef5;
    }
    .title-t{
        float: left;
        color: #2c2c2a;
    }
            
        .title-s{
            float: right;
            color: #909399;
        }
            
  }

  .transferTreeDiv:nth-child(1){
    margin-right:50px
  }

  .ChooseDir{
    width: 50px;
    height: 184px;
    display: inline-block;
    position: absolute;
    left: 302px;
    top: 50%;
    text-align :center;
    margin-top: -92px;

    .el-button.is-circle{
        margin:5px 0
    }   
    .el-button+.el-button{
        margin-left: 0
    }   
  }   
}
</style>