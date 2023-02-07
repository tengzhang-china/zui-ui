export default {
    filters: {
        /**
         * 单元格是否展示tips
         * 控制类型，控制自定义内容
         * @param {object} item 
         * @returns {bollean} 使用tips控件
         */
        formateTips(item){
            const tipsType = [undefined, "", "label", "clickBtn"];
            // 内联编辑-为编辑状态
            return (tipsType.includes(item.type) || ["input", "select"].includes(item.type) && item.cellEdit) && !item.slot && !item.render;
        }
    },
}