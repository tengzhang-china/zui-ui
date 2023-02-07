<template>
	<div class="advance">
		<el-form :inline="true" :model="form" ref="form" label-width="100px">
			<el-form-item
				v-for="item in searchOptions"
				:key="item.prop"
				:label="item.label + '：'"
				:prop="item.prop"
			>
				<div class="selectItem" v-if="item.type == 'text'">
					<el-input
						:placeholder="formatePlaceholder(item, '请输入内容')"
						v-model="form[item.prop]"
						clearable
					>
					</el-input>
				</div>
				<div class="selectItem" v-if="item.type == 'selector'">
					<tong-select
						:value.sync="form[item.prop]"
						:filterable="item.filterable"
						@tongSelectChange="selectChange"
						style="width: 100%"
						:placeholder="formatePlaceholder(item, '请选择')"
						:options="item.selectorOptions"
						v-bind="item.config || {}"
					>
					</tong-select>
				</div>
				<div class="date_picker" v-else-if="item.type == 'dateTime'">
					<el-date-picker
						v-model="form[item.prop]"
						:type="(item.config && item.config.type) || 'datetimerange'"
						value-format="yyyy-MM-dd HH:mm:ss"
						@change="selectChange"
						range-separator="至"
						start-placeholder="开始日期"
						end-placeholder="结束日期"
						v-bind="item.config || {}"
					></el-date-picker>
				</div>
				<div class="selectItem" v-else-if="item.type == 'cascader'">
					<el-cascader
						v-model="form[item.prop]"
						:options="item.selectorOptions"
						:props="item.props"
						@change="selectChange"
						popper-class="tong-select-cascader"
						:placeholder="formatePlaceholder(item, '请选择')"
						v-bind="item.config || {}"
					></el-cascader>
				</div>
			</el-form-item>
			<el-form-item class="ml-4">
				<el-button @click="reset">重置</el-button>
				<el-button v-if="storageShow" @click="save">保存</el-button>
				<el-button type="primary" @click="search">查询</el-button>
			</el-form-item>
		</el-form>
		<div
			v-if="storageShow"
			class="right flex-center"
			:style="{ height: rightHeight + 'px' }"
		>
			<!-- <i v-show="!showPannel" class="icon iconfont el-icon-arrow-left" @click="showPannelHandler(true)"></i> -->
			<img
				v-show="!showPannel"
				src="../images/left.png"
				alt=""
				@click="showPannelHandler(true)"
			/>
			<div class="rightPannel flex-center" v-show="showPannel">
				<!-- <i class="icon iconfont el-icon-arrow-right" @click="showPannelHandler(false)"></i> -->
				<img
					src="../images/right.png"
					alt=""
					@click="showPannelHandler(false)"
				/>
				<div class="rightPannel_content">
					<div class="title">已保存的查询条件</div>
					<div
						v-if="storeSearchOptions.length"
						style="height: calc(100% - 24px)"
					>
						<tong-scroll style="height: 100%">
							<div
								class="content_option"
								v-for="(op, index) in storeSearchOptions"
								:key="index"
								@click="optionClickHandler(op)"
							>
								<div class="tong-tips">{{ op.join(" ") }}</div>
								<i
									class="icon iconfont el-icon-close"
									@click.stop="delOption(index)"
								></i>
							</div>
						</tong-scroll>
					</div>
					<div v-else class="no-data">暂无记录</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import tongSelect from "../../../tongSelect";
