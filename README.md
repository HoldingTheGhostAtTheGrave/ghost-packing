### ghost 打包工具是基于 rouulp打包工具思想而开发 

* 打包原理是 rollup 的源码 以及思想  在rollup基础上进行开发
* 声明：只用学习

#### 使用： 全局安装 yarn add global ghost-packing  || npm install ghost-packing -g

* 当前版本 只有打包工能 还有热更新功能 有兴趣可以相互讨论学习
* 配置 ghost.config.js 配置文件
* input 为打包文件的入库
* output.file 为输出文件的名称
* server 开启热更新 如不配置则默认不开启
* server.listeningDir 热更新侦听的文件目录 不传默认为 src目录
* 命令执行：ghost --config 执行配置文件

* npm run dev
```js
// 本地使用 package.json 
"scripts": {
    "dev": "ghost --config"
}
```

```js
export default {
    input: './dome/main.js',
    output: {
        file: "./dist/index.js"
    },
    server: {
        listeningDir: './dome'
    }
}
```

