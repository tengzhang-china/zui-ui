<template>
	<div class="tong-upload-cmp" ref="upEl">
		<template v-if="view">
			<table class="ipTable newTable" border="0" cellspacing="0" v-if="fileList&&fileList.length>0||filePath">
				<tbody style="display: block;">
					<template v-if="fileList&&fileList.length>0">
						<tr v-for="(file, fIndex) in fileList" :key="fIndex" class="trBg">
							<td style="line-height: 30px;width:280px;border-bottom:none;">
								<i class="el-icon-document doc-icon"></i>
								<span class="fileClass">{{file[defaultProps.fileName]}}</span>
							</td>
							<td style="line-height: 30px;width:100px;border-bottom:none;" class="upload cursor operate-blue">
								<a @click="getDownloadAuth(file[defaultProps.fileName],file[defaultProps.filePath])">下载</a>
							</td>
						</tr>
					</template>
					<tr class="trBg" v-else-if="filePath">
						<td style="line-height: 30px;width:280px;border-bottom:none;">
							<i class="el-icon-document doc-icon"></i>
							<span class="fileClass">{{fileName}}</span>
						</td>
						<td style="line-height: 30px;width:100px;border-bottom:none;" class="upload cursor operate-blue">
							<a @click="getDownloadAuth(fileName,filePath)">下载</a>
						</td>
					</tr>
				</tbody>
			</table>
			<span v-else>-</span>
		</template>
		<template v-else>
			<el-upload ref="upload" action :multiple="multiple" :accept="accept" :http-request="uploadHttp" :show-file-list="showFileList"
                :on-remove="handleRemove" :on-success="handleSuccess" :on-error="handleError" :on-progress="handleProgress"
                :on-change="handleChange" :before-upload="handleBeforeUp" :before-remove="handleBeforeRemove" :on-exceed="handleExceed"
                :list-type="listType" :limit="isSinle?1: limit" :file-list="isSinle?(filePath?[{name:fileName,url:filePath}]:[]):showList"
                :disabled="disabled" :auto-upload="autoUpload" :drag="drag">

				<slot></slot>
				<slot slot="tip" name="tip"></slot>
				<slot slot="trigger" name="trigger"></slot>

			</el-upload>
		</template>
		<el-progress type="line" :percentage="percent" style="margin-top:5px;width:100%;" v-if="showProgress&&progressing"></el-progress>
        <!-- <tong-bread-dialog ref="tongBreadDialog" /> -->
	</div>
</template>
<script>
const getBlob = (url, { onprogress, getXHR }) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open("GET", url, true)
		xhr.onprogress = function (event) {
			if (event.lengthComputable) {
				onprogress && onprogress(event)
			}
		}

		getXHR && getXHR(xhr)

		xhr.responseType = "blob"
		xhr.onload = () => {
			if (xhr.status === 200) {
				resolve(xhr.response)
			} else {
				reject(xhr.response)
			}
		}
		xhr.send()
	})
}

const saveAs = (blob, filename) => {
	if (window.navigator.msSaveOrOpenBlob) {
		navigator.msSaveBlob(blob, filename)
	} else {
		const link = document.createElement("a")
		const body = document.querySelector("body")
		link.href = window.URL.createObjectURL(blob) // 创建对象url
		link.download = filename
		// fix Firefox
		link.style.display = "none"
		body.appendChild(link)
		link.click()
		body.removeChild(link)
		window.URL.revokeObjectURL(link.href) // 通过调用 URL.createObjectURL() 创建的 URL 对象
	}
}

