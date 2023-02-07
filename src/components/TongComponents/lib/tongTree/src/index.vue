<template>
	<div
		class="tong-tree"
		ref="tongTreeBox"
		:class="[{ 'checkbox-hidden': mode === '1' }]"
		@scroll="doScroll"
		:style="formateStyle"
	>
		<slot name="treeHeader"></slot>

		<el-tree
			:class="{ 'detail-slot': hasDetailSlot }"
			:style="treeBoxStyle"
			ref="tongTree"
			:show-checkbox="showCheckbox"
			:data="treeDataFormated"
			:props="formateTongTreeProps"
			:highlight-current="true"
			:node-key="nodeKey"
			:expand-on-click-node="expandOnClickNode"
			:check-on-click-node="checkOnClickNode"
			:default-expanded-keys="expandedKeys"
			:default-checked-keys="defaultCheckedKeys"
			:default-expand-all="expandAll"
			@check="handleCheckChange"
			:filter-node-method="filterMethod"
			:draggable="draggable"
			:allow-drag="allowDrag"
			:allow-drop="allowDrop"
			:check-strictly="checkStrictly"
			:accordion="accordion"
			v-bind="formateLazyloadConfig"
			v-on="$listeners"
			@node-expand="nodeExpand"
            @node-collapse="nodeCollapse"
			@node-click="handleNodeClick"
		>
			<div
				class="custom-tree-node no-select"
				:class="{
					'detail-slot-wrap': data.detailSlotShow,
					'no-checkbox':
						showCheckbox &&
						(data[moreShowKey]
							? data[moreShowKey]
							: customHideCheckbox(node, data)),
				}"
				:style="{
					'padding-left':
						showCheckbox &&
						(data[moreShowKey]
							? data[moreShowKey]
							: customHideCheckbox(node, data))
							? node.level * 23 + 'px'
							: '',
				}"
				slot-scope="{ node, data }"
			>
				<slot name="before" :node="node" :data="data"></slot>
				<expand-btn
					v-if="data[moreShowKey]"
					v-bind="{ node, data, moreFunction, moreShowKey, lazy, tongTreeObj }"
					v-on="$listeners"
				></expand-btn>

				<template v-else>
					<!-- 特殊展示方式 -->
					<el-radio
						v-if="node.isLeaf && mode === '1'"
						v-model="radioChosen[data.tong_index]"
						:disabled="data.disabled"
						@change="setRadioArr(node)"
						:label="data[nodeKey]"
					>
						<tong-icon
							v-if="renderIcon && renderIcon(node, data)"
							:imgUrl="renderIcon(node, data)"
							class="tong-tree-icon"
						/>
						<span class="white-space label-content tong-tips">{{
							data[formateTongTreeProps.label]
						}}</span>
					</el-radio>

					<template v-else-if="$scopedSlots.custom">
						<slot name="custom" :node="node" :data="data"></slot>
					</template>

					<!-- 默认展示方式中 -->
					<template v-else>
						<tong-icon
							v-if="renderIcon && renderIcon(node, data)"
							:imgUrl="renderIcon(node, data)"
							class="tong-tree-icon"
							:class="formateUseDisabled(data)"
						/>
						<el-input
							v-if="data.isEdit"
							ref="treeNodeEdit"
							size="mini"
							class="tong-tree-edit"
							@blur="saveEdit(node, data)"
							@click.native.stop="() => {}"
							v-model="nodeEdit[formateTongTreeProps.label]"
						></el-input>
						<span
							v-else
							class="white-space label-content tong-tips"
							:class="formateUseDisabled(data)"
							@dblclick="dbClick(node, data)"
							@contextmenu.prevent.stop="(e) => contextmenuShow(node, data, e)"
							>{{ data[formateTongTreeProps.label] }}</span
						>
					</template>

					<!-- 兼容已有的操作栏配置项 -->
					<template v-if="!operateCustom">
						<div v-if="operateShow && renderOperate" class="render-operate-box">
							<tong-render :render="renderOperate" :rowInfo="node" />
						</div>

						<el-dropdown
							v-if="operateShow && formateOperateList(node, data).show"
							class="dropdown-box visible-hover"
							@command="(command) => operateCommand(command, node, data)"
						>
							<tong-icon
								imgUrl="el-icon-more operate-blue"
								@click.native.stop.prevent="() => {}"
							/>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item
									v-for="(item, index) in formateOperateList(node, data).list"
									:key="index"
									:command="item.label"
									:disabled="formateDisabled(item.disabled, node, data)"
									>{{ item.label }}</el-dropdown-item
								>
							</el-dropdown-menu>
						</el-dropdown>
					</template>

					<div v-if="operateShow && operateCustom" style="display: flex">
						<template v-for="(item, index) in operateCustom">
							<div
								:key="index"
								v-if="item.formate(node, data).show"
								:class="{ 'visible-hover': item.trigger === 'hover' }"
							>
								<tong-render
									v-if="
										item.type === 'render' && item.formate(node, data).render
									"
									:render="item.formate(node, data).render"
									:rowInfo="node"
									@click.native.stop="$emit('render-click', node, data)"
								></tong-render>

								<el-dropdown
									v-else-if="item.type === 'dropdown'"
									class="dropdown-box"
									trigger="click"
									@click.native="
										(e) =>
											stopPropagation(
												e,
												item.formate(node, data).stopPropagation
											)
									"
									@command="(command) => operateCommand(command, node, data)"
								>
									<tong-icon
										:imgUrl="
											item.formate(node, data).icon ||
											'el-icon-more operate-blue'
										"
									/>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item
											v-for="(item, index) in formateList(
												item.formate(node, data).options
											)"
											:key="index"
											:disabled="formateDisabled(item.disabled, node, data)"
											:command="item.label"
											>{{ item.label }}</el-dropdown-item
										>
									</el-dropdown-menu>
								</el-dropdown>

								<el-dropdown
									v-else-if="item.type === 'cascader'"
									:ref="'cascader_' + index"
									class="cascader-box"
									trigger="click"
									@click.native="
										(e) =>
											stopPropagation(
												e,
												item.formate(node, data).stopPropagation
											)
									"
									@visible-change="initCascader"
								>
									<tong-icon
										:imgUrl="
											item.formate(node, data).icon ||
											'el-icon-more operate-blue'
										"
									/>
									<el-dropdown-menu
										v-if="refresh"
										slot="dropdown"
										class="tong-tree-cascader"
									>
										<el-cascader-panel
											v-model="cascaderValue"
											:props="{ expandTrigger: 'hover' }"
											@change="
												(value) =>
													changeCascader(
														value,
														item.formate(node, data).options,
														'cascader_' + index
													)
											"
											:options="item.formate(node, data).options"
										>
										</el-cascader-panel>
									</el-dropdown-menu>
								</el-dropdown>
							</div>
						</template>
					</div>

					<!-- 详情插槽 -->
					<div class="detail-slot-box" v-if="data.detailSlotShow">
						<slot name="detailSlot" :node="node" :data="data"></slot>
					</div>
				</template>

				<slot name="behind" :node="node" :data="data"></slot>
			</div>
		</el-tree>

		<div
			class="context-menu-box"
			ref="contextMenu"
			v-show="contextMenuShow"
			@click="contextMenuShow = false"
			@mouseleave.stop.prevent="closeContextMenu"
			@contextmenu.stop.prevent="() => {}"
			:style="contextMenuStyle"
		>
			<slot name="contextMenu" v-bind="contextmenuProps"></slot>
		</div>

		<slot name="treeFooter"></slot>
	</div>
