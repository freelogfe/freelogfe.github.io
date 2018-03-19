# APP UI实例
FreeLogApp实例挂载到window上，可通过window.FreeLogApp访问

## EventCode
事件代码对应APP实例的方法，所以可通过触发事件执行对应的方法

事件代码列表

| eventCode| 描述|
|---| ---|
|invalidresponse| errcode不为0的响应处理|
|showSystemDialog | 展示合同管理弹窗|
|showToolBar| 展示工具栏|
|loginHandler| 跳去登录|
|reportHandler| 上报数据|

### usage
通过触发事件可调用FreeLogApp的方法，调用方式如下

```js
window.FreeLogApp.trigger(eventCode, options)
```


``options``参数包括

**data** : 请求返回的整个响应数据

**callback**: 授权弹窗关闭时的回调函数

## ExceptionCode
通过查询异常代码可获取对应的异常处理函数和错误提示灯。

响应返回错误码对应列表


|异常码| 异常描述|异常处理策略| 异常展示提示|
|---|---| ---|---|
|70080000|未知异常|reportHandler|我要上报
|70080101|未找到用户合同|errorResponseHandler|去创建合同
|70080102|选择需要执行的合同.一般有两个或两个以上的时候需要用户选择具体执行哪个|errorResponseHandler|去选择合同
|70080103|参数userContractId错误,找不到有效的合同|errorResponseHandler|数据错误
|70080104|用户的合同未激活|errorResponseHandler|去激活合同
|70080105|用户合同授权异常|errorResponseHandler|去查看合同状态
|70080201|未找到节点与资源的合同信息|notifyNodeHandler|去通知节点
|70080202|节点的合同未激活|notifyNodeHandler|去通知节点
|70080203|节点合同授权异常|notifyNodeHandler|去通知节点
|70080301|未登陆用户|loginHandler|去登录
|70080302|个人身份授权不通过|errorResponseHandler|查看详情
|70080303|用户分组策认证不通过|errorResponseHandler|去查看用户分组策略
|70080304|未找到节点信息|reportHandler|我要上报
|70080305|资源策略拒绝|errorResponseHandler|查看策略
|70080306|presentable策略拒绝|errorResponseHandler|查看策略
|70080307|身份认证失败|loginHandler|去登录

### usage
以下仅列出使用范例，widget可自行根据自身的交互和视觉效果实现具体的调用。

#### js直接调用
请求回来异常，自动触发授权弹窗，让用户执行授权流程相关的操作

```js
//response是后端返回的整个响应数据
var exception = FreeLogApp.ExceptionCode[response.data.errcode];
var event = (exception && exception.action) || App.EventCode.invalidResponse;
App.trigger(event, {
  data: response,
  callback: function (presentable) {
    //关闭弹窗后的回调函数
  }
});
```


#### 通过用户交互触发
在widget界面上给用户展示具体的错误信息，待用户执行对应操作后，根据操作进行反馈。

```html
<template>
  <link rel="stylesheet" href="//static.freelog.com/pagebuild/static/css/reset.css">
  <link rel="stylesheet" href="./index.css">
  <div class="wrapper js-wrapper"></div>
</template>

<script>
class Markdownviewer extends HTMLElement {
  constructor() {
    super()
    let self = this;
    let shadowRoot = self.attachShadow({mode: 'closed'});
    const instance = template.content.cloneNode(true);

    self.root = shadowRoot
    shadowRoot.appendChild(instance)
    self.loadData()
      .then(function (dataList) {
        self.dataList = dataList
        self.render()
        self.bindEvent()
      })
      .catch(function (err) {
        console.warn(err)
      })
  }

  render() {
    var self = this;
    var html = ''

    this.dataList.forEach(function (data, index) {
      if (typeof data === 'string') {
        html += self.renderMarkdown(data, index)
      } else {
        html += self.renderUnauthView(data, index)
      }
    })

    var $wrapper = this.root.querySelector('.js-wrapper')
    $wrapper.innerHTML = html
  }

  renderMarkdown(data, index) {
    //render markdown

    return ''
  }

  renderUnauthView(data, index) {
    var App = window.FreeLogApp
    var errInfo = App.ExceptionCode[data.errcode] || {}; //可通过errcode从ExceptionCode获取具体异常的解释和异常执行的action
    var html = `<div class="js-view-${index}">
                  <span class="error-tip">${errInfo.desc}</span>
                  <button class="action-btn js-to-do" data-index="${index}">${errInfo.tip}</button>
                </div>`

    return html
  }

  loadData() {
    var self = this;
    //获取tag包含show的markdown列表
    return window.QI.fetch(`/v1/presentables?nodeId=${window.__auth_info__.__auth_node_id__}&resourceType=markdown&tags=show`).then(function (res) {
      return res.json()
    }).then(function (data) {
      self.presentableList = data.data || [];
      //获取所有markdown的具体数据文件
      var promises = self.presentableList.map(function (resource) {
        return window.QI.fetchPresentable(resource.presentableId + '.data')
      });
      return Promise.all(promises)
    }).then(function (values) {
      var result = []

      values.forEach(function (res) {
        //判断是否已授权
        var isAuth = !!res.headers.get('freelog-contract-id')

        //根据是否授权提取数据
        isAuth ? result.push(res.text()) : result.push(res.json());
      })

      return Promise.all(result)
    })
  }

  bindEvent() {
    var self = this;
    this.root.querySelector('.js-wrapper').addEventListener('click', function (ev) {
      if (ev.target.classList.contains('js-to-do')) {
        errorHandler(ev)
      }
    }, false);

    function errorHandler(ev) {
      var target = ev.target;
      var index = target.dataset.index;
      var App = window.FreeLogApp
      var data = self.dataList[index]
      var exception = App.ExceptionCode[data.errcode]  //获取errcode对应的异常处理信息
      var event = exception.action || App.EventCode.invalidResponse //异常事件名
      App.trigger(event, {
        data: data,
        callback: function (presentable) {
          //弹窗关闭后的回调函数，widget可根据presentable最新的状态重新渲染内容
        }
      });
    }
  }
}

window.customElements.define('alpha-markdownviewer', Markdownviewer);
</script>
```

