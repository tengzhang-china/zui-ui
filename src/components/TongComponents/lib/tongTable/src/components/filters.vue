<template>
	<div class="head-filter">
		<el-popover
			v-model="visible"
			placement="bottom-end"
			width="200"
			trigger="click"
			:visible-arrow="false"
		>
			<i slot="reference" class="el-icon-arrow-down cursor"></i>
			<div class="tong-table-filters">
				<tong-tree
					ref="tongTree"
					:treeData="formateTreeData"
					v-bind="formateTreeConfig"
					@check-change="checkChanged"
				/>

				<div class="tong-table-filters-operate">
					<el-button @click="reset">重置</el-button>
					<el-button @click="doFilter" :disabled="buttonDisabled"
						>筛选</el-button
					>
				</div>
			</div>
		</el-popover>
	</div>
</template>
<script>
import tongTree from "../../../tongTree";
export default {
	props: ["filterInfo", "prop", "filters", "filtersConfig"],
	components: { tongTree },
	data() {
		return {
			visible: false,

			buttonDisabled: true,
		};
	},
	computed: {
		formateTreeData() {
			return this.filters || [];
		},

		formateTreeConfig() {
			return {
				showCheckbox: true,
				nodeKey: "value",
				defaultProps: {
					label: "text",
					children: "children",
				},
				"expand-on-click-node": false,
				"check-on-click-node": true,

				...(this.filtersConfig || {}),
			};
		},
	},
	watch:{
		visible:{
			handler(val){
				if(val===true){
					this.$refs.tongTree.setCheckedKeys(this.filterInfo[this.prop]||[])
				}
			}
		}
	},
	methods: {
		checkChanged(nodeList) {
			this.buttonDisabled = this.$refs.tongTree.getCheckedArr().length === 0;
		},

		// 过滤
		doFilter() {
			this.visible = false;
			const checkList = this.$refs.tongTree.getCheckedArr();
			this.$emit("update:filterInfo",{
				...this.filterInfo,
				[this.prop]: checkList
			})
			setTimeout(()=>{
				this.$emit("filterChange",this.filterInfo);
			},0)
		},
		
		// 重置
		reset() {
			this.$refs.tongTree.setCheckedKeys([]);
			this.doFilter();
		},
	},
};
</script>
<style lang='scss'>
.head-filter{
	display: inline;
}
.tong-table-filters {
	.tong-tree {
		max-height: 200px;
		overflow: auto;

		.is-current > .el-tree-node__content {
			color: inherit;
		}
	}

	&-operate {
		display: flex;
		justify-content: flex-end;
		border-top: 1px solid #efefef;
		padding: 5px;
		button {
			height: 20px;
			padding: 0 3px;
			font-size: 12px;
		}
	}
}
</style>