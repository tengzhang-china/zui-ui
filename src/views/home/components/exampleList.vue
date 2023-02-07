<template>
	<div class="example-list">
		<div v-for="(example, index) in formateExampleList" :key="index">
			<h3 v-if="example.title">{{ example.title }}</h3>
			<p class="desc" v-if="example.desc">{{ example.desc }}</p>

			<!-- 指南模板 -->
			<template v-if="example.type === 'guide'">
				<div>
					<div style="display: none" ref="instanceBox"></div>
					<tong-editor
						:height="example.codeConfig && example.codeConfig.codeEditorHeight"
						lang="javascript"
						ref="tongEditor"
						:indexShow="false"
						:cursorShow="false"
						:value="example.codeConfig && example.codeConfig.codeString"
					/>
				</div>
			</template>

			<!-- 组件模板，module模板 -->
			<template v-else-if="modelList.indexOf(example.type) > -1">
				<div
					class="example-item isComponent"
					:class="{ 'flex-row': formateFlexType }"
				>
					<div class="component-box" ref="instanceBox"></div>

					<template v-if="formateFlexType">
						<tong-editor
							height="650px"
							ref="tongEditor"
							lang="javascript"
							:indexShow="false"
							:value="example.codeConfig && example.codeConfig.codeString"
							@input="(code) => tongEditorInput(code, index)"
						/>
						<el-button class="excu-btn" @click="tongEditorInput(null, index, true)"
							>刷新</el-button>
					</template>

					<template v-else>
						<el-collapse v-model="activeName" accordion>
							<el-collapse-item title :name="index">
								<tong-editor
									:height="
										(example.codeConfig &&
											example.codeConfig.codeEditorHeight) ||
										'100px'
									"
									ref="tongEditor"
									lang="javascript"
									:indexShow="false"
									:value="example.codeConfig && example.codeConfig.codeString"
									@input="(code) => tongEditorInput(code, index)"
								/>
							</el-collapse-item>
						</el-collapse>
						<p>
							<el-button @click="toggleEditor(index)">{{
								activeName === index ? "隐藏代码" : "展示代码"
							}}</el-button>
							<el-button @click="tongEditorInput(null, index, true)"
								>执行</el-button
							>
						</p>
					</template>
				</div>
			</template>

			<!-- versions -->
			<template v-else-if="example.type === 'versions'">
				<div class="versions-list">
					<p>{{ index + 1 }}. {{ example.title }}</p>
					<ul>
						<li
							v-for="(version, vesionIndex) in example.contentList"
							:key="vesionIndex"
						>
							{{ version }}
						</li>
					</ul>
				</div>
			</template>

			<!-- operations -->
			<template v-else-if="example.type === 'operations'">
				<ul>
					<li v-for="(list, listIndex) in example.listData" :key="listIndex">
						<p class="desc">{{ list.desc }}</p>
						<!-- <img v-for="(img, imgIndex) in list.imgs" style="vertical-align:top" :key="imgIndex" :src="img" alt=""> -->
						<el-image
							v-if="list.imgs && list.imgs.length > 0"
							style="width: 100px; height: 100px"
							:src="list.imgs[0]"
							:preview-src-list="list.imgs"
						></el-image>
					</li>
				</ul>
			</template>
		</div>
	</div>
</template>
<script>
import { tongEditor, tongRender } from "@/components/TongComponents/index";
import { verifyType } from "@/components/TongComponents/js/rules";
import { throttle } from "@/components/TongComponents/js/usual";
import { formateCodeString } from "./formateCodeString";
import { mapState } from "vuex";
export default {
	props: ["exampleList", "fileName"],
	components: { tongEditor, tongRender },
	data() {
		return {
			activeName: "",
			modelList: ["lib", "modules", "charts", "canvas2d"],
		};
	},
	computed: {
		...mapState({
			formateFlexType: (state) => state.home.flowType === "type02",
		}),
		formateExampleList() {
			this.exampleList.forEach((ele) => {
				if (ele.type === "guide") {
					ele.codeConfig.codeString = verifyType(
						ele.codeConfig.codeString,
						"Array"
					)
						? ele.codeConfig.codeString.join("\n")
						: ele.codeConfig.codeString;
				} else if (this.modelList.includes(ele.type)) {
					ele.codeConfig.imports = ele.codeConfig.imports || [];
					ele.codeConfig.codeComponent.methods =
						ele.codeConfig.codeComponent.methods || {};

					const info = {
						...ele,
						type: ele.type,
						fileName: this.fileName,
					};
					ele.codeConfig.codeString = formateCodeString(info);

					// ele.type = "lib";
				}
			});
			return this.exampleList;
		},
	},
	methods: {
		// 显隐编辑器
		toggleEditor(index) {
			this.activeName = this.activeName === index ? "" : index;
			setTimeout(()=>{
				this.$emit("send-content-height")
			},300)
		},

		tongEditorInput(code, index, messageShow = false) {
			try {
				if (code === null) code = this.$refs.tongEditor[index].getEditorCode();

				let codeStrig = code.replace(/\n+/g, "").replace(/\s+/g, " ");

				let templateString = codeStrig.match(/<template>(.*)<\/template>/)[1];

				let dataString = codeStrig
					.match(/export default(.*)<\/script>/)[1]
					.replace(/\s\/\/.*?\s/g, "")
					.replace(/\scomponents:{.*?},/g, "");
				let dataObj = eval(`(${dataString})`);

				let newComponent = this.$extendComps({
					template: templateString,
					...dataObj,
				});

				let instance = new newComponent();

				// 父节点
				let parent = this.$refs.instanceBox[index] || this.$refs.instanceBox;
				parent.childNodes.forEach((ele) => {
					parent.removeChild(ele);
				});
				parent.appendChild(instance.$mount().$el);
				if (messageShow === true)
					this.tongMessage({ type: "success", message: "视图更新成功" });
			} catch (error) {
				console.error(error);
				this.tongMessage({ type: "error", message: "编辑的代码存在问题" });
			}
		},
	},
};
</script>
<style lang='scss' scoped>
.example-list {
	> div {
		margin-bottom: 40px;

		.desc {
			font-size: 12px;
			line-height: 30px;
			color: #666;
		}
		.code-editor {
			background-color: #f0f0f0;
			box-sizing: border-box;

			::v-deep.tong-editor {
				.ace_editor {
					border: none;
				}
				.ace_content {
					background-color: #f0f0f0;
				}
			}
		}

		.versions-list {
			padding-left: 0;
		}

		.example-item.isComponent {
			padding: 0 15px;
			margin-left: 5px;
			box-shadow: 0px 0px 5px 0px #666;

			.component-box {
				flex-grow: 1;
				width: 100%;
				padding: 20px 0;
				// border-bottom: 1px solid #f0f0f0;
			}
			> p {
				text-align: center;
				margin: 0;
				padding: 15px 0;
			}

			::v-deep.el-collapse {
				border-top: none;
				.el-collapse-item__header {
					display: none;
				}
			}
		}

		.flex-row {
			display: flex;
			overflow-x: auto;
			padding-right: 0;
      position: relative;

			::v-deep .tong-editor {
				margin-left: 15px;
				margin-top: 15px;
				max-width: 500px;
				min-width: 500px;
				height: 650px !important;
			}

      .excu-btn{
        position: absolute;
        bottom: 100px;
        right: 20px;
      }
		}
	}
}
</style>
