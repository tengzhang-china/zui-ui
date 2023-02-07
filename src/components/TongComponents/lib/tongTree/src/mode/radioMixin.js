// 每一个根节点只能选择一项，并且只能选择叶子节点
export default {
    data() {
        return {
            radioChosen: [], //选择的叶子节点集合
        }
    },
    methods: {
        setModeCheckKeys(keys) {
            let newRadioChosen = new Array(this.radioChosen.length).fill("")
            for (let i = 0; i < keys.length; i++) { //特殊模式单选 mode === "1"
                if (keys[i]) {
                    const tong_index = this.flatTreeData.find(ele => ele[this.nodeKey] === keys[i]).tong_index;
                    newRadioChosen[tong_index] = keys[i]
                }
            }
            this.radioChosen = newRadioChosen;
        },

        // 点击重复的取消选中
        clickMode1(data,node){
            if(this.mode==="1"){
                const {tong_index} = data;

                if(data[this.nodeKey]===this.radioChosen[tong_index]){
                    setTimeout(()=>{
                        this.$set(this.radioChosen,tong_index,"")
                    },0)

                    this.setRadioArr();

                    this.setRadioChosen()
                }
            }
        },

        /**
         * 设置单选
         * @param {*} list 
         */
        setRadioChosen(list=[]){
            this.$set(this,"radioChosen",list)
        }
    }
}