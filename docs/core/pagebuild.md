# page build
> 节点页面的渲染容器

## 介绍
pagebuild作为节点页面的渲染容器，经过freelog pagebuild解析器解析，然后渲染成最终展示给用户的节点页面。


## 用途
针对pagebuild，可以使用html，css标准化的前端技术加入任何想展示给用户的内容。

本地开发时，``src/pagebuild.html``文件作为本地模拟pagebuild的节点页面描述文件，开发者可根据想达到的效果自行定义页面样式。

例如
```html
<!--src/pagebuild.html-->
<freelog-alpha-reveal class="js-wc-widget" style="color:blue;"> </freelog-alpha-reveal>
```