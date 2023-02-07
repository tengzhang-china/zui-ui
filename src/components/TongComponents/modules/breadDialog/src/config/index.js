export const defaultConfig = {
    width: "500px",
    height: "350px",
    title: "这个一个默认title",
    info: {},

    sureCallback() { },
    cancelCallback() { },
}

export const breadConfig = {
    color: "#00abde",
}

/**
 * 确认的配置
 */
export const confirmConfig = {
    width: "500px",
    height: "125px",
    resizeDisabled: true,
    currentComponent:()=>import("../components/confirm"),
}