# 发布

## 构建
对`'src/app/index.js'`进行webpack构建，打包生成一个js文件；最后，pagebuild将通过创建script标签来加载组件。

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