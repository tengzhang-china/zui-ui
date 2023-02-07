
const fs = require("fs");

/**
 * 修改版本号
 * @param {*} version 
 */
function addVersion(version, path = "public") {
    let data = fs.readFileSync(`${path}/static/data.json`, "utf-8");
    const obj_data = JSON.parse(data)
    obj_data.version = [...new Set([version,...obj_data.version])];
    console.log(obj_data)

    fs.writeFileSync(`${path}/static/data.json`, JSON.stringify(obj_data, null, 4));
}

/**
 * 是否存在tong-zui-ui目录
 * @returns boolean结果
 */
function isExistZip() {
    return fs.existsSync(`dist/tong-zui-ui.tar.gz`);
}

module.exports = {
    addVersion,
    isExistZip
}