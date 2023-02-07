const scpClient = require('scp2');
const ora = require('ora');
const chalk = require('chalk');
const server = require('./config');

const { addVersion, isExistZip } = require("./changeData");

const { name, version } = require("../src/components/TongComponents/package.json");

var _ = process.argv.splice(2);

const spinner = ora()
spinner.start();

// 清nnginx原目录文件
const Client = require('ssh2').Client;
const conn = new Client();
conn.on("ready", function () {
    logs("开始清缓存...");

    spinner.text = "正在删除缓存..."
    conn.exec(`
        rm -rf ${server.path}static
        rm -rf ${server.path}index.html
        rm -rf ${server.path}manifest.json`, rmCallback)
}).connect({
    host: server.host,
    port: server.port,
    username: server.username,
    password: server.password,
    readyTimeout: 50000
})
function rmCallback(err, steam) {
    if (err) {
        spinner.stop();
        logs(chalk.red("删除缓存失败"))
        throw err
    };
    logs("删除成功")

    steam.on('close', uploadFile);

    // conn.end();
}

// 上传包
function uploadFile() {
    logs("开始发布...");
    addVersion(version, "dist");
    addVersion(version)
    logs(`正在发布(${server.host}:${server.port} ${server.path})...`);
    spinner.text = `正在发布(${server.host}:${server.port} ${server.path})...`;

    scpClient.scp(
        server.outputDir,
        {
            host: server.host,
            port: server.port,
            username: server.username,
            password: server.password,
            path: server.path,
            readyTimeout: 50000
        },
        function (err) {
            spinner.stop();
            if (err) {
                logs(chalk.red("发布失败"))
                throw err
            } else {
                logs(chalk.green("发布成功"));

                if (isExistZip()) {
                    logs(`开始转移${name}-${version}.tar.gz`);
                    conn.exec(`
                        mv ${server.path}*.gz ${server.path}zip/${name}-${version}.tar.gz
                    `, function () { logs(chalk.green(`${name}-${version}.tar.gz转移成功`)); conn.end(); })
                }else{
                    conn.end(); 
                }

            }
        }
    )
}

// 打印日志
function logs(str) {
    setTimeout(() => {
        console.log(`${new Date().toLocaleTimeString()}：${str}`)
    }, 0)
}