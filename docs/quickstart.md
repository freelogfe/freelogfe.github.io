# 快速开始

## 环境准备
- 操作系统： all
- 运行环境
    - 高级现代浏览器
    - [nodejs](https://nodejs.org/en/)

## 安装
安装freelog-cli，[freelog-cli](https://github.com/freelogfe/freelog-cli)有freelog提供的用于开发的命令行工具集

```sh
$ npm i @freelog/freelog-cli -g
```

## 快速初始化
推荐使用脚手架快速生成项目，脚手架生成的项目提供开发freelog组件开发环境。

```sh
$ freelog-cli init  #通过脚手架快速生成项目 
$ cd freelog-demo-markdown #加入生成项目时输入的组件名是freelog-demo-markdown
$ npm install 
```

### 启动项目
```sh
$ npm run dev
```

p.s.: 如果出现权限问题，请执行``sudo npm run dev``。因为开发服务器默认设置127.0.0.1->local.freelog.com的host映射到本地host配置时，可能存在写入权限问题

启动后可访问[http://local.freelog.com:9001](http://local.freelog.com:9001)

## 开发

试试输出hello freelog

打开``src/app/index.html`,如下修改代码
```html
  <div class="wrapper">
    <!--your codes here-->
    hello freelog
  </div>
```
在浏览器中打开或刷新 [http://local.freelog.com:9001](http://local.freelog.com:9001)
