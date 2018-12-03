# 本地开发
组件代码开发，基于[web component](https://developers.google.com/web/fundamentals/web-components/?hl=zh-cn)两大重要标准——[Custom Elements V1](https://developers.google.com/web/fundamentals/web-components/customelements?hl=zh-cn)和[Shadow Dom V1](https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn)

## 构建项目
使用npm工具freelog-cli可快速构建Freelog组件开发项目，可参考章节——[快速开始](../quickstart.md)

## 启动项目
```sh
$ npm run dev
```

启动后，可访问[http://local.freelog.com:9180](http://local.freelog.com:9180)

## 代码开发

### 编写html
html将渲染到shadow dom中，再挂载到页面上，所以无法从document.body直接querySelector找到widget的dom内容。

尝试输出点东西，打开`src/app/index.html`，添加如下代码
```html
  <div class="wrapper">
    <!--your codes here-->
    <p>hello freelog</p>
  </div>
```


### 编写js
通过js渲染hello freelog

打开`src/app/index.js`，添加如下代码

```javascript
import style from './index.less'        // 引入less，webpack会将编译成css

var html = require('./index.html')      // 获取html内容

class FreelogMemerenderWwzh extends HTMLElement {
  constructor() {
    super()
    let self = this
    let shadowRoot = self.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = html         // 将html插入ShadowDom   
    self.root = shadowRoot
    style.use()                         // 快速初始化时，'enable shadow dom'选择yes后，style会插入ShadowDom，从而css只会在shadowDom内部生效
  }

  connectedCallback (){                 // 组件挂载成功后，执行回调；可在这里书写组件逻辑
    this.root.querySelector('.wrapper p').innerHTML = 'hello meme renderer!'
  }
}

customElements.define('freelog-memerender-wwzh', FreelogMemerenderWwzh)                // 定义一个 自定义标签
```

在浏览器中打开或刷新 [http://local.freelog.com:9180](http://local.freelog.com:9180)


### css

打开或创建`src/app/index.css`，添加如下代码
```css
.wrapper p {
  color: #67C23A;
}
```

在浏览器中打开或刷新 [http://local.freelog.com:9180](http://local.freelog.com:9180)

