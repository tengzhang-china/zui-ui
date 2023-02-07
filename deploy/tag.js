const {execSync, exec} = require("child_process");
const { version } = require("../src/components/TongComponents/package.json");
// execSync(`"./tag.sh" ${version}`, (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//     }else{
//         console.log(`版本号${version}创建完成`)
//     }
// });

let commandList = [
    'cd ../',
    '&& git pull && git branch && git tag',
    '&& echo "delete old tag"',
    `&& git tag -d ${version} && git push origin :refs/tags/${version}`,
    `& echo "create new tag：${version}"`,
    `&& git tag ${version} && git push origin ${version}`

]

exec(commandList.join(' '),(error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }else{
        console.log(`版本号${version}创建完成`)
    }
})