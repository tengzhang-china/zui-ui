<template>
	<div class="tong-export-list">
		<tong-form ref="tongForm" :formModel="formModel" :formData="formData">
			<div slot="tem" style="width: 100%">
				<section>
					<tong-select
						:value.sync="formData.tempId"
						@tongSelectChange="selectChange"
						placeholder="请选择模板名称"
						:options="options"
						on="options"
						labelKey="name"
						valueKey="tempId"
						style="width: 230px"
					></tong-select>
					<el-button
						style="margin-left: 15px; width: 80px; padding: 0"
						@click="infoSetShow = !infoSetShow"
						>{{ formateText }}</el-button
					>
					<!-- <el-button type="primary" style="margin-left:15px; width: 80px; padding: 0">导出</el-button> -->
				</section>
				<div class="word-list" v-show="infoSetShow">
					<p>待导出字段</p>
					<div>
						<!-- 可勾选的words -->
						<el-popover
							v-if="leftWordList.length > 0"
							trigger="hover"
							placement="bottom-start"
							width="160"
							class="icon-plus"
						>
							<tong-icon slot="reference" imgUrl="el-icon-plus" />

							<ul class="left-words-list" @click="setWords">
								<li
									class="cursor"
									v-for="(opt, optIndex) in leftWordList"
									:key="optIndex"
									:data-index="optIndex"
								>
									{{ opt.cn }}
								</li>
							</ul>
						</el-popover>
						
						<span
							v-for="(item, index) in wordList"
							:key="index"
							class="tong-tips"
						>
							{{ item.cn }}

							<i class="el-icon-close cursor" @click="delWord(index)"></i>
						</span>
					</div>
				</div>

				<div class="tamp-save" v-show="infoSetShow">
					<el-input
						v-model="newName"
						placeholder="请输入新模板名称"
						style="width: 300px"
					>
						<template slot="prepend">新模板名称</template>
					</el-input>

					<el-button
						type="primary"
						@click="doSave"
						style="margin-left: 15px; width: 80px; padding: 0"
						>保存新模板</el-button
					>
					<el-button
						@click="doDel"
						style="margin-left: 15px; width: 80px; padding: 0"
						>删除</el-button
					>
				</div>
			</div>
		</tong-form>
	</div>
