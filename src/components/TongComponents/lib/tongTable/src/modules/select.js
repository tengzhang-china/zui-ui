import { doDeepCopy, flatArray } from "../../../../js/usual";

// 处理复选和下拉
export default {
    props: {
        selectShow: {
            type: Boolean,
            default: false
        },
        selectable: {
            type: Function,
            default: function () {
                return function () {
                    return true
                }
            }
        },
        reserveSelection: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        rowClick(row, column, event) {
            this.$emit("rowClick", row, column, event);
        },
        /**
         * 获取选中的数据中key的集合,不传key则获取选中的所有数据集合
         * @param prop key
         * @return []
         */
        getSelectItems(prop) {
            return this.$refs.tongTable.selection.map((val) =>
                prop ? val[prop] : val
            );
        },


        // 处理属性下拉联动
        isSelected(selection, bool) {
            const selected = this.getSelectItems(this.rowKey);
            for (let row of selection) {
                const rowKey = row[this.rowKey];
                this.setSelected(row[this.formateKey], bool || selected.indexOf(rowKey) > -1)
            }
        },

        setSelected(list = [], bool) {
            for(let i = 0; i<list.length; i++){
                let data = list[i];
                if(this.selectable && this.selectable(data,i)===false){
                    
                }else{
                    this.toggleRowSelection(data, bool);
                    // 影响children
                    if (data[this.formateKey]) {
                        this.setSelected(data[this.formateKey], bool)
                    }
                }
            }
        },

        expandSelected(list) {
            this.isSelected(list)
        },
        
        /**
         * 单选
         */
        doSelect(selection, row) {
            this.setPatent(row);
            this.isSelected([row]);
            this.setAllSelect();
            this.$emit("select", selection, row);
        },

        setPatent(row) {
            const selected = this.getSelectItems(this.rowKey);
            let parentId = row.parentNode; //parentNode不存在就表示是根
            if(!parentId)return;
            let parentItem = flatArray(this.tableData, this.formateKey, [], false).find(val => val[this.rowKey] === parentId);
            
            // 父级选中的子级数据
            let childrenSelect = (parentItem[this.formateKey]||[]).filter(val => selected.find(ele => ele == val[this.rowKey])).length;
            let childrenLength = (parentItem[this.formateKey]||[]).length;

            // 父级选中状态-1不选；0半选；1勾选
            parentItem.selectState = childrenSelect === 0 ? -1 : childrenSelect < childrenLength ? 0 : 1;
            if(row.selectState!==undefined){
                if(parentItem.selectState===-1 && row.selectState===0){
                    parentItem.selectState=0
                }
            }
            
            let res = []
            this.tableInstance.store.states.selection.forEach(ele => {
                if(res.find(val=>val[this.rowKey]===ele[this.rowKey]) && ele[this.rowKey]!==undefined){
                    console.log("重复",ele[this.rowKey])
                }else{
                    res.push(ele)
                }
            });
            if(parentItem.selectState!==1){
                let i = res.findIndex(val=>val[this.rowKey]===parentItem[this.rowKey]);
                if(i>-1)res.splice(i,1)
            }
            this.tableInstance.store.states.selection = res;
            this.$nextTick(()=>{
                this.setDomClassName(`.lazyload-row-${parentId}`, parentItem.selectState);
            })


            if (row.parentNode) {
                this.setPatent(parentItem);
            } else {
                console.log("递归结束")
            }
        },

        setAllSelect() {
            const allLength = flatArray(this.tableData, this.formateKey, [], false).length;
            const selectNum = this.getSelectItems(this.rowKey).length;
            const type = selectNum === allLength ? 1 : selectNum === 0 ? -1 : 0;
            this.isSelectAll = type;
            this.setDomClassName("", type)
        },

        /**
         * 设置classname
         * @param {string} className 
         * @param {*} type 
         */
        setDomClassName(className = "", type) {
            const dom1 = this.tableInstance.$el.querySelector(`.el-table__fixed ${className} .el-checkbox`);
            const dom2 = this.tableInstance.$el.querySelector(`.el-table__fixed ${className} .el-checkbox .el-checkbox__input`);
            if (type === -1) {
                dom1.classList.remove("is-indeterminate");
                dom2.classList.remove("is-indeterminate");
                dom1.classList.remove("is-checked");
                dom2.classList.remove("is-checked");
            } else if (type === 0) {
                dom1.classList.remove("is-checked");
                dom1.classList.add("is-indeterminate");
                dom2.classList.add("is-indeterminate");
            } else {
                dom1.classList.remove("is-indeterminate");
                dom2.classList.remove("is-indeterminate");
                dom1.classList.add("is-checked");
                dom2.classList.add("is-checked");
                if(className)dom1.click()
            }
        },

        /**
         * 批量选
         */
        doSelectAll(selection) {
            if (this.tableInstance.store.states.isAllSelected || this.isSelectAll === 0) {
                this.isSelectAll = 1;
                this.isSelected(this.tableData, true)
                this.setSelected(this.tableData, true)
            } else {
                this.isSelectAll = 0;
                this.clearSelection();
            }
            this.$emit("select-all", selection);
        },

        /**
         * 清空选中
         */
        clearSelection() {
            this.tableInstance.clearSelection();
        },

        /**
         * 设置单行选中状态
         */
        toggleRowSelection(row, selected) {
            this.tableInstance.toggleRowSelection(row, selected);
        },

        toggleAllSelection() {
            this.tableInstance.toggleAllSelection();
        },


        getMutexKey(prop) {
            return prop + "-mutex"
        },

        // 展开时改变下拉项
        setMutex(val, row, item, scope) {
            if (val && item.selectMutex === true) {
                const oldValue = row[item.prop];
                row[item.prop] = undefined;
                const usedList = this.getUsedList(item, scope);
                let goalList = []

                switch (item.mutexType) {
                    case 2: goalList = item.selectOptions.filter(ele => usedList.indexOf(ele.value) == -1); break; //过滤
                    default: item.selectOptions.map(ele => {
                        ele.disabled = usedList.indexOf(ele.value) > -1
                    }); goalList = item.selectOptions; break; //禁用
                }

                this.$set(this.tableData[scope.$index], this.getMutexKey(item.prop), doDeepCopy(goalList))
                this.$set(row, item.prop, oldValue)

            }
        },

        /**
         * 获取已经使用的下拉项id
         * @param {*} item 
         * @param {*} scope 
         */
        getUsedList(item, scope) {
            const usedList = this.getTableData.filter((val, index) => index != scope.$index).map(ele => ele[item.prop]);
            return item.multiple ? usedList.reduce((a, b) => a.concat(b), []) : usedList
        },
    },

    computed:{
        formateKey(){
            return this.load?"lazyloadData":this.treePropKey;
        }
    }
}