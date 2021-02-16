# webpack-test

本测试demo目的是编写一个简易的webpack，实现模块化打包功能

##### 目录结构：
![image](https://github.com/Eumenides-cc/webpack-test/blob/main/images/image-0.png)

打包的js文件： lib/index.js

demo打包的主入口： bin/init

路径的一些配置： webpack.config.js

需打包的代码文件： demo/src

打包后的文件： demo/dist

package.json中配置了bin命令，方便执行打包命令

![image](https://github.com/Eumenides-cc/webpack-test/blob/main/images/image-3.png)

##### 主要代码：
![image](https://github.com/Eumenides-cc/webpack-test/blob/main/images/image-1.png)

##### 效果
![image](https://github.com/Eumenides-cc/webpack-test/blob/main/images/image-2.png)

#### usage
npm install -g
webpack
node demo/dist/index.js

测试demo参考文章：https://juejin.cn/post/6844903617971879949
