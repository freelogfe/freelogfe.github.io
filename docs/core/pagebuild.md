# Pagebuild

HTML片段，Freelog资源之一（即类型为pagebuild的资源），是节点页面的渲染容器，其经过Freelog平台提供的pagebuild解析器解析，渲染成最终展示给用户的节点页面。


## 用途
1. 运用html、css等标准化的web前端技术编写任何想展示给用户的内容；

2. 可引用freelog官方资源市场提供的widget资源；

3. 本地开发时，`src/pagebuild.html`文件作为本地模拟pagebuild的节点页面描述文件，开发者可根据想达到的效果自行定义页面样式。

## 事例
```html
<!--src/pagebuild.html-->
<div>
  <h2>hello freelog！！！！</h2>
</div>
<freelog-alpha-reveal 
  class="js-wc-widget" 
  style="color:blue;"> 
 </freelog-alpha-reveal>
```