# 发布

## 构建
对``src/app/index.html``进行构建打包，如果index.html引用本地资源文件(css,js)，会将这些资源内联到index.html中，仅生成一个html。因为最后使用是通过web component的import加载组件。

在项目根目录下执行
```sh
$ npm run build
```


## 发布
在项目根目录下执行
```sh
$ freelog-cli publish
```

根据提示进行输入。账户第一次输入后会保存登录态，过期后需重新登录。