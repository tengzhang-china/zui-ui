<template>
	<div style="width: 100%">
		<div class="T_search tong-search">
			<input type="text" ref="focus" />

			<div class="custom-button" v-show="!buttonHidden">
				<el-dropdown v-for="item in formateCostomButton" :key="item.label">
					<span v-if="!item.__config__">
						<el-button
							:disabled="item.disabled"
							:type="item.type || 'primary'"
							@click="doClick(item.click, true)"
							:class="{ 'tong-icon-none': !item.menu }"
						>
							{{ item.label }}
							<i v-if="item.menu" class="el-icon-arrow-down el-icon--right"></i>
						</el-button>
						<el-dropdown-menu
							slot="dropdown"
							:class="{ 'tong-search-menu-none': !item.menu }"
						>
							<el-dropdown-item
								v-for="menuItem in item.menu || []"
								:key="menuItem.label"
								:disabled="menuItem.disabled"
								@click.native.stop="doClick(menuItem.click, true)"
								>{{ menuItem.label }}</el-dropdown-item
							>
						</el-dropdown-menu>
					</span>
					<span v-else-if="!(item.__config__.parentButton&&item.__config__.parentButton.length>0)">
						<el-button
							:disabled="item.disabled"
							:type="item.type || 'primary'"
							@click="doClick(item.click, true)"
							:class="{ 'tong-icon-none': !item.__config__.children }"
						>
							{{ item.label }}
							<i v-if="item.__config__.children&&item.__config__.children.length>0" class="el-icon-arrow-down el-icon--right"></i>
						</el-button>
						<el-dropdown-menu
						slot="dropdown"
						:class="{ 'tong-search-menu-none': !(item.__config__.children&&item.__config__.children.length>0)}"
					>
						<el-dropdown-item
							v-for="menuItem in item.__config__.children || []"
							:key="menuItem.__slot__.default"
							:disabled="menuItem.disabled"
							@click.native.stop="doClick(menuItem.click, true)"
							>{{ menuItem.__slot__.default }}</el-dropdown-item
						>
					</el-dropdown-menu>
					</span>
				</el-dropdown>
			</div>
			<div class="custom-form" v-if="!searchHidden">
				<el-select
					class="selector"
					v-model="select"
					:style="{ marginRight: '-1px' }"
					@change="change"
					v-show="searchType === 'special'"
				>
					<el-option
						v-for="item in searchOptions"
						:key="item.prop"
						:label="item.label"
						:value="item.prop"
					></el-option>
				</el-select>
				<div class="text_input" v-if="type == 'text'">
					<el-input
						:placeholder="formatePlaceholder('请输入内容')"
						v-model="searchVal"
						@keydown.enter.native="search"
					>
						<el-button
							slot="append"
							icon="el-icon-search"
							@click="search"
						></el-button>
					</el-input>
				</div>
				<div class="selector_input" v-if="type == 'selector'">
					<!-- <el-select
						v-model="searchVal"
						:filterable="filterable"
						@change="search"
						style="width: 100%"
						:placeholder="formatePlaceholder('请选择')"
						v-bind="selectItem.config || {}"
					>
						<el-option
							v-for="(item, index) in selectorOptions"
							:key="index"
							:label="item.label"
							:value="item.value"
						></el-option>
					</el-select> -->
					<tong-select
						:value.sync="searchVal"
						:filterable="filterable"
						@tongSelectChange="search"
						style="width: 100%"
						:placeholder="formatePlaceholder('请选择')"
						:options="selectorOptions"
						v-bind="selectItem.config || {}"
					>
					</tong-select>
				</div>
				<div class="date_picker" v-else-if="type == 'dateTime'">
					<el-date-picker
						v-model="searchVal"
						:type="
							(selectItem.config && selectItem.config.type) || 'datetimerange'
						"
						value-format="yyyy-MM-dd HH:mm:ss"
						@change="search"
						range-separator="至"
						start-placeholder="开始日期"
						end-placeholder="结束日期"
						v-bind="selectItem.config || {}"
					></el-date-picker>
				</div>
				<div class="selector_input" v-else-if="type == 'cascader'">
					<el-cascader
						v-model="searchVal"
						:options="selectorOptions"
						:props="props"
						@change="search"
						popper-class="tong-select-cascader"
						:placeholder="formatePlaceholder('请选择')"
						v-bind="selectItem.config || {}"
					></el-cascader>
				</div>

				<el-button
					v-for="(btn, btnIndex) in formateSearchButtonList"
					class="tong-search-btn tong-tips"
					:class="btn.icon"
					:key="btnIndex"
					@click="doClick(btn.clickFun)"
					:data-tips-show="true"
					:data-tips="btn.tips"
				></el-button>
			</div>
		</div>
		<keep-alive>
			<advance
				ref="advance"
				v-if="advancedExpand"
				:searchOptions="advancedSearchOptions"
				:storageShow="advancedStorageShow"
				:storageOptions="advancedStorageOptions"
				:formateEasySearch="formateEasySearch"
				@advancedSearch="advancedSearch"
				@advancedSave="advancedSave"
				@advancedDel="advancedDel"
			/>
		</keep-alive>
	</div>
