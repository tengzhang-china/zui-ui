<template>
  <div class="T_table">
    <!-- :height="newHeight =='' || newHeight ==undefined ? height :newHeight" -->
    <el-table stripe v-if="this.newType != 'more'" class="spheight" :row-class-name="tableRowClassName"
              :header-cell-class-name="cellStyle" v-loading="loading" ref="multipleTable" :data="tableData3" tooltip-effect="dark"
              :style="styleWidth == undefined || styleWidth == ''  ? style : styleWidth" @selection-change="handleSelectionChange"
              @filter-change="filterTag" @sort-change="sortChange" id="bill">
      <!--暂无数据自定义-->
      <template slot="empty" v-if="emptyObj.open">
        <div class="empty-define">
          <p>{{emptyObj.content || '暂无数据'}}</p>
          <p class="empty-operation" v-if="emptyObj.operation" @click="emptyObj.click()">{{emptyObj.operation}}</p>
        </div>
      </template>
      <!-- :selectable='checkboxT' -->
      <el-table-column style="padding-left:10px ;" :fixed="fixed" type="selection" width="35" :align="center" v-if="this.selectColumn == true"></el-table-column>
      <el-table-column v-if="this.radioType == true" width="35">
        <template slot-scope="scope">
          <div style="padding: 0;margin: 0;">
            <el-radio @change="radioChange(scope.$index,scope.row)" :label="scope.$index" v-model="radio">&nbsp;</el-radio>
          </div>
        </template>
      </el-table-column>

      <el-table-column type="expand" v-if="this.expandSta == true">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="index" :index="indexMethod" :fixed="fixed" label="序号" width="40" style="color: #545558 !important;" :align="center"
                       v-if="this.indexColumn == true"></el-table-column>
      <el-table-column style="padding-left: 10px;" :width="item.width" :min-width="item.minWidth" :sortable="item.type == 1 ? 'custom' : false"
                       v-for="(item,index) in taData" :key="index" :fixed="item.fixed" :label="item.label" :show-overflow-tooltip="item.showOverflowTooltip===undefined?(item.prop == undefined || item.type==='input' ? false : true):item.showOverflowTooltip"
                       :prop="item.prop" :align="center" :filters="item.type == 2 ? screen[index] :null " :column-key="item.prop">
        <template slot-scope="scope">
          <div class="cell el-tooltip" style="padding:0px 1px 0px 0px;margin: 0;" v-if="item.formate">
						<span v-if="item.formate(scope.row,scope.row[item.prop]) && item.formate(scope.row,scope.row[item.prop]).model" :class="item.formate(scope.row,scope.row[item.prop]).newclass"
                  @click="model1(item,scope.row.id,$event,scope.row,)" @mouseleave="mouse">
							<span v-if="item.formate(scope.row,scope.row[item.prop]).newpos != 'right'">
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
							</span>
							<span v-else>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
							</span>
						</span>
            <router-link v-else-if="item.formate(scope.row,scope.row[item.prop]).newUrl" :to="item.formate(scope.row,scope.row[item.prop]).newUrl">
							<span v-if="item.formate(scope.row,scope.row[item.prop]).newpos != 'right'">
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
							</span>
              <span v-else>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
							</span>
            </router-link>
            <span v-else-if="item.tip" :class="item.formate(scope.row,scope.row[item.prop]).newclass">
							<el-tooltip v-if="scope.row[item.tip] != '' " class="item" effect="dark" :content="item.formate(scope.row,scope.row[item.prop]).data"
                          placement="top">
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
							</el-tooltip>
							<i v-else :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
						</span>
						<!-- 新增data悬浮tip -->
						<span v-else-if="item.datatip&&!item.formate(scope.row,scope.row[item.prop]).slot" :class="item.formate(scope.row,scope.row[item.prop]).newclass">
							<el-popover :disabled="item.formate(scope.row,scope.row[item.prop]).tip?false:true" trigger="hover" placement="top">
								<p>{{ item.formate(scope.row,scope.row[item.prop]).tip }}</p>
								<div slot="reference" class="name-wrapper">
									<i v-if="item.formate(scope.row,scope.row[item.prop]).newpos != 'right'" :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
									<span>{{ item.formate(scope.row,scope.row[item.prop]).data }}</span>
									<i v-if="item.formate(scope.row,scope.row[item.prop]).newpos == 'right'" :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
								</div>
							</el-popover>
						</span>
						<slot  v-else-if="item.datatip&&item.formate(scope.row,scope.row[item.prop]).slot" 
						:name="item.formate(scope.row,scope.row[item.prop]).slot" :row="scope.row" 
						:formate="item.formate(scope.row,scope.row[item.prop])"></slot>
						<span v-else :class="item.formate(scope.row,scope.row[item.prop]).newclass">
							<span v-if="item.formate(scope.row,scope.row[item.prop]).newpos != 'right'">
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
							</span>
							<span v-else>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
							</span>
						</span>
          </div>
          <div style="padding: 0;margin: 0;" v-else-if="item.operation">
						<span v-for="(item,index) in item.operation(scope.row,scope.row[item.prop]).operationText" :key="index" class="cell_span"
                  @click="all(item,scope.row)">{{item}}</span>
          </div>
          <div style="padding: 0;margin: 0;" v-else-if="item.type==='check'">
            <el-checkbox-group v-model="chData">
              <el-checkbox v-for="(chItem,chIndex) in scope.row.operation" :key="chIndex" :label="chItem.name+scope.row.id"
                           @change="handleCheckedCitiesChange()">{{chItem.name}}</el-checkbox>
            </el-checkbox-group>
          </div>

          <div style="padding: 0;margin: 0;" v-else-if="item.type==='input'">
            <el-input @blur="inData()" v-model="scope.row[item.prop]" placeholder></el-input>
          </div>
          <div style="padding: 0;margin: 0;" v-else>
            <span>{{scope.row[item.prop] == " " || scope.row[item.prop] ?scope.row[item.prop]:"-"}}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-table v-if="this.newType != 'bill'" :data="tableData3" tooltip-effect="dark"  :style="!styleWidth  ? style : styleWidth" :height="tableHeight"
              @selection-change="handleSelectionChange"  @filter-change="filterTag" @sort-change="sortChange" id="more" ref="moreTable">
      <el-table-column fixed="left" type="selection" width="55" align="center" v-if="this.selectColumn == true"></el-table-column>

      <el-table-column :width="width" :align="center" v-for="(item,index) in newtaDataC" :key="index" :label="item.label" :sortable="item.type == 1 ? 'custom' : false"
                       :prop="item.prop" :fixed="item.fixed"  :show-overflow-tooltip="item.prop == undefined || item.type==='input' ? false : true"
                       :filters="item.type == 2 ? screen[index] :null " :column-key="item.prop" >
        <el-table-column :align="center" v-for="(chilitem,chilindex) in item.child" :key="chilindex" :prop="chilitem.prop"
                        :fixed="chilitem.fixed"  :show-overflow-tooltip="chilitem.prop == undefined || chilitem.type==='input' ? false : true"
                       :filters="chilitem.type == 2 ? screen[index] :null " :column-key="chilitem.prop" :label="chilitem.label" :sortable="chilitem.type == 1 ? 'custom' : false">                        
          <template slot-scope="scope">
            <div v-if="chilitem.formate">
              <router-link v-if="chilitem.formate(scope.row,scope.row[chilitem.prop]).newUrl" :to="chilitem.formate(scope.row,scope.row[chilitem.prop]).newUrl">
								<span :class="chilitem.formate(scope.row,scope.row[chilitem.prop]).newclass">
									<i :class="chilitem.formate(scope.row,scope.row[chilitem.prop]).newicon"></i>
									{{scope.row[chilitem.prop]}}
								</span>
              </router-link>
              <span v-else-if="chilitem.tip" :class="chilitem.formate(scope.row,scope.row[chilitem.prop]).newclass">
								<el-tooltip v-if="scope.row[chilitem.tip] != '' " class="chilitem" effect="dark" :content="scope.row[item.tip]+''"
                            placement="top">
									<i :class="chilitem.formate(scope.row,scope.row[chilitem.prop]).newicon"></i>
								</el-tooltip>
								<i v-else :class="chilitem.formate(scope.row,scope.row[chilitem.prop]).newicon"></i>
							</span>
              <span v-else :class="chilitem.formate(scope.row,scope.row[chilitem.prop]).newclass">
								<i :class="chilitem.formate(scope.row,scope.row[chilitem.prop]).newicon"></i>
								{{scope.row[chilitem.prop]}}
							</span>
            </div>
            <div style="width: 500px !important;" v-else-if="chilitem.operation">
							<span v-for="(chilitem,index) in chilitem.operation(scope.row,scope.row[chilitem.prop]).operationText" :key="index"
                    class="cell_span" @click="all(chilitem,scope.row.id)">{{chilitem}}</span>
            </div>
            <!-- <div v-else-if="chilitem.type==='check'">
                            <el-checkbox-group v-model="chData">
                                <el-checkbox v-for="(chItem,chIndex) in scope.row.operation" :key="chIndex" :label="chItem.name+scope.row.id"
                                 @change="handleCheckedCitiesChange()">{{chItem.name}}</el-checkbox>
                            </el-checkbox-group>
                        </div> -->
            <div v-else>
              <span>{{scope.row[chilitem.prop]?scope.row[chilitem.prop]:"—"}}</span>
            </div>
          </template>
        </el-table-column>
         <template slot-scope="scope">
          <div class="cell el-tooltip" style="padding:0px 1px 0px 0px;margin: 0;" v-if="item.formate">
						<span v-if="item.formate(scope.row,scope.row[item.prop]) && item.formate(scope.row,scope.row[item.prop]).model" :class="item.formate(scope.row,scope.row[item.prop]).newclass"
                  @click="model1(item,scope.row.id,$event,scope.row,)" @mouseleave="mouse">
							<span v-if="item.formate(scope.row,scope.row[item.prop]).newpos != 'right'">
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
							</span>
							<span v-else>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
							</span>
						</span>
            <router-link v-else-if="item.formate(scope.row,scope.row[item.prop]).newUrl" :to="item.formate(scope.row,scope.row[item.prop]).newUrl">
							<span v-if="item.formate(scope.row,scope.row[item.prop]).newpos != 'right'">
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
							</span>
              <span v-else>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
							</span>
            </router-link>
            <span v-else-if="item.tip" :class="item.formate(scope.row,scope.row[item.prop]).newclass">
							<el-tooltip v-if="scope.row[item.tip] != '' " class="item" effect="dark" :content="item.formate(scope.row,scope.row[item.prop]).data"
                          placement="top">
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
							</el-tooltip>
							<i v-else :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
						</span>
						<!-- 新增data悬浮tip -->
						<span v-else-if="item.datatip&&!item.formate(scope.row,scope.row[item.prop]).slot" :class="item.formate(scope.row,scope.row[item.prop]).newclass">
							<el-popover :disabled="item.formate(scope.row,scope.row[item.prop]).tip?false:true" trigger="hover" placement="top">
								<p>{{ item.formate(scope.row,scope.row[item.prop]).tip }}</p>
								<div slot="reference" class="name-wrapper">
									<i v-if="item.formate(scope.row,scope.row[item.prop]).newpos != 'right'" :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
									<span>{{ item.formate(scope.row,scope.row[item.prop]).data }}</span>
									<i v-if="item.formate(scope.row,scope.row[item.prop]).newpos == 'right'" :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
								</div>
							</el-popover>
						</span>
						<slot  v-else-if="item.datatip&&item.formate(scope.row,scope.row[item.prop]).slot" 
						:name="item.formate(scope.row,scope.row[item.prop]).slot" :row="scope.row" 
						:formate="item.formate(scope.row,scope.row[item.prop])"></slot>
						<span v-else :class="item.formate(scope.row,scope.row[item.prop]).newclass">
							<span v-if="item.formate(scope.row,scope.row[item.prop]).newpos != 'right'">
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
							</span>
							<span v-else>
								{{item.formate(scope.row,scope.row[item.prop]).data==""|| !item.formate(scope.row,scope.row[item.prop]).data? scope.row[item.prop]:item.formate(scope.row,scope.row[item.prop]).data}}
								<i :class="item.formate(scope.row,scope.row[item.prop]).newicon"></i>
							</span>
						</span>
          </div>
          <div style="padding: 0;margin: 0;" v-else-if="item.operation">
						<span v-for="(item,index) in item.operation(scope.row,scope.row[item.prop]).operationText" :key="index" class="cell_span"
                  @click="all(item,scope.row)">{{item}}</span>
          </div>
          <div style="padding: 0;margin: 0;" v-else-if="item.type==='check'">
            <el-checkbox-group v-model="chData">
              <el-checkbox v-for="(chItem,chIndex) in scope.row.operation" :key="chIndex" :label="chItem.name+scope.row.id"
                           @change="handleCheckedCitiesChange()">{{chItem.name}}</el-checkbox>
            </el-checkbox-group>
          </div>

          <div style="padding: 0;margin: 0;" v-else-if="item.type==='input'">
            <el-input @blur="inData()" v-model="scope.row[item.prop]" placeholder></el-input>
          </div>
          <div style="padding: 0;margin: 0;" v-else>
            <span>{{scope.row[item.prop] == " " || scope.row[item.prop] ?scope.row[item.prop]:"-"}}</span>
          </div>
        </template>
      </el-table-column>
      <!-- <el-table-column label="操作" prop="operation" :width="operationWidth" :align="center" v-if="this.operateColumn == true">
                <template slot-scope="scope">
                        <span  v-for="(item,index) in operation" :key="index" class="cell_span"  @click="all(item.name,scope.row.id)">{{item.name}}</span>
                </template>
      </el-table-column>-->
    </el-table>

    <el-row id="tabFen" :gutter="20" style="margin-top:15px;width: 100%;" v-if="this.paging == true && this.totalNum*1 >10 && tableData3.length>0">
      <el-col :span="24" style="text-align: right;padding-right: 0;">
        <div class="block">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                         :page-sizes="[10, 20, 30, 40]" :page-size="sizeVal" layout="total, sizes, prev, pager, next, jumper" :total="totalNum*1"></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<!--
