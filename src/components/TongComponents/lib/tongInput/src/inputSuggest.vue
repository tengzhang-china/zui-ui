<template>
	<div class="input-suggest">
		<el-popover
			v-model="suggestShow"
			trigger="manual"
			:appendToBody="false"
			:open-delay="300"
			transition="el-zoom-in-top"
			placement="bottom-start"
		>
			<el-input
				slot="reference"
				v-bind="$attrs"
				v-model="curValue"
				@input="search"
				@focus="doFouce"
				@blur="closePopover"
			></el-input>

			<template>
				<div v-loading="isSearching">
					<p v-if="suggestList.length > 0 && totalShow" class="total">共 {{pageInfo.total}} 条</p>
					<ul
						v-if="suggestList.length > 0"
						@click="select"
						v-touchBottom="touchBottom"
					>
						<li
							v-for="(opt, i) in suggestList"
							:key="i"
							:data-label="opt.label"
						>
							{{ opt.label }}
						</li>
					</ul>

					<p v-else class="no-data">{{ emptyText }}</p>
				</div>
			</template>
		</el-popover>
	</div>
</template>
<script>
import { debounce } from "../../../js/usual";
export default {
	props: {
		fetchSuggestions: Function,
		isEmptySearch: Boolean,
		totalShow:Boolean,
		emptyText: {
			type: String,
			default: "暂无数据",
		},
		valueKey: String,
		value: String,
	},
	watch: {
		value: {
			handler(newValue) {
				if (newValue) {
					this.curValue = newValue;
				}
			},
			immediate: true,
		},
	},
	data() {
		return {
			suggestShow: false,
			suggestList: [],

			curValue: "",
			isSearching: false,
			nodataShow: false,
		};
	},
	methods: {
		openPopover() {
			this.suggestShow = true;
		},
		closePopover() {
			this.suggestShow = false;
			this.suggestList = [];
		},

		doFouce(e) {
			const val = e.target.value;
			this.search(val);
		},
		search: debounce(function (val) {
			if (!this.isEmptySearch && !val) return;
			this.openPopover();
			this.requestData();
		}),

		// 发送请求获取数据
		requestData() {
			this.isSearching = true;
			this.pageInfo.total=0;

			this.fetchSuggestions(
				{ queryString: this.curValue, pageInfo: this.pageInfo },
				this.setOptions
			);
		},

		// 处理提示数据
		setOptions(opts = [], config = {}) {
			this.isSearching = false;
			this.setPagerByFont(opts, config);
		},

		select(e) {
			const { label } = e.target.dataset;
			this.curValue = label;
			this.closePopover();
		},

		touchBottom() {
			let { hasmore, data } = this.pageInfo;

			if (this.suggestList.length === data.length && hasmore) {
				console.log("重新发请求了");
				this.requestData();
			} else if (hasmore) {
				this.pageInfo.page++;
				this.setSuggestList();
			} else {
				console.log("已经加载完了");
			}
		},

		// 设置前端分页
		setPagerByFont(opts, config) {
			const { total, size } = config;
			const data = (this.pageInfo.data || []).concat(opts);
			this.pageInfo = {
				size: size || 20,
				total: total || opts.length || 0,
				data,
				page: 1,
				hasmore: false,
			};

			this.nodataShow = opts.length === 0;

			this.setSuggestList();
		},

		setSuggestList() {
			let { page, size, total, data } = this.pageInfo;
			let arr = [(page - 1) * size, page * size];
			this.suggestList.push(
				...data.slice(...arr).map((val) => {
					return {
						label: val[this.valueKey],
					};
				})
			);
			this.pageInfo.hasmore = this.suggestList.length < total;
		},
	},

	created() {
		this.pageInfo = {};
	},
};
</script>