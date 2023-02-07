<template>
	<div style="position:relative;">
		<!-- <el-form :inline="true" :model="form" v-if="queryDiv">
            <el-form-item label="" prop="input">
                <el-input
                    placeholder="请输入内容"
                    v-model="queryIng"
                    @change="queryChange"
                    class="queryInput"
                    clearable>
                </el-input>
            </el-form-item>
            <el-button type="primary" @click="queryNode">搜索</el-button>
        </el-form> -->
		<ul :id="treeDemoId" class="ztree"></ul>
	</div>
</template>

<script>
	import "../js/ztree1.js"
	import "../js/ztree2.js"
	import "../js/ztree3.js"

	import $utils from '../../../js/utils'
	// import "../js/ztree.styl"
	/*
	  * zTree参考：http://www.treejs.cn/v3/api.php
	  * 属性：
	        参数          	类型	      值	                    说明
	        treeDemoId     String                                   放树数据div的ID
	        hoverDiv       Boolean       true/false                 操作按钮是否显示
	        queryDiv       Boolean       true/false                 查询节点的div是否显示
	        chkStyle       String        checkbox/radio             checkbox(复选框),radio(单选框)
	        chkboxType     Object        { "Y": "ps", "N": "s" }    Y表示勾选后，N表示取消勾选后；p表示影响父级节点，s表示影响子级节点(chkStyle为CheckBox时设置此属性，否则为空)
	        radioType      String        all/level                  all表示整棵树内单选，level表示每一级内单选(chkStyle为Radio时设置此属性，否则为空)
	        drag           Boolean       true/false                 节点是否能拖拽
	        treeData       Object        初始赋值为{}                包含整个树的所有属性，使用时直接用this.treeData.zTreeObj即可设置对应的属性
	        zNodes         Array
	        zNodes数据参考格式：
	        zNodes:[{
	                id: 1,
	                name: "首页",
	                isParent: true,     //是否为父节点
	                removeBtn: true,    //删除按钮是否显示
	                renameBtn: true,    //编辑按钮是否显示
	                chkDisabled: true,  //是否禁选
	                iconSkin: "diy03",  //自定义图标(在ztree1.css里根据该名字作为类名定义相应的图标)
	            },{
	                id: 2,
	                name: "前端布置",
	                children: [{
	                    id: 11,
	                    name: "banner位设置"
	                }]
	            }]
	  * 事件：
	        事件名称	                回调参数	            说明
	        listenToChildClickNode      treeNode               监听节点点击事件
	        listenToBeforeEditName      treeNode               监听编辑按钮事件
	        listenToBeforeRightClick    treeNode               监听右键点击事件
	        listenToAddDiyDom           treeNode               监听自定义节点右侧按钮的显示和功能绑定
	        listenToAddHoverDom         treeNode               监听鼠标移到节点显示自定义控件
	  * 样式：
	        根据渲染的class进行样式的自定义，并完成覆盖
	*/
	export default {
		name: 'T_zTree',
		props: ["backgroundColor", "treeDemoId", "checkShow", "showIcon", "treeData", "chkStyle", "chkboxType", "radioType",
			"zNodes", "queryDiv", "hoverDiv", "yangIcon", "hoverAdd", "sureRemove", "hoverDom", "drag", "rootNoDel",
			"beforeDropNode"
		],
		data() {
			return {
				rootArr: [],
				removeShow: false,
				hoverTreeNode: {},
				form: {},
				checkCount: '', //选中的数量
				nocheckCount: '', //没有选中的数量
				checkedNames: [], //选中节点名字集合
				checkedIds: [], //选中节点的ID集合
				setting: {
					check: {
						enable: this.checkShow,
						chkStyle: this.chkStyle,
						// 设置成CheckBox（Y表示勾选后，N表示取消勾选后；p表示影响父级节点，s表示影响子级节点）
						chkboxType: this.chkboxType,
						// 设置成radio（all表示整棵树内单选，level表示每一级内单选）
						radioType: this.radioType
					},
					view: {
						addDiyDom: this.addDiyDom, //自定义按钮
						addHoverDom: this.addHoverDom, //鼠标移上自定义控件
						removeHoverDom: this.removeHoverDom, //鼠标移开自定义控件
						fontCss: this.setFontCss, //节点字体样式
						showLine: false,
						showIcon: this.showIcon
					},
					edit: {
						enable: true,
						editNameSelectAll: true, //编辑内容时是否全选
						showRemoveBtn: this.showRemoveBtn, //显示删除按钮
						showRenameBtn: this.showRenameBtn //显示编辑按钮
					},
					callback: {
						onDblClick: this.zTreeOnDblClick, //双击
						beforeEditName: this.beforeEditName, //编辑按钮事件
						// beforeRemove: this.beforeRemove,//删除按钮事件
						beforeRename: this.beforeRename, //编辑按钮结束事件
						onRemove: this.onRemove, //删除之后事件
						onRename: this.onRename, //编辑之后事件
						beforeClick: this.beforeClick, //点击节点之前事件
						onClick: this.zTreeOnClick, //节点被点击事件
						onCheck: this.zTreeOnCheck, //节点被勾选或取消勾选事件
						beforeExpand: this.beforeExpand, //节点被展开之前
						onExpand: this.onExpand, //节点被展开事件
						onCollapse: this.onCollapse, //节点被折叠事件
						beforeRightClick: this.beforeRightClick, //鼠标右键事件
						onRightClick: this.onRightClick, //右键点击之后
						beforeDrop: this.beforeDrop, //拖拽结束之前事件
						beforeDrag: this.beforeDrag, //拖拽之前事件

					}
				},
				treeObj: {},
			}
		},
		methods: {
			beforeClick(treeId, treeNode, clickFlag) {
				$(".ztree span").removeClass("treeFontClickColorClass");
				$("#" + treeNode.tId + "_span").addClass("treeFontClickColorClass");
				$("#addBtn_" + treeNode.tId).unbind().remove();
				$("#allBtn_" + treeNode.tId).unbind().remove();
				$("#yangBtn_" + treeNode.tId).unbind().remove();
			},
			// 节点被点击事件
			zTreeOnClick(event, treeId, treeNode, clickFlag) {
				this.treeData.zTreeObj.expandNode(treeNode, true);
				$("#" + treeNode.tId + "_ul").css("background", this.backgroundColor);
				this.$emit("listenToChildClickNode", treeNode);
			},
			//节点被双击事件
			zTreeOnDblClick(event, treeId, treeNode, clickFlag) {
				this.treeData.zTreeObj.expandNode(treeNode, true);
				$("#" + treeNode.tId + "_ul").css("background", this.backgroundColor);
				this.$emit("zTreeondblClickkNode", treeNode);
			},
			beforeExpand(treeId, treeNode) {

			},
			// 节点被展开事件
			onExpand(event, treeId, treeNode) {
				$("#" + treeNode.tId + "_ul").css("background", this.backgroundColor);
				this.$emit("listenToOnExpand", treeNode);
			},
			// 节点被折叠事件
			onCollapse(event, treeId, treeNode) {
				this.$emit("listenToOnCollapse", treeNode);
			},
			// 懒加载（点击父节点加载子节点）
			lazyLoad(treeNode, url, data) {
				if (!treeNode.isParent) {
					//alert("treeId自动编号：" + treeNode.tId + ", 节点id是：" + treeNode.id + ", 节点文本是：" + treeNode.name);
					$.ajax({
						url: url, //请求的action路径
						data: data,
						error: function() { //请求失败处理函数
							alert('请求失败');
						},
						success: function(data) { //添加子节点到指定的父节点
							var jsondata = eval(data);
							if (jsondata == null || jsondata == "") {
								//末节点的数据为空   所以不再添加节点  这里可以根据业务需求自己写
								//$("#treeFrame").attr("src",treeNode.url);
							} else {
								var treeObj = $.fn.zTree.getZTreeObj("demotree");
								//treeNode.halfCheck = false;
								var parentZNode = treeObj.getNodeByParam("id", treeNode.id, null); //获取指定父节点
								newNode = treeObj.addNodes(parentZNode, jsondata, false);
							}
						}
					});
				}
			},
			// 节点被勾选或取消勾选事件
			zTreeOnCheck(event, treeId, treeNode) {
				$(".ztree span").removeClass("treeFontClickColorClass");
				$("#" + treeNode.tId + "_span").addClass("treeFontClickColorClass");
				this.$emit("listenToChildCheckNode", treeNode);
				// this.checkCount = this.treeData.zTreeObj.getCheckedNodes(true).length,//选中
				// this.nocheckCount = this.treeData.zTreeObj.getCheckedNodes(false).length,//未选中
				// this.changeCount = this.treeData.zTreeObj.getChangeCheckedNodes().length;//获取输入框勾选状态被改变的节点集合（与原始数据 checkedOld 对比）
				// for (var i = 0; i <= this.treeData.zTreeObj.getCheckedNodes(true).length - 1; i++) {
				//     this.checkedIds.push(this.treeData.zTreeObj.getCheckedNodes(true)[i].id);
				//     this.checkedNames.push(this.treeData.zTreeObj.getCheckedNodes(true)[i].name);
				// };
			},
			// 删除节点
			beforeRemove(treeId, treeNode) {
				this.treeData.zTreeObj.removeNode(treeNode);
				this.modal.confirm('提示', '确定删除当前数据吗？', (index) => {
					layer.close(index)
				})
			},
			onRemove(event, treeId, treeNode) {

			},
			// 删除按钮的显示
			showRemoveBtn(treeId, treeNode) {
				// return treeNode.removeBtn;
				return false;
			},
			// 编辑按钮的显示
			showRenameBtn(treeId, treeNode) {
				// return treeNode.renameBtn;
				return false;
			},
			// 鼠标右键事件
			beforeRightClick(treeId, treeNode) {
				this.$emit("listenToBeforeRightClick", treeNode);
			},
			onRightClick(event) {
				event.preventDefault;
			},
			//自定义按钮的显示和功能绑定
			addDiyDom(treeId, treeNode) {
				this.$emit("listenToAddDiyDom", treeNode);
			},
			// 鼠标移到节点显示自定义控件
			addHoverDom(treeId, treeNode) {
				this.hoverTreeNode = treeNode;
				var self = this;
				$("li#" + treeNode.tId).addClass("treeHoverBackgroundClass");
				$("ul#" + treeNode.tId + "_ul").removeClass("treeHoverBackgroundClass");
				$("li#" + treeNode.tId).css("position", "relative");
				var sObj = $("#" + treeNode.tId + "_a");
				$("#" + treeNode.tId + "_span").css("width", "50%");
				if (treeNode.editNameFlag || $("#addBtn_" + treeNode.tId).length > 0) return;
				if (treeNode.editNameFlag || $("#allBtn_" + treeNode.tId).length > 0) return;
				if (treeNode.editNameFlag || $("#yangBtn_" + treeNode.tId).length > 0) return;
				var addStr = "<span class='button add' id='addBtn_" + treeNode.tId +
					"' title='' onfocus='this.blur();'></span>";
				var allStr = "<span class='button all' id='allBtn_" + treeNode.tId +
					"' title='' onfocus='this.blur();'></span>";
				var yangStr = "<span class='button yang' id='yangBtn_" + treeNode.tId +
					"' title='' onfocus='this.blur();'></span>";

				var divStr = "<span class='button hoverDiv' title='' id='hoverDiv_" + treeNode.tId + "'><ul>";

				if (this.hoverDom && this.hoverDom.length != 0) {
					var divStr0 = "<li id='liEditName_" + treeNode.tId + "'>" + this.hoverDom[0].title + "</li>";
					var divStr3 = "<li id='liEdit_" + treeNode.tId + "'>" + this.hoverDom[3].title + "</li>";
					var divStr4 = "<li id='liCopy" + treeNode.tId + "'>" + this.hoverDom[4].title + "</li>";
					var divStr1 = "<li id='liRemoveNode_" + treeNode.tId + "'>" + this.hoverDom[1].title + "</li>";
					var divStr2 = "<li id='liLookNode_" + treeNode.tId + "'>" + this.hoverDom[2].title + "</li>";
					if (this.hoverDom[0].show) divStr += divStr0;
					if (this.hoverDom[1].show) {
						if (self.rootNoDel && self.rootArr.indexOf(treeNode.id) != -1) {
							// divStr += divStr1;
						} else {
							divStr += divStr1;
						}
					}
					if (this.hoverDom[2].show) divStr += divStr2;
					if (this.hoverDom[3].show) divStr += divStr3;
					if (this.hoverDom[4].show) divStr += divStr4;
				}
				divStr += "</ul></span>";
				if (self.hoverAdd) sObj.append(addStr);
				if (self.yangIcon) {
					if (treeNode.sample != undefined) {
						sObj.append(yangStr);
					}
				}
				if (self.hoverDiv) sObj.append(allStr);
				sObj.append(divStr);
				var addbtn = $("#addBtn_" + treeNode.tId);
				var allbtn = $("#allBtn_" + treeNode.tId);
				var yangbtn = $("#yangBtn_" + treeNode.tId);
				var divbtn = $("#hoverDiv_" + treeNode.tId);
				if (addbtn) addbtn.bind("click", function(event) {
					event.stopPropagation();
					self.$emit("listenToAddNode", treeNode);
				});
				if (yangbtn) yangbtn.bind("click", function(event) {
					event.stopPropagation();
					self.$emit("listenToyangbtn", treeNode);
				});
				if (allbtn) allbtn.bind("click", function(event) {
					event.stopPropagation();
					if ($(".treeBox").height() / 3 * 2 < event.clientY - ($(".treeBox").offset() && $(".treeBox").offset().top||0)) {
						$("#hoverDiv_" + treeNode.tId).css("top", "-40px");
					}
					$("#hoverDiv_" + treeNode.tId).css("display", "block");
				});
				$("li#" + treeNode.tId + " a").bind("mouseleave", function() {
					$("#hoverDiv_" + treeNode.tId).css("display", "none");
					// $("#yangBtn_" + treeNode.tId).unbind().remove();
				})
				if (divbtn) divbtn.bind("mouseleave", function() {
					$("#allBtn_" + treeNode.tId).unbind().remove();
					$("#addBtn_" + treeNode.tId).unbind().remove();
					$("#yangBtn_" + treeNode.tId).unbind().remove();
					$("#hoverDiv_" + treeNode.tId).unbind().remove();
				})
				$("#liEditName_" + treeNode.tId).unbind();
				$("#liEdit_" + treeNode.tId).unbind();
				$("#liCopy" + treeNode.tId).unbind();
				$("#liRemoveNode_" + treeNode.tId).unbind();
				$("#liLookNode_" + treeNode.tId).unbind();
				$("#liEditName_" + treeNode.tId).bind("click", function() {
					self.beforeEditName();
				})
				$("#liEdit_" + treeNode.tId).bind("click", function() {
					self.beforeEdit();
				})
				$("#liCopy" + treeNode.tId).bind("click", function() {
					self.licopyNode();
				})
				$("#liRemoveNode_" + treeNode.tId).bind("click", function() {
					self.liremoveNode();
				})
				$("#liLookNode_" + treeNode.tId).bind("click", function() {
					self.liLookNode();
				})
			},
			// 编辑节点
			beforeEdit(treeId, treeNode) {
				this.$emit("listenToBeforeEdit", [this.hoverTreeNode, this.treeData.zTreeObj]);
				return false;
			},
			//复制节点
			licopyNode(treeId, treeNode) {
				$(".hoverDiv").hide();
				this.$emit("listenToCopyNode", this.hoverTreeNode);
			},
			// 编辑节点名称
			beforeEditName(treeId, treeNode) {
				$(".hoverDiv").hide();
				this.$emit("listenToBeforeEditName", this.hoverTreeNode);
				return false;
			},
			beforeRename(treeId, treeNode, newName, isCancel) {
				if (newName.length == 0) {
					this.treeData.zTreeObj.cancelEditName();
					this.modal.alert('提示', '节点名称不能为空', (index) => {
						layer.close(index)
					})
					return false;
				}
				return true;
			},
			onRename(event, treeId, treeNode) {
				this.$emit("listenToChildOnRename", treeNode);
			},
			// 删除节点
			liremoveNode() {
				$(".hoverDiv").hide();
				this.$emit("listenToRemoveNode", this.hoverTreeNode);
			},
			// 查看节点
			liLookNode() {
				$(".hoverDiv").hide();
				this.$emit("listenToChildClickNode", this.hoverTreeNode);
			},
			// 鼠标移出节点隐藏自定义控件
			removeHoverDom(treeId, treeNode) {
				$("li#" + treeNode.tId).removeClass("treeHoverBackgroundClass");
				$("#addBtn_" + treeNode.tId).unbind().remove();
				$("#allBtn_" + treeNode.tId).unbind().remove();
				$("#yangBtn_" + treeNode.tId).unbind().remove();
				$("#" + treeNode.tId + "_span").css("width", "auto");
			},
			// 根据节点状态改变字体颜色
			setFontCss(treeId, treeNode) {
				return (treeNode.highlight) ? {
					color: $utils.treeFontClickColor,
					"font-weight": "bold"
				} : {
					color: $utils.treeFontColor,
					"font-weight": "normal"
				};
			},
			beforeDrop(treeId, treeNodes, targetNode, moveType) {
				// var moveNode = treeNodes[0];
				// return moveNode.level == targetNode.level && moveType != "inner";
				return this.beforeDropNode(treeId, treeNodes, targetNode, moveType)
			},
			beforeDrag() {
				return this.drag;
			},
			// 根据返回的结果处理数据（可根据数据状态改变样式）
			dataFilter(treeId, parentNode, childNodes) {
				if (!childNodes) {
					return null;
					childNodes = eval("(" + childNodes + ")"); //必须转换为[{id:103,pId:1,name:'子节点3'}];这样的格式
					return childNodes;
				}
				for (var i = 0, l = childNodes.length; i < l; i++) {
					childNodes[i].name = childNodes[i].name.replace(/\.n/g, '.');
					// 根据节点类型改变图标样式
					if (childNodes[i].name == "目录1") {
						childNodes[i].iconSkin = "diyzhuan";
						zTree.updateNode(childNodes[i]);
					}
				}
				return childNodes;
			},
			// 模糊查询显示节点
			queryNode(value) {
				$.fn.zTree.init($("#" + this.treeDemoId), this.setting, this.zNodes);
				// var value = this.queryIng;
				var nodes = [];
				// 先关闭所有节点
				this.treeData.zTreeObj.expandAll(false);
				// 使用API transformToArray获取所有的节点，getNodes()只能获得根节点，属性children也只能获取下一级节点
				var allNodes = this.treeData.zTreeObj.transformToArray(this.treeData.zTreeObj.getNodes());
				for (var i = 0; i < allNodes.length; i++) {
					// 关闭高亮是利用节点属性highlight来控制fontCss实现的
					allNodes[i].highlight = false;
					// 更新节点，因为hightlight改变了，使用updateNode可以更新节点
					this.treeData.zTreeObj.updateNode(allNodes[i]);
					// 模糊查询 获得指定的节点
					var queryData = this.$FuzzyQuery.queryAll(value, allNodes[i], 'name');
					if (queryData != undefined) {
						nodes.push(queryData);
					}
					if (value == "") {
						nodes = [];
					}
				}
				// 高亮并展开搜索到的节点
				for (var i = 0; i < nodes.length; i++) {
					// 更新节点，让高亮生效
					nodes[i].highlight = true;
					this.treeData.zTreeObj.updateNode(nodes[i]);
					// 展开指定节点的根节点
					var rootNode = this.getCurrentRoot(nodes[i]);
					this.treeData.zTreeObj.expandNode(rootNode, true);
					// 展开搜索到的节点的父节点
					this.treeData.zTreeObj.expandNode(nodes[i].getParentNode(), true);
					this.treeData.zTreeObj.updateNode(nodes[i])
				}
			},
			// 递归得到指定节点的父节点的父节点....直到根节点
			getCurrentRoot(treeNode) {
				if (treeNode.getParentNode() != null) {
					var parentNode = treeNode.getParentNode();
					// return setTimeout( this.getCurrentRoot(parentNode), 0);
					return this.getCurrentRoot(parentNode);
				} else {
					return treeNode;
				}
			},
			queryChange() {
				if (this.queryIng == "") {
					this.queryNode();
				}
			},
			// 异步加载数据
			initZTree() {
				$.ajax({
					url: "",
					type: "post",
					async: false,
					dataType: "json",
					success: function(data) {
						var zTreeObj = $.fn.zTree.init($("#treeDemo"), this.setting, data);
						//让第一个父节点展开
						var rootNode_0 = zTreeObj.getNodeByParam('pid', 0, null);
						zTreeObj.expandNode(rootNode_0, true, false, false, false);
					},
					error: function() {

					}
				});
			},
			init(data, inx) {
				if (data != null) {
					var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
					data.forEach((item, index) => {
						if (inx) {
							item.idDir = inx + "-" + arr[index];
							arr[index] = inx + "-" + arr[index];
						} else {
							item.idDir = arr[index];
						}
						if (item.children && item.children.length > 0) {
							this.init(item.children, arr[index]);
						}
					});
					return data;
				} else {
					return null;
				}
			},
			initdata() {
				this.$nextTick(() => {
					this.init(this.zNodes);
					$.fn.zTree.init($("#" + this.treeDemoId), this.setting, this.zNodes);
					this.treeData.zTreeObj = $.fn.zTree.getZTreeObj(this.treeDemoId);
					this.$emit("listenToAllLength", this.treeData.zTreeObj.transformToArray(this.treeData.zTreeObj.getNodes()).length);
				})
			}
		},
		mounted() {
			$(".ztree").css("background", this.backgroundColor);
			var self = this;
			// this.init(this.zNodes);
			$.fn.zTree.init($("#" + this.treeDemoId), this.setting, this.zNodes);
			this.treeData.zTreeObj = $.fn.zTree.getZTreeObj(this.treeDemoId);
			this.$emit("listenToAllLength", this.treeData.zTreeObj.transformToArray(this.treeData.zTreeObj.getNodes()).length);
			$(".ztree span.button.switch").mouseover(function() {
				$(this).parent().addClass("treeHoverBackgroundClass");
				var ul = $(this)[0].id.replace("switch", "ul");
				$("#" + ul).removeClass("treeHoverBackgroundClass");
			})
			var fontColor = $utils.treeFontClickColor;
			$(".ztree span.button.switch").mouseleave(function() {
				var span = $(this)[0].id.replace("switch", "span");
				if ($(this).parent().find("a span#" + span).css("color") == fontColor) {
					$(this).parent().removeClass("treeHoverBackgroundClass");
				} else {
					$(this).parent().addClass("treeHoverBackgroundClass");
				}
			})
			var rootDatas = this.treeData.zTreeObj.getNodes();
			for (var i = 0; i < rootDatas.length; i++) {
				this.rootArr.push(rootDatas[i].id);
			}

			this.rootId = this.treeData.zTreeObj.getNodes()[0] ? this.treeData.zTreeObj.getNodes()[0].id : "";
		}
	}
