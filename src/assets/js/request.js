import Vue from "vue";
import Axios from "axios";

Axios.interceptors.response.use(
    res=>res.data
)
Vue.prototype.$axios = Axios