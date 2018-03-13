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
通用的errcode处理逻辑

```js
var exception = FreeLogApp.ExceptionCode[response.data.errcode]
    var event = exception.action
    App.trigger(event, {
      data: data,
      callback: function (presentable) {
        //关闭弹窗后的回调函数
      }
    });
```