<template>
	<div class="tong-trans-tree-button">
		<el-button
			type="primary"
			:disabled="isDisabled[0]"
			@click="transfer('right')"
			class="el-icon-arrow-right"
		></el-button>
		<el-button
			type="primary"
			:disabled="isDisabled[1]"
			@click="transfer('left')"
			class="el-icon-arrow-left"
		></el-button>
		<el-button
			type="primary"
			:disabled="isDisabled[2]"
			@click="transfer('allRight')"
			class="el-icon-d-arrow-right"
		></el-button>
		<el-button
			type="primary"
			:disabled="isDisabled[3]"
			@click="transfer('allLeft')"
			class="el-icon-d-arrow-left"
		></el-button>
	</div>
</template>
<script>
import {
	doDeepCopy,
	flatArray,
	transferTreeData,
	getParents,
} from "../../../../js/usual";
export default {
	props: {
		nodeKey: {
			type: String,
			default: "",
		},
		defaultProps: {
			type: Object,
		},
		moveFilterData: {
			type: Boolean,
		},
		searchValue: {
			type: Array,
		},
		filteredData: {
			type: Array,
		},
		treeData: {
			type: Array,
			default: function () {
				return [[], []];
			},
		},
		selectData: {
			type: Array,
			default: function () {
				return [[], []];
			},
		},
		getTreeData: {
			type: Function,
			default: function () {
				return [];
			},
		},
	},
	computed: {
		isDisabled() {
			return [
				this.selectData[0].length === 0,
				this.selectData[1].length === 0,
				this.treeData[0].length === 0 ||
					flatArray(this.treeData[0]).some((val) => val.disabled),
				this.treeData[1].length === 0 ||
					flatArray(this.treeData[1]).some((val) => val.disabled),
			];
		},
	},
	data() {
		return {
			flatData: [],
		};
	},
	methods: {
		transfer(type) {
			this.getAllTreeData();
			this[type]();
		},

		/**
		 * 解维并且去重
		 */
		getAllTreeData() {
			let res = flatArray(this.setPid(this.getTreeData()));
			let list = flatArray(this.setPid(this.treeData[1]));
			for (let item of list) {
				let isRepeat = res.find(
					(val) => val[this.nodeKey] === item[this.nodeKey]
				);
				!isRepeat && res.push(item);
			}
			this.flatData = res;
		},

		setPid(arr = [], pid = undefined) {
			for (let item of arr) {
				item.pid = pid;
				if (item.children && item.children.length > 0) {
					this.setPid(item.children, item[this.nodeKey]);
				}
			}
			return arr;
		},

		/**
		 * 数组处理
		 * 合并 删减
		 */
		combineArray(arr1, arr2, type) {
			let res = doDeepCopy(arr1);
			arr2.forEach((ele) => {
				if (type === "remove") {
					let index = res.findIndex((val) => val[this.nodeKey] === ele);
					if (index > -1) res.splice(index, 1);
				} else if (type === "add") {
					let index = res.find((val) => val[this.nodeKey] === ele);
					if (index === undefined) {
						let obj = this.flatData.find((val) => val[this.nodeKey] === ele);
						if (obj) {
							if (obj.pid !== undefined) {
								const { children } = this.defaultProps;
								let list = getParents(
									this.flatData,
									obj.pid,
									this.nodeKey,
									children
								);
								for (let item of list) {
									let isRepeat = res.find(
										(val) => val[this.nodeKey] === item[this.nodeKey]
									);
									!isRepeat && res.push(item);
								}
							}
							res.push(obj);
						}
					}
				}
			});
			return res;
		},

		/**
		 * 初始化扁平数据
		 */
		initData() {
			return {
				left: flatArray(this.getTreeData()),
				leftSelect: flatArray(this.selectData[0]),
				right: flatArray(this.treeData[1]),
				rightSelect: flatArray(this.selectData[1]),
				leftFilter:this.filteredData[0].map(val=>val[this.nodeKey]),
				rightFilter:this.filteredData[1].map(val=>val[this.nodeKey]),
			};
		},

		/**
		 * 向右
		 */
		right(dataString='leftSelect') {
			let { left, [dataString]:data, right } = this.initData();
			let leftData = this.combineArray(left, data, "remove");
			let rightData = this.combineArray(right, data, "add");
			this.$emit("update:treeData", [
				this.toTreeData(leftData, undefined, this.nodeKey, "pid"),
				this.toTreeData(rightData, undefined, this.nodeKey, "pid"),
			]);
			this.$emit("update:selectData", [[], []]);
		},

		/**
		 * 向左
		 */
		left(dataString="rightSelect") {
			let { left, [dataString]:data, right } = this.initData();
			let leftData = this.combineArray(left, data, "add");
			let rightData = this.combineArray(right, data, "remove");
			this.$emit("update:treeData", [
				this.toTreeData(leftData, undefined, this.nodeKey, "pid"),
				this.toTreeData(rightData, undefined, this.nodeKey, "pid"),
			]);
			this.$emit("update:selectData", [[], []]);
		},

		/**
		 * 全部向右
		 */
		allRight() {
			if (this.moveFilterData && this.searchValue[0]) {
				this.right("leftFilter")
				this.$emit("update:searchValue",["",this.searchValue[1]])
			} else {
				this.$emit("update:treeData", [
					[],
					this.toTreeData(this.flatData, undefined, this.nodeKey, "pid"),
				]);
				this.$emit("update:selectData", [[], []]);
			}
		},

		/**
		 * 全部向左
		 */
		allLeft() {
			if (this.moveFilterData && this.searchValue[1]) {
				this.left("rightFilter")
				this.$emit("update:searchValue",[this.searchValue[0],""])
			}else{
				this.$emit("update:treeData", [
					this.toTreeData(this.flatData, undefined, this.nodeKey, "pid"),
					[],
				]);
				this.$emit("update:selectData", [[], []]);
			}
		},

		toTreeData(param1, param2, param3, param4 = "pid") {
			return transferTreeData(param1, param2, param3, param4);
		},
	},
};
</script>