</template>
<script>
import { tongForm, tongSelect, tongIcon } from "../../../index";
import { downloadBlob,downloadUrl } from "../../../js/usual";
export default {
	name: "tongExportList",
	components: { tongForm, tongSelect, tongIcon },
	data() {
		return {
			formData: {
				fileName: "",
				tempId: "",
			},
			formModel: [
				{
					prop: "fileName",
					type: "input",
					label: "文件名",
					required: true,
					contentWidth: "350px",
				},
				{
					prop: "tempId",
					label: "模板名称",
					required: true,
					contentSlot: "tem",
				},
			],

			options: [],

			infoSetShow: true, //展示导出字段信息

			//接口添加的额外参数
			params: {
				list: {},
				export: {},
				save: {},
				del: {},
			},

			productId: "", //产品id

			wordList: [],
			leftWordList: [], //可勾选的words

			newName: "",
		};
	},
	filters:{
		isRepeat(op){
			
		}
	},
	computed: {
		formateText() {
			return `${(this.infoSetShow && "关闭") || "展开"}设置`;
		},
	},
	methods: {
		async init() {
			this.productId = this.$attrs.info.productId;
			if (!this.productId) {
				this.tongMessage({
					type: "error",
					message: "productId没有传进来",
				});
				return;
			}

			this.url = this.$attrs.info.url;
			this.params = this.$attrs.info.params || {};

			let res = await this.$axios.post(this.url.list, {
				type: 1,
				pageType: 1,
				productId: this.productId,
				status: 0,
				...(this.params.list || {}),
			});

			this.options = res.data.datasList;
			if (this.options.length > 0) {
				this.selectChange(this.options[0].tempId);
			}
		},

		async selectChange(value) {

			const leftWordList = await this.$attrs.info.getMoreWords();
			
			this.leftWordList = leftWordList.filter(val=>!this.wordList.some(val1=>val1.cn===val.cn))
			
			this.formData.tempId = value;
			this.formData.fileName = this.$refs.tongForm.getFormData().fileName;
			let obj = this.options.find((val) => val.tempId === value);

			this.modelName = this.newName = obj.name;
			this.wordList = JSON.parse(obj.exportList);
		},

		delWord(index) {
			this.leftWordList.push(...this.wordList.splice(index, 1));
			console.log(this.leftWordList);
		},

		// word重新排序
		sortWordList(){
			this.wordList.forEach((ele,index) => {
				ele.order=index+1
			});

			return this.wordList
		},

		// 保存新模板
		async doSave() {
			const params = {
				productId: this.productId, //得传
				status: 0,
				state: 2,
				fileName: `${this.newName}.xlsx`,
				name: this.newName,
				desc: this.newName,
				exportList: this.sortWordList(),
				...(this.params.save || {}),
			};

			let res = await this.$axios.post(this.url.save, params);

			if (res.code == "200") {
				this.tongMessage({
					type: "success",
					message: "保存新模板成功",
				});
				this.init();
			} else {
				this.tongMessage({
					type: "error",
					message: res.message,
				});
			}
		},

		// 设置word
		setWords(e) {
			const { index } = e.target.dataset;
			this.wordList.push(...this.leftWordList.splice(index, 1));
		},

		async doDel() {
			let res = await this.$axios.post(this.url.del, {
				tempId: this.formData.tempId,
				...(this.params.del || {}),
			});
			if (res.code == "200") {
				this.tongMessage({
					type: "success",
					message: "删除成功",
				});
				this.init();
			} else {
				this.tongMessage({
					type: "error",
					message: res.message,
				});
			}
		},

		// 导出
		async doExport() {
			return new Promise((resolve) => {
				this.$refs.tongForm.validate(async (valid) => {
					if (valid) {
						const fieldKey = this.$attrs.info.fieldKey || "dataSourceFieldList";
						const params = {
							fileName: this.$refs.tongForm.getFormData().fileName,
							[fieldKey]: this.sortWordList(),
							...(this.params.export || {}),
						};

						if (this.$attrs.info.name) {
							params[this.$attrs.info.name] = this.modelName;
						}

						let headerParams = {};
						if(params.responseType=="file"){
						}else{
							headerParams.responseType="blob";
						}
						delete params.responseType;

						try {
							let res = await this.$axios.post(this.url.export, params, headerParams);
							if(res.data && res.data.downloadPath){
								downloadUrl(res.data.downloadPath)
							}else{
								downloadBlob(res, params.fileName);
							}
							this.tongMessage({
								type: "success",
								message: "导出成功",
							});
						} catch (err) {
							this.tongMessage({
								type: "error",
								message: "导出失败",
							});
						} finally {
							resolve(false);
						}
					} else {
						resolve(true);
					}
				});
			});
		},
	},
	created() {
		this.init();
	},
};
</script>
<style lang='scss' scoped>
.tong-export-list {
	.word-list {
		border: 1px solid #dbdadf;
		margin-top: 10px;
		height: 300px;
		line-height: 20px;
		background-color: #fafafa;

		> p {
			width: 100%;
			margin: 0;
			padding: 10px 20px;

			i {
				float: right;
				line-height: 20px;
				font-size: 14px;
			}
		}

		> div {
			height: calc(100% - 60px);
			margin: 0 20px;
			background-color: #fff;
			border: 1px solid #dbdadf;
			overflow: auto;

			> span {
				display: inline-block;
				min-width: 60px;
				height: 22px;
				background-color: #fafafa;
				margin-top: 6px;
				margin-left: 6px;
				padding-right: 20px;
				border: 1px solid #dbdadf;
				text-indent: 4px;
				position: relative;

				&.icon-plus {
					display: inline;
					padding: 0;
					border: none;
				}
			}
			.el-icon-close {
				position: absolute;
				line-height: 20px;
				right: 2px;
			}
		}

		.el-icon-plus {
			display: inline-block;
			border: 1px solid #dbdadf;
			height: 22px;
			line-height: 20px;
			width: 22px;
			transform: translate(0px, -7px);
		}
	}

	.tamp-save {
		margin-top: 10px;
	}
}
</style>
<style lang="scss">
.left-words-list {
	max-height: 240px;
	overflow-y: auto;
	li {
		line-height: 24px;
		font-size: 12px;
		text-indent: 8px;

		&:hover{
			background-color: #fafafa;
		}
	}
}
</style>