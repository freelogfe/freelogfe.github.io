# 快速开始

## 环境准备
- 操作系统： all
- 运行环境
    - 高级现代浏览器
    - [nodejs](https://nodejs.org/en/)
- 运行环境：高级现代浏览器

## 快速初始化
安装[freelog-cli](https://github.com/freelogfe/freelog-cli)，即freelog官方提供的用于开发的命令行工具之一

```sh
$ npm i @freelog/freelog-cli -g
```


用法：
```sh
 # 通过freelog-cli脚手架快速生成项目 
 # 目前有两个模版：freelogfe/freelog-component-template（普通）、freelog-component-vue-template（基于Vue.js）
$ freelog-cli init <template-name> 
```
事例：
```sh
$ freelog-cli init freelogfe/freelog-component-template  # 按提示输入项目信息
$ cd freelog-demo-markdown #当生成项目时，输入的组件名是freelog-demo-markdown
$ npm install 
```

启动项目：
```sh
$ npm run dev
```

p.s.: 如果出现权限问题，请执行``sudo npm run dev``。因为开发服务器默认设置127.0.0.1->local.freelog.com的host映射到本地host配置时，可能存在写入权限问题
