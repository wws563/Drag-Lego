// 处理路径
// JS引用方式：
// const path = require('path')
// ESLint报错
//In other words, the use of forms such as var foo = require("foo") are banned. Instead use ES6 style imports or import foo = require("foo") imports.
// 修改config文件类型为ts，修改引用方式如下
import path = require('path')
function resolve(dir){
	return path.join(__dirname,dir)
}

module.exports = { 	
	publicPath: "./",
	resovle :{
		alias: {
		'@': resolve('src')
		}
	},
	chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md$/)
      .use('vue-loader')
				.loader('vue-loader')
				.end()
      .use('vue-markdown-loader')
				.loader('vue-markdown-loader/lib/markdown-compiler')
				.options({
					raw: true
				})
				.end()
  }
}