<template>
	<div class="tong-table" :key="refrashKey">
		<tong-scroll ref="tongScroll" :isSlotTable="true">
			<div class="scroll-box" style="box-sizing: border-box">
				<!-- <el-button @click="clearSelection">clear</el-button> -->
				<el-table
					:data="getTableData"
					:stripe="stripe"
					ref="tongTable"
					highlight-current-row
					:border="border"
					lazy
					:check-strictly="false"
					:load="load_decorate"
					:loading="loading"
					:row-key="rowKey"
					:tree-props="formateTreeProp"
					:empty-text="emptyText"
					@select="doSelect"
					@select-all="doSelectAll"
					@expand-change="expandChange"
					@row-click="rowClick"
					:span-method="spanMethod"
					:max-height="height"
					:row-style="rowStyle"
					:row-class-name="setRowClassName"
					:default-sort="defaultSort"
					:defaultExpandAll="defaultExpandAll"
					:expandRowKeys="expandRowKeys"
					@cell-mouse-enter="mouseEnter"
					@cell-mouse-leave="mouseLeave"
					@cell-dblclick="cellDbClick"
					@header-click="headerClick"
					:cell-class-name="cellClassNameList"
				>
					<el-table-column type="expand" v-if="expandShow" fixed="left">
						<template slot-scope="scope">
							<slot
								name="expand"
								:rowInfo="scope.row"
								:index="scope.$index"
							></slot>
						</template>
					</el-table-column>
					<slot name="empty" slot="empty"></slot>
					<el-table-column
						v-if="selectShow"
						fixed="left"
						:selectable="selectable"
						type="selection"
						:reserve-selection="reserveSelection"
						width="35px"
					>
					</el-table-column>

					<el-table-column v-if="radioShow" fixed="left" width="35px">
						<template slot-scope="scope">
							<my-radio
								:value.sync="radioValue"
								:scope="scope"
								:radioKey="radioKey"
								:disabled="!radioable(scope.row)"
								@update:value="tableRadioChange(scope)"
							/>
						</template>
					</el-table-column>

					<el-table-column
						v-if="indexShow"
						fixed="left"
						type="index"
						:label="indexText"
						:index="indexMethod"
						:width="getIndexWidth"
					/>
					<el-table-column
						v-for="(item, index) in getTableModel"
						:key="item.prop || index"
						:columnKey="item.prop"
						:fixed="item.fixed"
						:label-class-name="item | formateColumnClass"
						:prop="item.prop"
						:label="item.label"
						:width="item.width"
						:min-width="item.minWidth"
						:show-overflow-tooltip="item | formateTips"
						:resizable="item.resizable"
						:align="item.align"
						:sortable="item.sortable"
						:class-name="item['row-click-style']"
					>
						<!-- 表头排序 -->
						<template slot="header" slot-scope="scope">
							<slot
								v-if="item.headerSlot"
								:name="item.headerSlot"
								:scope="scope"
							></slot>

							<div v-else style="display: inline-flex;align-items:center">
								<tong-icon
									v-if="item.labelIcon"
									:imgUrl="item.labelIcon||iconDefault.changed"
									style="margin-right: 3px"
								></tong-icon>
								<div class="tong-tips">{{ item.label }}</div>
								<i
									v-if="item.order"
									class="cursor order-icon"
									:class="orderIcons[orderList[index] + 1]"
									@click.stop="(e) => doOrderClick(item, index, e)"
								></i>
							</div>

							<my-filter
								v-if="
									item.filters && (!item.isOrder || item.isOrder == 'filters')
								"
								:filterInfo.sync="filterInfo"
								v-bind="item"
								v-on="$listeners"
							/>
						</template>
						<my-thead
							v-for="(child, childIndex) in item.column.filter(
								(val) => val.show !== false
							)"
							:key="'head_' + childIndex"
							:info="child"
							v-on="$listeners"
						/>

						<template slot-scope="scope">
							<slot
								v-if="item.slot"
								:name="item.slot"
								:rowInfo="scope.row"
								:value="scope.row[item.prop]"
								:index="scope.$index"
								:scope="scope"
							></slot>
							<tong-render
								v-else-if="item.render"
								type
								:render="item.render"
								:rowInfo="scope.row"
								:index="scope.$index"
							/>

							<!-- input -->
							<template
								v-else-if="
									(item.type === 'input' &&
										(!item.cellEdit ||
											(item.cellEdit &&
												cellEditData.isEditing &&
												scope.row === cellEditData.row &&
												cellEditData.prop === item.prop))) ||
									item.type === 'inputNumber'
								"
								slot-scope="scope"
							>
								<!-- item.cellEdit&&cellEditData.isEditing   是内联编辑,且正在编辑状态 
										cellEditData.row===scope.row&&cellEditData.prop===item.prop 确定是编辑的哪个一行的数据
							-->
								<div
									class="tong-input-wrap"
									v-if="
										cellEditData.row === scope.row &&
										cellEditData.prop === item.prop &&
										cellEditData.isEditing
									"
								>
									<tong-input
										:ref="scope.column.id + '_' + scope.$index"
										width="calc(100% - 50px)"
										size="small"
										:type="item.type"
										v-bind="formateInputConfig(item, scope)"
										v-model="cellEditData.cellEditVal"
										:disabled="item.disabled && item.disabled(scope.row, item)"
										:placeholder="item.placeholder"
										@focus="
											doInputEvent(
												'doInputFocus',
												scope.row,
												item.prop,
												scope.row[item.prop],
												scope
											)
										"
										@blur="
											doInputEvent(
												'doInputBlur',
												scope.row,
												item.prop,
												scope.row[item.prop],
												scope
											)
										"
										@input="
											doInputEvent(
												'doInput',
												scope.row,
												item.prop,
												scope.row[item.prop],
												scope
											)
										"
									></tong-input>
									<img
										src="./images/operate/cell_sure.png"
										class="cell-edit-icon"
										@click="cellSureHandler"
									/>
									<img
										src="./images/operate/cell_cancel.png"
										class="cell-edit-icon"
										@click="cellCancelHandler"
									/>
								</div>
								<tong-input
									v-else
									size="small"
									:type="item.type"
									v-bind="formateInputConfig(item, scope)"
									v-model="scope.row[item.prop]"
									:disabled="item.disabled && item.disabled(scope.row, item)"
									:placeholder="item.placeholder"
									@focus="
										doInputEvent(
											'doInputFocus',
											scope.row,
											item.prop,
											scope.row[item.prop],
											scope
										)
									"
									@blur="
										doInputEvent(
											'doInputBlur',
											scope.row,
											item.prop,
											scope.row[item.prop],
											scope
										)
									"
									@input="
										doInputEvent(
											'doInput',
											scope.row,
											item.prop,
											scope.row[item.prop],
											scope
										)
									"
								></tong-input>
							</template>

							<!-- select -->
							<template
								v-else-if="
									item.type === 'select' &&
									(!item.cellEdit ||
										(item.cellEdit &&
											cellEditData.isEditing &&
											scope.row === cellEditData.row &&
											cellEditData.prop === item.prop))
								"
								slot-scope="scope"
							>
								<div
									class="tong-input-wrap"
									v-if="
										cellEditData.row === scope.row &&
										cellEditData.prop === item.prop &&
										cellEditData.isEditing
									"
								>
									<tong-select
										size="small"
										v-bind="item"
										width="calc(100% - 50px)"
										:ref="getMutexKey(item.prop)"
										:value.sync="cellEditData.cellEditVal"
										:disabled="item.disabled && item.disabled(scope.row, item)"
										:options="
											item.costomConfig
												? scope.row[item.costomConfig.selectProp] ||
												  item.selectOptions
												: item.selectOptions
										"
										:placeholder="item.placeholder"
										@tongSelectChange="
											(val) => doTongSelectChange(val, scope.row, item, scope)
										"
										@visible-change="
											(val) => setMutex(val, scope.row, item, scope)
										"
									/>
									<img
										src="./images/operate/cell_sure.png"
										class="cell-edit-icon"
										@click="cellSureHandler"
									/>
									<img
										src="./images/operate/cell_cancel.png"
										class="cell-edit-icon"
										@click="cellCancelHandler"
									/>
								</div>
								<tong-select
									v-else
									size="small"
									v-bind="item"
									:ref="getMutexKey(item.prop)"
									:value.sync="scope.row[item.prop]"
									:limitList='item.limitList'
									:disabled="item.disabled && item.disabled(scope.row, item)"
									:options="
										item.costomConfig
											? scope.row[item.costomConfig.selectProp] ||
											  item.selectOptions
											: item.selectOptions
									"
									:placeholder="item.placeholder"
									@tongSelectChange="
										(val) => doTongSelectChange(val, scope.row, item, scope)
									"
									@visible-change="
										(val) => setMutex(val, scope.row, item, scope)
									"
								/>
							</template>

							<!-- 单选 -->
							<template v-else-if="item.type === 'radio'" slot-scope="scope">
								<el-radio-group
									v-model="scope.row[item.prop]"
									@change="(val) => doRadioChange(val, scope, item)"
									:disabled="item.disabled && item.disabled(scope.row, item)"
								>
									<el-radio
										v-for="(radioItem, radioIndex) in item.costomConfig
											? scope.row[item.costomConfig.radioProp] ||
											  item.radioOptions
											: item.radioOptions"
										:key="'radio-' + radioIndex"
										:label="radioItem.value"
										v-bind="radioItem"
										:disabled="
											radioItem.disabled && radioItem.disabled(scope.row, item)
										"
										>{{ radioItem.label }}</el-radio
									>
								</el-radio-group>
							</template>

							<!-- 复选框 -->
							<template v-else-if="item.type === 'checkbox'" slot-scope="scope">
								<el-checkbox-group
									@change="(val) => doCheckboxChange(val, scope, item)"
									v-model="scope.row[item.prop]"
									:disabled="item.disabled && item.disabled(scope.row, item)"
								>
									<el-checkbox
										v-for="(checkItem, checkIndex) in item.costomConfig
											? scope.row[item.costomConfig.checkProp] ||
											  item.checkboxOptions
											: item.checkboxOptions"
										:key="checkIndex"
										:label="checkItem.value"
										:disabled="
											checkItem.disabled && checkItem.disabled(scope.row, item)
										"
										>{{ checkItem.label }}</el-checkbox
									>
								</el-checkbox-group>
							</template>

							<!-- 时间选择器 -->
							<template
								v-else-if="item.type === 'datePicker'"
								slot-scope="scope"
							>
								<el-date-picker
									v-model="scope.row[item.prop]"
									size="small"
									:placeholder="item.placeholder"
									:type="item.config ? item.config.type : 'date'"
									:disabled="item.disabled && item.disabled(scope.row, item)"
									v-bind="item.config"
									@change="(val) => doDatePickChange(val, scope, item)"
								>
								</el-date-picker>
							</template>

							<!-- 开关 -->
							<template v-else-if="item.type === 'switch'" slot-scope="scope">
								<el-switch
									v-model="scope.row[item.prop]"
									:disabled="item.disabled && item.disabled(scope.row, item)"
									v-bind="item.config"
									@change="(val) => doSwitchChange(val, scope, item)"
								>
								</el-switch>
							</template>

							<!-- status -->
							<template v-else-if="item.type === 'status'" slot-scope="scope">
								<el-popover
									popper-class="tong-table-popover"
									:trigger="
										formateStatus(item, scope.row).hidden ? 'manual' : 'hover'
									"
									:value="false"
									:visible-arrow="item.visibleArrow"
									placement="bottom"
								>
									<div class="tong-table-popover-content">
										<p class="title">
											{{ formateStatus(item, scope.row).title || "审批意见" }}
										</p>
										<div>
											<p>
												<span>审批人：</span>
												{{ formateStatus(item, scope.row).appover }}
											</p>
											<p>
												<span>审批时间：</span>
												{{ formateStatus(item, scope.row).appoverTime }}
											</p>
											<p style="display: flex">
												<span>审批意见：</span>
												<span style="flex: 0px">{{
													formateStatus(item, scope.row).appoverInfo
												}}</span>
											</p>
										</div>
									</div>
									<p
										slot="reference"
										class="tong-table-status-box"
										:class="[
											formateStatus(item, scope.row).customClass ||
												'status-' + item.statusClassList[scope.row[item.prop]],
										]"
									>
										<tong-icon
											:imgUrl="
												formateStatus(item, scope.row).customIcon ||
												iconDefault[item.statusClassList[scope.row[item.prop]]]
											"
										/>
										<span style="padding: 0 3px">{{
											formateStatus(item, scope.row).customLabel ||
											item.statusValueList[scope.row[item.prop]]
										}}</span>
										<tong-icon
											v-show="formateStatus(item, scope.row).appoverImg"
											:imgUrl="formateStatus(item, scope.row).appoverImg"
										></tong-icon>
									</p>
								</el-popover>
							</template>

							<!-- operate -->
							<template v-else-if="item.type === 'operate'" slot-scope="scope">
								<myOperate
									:scope="scope"
									:item="item"
									:handleText="handleText"
									:tableData="tableData"
									:tableModel="tableModel"
									:childrenOperate="childrenOperate"
									:moreOperate="moreOperate"
									:getMutexKey="getMutexKey"
									v-on="$listeners"
								/>
							</template>

							<!-- 按钮可以点击等 -->
							<template v-else-if="item.type === 'clickBtn'" slot-scope="scope">
								<span
									:class="[
										'cursor',
										item.customClass,
										item.formate &&
											item.formate(scope.row, scope.row[item.prop], scope)
												.className,
									]"
									@click="doClickBtn(scope.row, item, scope)"
									>{{
										item.formate
											? item.formate(scope.row, scope.row[item.prop], scope)
													.text
											: formateLabel(scope.row[item.prop])
									}}</span
								>
							</template>
							<!-- 输入框、下拉框单元格编辑、回显 -->
							<!-- label -->
							<template v-else slot-scope="scope">
								<span
									dragable="true"
									:class="[
										item.customClass,
										item.formate &&
											item.formate(scope.row, scope.row[item.prop], scope)
												.className,
										['input', 'select'].includes(item.type) && item.cellEdit
											? 'cell-edit-label'
											: '',
									]"
								>
									<template v-if="item.type === 'select' && item.cellEdit">
										<!-- 下拉选择,显示label -->
										{{ getSelectLable(item, scope.row[item.prop]) }}
									</template>
									<template v-else>
										{{
											item.formate
												? item.formate(scope.row, scope.row[item.prop], scope)
														.text
												: formateLabel(scope.row[item.prop])
										}}
									</template>
								</span>
								<img
									v-if="
										cellEditData.row === scope.row &&
										cellEditData.prop === item.prop
									"
									@click="showEditHandler(scope)"
									src="./images/operate/cell_edit.png"
									class="cell-edit-icon"
								/>
							</template>

							<!-- error 报错提示 -->
							<p
								class="tong-error"
								ref="tongError"
								v-if="
									validateResult[scope.$index] &&
									validateResult[scope.$index][index] === true
								"
							>
								{{ formateError(item, scope).text }}
							</p>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</tong-scroll>
		<el-pagination
			v-if="pageShow && total > pageShowTotal"
			:style="{ textAlign: 'right', marginTop: '15px' }"
			@current-change="handelPageChanged"
			:page-sizes="pageSizes"
			:page-size="pageSize"
			:current-page="currentPage"
			:layout="layout"
			:total="total"
			:hide-on-single-page="false"
			v-on="$listeners"
		></el-pagination>
	</div>