</script>
<style>
.ztree * {padding:0; margin:0; font-size:12px; font-family: Verdana, Arial, Helvetica, AppleGothic, sans-serif}
ul.ztree {border: none;width: 100%;background: transparent;height:100%;padding: 0;overflow:hidden;padding-bottom:50px!important}
.ztree {margin:0; padding:5px; color:fontColor; display: inline-block; position: relative}
.ztree li{padding: 0; margin:0; list-style:none; line-height:30px; text-align:left; white-space:nowrap; outline:0;}

.ztree ul.level0{ margin:0;}
.ztree li ul.line{ background:url("../images/line_conn.gif") 0 0 repeat-y;}
.ztree li.level1{ padding:0 0 0 18px}
.ztree ul.level1{ margin-left: -18px}
.ztree li.level2{ padding:0 0 0 36px}
.ztree ul.level2{ margin-left: -36px}
.ztree li.level3{ padding:0 0 0 54px}
.ztree ul.level3{ margin-left: -54px}
.ztree li.level4{ padding:0 0 0 72px}
.ztree ul.level4{ margin-left: -72px}
.ztree li.level5{ padding:0 0 0 90px}
.ztree ul.level5{ margin-left: -90px}
.ztree li.level6{ padding:0 0 0 108px}
.ztree ul.level6{ margin-left: -108px}
.ztree li a {width: 100%; padding:1px 3px 0 0; margin:0; cursor:pointer; height:30px; color: fontColor; background-color: transparent;
	text-decoration:none; vertical-align:middle; display: inline-block;overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap}
