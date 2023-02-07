// 展开
export default {
    props: {
        cellClassName:{

        },
        // 是否显示展开栏
        expandShow: {
            type: Boolean,
            default: false,
        },

        setExpandHidden: {
            type: Function,
            default: function () {
                return false
            }
        },

        load: {},
        // 下拉展开树
        rowKey: {
            type: String,
            default: "",
        },

        // treeProp的children的key
        treePropKey: {
            type: String,
            default: "children",
        },

        rowClassName: {
            type: Function,
            default: function () {
                return ""
            }
        },

        defaultExpandAll:{
            type:Boolean,
            default:false
        },
        expandRowKeys:{
            type:Array,
        }
    },
    computed: {
        formateTreeProp() {
            return {
                children: this.treePropKey,
                hasChildren: "hasChildren"
            }
        }
    },
    methods: {

        // 处理懒加载的
        load_decorate(tree,treeNode,resolve){
            this.load(tree,treeNode,(data)=>{
                data.forEach(ele=>{
                    ele.parentNode = tree[this.rowKey];
                })
                this.data_loaded = data;
                tree.lazyloadData = data;
                
                resolve(this.data_loaded);
            })
        },
        
        // 生成特定的class---复选框使用
        lazyloadClass({ row }){
            let rowClass = "";
            if(this.selectShow){
                rowClass = `lazyload-row-${row[this.rowKey]}`
            }
            return rowClass
        },


        expandChange(row, expanded) {
            this.$emit("expandChange", row, expanded);
            if(expanded)this.expandSelected([row]);
        },

        toggleRowExpansion(row, expanded) {
            this.tableInstance.toggleRowExpansion(row, expanded)
        },

        setRowClassName({ row, rowIndex }) {
            return [{
                'expand-hidden': this.expandShow ? this.setExpandHidden({ row, rowIndex }) : false
            }, this.rowClassName({ row, rowIndex }),this.lazyloadClass({row,rowIndex})]
        }
    },
}