import tongScroll from "../../../tongScroll";
export default {
	name: "advance",
	components: {
		tongSelect,
		tongScroll,
	},
	props: {
		formateEasySearch: {},
		storageShow: {
			type: Boolean,
			default: false,
		},
		searchOptions: {
			type: Array,
			default: function () {
				return [];
			},
		},
		storageOptions: {
			type: Array,
			default: function () {
				return [];
			},
		},
	},
	data() {
		return {
			form: {},
			showPannel: false,
			storeSearchOptions: [], // 保存的搜索条件[{label: "", prop: "", type: "", value: ""}]
			rightHeight: 0,
		};
	},
	watch: {
		storageOptions: {
			handler(val) {
				this.storeSearchOptions = val;
			},
			deep: true,
			immediate: true,
		},

    // 将简单检索中的值带过来
    formateEasySearch:{
      handler(val) {
        if(val[Object.keys(val)[0]]){
          this.form = {...this.form,...val}
        }
			},
			deep: true,
      immediate:true
    }
	},
	computed: {
		formatePlaceholder() {
			return function (selectItem, string) {
				return (selectItem && selectItem.placeholder) || string;
			};
		},
	},
	methods: {
		selectChange() {},
		showPannelHandler(flag) {
			this.showPannel = flag;
			this.$nextTick(() => {
				this.onresize();
			});
		},
		delOption(index) {
			// this.storeSearchOptions.splice(index, 1);
			this.$emit("advancedDel", index);
		},
		optionClickHandler(option) {
			this.searchOptions.forEach((t, i) => {
				this.$set(this.form, t.prop, option[i]);
			});
		},
		reset() {
			this.form = {};
		},
		save() {
			// let searchValArr = [];
			// this.searchOptions.forEach((t) => {
			//   if (this.form[t.prop]) {
			//     if (typeof this.form[t.prop] === "string") {
			//       searchValArr.push(trim(this.form[t.prop], 2));
			//     } else {
			//       searchValArr.push(this.form[t.prop]);
			//     }

			//   } else {
			//     searchValArr.push("");
			//   }
			// });
			// if (this.storeSearchOptions.length == 0) {
			//   this.storeSearchOptions.push(searchValArr);
			// } else {
			//   let findVal = this.storeSearchOptions.find(
			//     (val) => JSON.stringify(val) == JSON.stringify(searchValArr)
			//   );
			//   if (!findVal) {
			//     this.storeSearchOptions.unshift(searchValArr);
			//   }
			// }
			this.$emit("advancedSave", this.form);
		},
		search() {
			this.$emit("advancedSearch", this.form);
		},
		onresize() {
			this.rightHeight = $(".advance .el-form").height() + 6;
		},
	},
	mounted() {
		this.onresize();
		window.onresize = () => {
			return (() => {
				this.onresize();
			})();
		};
	},
};
</script>

<style lang="scss" scoped>
.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}
.advance {
	display: flex;
	background: #f5f7fa;
	margin-top: 8px;
	.el-form {
		padding: 3px 0;
		height: fit-content;
	}
	.el-form-item {
		margin-bottom: 0px;
	}
	.selectItem {
		width: 180px;
		.el-cascader {
			width: 100%;
		}
	}
	.date_picker {
		.el-date-editor--datetimerange {
			width: 360px;
		}
		.el-date-editor--datetime {
			width: 180px;
		}
	}
	.right {
		flex-shrink: 0;
		img {
			width: 22px;
			height: 22px;
			cursor: pointer;
		}
		.rightPannel {
			height: 100%;
		}
		.rightPannel_content {
			width: 220px;
			height: 100%;
			padding: 8px 12px;
			border-left: 1px solid #d5dae0;
			.title {
				color: #333;
				line-height: 16px;
				margin-bottom: 8px;
			}
			.content_option {
				display: flex;
				align-items: center;
				line-height: 20px;
				background: #efefef;
				border-radius: 2px;
				width: 100%;
				padding: 2px 18px 2px 12px;
				margin-bottom: 6px;
				color: #545559;
				&:hover {
					background: #d9eaf2;
					color: #3a8ce2;
					cursor: pointer;
				}
			}
			.el-icon-close {
				font-size: 10px;
				margin-left: 8px;
			}
			.no-data {
				color: #6c7280;
				line-height: 40px;
				text-align: center;
			}
		}
	}
}
</style>