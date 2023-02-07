import store from "../../store/index";

// 读取./src
let routes = [];
let menu = {};
let libFiles = require.context('./src', true, /\.js$/)
libFiles.keys().forEach(ele => {
    const path = ele.slice(1, -3);
    const directionName = ele.split("/")[1]; //文件夹名
    const fileName = ele.split("/")[2];      //文件名
    let fileInfo = require(`./src${path}`);   //读取文件

    // 处理数据 - exampleList中的type = directionName
    if (fileInfo.exampleList) fileInfo.exampleList.forEach(example => example.type = example.type || directionName);

    if (!menu[directionName]) menu[directionName] = [];
    menu[directionName].push({
        menuText: fileInfo.menuText || fileInfo.title || fileName,
        path,
        menuOrder: fileInfo.menuOrder,
        disabled: fileInfo.disabled,
    })

    routes.push({
        path,
        name: path.replace(/\//g, "_"),
        component: () => {
            return Promise.resolve({
                components:{
                    homeContent:()=>import("./homeContent.vue")
                },
                data() {
                    return {
                        info: { ...fileInfo, fileName: fileName.slice(0, -3) }
                    }
                },
                render: function (h) {
                    return (<home-content info={this.info} />)
                },
            })
        }
    })
})

// 版本说明倒叙
menu.versions.reverse()

// 将目录添加到store中
store.commit("home/addMenu", menu)

let homeRoute = [
    {
        path: "",
        name: "module",
        component: () => import("./index.vue"),
        children: [
            ...routes,
            {
                path: "/iconfont",
                component: () => import("./src/iconfont/index.vue")
            }
        ]
    },
]

export default homeRoute