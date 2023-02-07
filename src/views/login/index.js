import store from '../../store';
import router from '../../router';

export default [
    {
        path: '/',
        redirect: '/guide/install',
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("./src/index.vue"),
        beforeEnter(from, to, next) {
            if (store.state.login.useful) {
                next()
            } else {
                router.replace(store.state.login.redirect)
            }
        }
    }
]