const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'development',

    //多页面入口文件
    entry: {
        index: './src/js/index.js'
        //处理成绝对路径
        //index: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        //绝对路径拼接
        path: path.resolve(__dirname + '/dist'),

        //使用文件名变量机制输出多页面文件
        filename: 'js/[name].js',
    },
    module: {
        //针对不同的文件使用不同的处理方式的规则
        rules: [
            {
                test: /\.js$/,           //匹配js文件
                loader: 'babel-loader', //使用的loader
                exclude: path.resolve(__dirname, 'node_modules'),  //忽略的文件夹
                query: {
                    'presets': ['latest']
                }
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.scss$/,
                //处理多个loader写法
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    //'style-loader',   //线上版本使用
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer('last 5 versions')]
                            }
                        }
                    }, 'sass-loader'
                ]

            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                //压缩图片
                loader: ['url-1oader?limit=1024&name=img/[name]-[hash:16].[ext]', 'image-webpack-loader']
            }
        ]
    },
    plugins: [
        new uglify(),  //压缩js

        //多页面就new多一个
        new htmlWebpackPlugin({  //压缩html 
            minify: {
                removeComments: true,  //移除注释
                collapseWhitespace: true,  //移除空格换行
            },
            filename: index.html,  //指定打包后页面文件名称
            template: path.resolve(__dirname, './src/index.html'), //指定要打包的文件
            title: 'tab标题',  //html文件的title标签需要写入一个变量：<%= htmlWebpackPlugin.options.title %>
            chunksSortMode: 'manual',   //
            chunks: ['index'],
            excludeChunks: ['node-modules'],
            hash: true,  //文件名唯一，防止缓存
        ),

        new miniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],

    //配置热更新
    devServer: {
        watchOptions: {
            ignored: /node_modules/,
            host: 'localhost',
            port: 3200,
        }
    }
}

module.exports = config;