</template>

<script>
import { throttle } from "../../../js/usual";
import tongSelect from "../../tongSelect";
import advance from "./components/advance.vue";
export default {
	name: "T_search",
	components: { tongSelect, advance },
	props: {
		searchType: {
			type: String,
			default: "special",
			validator: function (val) {
				return ["special", "normal"].indexOf(val) > -1;
			},
		},
		searchOptions: {
			type: Array, // 下拉选择数据
			default: function () {
				return [];
			},
		},
		advancedSearchOptions: {
			// 高级搜索选项配置
			type: Array,
			default: function () {
				return [];
			},
		},
		beforeTypeChange: {
			type: Function,
		},

		costomButtonList: {
			type: Array,
			default: function () {
				return [];
			},
		},

		autoSelect: {
			type: Boolean,
			default: true,
		},
		advancedShow: {
			type: Boolean,
			default: false,
		},
		advancedExpandAuto: {
			type: Boolean,
			default: false,
		},
		advancedStorageShow: {
			// 高级搜索
			type: Boolean,
			default: false,
		},
		advancedStorageOptions: {
			// 高级搜索条件
			type: Array,
			default: function () {
				return [];
			},
		},
		refreshShow: {
			type: Boolean,
			default: false,
		},
		downloadShow: {
			type: Boolean,
			default: false,
		},

		initConfig: {
			type: Object,
			default: function () {
				return {};
			},
		},
		advancedSearchShow: {
			type: Boolean,
			default: false,
		},
		searchHidden: {
			type: Boolean,
			default: false,
		},
		buttonHidden: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		advancedExpandAuto: {
			handler(newValue) {
				this.advancedExpand = newValue;
			},
			immediate: true,
		},
		initConfig: {
			handler(newValue) {
				if (!newValue.prop) {
					this.clearSearchInput();
					return;
				}
				this.change(newValue.prop);
				this.$nextTick(() => {
					this.searchVal = newValue.value;
				});
			},
			deep: true,
			immediate: true,
		},
	},
	data() {
		let _this = this;
		return {
			select: "",
			selectItem: null,
			searchVal: null,
			type: "text",
			selectorOptions: [],
			filterable: false, //过滤

			props: {}, //自定义配置
			advancedExpand: false,
			searchButtonList: [
				{
					icon: "iconfont tong-icon-all_products_icon",
					tips: "高级检索",
					show: this.advancedShow,
					clickFun: _this.advanced,
				},
				{
					icon: "iconfont tong-icon-all_products_icon",
					tips: "高级检索",
					show: this.advancedSearchShow,
					clickFun: _this.advancedSearchModal,
				},
				{
					icon: "el-icon-refresh",
					tips: "刷新",
					show: this.refreshShow,
					clickFun: _this.refresh,
				},
				{
					icon: "iconfont tong-icon-cloud-download",
					tips: "导出",
					show: this.downloadShow,
					clickFun: _this.download,
				},
			],
		};
	},
	computed: {
		formateEasySearch() {
			return {
				[this.selectItem && this.selectItem.prop||""]: this.searchVal,
			};
		},
		formateSearchButtonList() {
			return this.searchButtonList.filter((val) => val.show);
		},

		formateCostomButton() {
			// var param=this.costomButtonList.filter((val) => val.show !== false);
			// return this.listToTree(param)
			return this.costomButtonList.filter((val) => val.show !== false);
		},

		formatePlaceholder() {
			return function (string) {
				return (this.selectItem && this.selectItem.placeholder) || string;
			};
		},
	},
	methods: {
		//数据格式调整
		// transTree(){
        //     this.costomButtonList.forEach(val=>{

		// 	})
		// },
		// listToTree(oldArr){
		// 	oldArr.forEach(element => {
		// 		if(element.__config__){
        //             let parentId = element.__config__.parentButton;
		// 			if(parentId !== 0){
		// 			oldArr.forEach(ele => {
		// 				if(ele.id == parentId){ 
		// 				if(!ele.children){
		// 					ele.children = [];
		// 				}
		// 				ele.children.push(element);
		// 				}
		// 			});
		// 			}
		// 		}
		// 	});
		// 	oldArr = oldArr.filter(ele => ele.parentId === 0); //这一步是过滤，按树展开，将多余的数组剔除；
		// 	console.log(oldArr)
		// 	return oldArr;
		// }
		async change(val) {
			this.select = val;
			this.searchVal = null;
			var selectItem = null;
			this.filterable = false;

			if (this.beforeTypeChange) {
				await this.beforeTypeChange(val);
			}

			selectItem = this.searchOptions.find((item) => item.prop == val);
			this.props = selectItem.props || {};
			if (selectItem.type == "dateTime") {
				this.type = "dateTime";
			} else if (["selector", "cascader"].includes(selectItem.type)) {
				this.type = selectItem.type;
				this.filterable = selectItem.filterable;
				this.selectorOptions = selectItem.selectorOptions;
			} else {
				this.type = "text";
			}

			this.selectItem = selectItem;

			this.$nextTick(() => {
				this.$refs.focus.focus();
			});
		},
		search() {
			this.touchSearch();
			this.$nextTick(() => {
				this.$refs.focus.focus();
			});
			// this.$emit("search", this.selectItem, this.searchVal);
		},
		advancedSearch: throttle(function (searchVal) {
			this.$emit("advancedSearch", searchVal);
		}),
		advancedSave: throttle(function (searchVal) {
			this.$emit("advancedSave", searchVal);
		}),
		advancedDel: throttle(function (index) {
			this.$emit("advancedDel", index);
		}),
		clearSearchInput() {
			this.select = "";
			this.selectItem = null;
			this.searchVal = null;
			this.type = "text";

			this.searchType === "special" &&
				this.autoSelect &&this.searchOptions.length>0&&
				this.change(this.searchOptions[0].prop);
		},

		/**
		 *
		 */
		doClick(clickFun, bool) {
			if (typeof clickFun === "string") {
				this.$emit(clickFun);
			} else {
				clickFun();
			}
		},
		/**
		 * 展开高级配置
		 */
		advanced() {
			this.advancedExpand = !this.advancedExpand;
		},
		// 高级搜索
		advancedSearchModal() {
			this.$emit("advancedSearchModal");
		},
		/**
		 * 刷新
		 */
		refresh() {
			this.clearSearchInput();
			this.touchSearch();
			// this.$emit("search", this.selectItem, this.searchVal);
		},
		download() {
			this.$emit("download", this.selectItem, this.searchVal);
		},

		/**
		 * 使用节流包裹搜索
		 */
		touchSearch: throttle(function () {
			this.$emit("search", this.selectItem, this.searchVal);
		}),
	},
};
</script>
