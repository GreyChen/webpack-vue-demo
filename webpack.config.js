//path: 一个 Node.js 核心模块，用于操作文件路径。
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    // 入口起点(entry point) 指示 webpack 应该使用哪个模块， 来作为构建其内部依赖图的开始。 进入入口起点后， webpack 会找出有哪些模块和库是入口起点（ 直接和间接） 依赖的。  每个依赖项随即被处理， 最后输出到称之为 bundles 的文件中，  
    // entry: './src/index.js',
    entry: {
        // app: './src/index.js',
        // print: './src/print.js'
        app: ['webpack-hot-middleware/client.js', './src/index.js']
        // app: './src/index.js'
    },
    devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    //     hot: true,
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] 
            } 
        ] 
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    // output 属性告诉 webpack 在哪里输出它所创建的 bundles， 以及如何命名这些文件， 默认值为./dist。
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
     
}