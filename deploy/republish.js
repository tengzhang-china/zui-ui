const { execSync, exec } = require("child_process");

let tags = [
    // "1.1.7",
    // "1.1.8",
    // "1.2.10",
    // "1.2.11",
    // "1.2.2",
    // "1.2.3",
    // "1.2.4",
    // "1.2.5",
    // "1.2.6",
    // "1.2.7",
    // "1.2.8",
    "1.2.9",
    // "1.3.0",
].map((val,i)=>{
    return ` && git checkout ${val} -f && cd ./src/components/TongComponents && npm publish --registry http://10.10.87.68:8081/repository/npm-local/`
})
let commandList = [
    'git tag -l',

    ...tags
]

exec(commandList.join(' '), (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    } else {
        console.log(stdout,`完成`)
    }
})