# 本地开发

## 启动项目
```sh
$ npm run dev
```

启动后可访问[http://local.freelog.com:9001](http://local.freelog.com:9001)

## 代码开发

### html
输出hello freelog

打开``src/app/index.html`，添加如下代码
```html
  <div class="wrapper">
    <!--your codes here-->
    <p>hello freelog</p>
  </div>
```

在浏览器中打开或刷新 [http://local.freelog.com:9001](http://local.freelog.com:9001)


### js
通过js渲染hello freelog

打开``src/app/index.js`，添加如下代码

```javascript
 class FreelogDemoComponent extends HTMLElement {
   constructor() {
     super()
     let self = this;
     let shadowRoot = self.attachShadow({mode: 'closed'});
     const instance = template.content.cloneNode(true);
 
     self.root = shadowRoot
     self.initStyle()
     shadowRoot.appendChild(instance)
 
    
     self.render()
   }
 
   render() {
      this.root.querySelector('.wrapper').innerHTML = '<p>hello freelog</p>'
   }
   
}
```

在浏览器中打开或刷新 [http://local.freelog.com:9001](http://local.freelog.com:9001)


### css

打开``src/app/index.css`,添加如下代码
```css
 .wrapper p {
  color: #67C23A;
 }
```

在浏览器中打开或刷新 [http://local.freelog.com:9001](http://local.freelog.com:9001)