const download2 = (data) => {
	const { url, filename, onprogress, getXHR } = data
	getBlob(url, { onprogress, getXHR }).then((blob) => {
		saveAs(blob, filename)
	})
}
let defaultList = []
function noop() {}
export default {
	name: "minioUpload",
	props: {
		authType: {
			type: String,
			default: "zone3",
		},
		pathPrefix: {
			type: String,
			default: "",
		},
		uploadAuthUrl: {
			type: String,
			default: "/servers/aab/fileupload/view/v1/auth",
		},
		downloadAuthUrl: {
			type: String,
			default: "/servers/aab/filedown/view/v1/auth",
		},
		msgInDom: {
			type: Boolean,
			default: true,
		},
		msgDom: {
			// type:Object,
		},
		showProgress: {
			type: Boolean,
			default: false,
		},
		autoUpload: {
			type: Boolean,
			default: true,
		},
		defaultProps: {
			type: Object,
			default() {
				return {
					fileName: "fileName",
					filePath: "filePath",
				}
			},
		},
		multiple:{
			type:Boolean,
			default:false
		},
		view: {
			type: Boolean,
			default: false,
		},
		fileList: {},
		fileName: {
			type: String,
		},
		filePath: {
			type: String,
		},
		showFileList: {
			type: Boolean,
			default: true,
		},
		drag: {
			type: Boolean,
			default: false,
		},
		accept: {
			type: String,
			default: "",
		},
		listType: {
			type: String,
			default: "text",
		},
		limit: {
			type: Number,
		},
		limitSize: Number,
		limitSizeMsg: String,
		disabled: {
			type: Boolean,
			default: false,
		},
        beforeUpload: Function,
        beforeRemove: Function,
        onRemove: {
            type: Function,
            default: noop
        },
        onChange: {
            type: Function,
            default: noop
        },
        onPreview: {
            type: Function
        },
        onSuccess: {
            type: Function,
            default: noop
        },
        onProgress: {
            type: Function,
            default: noop
        },
        onError: {
            type: Function,
            default: noop
        },
        onExceed: {
            type: Function,
            default: noop
        },

		uploadParams:{
			type:Object,
			default:function(){
				return {}
			}
		}
	},
	mounted() {},
	data() {
		return {
			showList: [],
			uploadPath: "",
			percent: 0,
			storePath: "",
			curFileName: "",
			msgParam: {
				message: "",
				type: "success",
			},
			progressing: false,
			reqs:{}
		}
	},
	methods: {
		msgDomParamHandle() {
			if (this.msgDom instanceof HTMLElement) {
				this.msgParam.position = "bottom"
				this.msgParam.el = this.msgDom
			} else if (this.msgInDom) {
				this.msgParam.position = "bottom"
				this.msgParam.el = this.$refs.upEl
			}
		},
		up_message(param) {
			this.msgDomParamHandle()
			this.T_message({ ...this.msgParam, ...param })
		},
		handleRemove(file, fileList) {
            if (file && file.status === "success") {
                if (this.isSinle) {
                    this.$emit("update:fileName", "")
                    this.$emit("update:filePath", "")
                } else {
                    let emitFileList = this.fileList.filter((ele) => {
                        return (
                            ele[this.defaultProps.fileName] != file.name &&
                            ele[this.defaultProps.filePath] !== file.url
                        )
                    })
                    this.$emit("update:fileList", emitFileList)
                }
                this.onRemove(file, fileList);
            }
			//this.$emit("onRemove", file, fileList)
		},
		handleSuccess(response, file, fileList) {
            //this.$emit("on-success", response, file, fileList)
            this.onSuccess(response, file, fileList);
		},
		handleError(err, file, fileList) {
            //this.$emit("on-error", err, file, fileList)
            this.onError(err, file, fileList);
		},
		handleProgress(event, file, fileList) {
            //this.$emit("on-progress", event, file, fileList)
            this.onError(event, file, fileList);
		},
		handleChange(file, fileList) {
            this.onChange(file, fileList);
		},
		handleBeforeUp(file) {
			this.percent = 0
			let flag = true
			if (this.accept) {
				let fileTypeList = this.accept.split(",")
				let fileTypes = file.name.split("."),
					fileType = fileTypes[fileTypes.length - 1]
				if (!fileTypeList.includes("." + fileType)) {
					this.up_message({
						type: "error",
						message: `请上传${fileTypeList
							.map((ele) => ele.replace(".", ""))
							.join("、")}格式的文件`,
					})
					flag = false
				}
			}
			if (this.limitSize) {
				if (this.limitSize < file.size) {
					this.up_message({
						type: "error",
						message: `文件大小不能超过${this.limitSizeMsg}`,
					})
					flag = false
				}
			}
            //this.$emit("before-upload", file)
            if(this.beforeUpload){
                let before = this.beforeUpload(file)
                flag = before
            }
			return flag
		},
		handleBeforeRemove(file, fileList) {
			if (file && file.status === "success") {
				let _this = this,
					flag = false;

				return new Promise((resolve, reject) => {
					this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						if (!this.beforeRemove) {
							resolve();
						} else if (typeof this.beforeRemove === 'function') {
							const before = this.beforeRemove(file, fileList);
							if (before && before.then) {
								before.then(() => {
									resolve();
								}, reject);
							} else if (before !== false) {
								resolve();
							}else{
								reject()
							}
						}
					}).catch(() => {
						reject()
					});
				}).finally((res) => {
				})
			}
		},
		handleExceed(file, fileList) {
			this.up_message({
				message: `最多只能上传${this.limit || 1}个文件`,
				type: "error",
            })
            this.onExceed(file,fileList)
			//this.$emit("on-exceed", file, fileList)
		},
		async uploadHttp({ file }) {
			const { uid } = file;
			let uploadPath = '',storePath=''
			let params = {
					type: this.authType,
					filePath: this.pathPrefix + file.name,
					...this.uploadParams
				},
				ifSuccess = false
			await this.$axios
				.post(this.uploadAuthUrl, params, {
					headers: {
						Authorization: sessionStorage.getItem("token"),
						uid: sessionStorage.getItem("uid"),
					},
				})
				.then((res) => {
					if (res && res.code == "200") {
						uploadPath = res.data.uploadPath
						storePath = res.data.storePath
						ifSuccess = true
					} else {
						this.up_message({ message: res.message, type: "error" })
					}
				})
				.catch((err) => {
					this.up_message({ message: "获取上传预授权失败", type: "error" })
				})
				.finally((res) => {
					console.log(res)
				})
			if (!ifSuccess) {
				let rej = Promise.reject()
				rej.abort = () => {}
				return rej
			}
			//}
			var xhr = new XMLHttpRequest()
			xhr.open("PUT", uploadPath, true)
			;(xhr.timeout = 0 * 1000), (this.progressing = true)
			xhr.upload.onprogress = (event) => {
				const { loaded, total } = event
				this.percent = parseInt((loaded * 100) / total)
				if (this.percent == 100) {
					this.$emit("uploadComplete", file)
				}
			}
			xhr.send(file)
			let _this = this
			function onerror(){
				delete this.reqs[uid];
			}
			xhr.onerror = function error(e) {
				onerror(e);
			};
			xhr.onload = () => {
				if (xhr.status < 200 || xhr.status >= 300) {
					onerror()
					this.up_message({message:"文件上传失败",type:'error'})
				}else{
					this.up_message({ message: "文件上传成功" })
					if (this.isSinle) {
						_this.$emit("update:fileName", file.name)
						_this.$emit("update:filePath", storePath)
					} else {
						let item = {}
						item[_this.defaultProps.fileName] = file.name
						item[_this.defaultProps.filePath] = storePath

						_this.$emit("update:fileList", [..._this.fileList, item])
					}
					_this.$emit("uploadSuccess", file)
				}
				delete this.reqs[uid]
				_this.progressing = false
			}
			this.reqs[uid] = xhr
		},
		abort(file) {
			const { reqs } = this;
			if (file) {
				let uid = file;
				if (file.uid) uid = file.uid;
				if (reqs[uid]) {
				reqs[uid].abort();
				}
			} else {
				Object.keys(reqs).forEach((uid) => {
				if (reqs[uid]) reqs[uid].abort();
				delete reqs[uid];
				});
			}
			this.progressing = false;
			this.percent = 0
		},
		//下载预授权
		getDownloadAuth(name, path) {
			this.progressing = true
			this.$axios
				.post(this.downloadAuthUrl, { storePath: path, type: this.authType }, {
					headers: {
						Authorization: sessionStorage.getItem("token"),
						uid: sessionStorage.getItem("uid"),
					},
				})
				.then((res) => {
					if (res.code == "200") {
						//this.storePath = res.data.downloadPath
						// download(this.URL,'介质');

						download2({
							url: res.data.downloadPath,
							filename: name,
							onprogress: (e) => {
								const { loaded, total } = event
								this.percent = parseInt((loaded * 100) / total)
							},
							getXHR: (xhr) => {
								this.xhr = xhr
							},
						})
					} else {
						this.up_message({ message: res.message, type: "error" })
					}
				})
				.catch((err) => {
					this.up_message({ message: "文件下载失败", type: "error" })
				})
				.finally(() => {
					this.progressing = false
				})
		},
		clearFiles() {
			this.$refs.upload.clearFiles()
		},
		submit() {
			this.$refs.upload.submit()
		},
	},
	computed: {
		isSinle() {
			return !(this.fileList && Array.isArray(this.fileList))
		},
	},
	watch: {
		fileList: {
			immediate: true,
			deep: true,
			handler(v) {
				/*
                fileList中没有的，显示列表中删掉，有的则添加到列表

            */
				if (!this.isSinle) {
					let timemap = new Date().getTime()
					let fileListMap = this.fileList.map(
						(ele) =>
							`${ele[this.defaultProps.fileName]}-${timemap}-${
								ele[this.defaultProps.filePath]
							}`
					)
					let showListMap = this.showList.map(
						(ele) => `${ele.name}-${timemap}-${ele.url}`
					)
					fileListMap.map((ele, i) => {
						let indexInShow = showListMap.indexOf(ele)
						if (indexInShow === -1) {
							let fileItem = this.fileList[i]
							this.showList.push({
								name: fileItem[this.defaultProps.fileName],
								url: fileItem[this.defaultProps.filePath],
							})
						}
					})
					showListMap = this.showList.map(
						(ele) => `${ele.name}-${timemap}-${ele.url}`
					)
					for (let i = this.showList.length - 1; i >= 0; i--) {
						let indexInShow = fileListMap.indexOf(showListMap[i])
						if (indexInShow === -1) {
							this.showList.splice(i, 1)
						}
                    }
				}
			},
		},
	},
}
</script>
