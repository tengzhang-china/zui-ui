export let minioOption = {
    endPoint: '168.1.7.3',
    port: 10001,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin'
};
import minio from 'minio'
export {
    minio
}
export const setOption = function (obj) {
    minioOption = Object.assign(minioOption, obj)
}
/**
 * 文件上传
 * @param {*} bucketName   存储桶名称
 * @param {*} file     文件
 * @param {*} path 文件夹名
 */
export const minioUpload = function (bucketName, file, path = "") {
    return new Promise(resolve => {
        var Minio = require('minio')
        var minioClient = new Minio.Client(minioOption);
        const metedata = {
            "content-type": file.type,
            "content-length": file.size
        }
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {
            const arrayBuffer = e.target.result;
            // ArrayBuffer ---> Buffer:
            function toBuffer(ab) {
                var buf = new Buffer(ab.byteLength);
                var view = new Uint8Array(ab);
                for (var i = 0; i < buf.length; ++i) {
                    buf[i] = view[i];
                }
                return buf;
            }
            const buffer = toBuffer(arrayBuffer);
            const pathName = `${path}${new Date().getTime()+'_'+file.name}`
            minioClient.putObject(bucketName, pathName, buffer, metedata, function (err, etag) {
                const url = err == null ? `http://${minioOption.endPoint}:${minioOption.port}/${bucketName}/${pathName}` : err
                resolve(url)
            });
        }
    })
}

/**
 * 文件下载
 * @param {*} bucketName   存储桶名称
 * @param {*} fileName     文件名称
 */
export const minioDown = function (bucketName, fileName) {
    var Minio = require('minio')
    var minioClient = new Minio.Client(minioOption);
    var size = 0;
    minioClient.getObject(bucketName, fileName, function (err, dataStream) {
        if (err) {
            return console.log(err)
        }
        dataStream.on('data', function (chunk) {
            size += chunk.length
        })
        dataStream.on('end', function () {
            var x = new XMLHttpRequest();
            x.open("GET", dataStream.url, true);
            x.responseType = 'blob';
            x.onload = function (e) {
                var url = window.URL.createObjectURL(x.response)
                var a = document.createElement('a');
                a.href = url
                a.download = fileName;
                a.click()
            }
            x.send();
        })
        dataStream.on('error', function (err) {
            console.log(err)
        })
    })
}
/**
 * 存储桶文件查询
 * @param {*} bucketName   存储桶名称
 */
export const minioGet = function (bucketName) {
    var Minio = require('minio')
    var minioClient = new Minio.Client(minioOption);
    var stream = minioClient.listObjects(bucketName, '', true)
    var list = []
    stream.on('data', function (obj) { list.push(obj) })
    // stream.on('error', function (err) { })
    return list
}
/**
 * 文件删除
 * @param {*} bucketName   存储桶名称
 * @param {*} fileName     文件名称
 */
export const minioDel = function (bucketName, fileName) {
    return new Promise(resolve => {
        var Minio = require('minio')
        var minioClient = new Minio.Client(minioOption);
        minioClient.removeObject(bucketName, fileName, function (err) {
            const str = !err ? "true" : err
            resolve(str)
        })
    })

}