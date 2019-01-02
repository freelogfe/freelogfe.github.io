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
 # 目前有两个模版：
 #   1. normal（可选择是否使用shadow dom）、
 #   2. vue（基于Vue.js、不支持使用shadow dom）
$ freelog-cli init 
```
事例：
```sh
$ freelog-cli init freelogfe/freelog-component-template  # 按提示输入项目信息
$ cd freelog-demo-markdown #当生成项目时，输入的组件名是freelog-demo-markdown
$ npm install 
```


