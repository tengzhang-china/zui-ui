export const getColors = function () {
    return [
        "#51a1f3",
        "#35c29c",
        "#f8db60",
        "#6edbec",
        "#a8b8c9",
        "#87c999",
        "#ef8360",
        "#969ce9",
        "#cc84d7",
    ]
}

/**
 * 轴线默认配置
 */
export const lineSetting = function () {
    return {
        splitLine: {
            lineStyle: {
                color: "#acb7c2",
            },
        },
        axisLabel: {
            color: "#727272",
        },
        axisLine: {
            lineStyle: {
                color: "#acb7c2",
            },
        },
    }
}

export const gridSetting = function () {
    return {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "13%",
        containLabel: true,
    }
}