.ztree li a:hover {text-decoration:underline;}
.ztree li a span.button {
	margin-top: 6px;
}
.ztree li a span.node_name {
	display: inline-block;
	overflow:hidden;
    text-overflow:ellipsis;
	white-space:nowrap
}
.ztree li a.curSelectedNode {padding-top:0px; background-color: treeHoverBackground; color:fontClickColor; height:30px; line-height:30px;}
.ztree li a.curSelectedNode_Edit {padding-top:0px; background-color:treeHoverBackground; color:fontClickColor; height:30px; line-height:30px;}
.ztree li a.tmpTargetNode_inner {padding-top:0px; background-color:transparent; color:white; height:30px; line-height:30px; border:1px #316AC5 solid;}
.ztree li a.tmpTargetNode_prev {}
.ztree li a.tmpTargetNode_next {}
.ztree li a input.rename {height:14px; width:80px; padding:0; margin:0;
	font-size:12px; border:1px #7EC4CC solid; *border:0px}
.ztree li span {line-height:30px; margin-right:2px}
.ztree li span.button {line-height:0; margin:0; width:16px; height:16px; display: inline-block; vertical-align:middle;
	border:0 none; cursor: pointer;outline:none;
	background-color:transparent; background-repeat:no-repeat; background-attachment: scroll;
	background-image:url("../images/zTreeStandard.png"); *background-image:url("../images/zTreeStandard.gif")}

.ztree li span.button.chk {width:13px; height:13px; margin:0 3px 0 0; cursor: auto}
.ztree li span.button.chk.checkbox_false_full {background-position:0 0}
.ztree li span.button.chk.checkbox_false_full_focus {background-position:0 -14px}
.ztree li span.button.chk.checkbox_false_part {background-position:0 -28px}
.ztree li span.button.chk.checkbox_false_part_focus {background-position:0 -42px}
.ztree li span.button.chk.checkbox_false_disable {background-position:0 -56px}
.ztree li span.button.chk.checkbox_true_full {background-position:-14px 0}
.ztree li span.button.chk.checkbox_true_full_focus {background-position:-14px -14px}
.ztree li span.button.chk.checkbox_true_part {background-position:-14px -28px}
.ztree li span.button.chk.checkbox_true_part_focus {background-position:-14px -42px}
.ztree li span.button.chk.checkbox_true_disable {background-position:-14px -56px}
.ztree li span.button.chk.radio_false_full {background-position:-28px 0}
.ztree li span.button.chk.radio_false_full_focus {background-position:-28px -14px}
.ztree li span.button.chk.radio_false_part {background-position:-28px 0}
.ztree li span.button.chk.radio_false_part_focus {background-position:-28px -42px}
.ztree li span.button.chk.radio_false_disable {background-position:-28px -56px}
.ztree li span.button.chk.radio_true_full {background-position:-42px 0}
.ztree li span.button.chk.radio_true_full_focus {background-position:-42px -14px}
.ztree li span.button.chk.radio_true_part {background-position:-42px -28px}
.ztree li span.button.chk.radio_true_part_focus {background-position:-42px -42px}
.ztree li span.button.chk.radio_true_disable {background-position:-42px -56px}

.ztree li span.button.switch {width:18px; height:18px;margin-left: 5px;}
.ztree li span.button.root_open{background-position:-92px -54px}
.ztree li span.button.root_close{background-position:-74px -54px}
.ztree li span.button.roots_open{background-position:-92px 0}
.ztree li span.button.roots_close{background-position:-74px 0}
.ztree li span.button.center_open{background-position:-92px -18px}
.ztree li span.button.center_close{background-position:-74px -18px}
.ztree li span.button.bottom_open{background-position:-92px -36px}
.ztree li span.button.bottom_close{background-position:-74px -36px}
.ztree li span.button.noline_open{background-position:-92px -72px}
.ztree li span.button.noline_close{background-position:-74px -72px}
.ztree li span.button.root_docu{ background:none;}
.ztree li span.button.roots_docu{background-position:-56px 0}
.ztree li span.button.center_docu{background-position:-56px -18px}
.ztree li span.button.bottom_docu{background-position:-56px -36px}
.ztree li span.button.noline_docu{ background:none;}

.ztree li span.button.ico_loading{margin-right:2px; background:url("../images/loading.gif") no-repeat scroll 0 0 transparent; vertical-align:middle; *vertical-align:middle}

ul.tmpTargetzTree {background-color:#FFE6B0; opacity:0.8;}

span.tmpzTreeMove_arrow {width:16px; height:16px; display: inline-block; padding:0; margin:2px 0 0 1px; border:0 none; position:absolute;
	background-color:transparent; background-repeat:no-repeat; background-attachment: scroll;
	background-position:-110px -80px; background-image:url("../images/zTreeStandard.png"); *background-image:url("../images/zTreeStandard.gif")}

ul.ztree.zTreeDragUL {margin:0; padding:0; position:absolute; width:auto; height:auto;overflow:hidden; background-color:#cfcfcf; border:1px #00B83F dotted; opacity:0.8;}
.zTreeMask {z-index:10000; background-color:#cfcfcf; opacity:0.0; position:absolute}

/* level style*/
/*.ztree li span.button.level0 {
	display:none;
}
.ztree li ul.level0 {
	padding:0;
	background:none;
}*/
.ztree li span.button.ico_open{margin-right:2px; background-position:-110px -16px; vertical-align:top; *vertical-align:middle}
.ztree li span.button.ico_close{margin-right:2px; background-position:-110px 0; vertical-align:top; *vertical-align:middle}
.ztree li span.button.ico_docu{margin-right:2px; background-position:-110px -32px; vertical-align:top; *vertical-align:middle}
.ztree li span.button.edit {
	margin-right:2px;
	background-position:-110px -49px;
	vertical-align:middle;
	*vertical-align:middle
}
.ztree li span.button.remove {
	margin-right:2px;
	background-position:-110px -65px;
	vertical-align:middle;
	*vertical-align:middle
}

.ztree li span.diy03_ico_docu{position:relative;top:-10px;background-image:url("../images/diy/2.png");*background-image:url("../images/diy/2.png");}
.ztree li span.diy03_ico_open{position:relative;top:-10px;background-image:url("../images/diy/2.png");*background-image:url("../images/diy/2.png");}
.ztree li span.diy03_ico_close{position:relative;top:-10px;background-image:url("../images/diy/2.png");*background-image:url("../images/diy/2.png");}

/**/
.ztree li span.diykong_ico_docu{display:none;}
.ztree li span.diykong_ico_open{display:none;}
.ztree li span.diykong_ico_close{display:none;}
/*转换脚本*/
.ztree li span.diyzhuan_ico_docu{position:relative;top:-13px;background-image:url("../images/diy/diyzhuan.png");*background-image:url("../images/diy/diyzhuan.png");}
.ztree li span.diyzhuan_ico_open{position:relative;top:-13px;background-image:url("../images/diy/diyzhuan.png");*background-image:url("../images/diy/diyzhuan.png");}
.ztree li span.diyzhuan_ico_close{position:relative;top:-13px;background-image:url("../images/diy/diyzhuan.png");*background-image:url("../images/diy/diyzhuan.png");}
/*暂停脚本*/
.ztree li span.diyzan_ico_docu{position:relative;top:-13px;background-image:url("../images/diy/diyzan.png");*background-image:url("../images/diy/diyzan.png");}
.ztree li span.diyzan_ico_open{position:relative;top:-13px;background-image:url("../images/diy/diyzan.png");*background-image:url("../images/diy/diyzan.png");}
.ztree li span.diyzan_ico_close{position:relative;top:-13px;background-image:url("../images/diy/diyzan.png");*background-image:url("../images/diy/diyzan.png");}
/*启动脚本*/
.ztree li span.diyqi_ico_docu{position:relative;top:-13px;background-image:url("../images/diy/diyqi.png");*background-image:url("../images/diy/diyqi.png");}
.ztree li span.diyqi_ico_open{position:relative;top:-13px;background-image:url("../images/diy/diyqi.png");*background-image:url("../images/diy/diyqi.png");}
.ztree li span.diyqi_ico_close{position:relative;top:-13px;background-image:url("../images/diy/diyqi.png");*background-image:url("../images/diy/diyqi.png");}
/*普通脚本*/
.ztree li span.diypu_ico_docu{position:relative;top:-13px;background-image:url("../images/diy/diypu.png");*background-image:url("../images/diy/diypu.png");}
.ztree li span.diypu_ico_open{position:relative;top:-13px;background-image:url("../images/diy/diypu.png");*background-image:url("../images/diy/diypu.png");}
.ztree li span.diypu_ico_close{position:relative;top:-13px;background-image:url("../images/diy/diypu.png");*background-image:url("../images/diy/diypu.png");}
/*普通脚本*/
.ztree li span.diyiconyangben_ico_docu{position:relative;top:-13px;background-image:url("../images/diy/ETLiconyangben.png");*background-image:url("../images/diy/ETLiconyangben.png");}
.ztree li span.diyiconyangben_ico_open{position:relative;top:-13px;background-image:url("../images/diy/ETLiconyangben.png");*background-image:url("../images/diy/ETLiconyangben.png");}
.ztree li span.diyiconyangben_ico_close{position:relative;top:-13px;background-image:url("../images/diy/ETLiconyangben.png");*background-image:url("../images/diy/ETLiconyangben.png");}

.ztree li span.button.add {
	position: absolute;
	right: 30px;
	top: -1px;
	width: 20px;
	height: 24px;
	background-image:url("../images/add.png");
	background-size: 10px 10px;
	background-position: 5px;
    vertical-align: middle;
	*vertical-align: middle;
}
.ztree li span.button.yang {
	position: absolute;
	right: 10px;
	top: -1px;
	width: 20px;
	height: 24px;
	background-image:url("../images/diy/ETLyangben.png");
	background-size: 12px 12px;
	background-position: 5px;
    vertical-align: middle;
	*vertical-align: middle;
}
.ztree li span.button.all {
    position: absolute;
	right: 10px;
	top: -1px;
	width: 20px;
	height: 24px;
	background-image:url("../images/more.png");
	background-size: 2px 10px;
	background-position: 8px;
    vertical-align: middle;
	*vertical-align: middle;
}
.ztree li span.button.hoverDiv {
	display:none;
	height: auto;
	z-index:99;
	width:60px;
	background:#fff;
	border-radius:5px;
	cursor:pointer;
	border:1px solid #eeeff3;
	position:absolute;
	right: 6px;
	top: 20px;
	margin-top: 0;
}
.ztree li span.button.hoverDiv ul {
	margin-left: 0;
}
.ztree li span.button.hoverDiv ul li {
	color:#555459;
	font-weight: normal;
	text-align: center;
	padding: 0;
	height: 24px;
	line-height: 24px;
}
.ztree li span.button.hoverDiv ul li:hover {
	background: #f6f7fb;
	color: #2986e6;
}
.ztree li span.button.icon01{
	margin:0;
	position:absolute;
	top:0;
	right:0;
	background: url("../images/diy/3.png") no-repeat scroll 0 0 transparent; vertical-align:middle; *vertical-align:middle}
.ztree li span.button.icon02{
	width:12px;
	height:12px;
	margin:0;
	position:absolute;
	top:10px;
	right:7px;
	background: url("../images/diy/ETLyangben.png") no-repeat scroll 0 0 transparent; vertical-align:middle; *vertical-align:middle}
</style>