</template>

<script>
import tongIcon from "../../tongIcon";
import tongRender from "../../tongRender";
import { flatArray, throttle, doDeepCopy, debounce } from "../../../js/usual";
import expandBtn from "./components/expand.vue";

import mixinFunc from "./mode/index";
import mixLazyload from "./modules/lazyload";
import mixOperate from "./modules/operate";
import mixStyle from "./modules/style";
import mixDetailSlot from "./modules/detaultSlot";
import mixScroll from "./modules/scroll";
export default {
	name: "tongTree",
	components: { tongIcon, tongRender, expandBtn },
	props: {
		value: {
			type: String | Array,
			default: "",
		},
		showCheckbox: {
			type: Boolean,
			default: false,
		},
		customHideCheckbox: {
			type: Function,
			default: function () {
				return false;
			},
		},
		multipleLimit: {
			type: Number,
			default: 0,
		},
		treeData: {
			type: Array,
			default: function () {
				return [];
			},
		},
		expandAll: {
			type: Boolean,
			default: false,
		},
		nodeKey: {
			type: String,
			default: "value",
		},
		defaultProps: {
			type: Object,
			default: function () {
				return {
					children: "children",
					label: "label",
				};
			},
		},

		checkStrictly: {
			type: Boolean,
			default: false,
		},
		accordion: {
			type: Boolean,
			default: false,
		},

		//渲染图标
		renderIcon: {
			type: Function | Boolean,
			default: false,
		},

		mode: {
			type: String,
			default: "",
		},

		canClickCancel: {
			type: Boolean,
			default: false,
		},
		nodeClick: {
			type: String,
			default: "nodeClick",
		},

		checkOnClickNode: {
			type: Boolean,
			default: false,
		},
		expandOnClickNode: {
			type: Boolean,
			default: true,
		},

		moreShowKey: {
			type: String,
			default: "hasMore",
		},
		moreFunction: {
			type: Function,
			default: function () {},
		},

		filterNodeMethod: {
			type: Function,
		},

		defaultCheckedKeys: {
			type: Array,
			default: function () {
				return [];
			},
		},
		defaultExpandKeys:{
			type: Array,
			default: function () {
				return [];
			},
		}
	},
	watch: {
		value: {
			handler: function (newValue) {
				const newValueArr = Array.isArray(newValue)
					? newValue
					: String(newValue).split(",");
				this.$nextTick(() => {
					this.setHeightLight();
					this.setExpandKeys(newValueArr);
					this.setCheckedKeys(newValueArr);
				});
			},
			deep: true,
			immediate: true,
		},

		treeData: {
			handler: function (newValue) {
				let newValueCopy = doDeepCopy(newValue);
				this.treeDataFormated = this.doLoop(
					newValueCopy,
					this.defaultProps.children
				);
				this.radioChosen = new Array(newValueCopy.length).fill("");
				this.flatTreeData = flatArray(
					newValueCopy,
					this.formateTongTreeProps.children
				);
			},
			deep: true,
			immediate: true,
		},

		defaultExpandKeys:{
			handler(val){
				this.$nextTick(()=>{
					this.setExpandKeys(val)
				})
			},

			deep:true,
			immediate:true,
		},

		defaultCheckedKeys:{
			handler(val){
				this.$nextTick(() => {
					val.length>0 && this.setCheckedKeys(val);
				});
			},
			deep:true,
			immediate:true
		}
	},
	data() {
		return {
			currentValue: "",
			expandedKeys: [],
			treeDataFormated: [], //处理之后的treeData
			tongTreeObj: {}, //tree实例
			flatTreeData: [], //扁平化树数据
			radioChosen: [],
			nodeEdit: {}, //正在编辑的node

			highlightIndex: -1, //高亮的行
		};
	},

	computed: {
		formateTongTreeProps() {
			return {
				children: "children",
				label: "label",
				disabled: "disabled",
				...this.defaultProps,
			};
		},
	},

	methods: {
		handleNodeClick: throttle(function (data, node) {
			// 点击了末节点
			if (
				!data[this.formateTongTreeProps.children] ||
				data[this.formateTongTreeProps.children].length === 0
			) {
				// 单选
				if (this.showCheckbox === false)
					this.$emit("tongTreeSelect", data, data[this.nodeKey]);
			} else {
				// 点击父节点
				if (this.checkOnClickNode === true) {
					this.$emit("tongTreeSelect", data, data[this.nodeKey]);
				}
			}

			// 禁用点击
			if (this.nodeClickDisabled && data[this.formateTongTreeProps.disabled])
				return;

			// 取消高亮
			if (this.canClickCancel && this.highlightIndex === data.tong_index) {
				node.isCurrent = false;
				this.highlightIndex = -1;
			} else {
				this.highlightIndex = data.tong_index;
			}

			// 处理特殊模式
			this.clickMode1(data, node);

			this.nodeClick && this.$emit(this.nodeClick, data, node, node.isCurrent);
		}),

		handleCheckChange(data, node) {
			if (this.checkOnClickNode === true) return;
			let checkedArr = node.checkedNodes.filter(
				(val) =>
					!val[this.formateTongTreeProps.children] ||
					val[this.formateTongTreeProps.children].length === 0 ||
					this.checkStrictly
			);
			let checkKeyArr = checkedArr.map((val) => val[this.nodeKey]);
			if (this.multipleLimit !== 0)
				checkKeyArr = checkKeyArr.slice(0, this.multipleLimit);
			
			this.tongTreeObj.setCheckedKeys(checkKeyArr)
			this.$emit("checkChanged", checkedArr, checkKeyArr, node, data);
		},

		filter: debounce(function (val) {
			this.$refs.tongTree.filter(val);
		}),

		filterMethod(value, data, node) {
			if (this.filterNodeMethod) {
				return this.filterNodeMethod(value, data, node);
			}
			if (!value) return true;
			return (data[this.formateTongTreeProps.label]||'').indexOf(value) !== -1;
		},

		/**
		 * 设置高亮
		 */
		setHeightLight(key) {
			if (this.showCheckbox === false)
				this.tongTreeObj.setCurrentKey(key || this.value);
		},

		/**
		 * 设置展开
		 */
		setExpandKeys(keys = []) {
			this.expandedKeys = keys;
		},

		/**
		 * 设置选中
		 */
		setCheckedKeys(keys = []) {
			this.tongTreeObj.setCheckedKeys(...arguments); //复选
			this.mode === "1" && this.setModeCheckKeys(keys);
		},

		setChecked() {
			this.tongTreeObj.setChecked(...arguments); //复选
		},

		getHalfCheckedKeys() {
			return this.tongTreeObj.getHalfCheckedKeys();
		},

		getCheckedNodes(a = false, b = false) {
			return this.tongTreeObj.getCheckedNodes(a, b);
		},

		/**
		 * 添加child,并且聚焦
		 * @param {string} type  child 子级 | here 同级
		 */
		appendNode(node, data, type = "child") {
			const newChild = {
				[this.formateTongTreeProps.label]:
					data[this.formateTongTreeProps.label] + "_child",
				[this.nodeKey]: new Date().getTime(),
				isEdit: true,
				type: "add",
			};
			if (type === "child") {
				if (!data.children) {
					this.$set(data, "children", []);
				}
				data.children.push(newChild);
			} else if (type === "here") {
				const arr = node.parent.data.children || node.parent.data;
				const index =
					arr.findIndex((val) => val[this.nodeKey] === data[this.nodeKey]) + 1; //点击的索引
				arr.splice(index, 0, newChild);
			}

			this.setNodeEdit(newChild);

			this.expandedKeys.push(newChild[this.nodeKey]);
			this.$nextTick(() => {
				this.tongTreeObj.setCurrentNode(newChild);
				this.selectNodeEdit();
			});
		},

		getNode(data) {
			return this.tongTreeObj.getNode(data);
		},

		nodeExpand(data){
			this.expandedKeys.push(data[this.nodeKey])
		},
		nodeCollapse(data){
			this.expandedKeys.splice(this.expandedKeys.findIndex(val=>val===data[this.nodeKey]),1)
		},

		/**
		 * 编辑节点
		 */
		editNode(node, data) {
			this.$set(data, "type", "edit");
			this.$set(data, "isEdit", true);
			this.setNodeEdit(data);
			this.$nextTick(() => {
				this.selectNodeEdit();
			});
		},

		/**
		 * 复制data
		 */
		setNodeEdit(data) {
			let copyNewChild = doDeepCopy(data);
			delete copyNewChild.isEdit;
			this.nodeEdit = copyNewChild;
		},

		/**
		 * 选中编辑内容--同时只能有一个编辑
		 */
		selectNodeEdit() {
			this.$refs.treeNodeEdit && this.$refs.treeNodeEdit.select();
		},

		/**
		 * 失焦保存编辑
		 */
		saveEdit(node, data) {
			const oldData = doDeepCopy(node.data);
			this.$set(data, "isEdit", false);
			this.$set(
				data,
				this.formateTongTreeProps.label,
				this.nodeEdit[this.formateTongTreeProps.label]
			);
			this.$emit("saveEdit", data, oldData, node);
		},

		init() {
			this.tongTreeObj = this.$refs.tongTree;
		},

		setRadioArr() {
			const radioArr = this.getRadioArr();
			this.$emit(
				"radioChanged",
				radioArr,
				this.radioChosen.filter((val) => val)
			);
		},

		/**
		 * 删除树节点
		 */
		removeNode(data) {
			this.tongTreeObj.remove(data);
		},

		/**
		 * 获取单选的数组
		 */
		getRadioArr() {
			return this.radioChosen
				.filter((val) => val)
				.map((val) => this.tongTreeObj.getNode(val).data);
		},

		/**
		 * 获取选中的
		 */
		getCheckedArr() {
			return this.tongTreeObj.getCheckedKeys();
		},

		doLoop(arr = [], key = "children", index = -1) {
			arr.forEach((ele, eleIndex) => {
				ele.tong_index = index === -1 ? eleIndex : index;
				if (ele[key]) this.doLoop(ele.children, key, ele.tong_index);
			});
			return arr;
		},
	},

	mounted() {
		this.init();
	},
	mixins: [
		mixinFunc(1),
		mixLazyload,
		mixOperate,
		mixStyle,
		mixDetailSlot,
		mixScroll,
	],
};
</script>