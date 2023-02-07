const webpack = require('webpack');

//包大小插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//打包时长插件
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

// 导入代码压缩插件
const TerserPlugin = require("terser-webpack-plugin");

// gzip插件
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

const isBuildComponent = process.env.NODE_ENV === 'build_component';
console.log(isBuildComponent,process.env.NODE_ENV)
// return

//定义 CDN 路径
const cdn = {
    css: [
        'https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/theme-chalk/index.css'
    ],
    js: [
        "https://cdn.bootcdn.net/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js", //可以自动导入适合当前浏览器的polyfill的io
        "https://cdn.bootcss.com/vue/2.6.11/vue.min.js",
        // "https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js",
        // "https://cdn.bootcss.com/vuex/3.1.3/vuex.min.js",
        "https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js",
        // "https://cdn.bootcdn.net/ajax/libs/jquery/3.4.1/jquery.min.js",
        // "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js",
        // "https://cdn.jsdelivr.net/npm/wangeditor@4.6.4/dist/wangEditor.min.js",
    ]
}


module.exports = {
    outputDir: 'dist',

    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: 9090,
        proxy: {
            "/servers": {
                target: "http://168.1.14.101:15300",
                changeOrigin: true,
                pathRewrite: {
                    "^/servers": ""
                }
            },
            "/auth": {
                target: "http://168.1.121.4:18900",//开发环境(外网映射地址)
                changeOrigin: true,
                pathRewrite: {
                    "^/auth": ""
                }
            },
        }

    },
    chainWebpack: config => {
        if(!isBuildComponent)config.plugin('html')
            .tap(args => {
                args[0].cdn = cdn;
                return args;
            });
        config.module.rule('images')
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .use('url-loader')
            .tap(options => {
                options.limit = 409600;
                //name: 'img/[name].[hash:8].[ext]'
                return options;
            })
            .end()
    },

    configureWebpack: config => {
        let plugins = [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            }),
        ]

        let externals = {};

        let optimization = {}

        if (!isBuildComponent) {
            // 开启gzip
            plugins.push(new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            }))

            // // 开启分离js
            config.optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    maxInitialRequests: Infinity,
                    minSize: 20000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                }
            }

            externals = {
                'vue': 'Vue',
                // 'vue-router': 'VueRouter',
                // 'vuex': "Vuex",
                "element-ui": "ELEMENT",
                // 'jquery': 'jQuery',
                // 'echarts': 'echarts',
                // 'wangeditor': "wangEditor"
            };



            // plugins.push(new BundleAnalyzerPlugin()); //开启分析包大小
        }

        if(process.env.NODE_ENV!=='development'){
            optimization = {
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        parallel: 4,
                        extractComments:false,
                        minify: TerserPlugin.uglifyJsMinify,
                        terserOptions: {
                            compress: true,
                        },
                    })
                ]
            }
        }
        return {
            resolve: {
                alias: {
                    'vue$': 'vue/dist/vue.esm.js'
                }
            },
            plugins,
            externals,
            optimization
        }
    }
}