:tableData3="tableData3" 表格数据
:taData="taData" 表头数据
:center="left"  字体方向
:styleWidth="styleWidth"  整体表格的宽度   默认100%  可以不写
:newType="newType"  表格类型   more 多表头  bill表头
:screen="screen"  筛选数据  同表头个数  不筛选的列写[]
:paging="true"   是否要分页  true保留 false 不保留
:selectColumn="true"  是否要复选框  true  保留    false  不保留
:operateColumn="true"   是否要操作列  true  保留    false  不保留
:loading="fullscreenLoading"   加载动画  true 加载  false 不加载  默认不加载
:totalNum="totalNum"  总条数
@cl="redact "   操作列  返回一个对象 {查看: 85101} {按钮名字:当前列的id}
@multiple="newArr"  复选框  用于批量  返回一个数组  勾选数据的id
@filterTag="filterTag"  筛选的数据  返回一个json 可以直接传给后台
@sizePage="sizePage"   分页   每页多少条
@currentPage="currentPage"  当前页  number
@blurData="newInData"   input框的数据  返回一个新的表格数据  json
			 *  -->

<script>
  export default {
    name: "T_table",
    data() {
      return {
        style: {
          width: "100%",
          height: "auto"
        },
        outData: {},
        currentPage4: 1,
        operationAAA: [{
          name: "链路检测"
        }],
        height: "auto",
        oIn: {},
        sizeVal: 10,
        currentVal: 1,
        newPaging: "",
        radio: "",
        newSize: 10,
        newtaDataC:[]
      };
    },

    props: {
      scop: "",
      tableData3: Array, //表格数据
      taData: Array, //表头数据
      center: "", //居中
      width: "", //宽度
      fixed: {
        type: String,
        default: "left"
      }, //固定
      screen: null, //筛选条件
      selectColumn: "", //是否有选择列
      radioType: "", //单选
      indexColumn: "",
      operateColumn: "", //是否有操作列\
      newtaData: Array, //多表头 表头信息
      newType: "", //类型  more 多表头  bill 表头
      paging: "",
      operationWidth: "",
      loading: {
        type: Boolean,
        default: false
      },
      styleWidth: "",
      tableHeight:"",
      totalNum: Number, //数据总条数
      newHeight: "",
      chData: [],
      rowText: "",
      cellBack: "",
      sTab: "flase",
      expandSta: false,
      emptyObj: { // 自定义暂无数据
        type: Object,
        default: function () {
          return {
            open: false, // 默认不显示自定义暂无数据样式
            content: '', // 暂无数据第一段描述
            operation: '', // 暂无数据第二段描述（可点击）
            click: () => {} // 点击的回调事件
          }
        }
      }
    },
    watch: {
      taData: {
        handler: function() {
          this.changeIcon()
        }
      },

      paging(newValue){
        if(newValue){
          this.currentVal=1
          this.currentPage4=1
        }
      }
    },
    mounted() {
      var _this = this;
      this.oHiHeight = $("#tableTop").outerHeight();
      this.oMinHeight = $("#main").outerHeight();
      this.style.height = this.oMinHeight - this.oHiHeight - 15 - 34 - 40 - 20;
      //动态在data{}创建outData 存放筛选数据方便传给后台
      for (var i = 0; i < this.taData.length; i++) {
        if (this.taData[i].prop) {
          this.outData[this.taData[i].prop] = "";
        }
      }
      //       this.$axios.post(this.configMangeUrl.getUrl("sysconftempDetail"), {
      //       	productId:'18'
      //       })
      //       .then((res) => {
      //         console.log(res)
      //           if(res.data.datasList[0].productId==18){
      //             res.data.datasList[0].productConfList.map(item=>{
      //               const key =  Object.keys(item)[0]!=='keyType'? Object.keys(item)[0] : Object.keys(item)[1];
      //               if(key=='oams_defaut_pagesize'){
      //                 console.log(item.oams_defaut_pagesize)
      //                 _this.newSize = item.oams_defaut_pagesize
      //               }
      //             })
      //           }
      //         })
      var that = this;
      // t1 = setTimeout(function() {
      // 	if (this.paging == true) {
      // 		console.log(this.totalNum > 10)
      // 		if (this.totalNum > 10) {
      // 			$("#tabFen").show()
      // 		} else{
      // 			$("#tabFen").hide()
      // 		}
      // 	} else if (this.paging == false) {
      // 		$("#tabFen").hide()
      // 	}
      // }, 1);

      this.changeIcon()
      // window.clearTimeout(t1);
      // 			t2 = setTimeout(function() {
      // 				this.one()
      // 			}, 1);

      // window.clearTimeout(t1);
    },
    // watch:{
    // 	totalNum(val){
    // 		console.log(val)
    // 	}
    // },
    created(){
      if(this.newType==='more'&&!this.newtaData&&this.taData){
        this.newtaDataC = this.taData
      }
    },
    methods: {
      changeIcon() {
        this.$nextTick(() => {
          // console.log(this.totalNum)
          for (var e = 0; e < $(".ascending").length; e++) {
            $($(".ascending")[e])
              .removeClass("sort-caret")
              .addClass("el-icon-sort-down");
          }
          for (var r = 0; r < $(".descending").length; r++) {
            $($(".descending")[r])
              .removeClass("sort-caret")
              .addClass("el-icon-sort-up");
            $($(".descending")[r]).after(
              "<span style='display: block; width: 14px; height: 23px; position: absolute; top: 0; right: 0;'></span>"
            );
          }
          for (var t = 0; t < $(".el-table__column-filter-trigger").length; t++) {
            $($(".el-table__column-filter-trigger")[t]).html(
              "<i class='iconfont iconshaixuan'></i>"
            );
          }
        });
      },

      radioChange(index, row) {
        this.$emit("radioChange", row);
      },
      //表格内输入框
      inData() {
        // 				for (var i in this.oIn) {
        // 					for (var j = 0; j < this.tableData3.length; j++) {
        // 						var newProp = i.split("/")[0];
        // 						var newId = i.split("/")[1];
        // 						if (j == newId) {
        // 							this.tableData3[j][newProp] = this.oIn[i];
        // 						}
        // 					}
        // }
        this.$emit("blurData", this.tableData3);
      },
      //复选框分情况禁止点击
      checkboxT(row, index) {
        console.log(row);
        if (row.tablecheckStatus == 1) {
          return false;
        } else {
          return true;
        }
      },
      tableRowClassName({
                          row,
                          rowIndex
                        }) {
        var newData = {
          newRow: row,
          newInd: rowIndex
        };
        this.$emit("rowStyle", newData);
        if (row.ifsign == 1 || row.balanceflag == 8) {
          return "red";
        }
      },
      //全选多选
      handleSelectionChange(val) {
        this.multipleSelection = val;
        var arr = [];
        val.forEach(v => {
          arr.push(v);
        });
        this.$emit("multiple", arr);
      },
      handleCheckedCitiesChange() {
        // var  obj={}
        // for (var i=0;i<this.chData.length;i++) {
        // 	var key = this.chData[i].substring(0,2);
        // 	var value = this.chData[i].substring(2);
        // 	obj[key] = value;
        // }
        this.$emit("checkChange", this.chData);
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(val) {
        //筛选
        var newOut = Object.keys(this.outData);
        var newValkey = Object.keys(val)[0];
        var newValval = val[newValkey];
        for (var i = 0; i < newOut.length; i++) {
          if (newOut[i] == newValkey) {
            this.outData[newValkey] = newValval.join(",");
          }
        }
        this.$emit("filterTag", this.outData);
      },
      //分页
      handleSizeChange(val) {
        this.sizeVal = val;
        // this.one()
        this.$emit("sizePage", val);
      },
      handleCurrentChange(val) {
        this.currentVal = val;
        this.currentPage4 = val
        this.$emit("currentPage", val);
      },
      sortChange(val) {
        if (val.order == "descending") {
          var arr = ["1", val.prop];
        } else {
          var arr = ["-1", val.prop];
        }
        this.$emit("sorts", arr);
      },
      //低于一页不显示分页
      // 			one() {
      // 				(this.totalNum)
      // 				if (this.paging == true) {
      //
      // 					if (this.totalNum / this.sizeVal < 1) {
      // 						this.newPaging = false
      // 					} else {
      // 						this.newPaging = true
      // 					}
      // 				} else {
      // 					this.newPaging = false
      // 				}
      // 			},
      //操作按钮 allType 按钮类型  allId当前数据的id
      all(allType, allId) {
        var newAll = {};
        newAll[allType] = allId;
        this.$emit("cl", newAll);
      },
      model1(val1, val2, event, Row) {
        var newArr = {
          newData: val1,
          newId: val2,
          newE: event,
          newRow: Row
        };
        this.$emit("clickModel", newArr);
      },
      mouse() {
        this.$emit("newMouse");
      },
      cellStyle({
                  row,
                  rowIndex
                }) {
        if (row[0].label == "序号") {
          $("." + row[0].id).addClass("xuhao");
        }
      },
      indexMethod(index) {
        return this.sizeVal * (this.currentVal - 1) + index + 1;
      }
    }
  };
</script>

<style lang="scss">
  .xuhao {
    color: #545558 !important;
  }

  .empty-define {
    display: flex;
    justify-content: center;
  }

  .empty-operation {
    color: #0097DE;
    cursor: pointer;
    margin-left: 5px;
  }

  .el-table .warning-row {
    background: #ea6666;
    color: #ffffff;
  }

  .el-table .red {
    background: url(../images/bg1_03.png);
    color: #a1a2a3;
  }

  .el-table .red .nodeNums {
    background: #f6c2bd !important;
  }

  .el-table .red .cell_span {
    color: #92c0f1;
  }

  .el-table .red .nodeNum {
    color: #92c0f1;
  }

  .el-table .success-row {
    background: #fafafa;
  }

  #title {
    font-family: "微软雅黑";
    /* font-size: 18px; */
    padding: 10px;
  }

  .cell_span {
    cursor: pointer;
    font-size: 12px;
    padding: 0 7px;
    color: #00acde;
    background: url(../images/span.png) right center no-repeat;
  }

  .cell_span:hover {
    color: #589ee6;
    text-decoration: underline;
  }

  .cell_span:last-of-type {
    background: none;
  }

  .cell_span:first-of-type {
    padding-left: 0;
  }

  .el-table__header tr,
  .el-table__header th {
    padding: 0;
    line-height: 34px;
    height: 34px;
  }

  .el-table__body tr,
  .el-table__body td {
    padding: 0;
    line-height: 34px;
    height: 34px;
  }

  .el-table__body tr.hover-row>td {
    background: #ebf3fe !important;
  }

  .el-table th {
    font-size: 12px;
    background-color: #f2f2f2;
    padding-left: 15px;
  }

  .el-table td {
    padding-left: 15px;
  }

  .el-table tr {
    font-size: 12px;
    padding: 0;
    line-height: 34px;
    height: 34px;
  }

  .el-table th div {
    /* line-height: 13px; */
    padding-left: 0;
  }

  .el-dropdown-menu {
    padding: 0;
    padding: 8px 0;
  }

  .el-dropdown-menu__item {
    list-style: none;
    line-height: 28px;
    padding: 0 10px;
    margin: 0;
    font-size: 12px;
    color: #606266;
    cursor: pointer;
    outline: 0;
    margin-right: 5px;

    margin-left: 5px;
  }

  .el-pagination__total {
    font-weight: bold;
  }

  .is-sortable.ascending .ascending {
    display: inline-block;
  }

  .is-sortable.ascending .descending {
    display: none;
  }

  .is-sortable.descending .ascending {
    display: none;
  }

  .is-sortable.descending .descending {
    display: inline-block;
  }

  .addClass {
    color: #00acde;
    cursor: pointer;
  }

  .T_table a {
    text-decoration: none;
    color: #00acde;
  }
  .T_table {
    .el-table__header,.el-table__body{
      .cell{
        padding: 0;
      }
    }
  }

  .dis {
    display: none;
  }

  .caret-wrapper {
    line-height: 30px !important;
    display: inline-block !important;
    width: 14px !important;
  }

  .caret-wrapper i {
    width: 5px !important;
  }

  .el-table__column-filter-trigger {
    margin-left: 3px;
  }
 
</style>
