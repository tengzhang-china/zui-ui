module.exports = {
    title: "gz包下载",
    desc: "下载对应版本的gz包（离线版本）",

    exampleList: [
        {
            desc:"选择对应的版本号，点击下载即可拿到 离线版本 的压缩包",
            type: "lib",
            codeConfig: {
                codeComponent: {
                    template: `
    <div>
        <tong-select :options="opts" :value.sync='name' />
        <el-button type="primary" @click="downloadZip">下载</el-button>
    </div>
`,
                    data() {
                        return {
                            opts:[],
                            name: "",
                        }
                    },
                    methods: {
                        downloadZip(){
                            if(!this.name)return;
                            this.tongMessage({
                                type:"success",
                                message:`开始下载${this.name}`
                            })
                            window.open(`http://10.10.64.23:66/zip/tong-zui-ui-${this.name}.tar.gz`,"_blank")
                        }
                    },

                    created() {
                        this.$axios.get("/static/data.json").then(res=>{
                            this.opts = res.version
                        })
                    },
                },
            },
        },
    ]
}