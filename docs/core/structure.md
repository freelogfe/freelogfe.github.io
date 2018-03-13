# 目录结构

```bash
.
├── .editorconfig   # 编辑器缩进设置
├── .gitignore  
├── README.md
├── build   #构建配置文件
│   ├── dev-server.js
│   └── gulpfile.js
├── config  #项目配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── package.json    # scripts和freelogConfig配置
├── src
│   ├── app # main freelog component
│   │   ├── index.css #可选
│   │   ├── index.html
│   │   └── index.js #可选
│   └── pagebuild.html  #本地开发的pagebuild容器
└── test
```


``src/app``
freelog组件的开发目录，对应当前开发中的web component的html文件。

``pagebuild``
pagebuild容器，外层框架会对pagebuild容器进行解析，因此这里可自定义pagebuild用于本地开发测试。注意此文件仅用于本地开发使用


``package.json``
packge.json中新增freelog自定义配置。可通过此配置定义资源类型和资源的meta信息
```json
{
 "freelogConfig": {
    "type": "widget",
    "meta": {}
  }
}
```