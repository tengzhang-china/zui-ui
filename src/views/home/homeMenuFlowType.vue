<template>
	<div class="flow-type cursor" @click="changeFlowType">
        <span>视图展示方式：</span>
        <img :src="images[flowType]" >
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
	props: {},
	components: {},
	data() {
		return {};
	},
	computed: {
		...mapState({
			flowType: (state) => state.home.flowType,
		}),
	},
	methods: {
		init() {
			this.images = {
				type01: require("@/assets/images/homeMenu/type01.png"),
				type02: require("@/assets/images/homeMenu/type02.png"),
			};
		},

        changeFlowType(){
            this.$store.commit("home/setFlowType",this.flowType==="type02"?"type01":"type02")
        }
	},
	created() {
		this.init();
	},
};
</script>
<style lang='scss' scoped>
.flow-type {
	margin-right: 20px;
    display: flex;
    justify-content: center;
    line-height: 60px;

	span{
		white-space: nowrap;
	}
    img{
        display: inline-block;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        transform: translateY(7.5px) scale(.8);
        
    }
}
</style>