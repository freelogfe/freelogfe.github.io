# 目录结构
在快速开始中，可通过freelog-cli会生成不同的组件开发项目，接下来我们简单了解下其目录约定规范。

`基于普通组件开发模版生产的目录结构`
```bash
.
├── README.md
├── build
│   ├── build.js
│   ├── dev-server.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── package.json
└── src
    ├── app
    │   ├── index.html
    │   ├── index.js
    │   └── index.less
    └── pagebuild.html
```

`基于vue.js的组件开发模版生成的目录结构`
```bash 
.
├── README.md
├── build
│   ├── build.js
│   ├── dev-server.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── package.json
└── src
    ├── app
    │   ├── index.html
    │   ├── index.js
    │   ├── index.less
    │   ├── pages
    │   │   ├── app.vue
    │   │   └── index.vue
    │   └── router.js
    └── pagebuild.html
```

- `'build/**'`：构建文件，包含webpack构建的配置文件

- `'config/**'`：配置文件

- `'src/app/**'`：组件开发源码

- `'src/app/index.html'`：非必要文件，用于书写组件的html

- `'src/app/index.less'`：非必要文件，用于书写组件的css

- `'src/app/index.js'`：必要文件；组件编译入口文件；用于组件逻辑编写

- `'src/pagebuild.html'`：pagebuild容器，外层框架会对pagebuild容器进行解析，因此这里可自定义pagebuild用于本地开发测试。注意此文件仅用于本地开发使用

