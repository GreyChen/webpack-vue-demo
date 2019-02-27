//path: 一个 Node.js 核心模块，用于操作文件路径。
const path = require('path')

module.exports = {
    // 入口起点(entry point) 指示 webpack 应该使用哪个模块， 来作为构建其内部依赖图的开始。 进入入口起点后， webpack 会找出有哪些模块和库是入口起点（ 直接和间接） 依赖的。  每个依赖项随即被处理， 最后输出到称之为 bundles 的文件中，  
    entry: './src/index.js',

    // output 属性告诉 webpack 在哪里输出它所创建的 bundles， 以及如何命名这些文件， 默认值为./dist。
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}