</template>

<script>
import tongIcon from "../../tongIcon/index";
import tongInput from "../../tongInput";
import tongSelect from "../../tongSelect/index";
import tongRender from "../../tongRender/index";
import { throttle, debounce, doDeepCopy } from "../../../js/usual";
import { verifyType } from "../../../js/rules";
import tongScroll from "../../tongScroll/index";

import mixValidate from "./modules/validate";
import mixExpand from "./modules/expand";
import mixTips from "./modules/tips";
import mixSelect from "./modules/select";
import mixImgs from "./modules/imgs";
import mixRadio from "./modules/radio";

import mixMap from "./modules/map";
import myThead from "./components/thead";
import myOperate from "./components/operate";
import myRadio from "./components/radio";
import myFilter from "./components/filters.vue";
export default {
	name: "tongTable",
	components: {
		tongIcon,
		tongInput,
		tongSelect,
		tongRender,
		tongScroll,
		myThead,
		myOperate,
		myRadio,
		myFilter,
	},
	props: {
		tableModel: {
			type: Array,
			default: function () {
				return [];
			},
		},
		tableData: {
			type: Array,
			default: function () {
				return [];
			},
		},

		height: {
			type: String,
			default: null,
		},

		//索引配置
		indexShow: {
			type: Boolean,
			default: true,
		},
		indexText: {
			type: String,
			default: "序号",
		},
		orderIcons: {
			type: Array,
			default: function () {
				return ["el-icon-sort-down", "el-icon-sort", "el-icon-sort-up"];
			},
		},
		border: {
			type: Boolean,
			default: false,
		},
		stripe: {
			type: Boolean,
			default: true,
		},

		pageShow: {
			type: Boolean,
			default: true,
		},
		pageShowTotal: {
			type: Number,
			default: 10,
		},
		layout: {
			type: String,
			default: "total, sizes, prev, pager, next, jumper",
		},
		currentPage: {
			type: String | Number,
			default: 1,
		},
		pageSizes: {
			type: Array,
			default: function () {
				return [10, 20, 50, 100];
			},
		},
		pageSize: {
			type: Number,
			default: 10,
		},
		total: {
			type: Number,
			default: 0,
		},
		loading: {
			type: Boolean,
			default: false,
		},

		emptyText: {
			type: String | Function,
			default: "暂无数据",
		},

		nullLabel: {
			type: String,
			default: "-",
		},

		moreOperate: {
			type: Object,
			default: function () {
				return {};
			},
		},
		resizable: {
			type: Boolean,
			default: false,
		},
		"row-click-style": {
			type: String,
			default: "",
		},
		defaultSort: {
			type: Object,
			default: function () {
				return {};
			},
		},
		childrenOperate:{
			type: Boolean,
			default: false,
		},
		handleText:{//不显示icon
            type:Boolean,
			default: false
		}
	},
	filters: {
		formateColumnClass(item) {
			const classList = [];
			if (!item.filters) classList.push("no-filters");
			if (item.required) classList.push("tong-red-star");
			return classList.join(" ");
		},
	},
	watch: {
		loading: {
			handler: function (newValue) {
				const loadingInstance = null;
				this.$nextTick(() => {
					if (newValue) {
						this.$loading({ target: this.$refs.tongTable.bodyWrapper });
					} else {
						loadingInstance && loadingInstance.close();
					}
				});
			},
			immediate: true,
		},
	},
	computed: {
		getTableData() {
			return this.formateLayerData.length > 0
				? this.formateLayerData
				: this.setParentNode(this.tableData);
		},

		getTableModel() {
			const newTableModel = this.tableModel.filter((val) => val.show !== false);

			// this.setflashKey()

			this.orderList = new Array(newTableModel.length).fill(0);
			return newTableModel.map((val) => {
				const resObj = {
					...val,
					orderCallback: val.orderCallback || "doOrderCallback",
					type: val.type || "label",
					column: val.column || [],
					rowHidden: val.rowHidden || undefined, //单元格隐藏
					costomConfig: val.costomConfig || {},
					"row-click-style": val["row-click-style"] || "",
				};

				if (val.selectMutex) {
					this.tableData.forEach((ele) => {
						ele[this.getMutexKey(val.prop)] = doDeepCopy(val.selectOptions);
					});
					resObj.costomConfig.selectProp = this.getMutexKey(val.prop);
				}

				return resObj;
			});
		},

		/**
		 * 格式化输入框配置
		 * @description 由于tongInput组件接受width属性，需要将width属性清除
		 */
		formateInputConfig() {
			return function (config, scope) {
				delete config.width;
				return {
					...config,
					max: verifyType(config.max, "Function")
						? config.max(scope)
						: config.max,
					min: verifyType(config.min, "Function")
						? config.min(scope)
						: config.min || 0,
				};
			};
		},

		formateLabel() {
			return function (label) {
				return label === undefined || label === "" ? this.nullLabel : label;
			};
		},

		getIndexWidth() {
			const width = String(this.currentPage * this.pageSize).length * 8 + 8;
			return width > 50 ? width : 50;
		},
	},
	data() {
		return {
			tableInstance: null,
			orderList: [],
			selectRowList: [], //选中的row集合

			refrashKey: "-1",

			filterInfo: {}, //过滤记录
			cellEditData: {
				isEditing: false,
				showEditIcon: false,
				cellEditVal: null,
			},
		};
	},
	methods: {
		headerClick(column, event) {
			this.$emit("headerClick", column, event);
		},
		setParentNode(arr, pId = undefined) {
			for (const item of arr) {
				if (pId !== undefined) item.parentNode = pId;
				if (item[this.treePropKey])
					this.setParentNode(item[this.treePropKey], item[this.rowKey]);
			}

			return arr;
		},

		setflashKey: debounce(function () {
			this.$nextTick(this.redraw);
			// this.refrashKey = new Date().getTime();
		}, 100),

		/**
		 * 索引的计算方法
		 */
		indexMethod(index) {
			return (this.currentPage - 1) * this.pageSize + index + 1;
		},
		/**
		 * 点击排序
		 */
		doOrderClick(item, index, event) {
			this.resetOrder();
			switch (this.orderList[index]) {
				case 0:
					this.orderList[index] = 1;
					break;
				case -1:
					this.orderList[index] = 1;
					break;
				case 1:
					this.orderList[index] = -1;
					break;
			}
			const className = this.orderIcons[this.orderList[index] + 1];
			event.target.className = ["cursor", "order-icon", className].join(" ");
			this.$emit(item.orderCallback, [item.prop, this.orderList[index]]);
		},

		/**
		 * 重置order
		 */
		resetOrder() {
			const doms = document.querySelectorAll(".tong-table .order-icon");
			for (let i = 0; i < doms.length; i++) {
				doms[i].className = ["cursor", "order-icon", "el-icon-sort"].join(" ");
			}
		},

		/**
		 * 清空过滤
		 */
		clearFilter(columnKey) {
			if (columnKey) {
				let columnList = columnKey;
				if (typeof columnKey === "string") {
					columnList = columnKey.split(",");
				}
				columnList.forEach((key) => {
					this.$set(this.filterInfo, key, []);
				});
			} else {
				this.$set(this, "filterInfo", {});
			}
		},

		/**
		 * input事件
		 * @param rowInfo 行信息
		 * @param key 输入绑定的key
		 * @param value 输入框新数据
		 */
		doInputEvent(eventString, rowInfo, key, value, scope) {
			if (eventString === "doInput") this.validate(scope, [key]);
			this.$emit(eventString, rowInfo, key, value, scope);
		},

		/**
		 * 下拉框change事件
		 */
		doTongSelectChange: throttle(function (value, rowInfo, item, scope) {
			this.validate(scope, [item.prop]);
			this.$emit("tongSelectChange", value, rowInfo, item, scope);
		}),

		/**
		 * 开关change事件
		 */
		doSwitchChange: throttle(function (val, scope, item) {
			this.validate(scope, [item.prop]);
			this.$emit("switchChange", val, scope.row, item, scope);
		}),

		/**
		 * 时间选择器change事件
		 */
		doDatePickChange: throttle(function (val, scope, item) {
			this.validate(scope, [item.prop]);
			this.$emit("datePickerChange", val, scope.row, item, scope);
		}),

		/**
		 * 单选change事件
		 */
		doRadioChange: throttle(function (val, scope, item) {
			this.validate(scope, [item.prop]);
			this.$emit("radioChange", val, scope.row, item, scope);
		}),

		/**
		 * 多选change事件
		 */
		doCheckboxChange: throttle(function (val, scope, item) {
			this.validate(scope, [item.prop]);
			this.$emit("checkboxChange", val, scope.row, item, scope);
		}),

		/**
		 * 过滤规则
		 */
		doFilters(val, row, prop) {
			return val == row[prop];
		},

		/**
		 * 点击clickBtn
		 */
		doClickBtn(rowInfo, item, scope) {
			if (item.clickFun) {
				this.$emit(item.clickFun, rowInfo, item, scope);
			} else {
				console.error("clickFun未定义", this.currentPage);
			}
		},

		handelPageChanged(num) {
			this.$emit("update:currentPage", num);
		},

		// 内置筛选方法
		filterMethod(value, row, column) {
			return row[column.property] === value;
		},

		spanMethod({ row, column, rowIndex, columnIndex }) {
			let resSpans = [1, 1];
			if (row.spans) {
				try {
					resSpans = [
						row.spans[columnIndex][0] === undefined
							? 1
							: row.spans[columnIndex][0],
						row.spans[columnIndex][1] === undefined
							? 1
							: row.spans[columnIndex][1],
					];
				} catch (error) {
					resSpans = [1, 1];
				}
			}
			return resSpans;
		},

		// 表格列重绘--计算滚动条
		redraw() {
			this.$refs.tongScroll.redraw();
		},
		changeCellEditStatus(type = "enter", row, column) {
			const itemModel = this.tableModel.find(
				(ele) => ele.prop === column.property
			);
			if (!itemModel) {
				return;
			}
			const flag = itemModel.cellEdit;
			if (["input", "select"].includes(itemModel.type) && flag) {
				if (type === "enter") {
					/* 鼠标进入单元格,显示编辑图标 */
					const { showEditIcon, isEditing } = this.cellEditData;
					if (showEditIcon === false && isEditing === true) {
						return;
					}
					this.cellEditData = {
						prop: itemModel.prop,
						showEditIcon: true,
						isEditing: false,
						row,
						inputType: itemModel.type,
					};
				} else if (type === "leave") {
					/* 鼠标离开单元格,重置暂存数据 */
					this.resetCellEditData();
				} else if (type === "dbclick") {
					/* 双击单元格或点击编辑图标,隐藏编辑图标,显示 */
					this.cellEditData = {
						prop: itemModel.prop,
						showEditIcon: false,
						isEditing: true,
						row,
						cellEditVal: this.copyEdidValue(row[itemModel.prop]),
						inputType: itemModel.type,
					};
					/* 输入框聚焦 */
					itemModel.type === "input" &&
						setTimeout(() => {
							this.$nextTick(() => {
								const refsId = `${column.id}_${this.getTableData.indexOf(row)}`;
								const ipt = this.$refs[refsId];
								ipt[0].$children[0].$children[0].focus();
							});
						}, 50);
				}
			}
		},
		mouseEnter(row, column, cell, event) {
			/* 有单元格在编辑状态,其他单元格暂不可编辑 */
			!this.cellEditData.isEditing &&
				this.changeCellEditStatus("enter", row, column);
			this.$emit("cell-mouse-enter", row, column, cell, event);
		},
		mouseLeave(row, column, cell, event) {
			/* 输入框---鼠标离开单元格自动保存输入内容 */
			if (this.cellEditData.isEditing) {
				this.cellEditData.inputType === "input" && this.leaveCellConfirm();
			} else {
				this.changeCellEditStatus("leave", row, column);
			}
			this.$emit("cell-mouse-leave", row, column, cell, event);
		},
		cellClassNameList(row, column, cell, event){
			this.$emit('cell-class-name',row, column, cell, event)
		},
		cellDbClick(row, column, cell, event) {
			this.changeCellEditStatus("dbclick", row, column);
		},
		leaveCellConfirm() {
			this.cellSureHandler();
		},
		cellSureHandler() {
			/* 点击确定保存 */
			const { row, prop, cellEditVal } = this.cellEditData;
			row[prop] = cellEditVal;
			/* 保存之后的回调 */
			this.$emit("cellSureCallback", cellEditVal, prop, row);
			this.resetCellEditData();
		},
		cellCancelHandler() {
			this.resetCellEditData();
		},
		copyEdidValue(val) {
			return typeof val === "object" ? JSON.parse(JSON.stringify(val)) : val;
		},
		showEditHandler(scope) {
			const { row, column } = scope;
			this.changeCellEditStatus("dbclick", row, column);
		},
		resetCellEditData() {
			this.cellEditData = {
				isEditing: false,
				showEditIcon: false,
				cellEditVal: null,
			};
		},
		getSelectLable(modelItem, val) {
			const options = modelItem.selectOptions || [],
				valArr = Array.isArray(val) ? val : [val];
			return (
				valArr
					.map((ele) => {
						const item = options.find((opt) => opt.value === ele);
						return item ? item.label : "-";
					})
					.join(",") || "-"
			);
		},
	},
	created() {
		this.$nextTick(() => {
			this.tableInstance = this.$refs.tongTable;
		});
	},

	mixins: [
		mixExpand,
		mixValidate,
		mixTips,
		mixSelect,
		mixImgs,
		mixMap,
		mixRadio,
	],
};
</script>
