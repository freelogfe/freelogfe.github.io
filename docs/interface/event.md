
# Freelog事件

## window.FreelogApp.eventNames
Freelog官方提供的事件枚举属性；包括如下事件

| 事件名称 | 事件参数 | 事件说明 | 
| -- | -- | -- |
| HANDLE_INVALID_RESPONSE | { response }, callback | 处理errcode不等于0的响应结果 |
| HANDLE_INVALID_AUTH | { response }, callback  | 处理授权不通过的响应结果 |
| SHOW_SIGN_DIALOG | { presentableList, callback  } | 唤起资源签约弹窗 |
| GO_TO_LOGIN | {}, callback  | 触发后：跳转登陆页面 |
| NOTIFY_NODE | { msg }, callback  | 通知节点 |
| REPORT_ERROR | { error }, callback  | 上报错误 |

## 事件触发函数：window.FreelogApp.trigger(eventName[, options][, callback])

### `事例1: 请求presentable资源数据详情时，errocde不等于0`

```javascript
Freeelog.QI.fetchPresentableResourceData('5b5827622d800900294ab2cf')
  .then(res => {
    if(res.errcode == 0){
      // do something
    }else{
      var eventName = FreelogApp.eventNames['HANDLE_INVALID_RESPONSE']
      FreelogApp.trigger(eventName, { response: res }, function (){
        // event done
      })
    }
  })
```

### `事例2: 唤起资源签约弹窗`

```javascript
// 单个资源签约
FreelogApp.QI.fetchPresentableInfo('5b5827622d800900294ab2cf')
  .then(res => {
    if(res.errcode == 0){

      FreelogApp.trigger(
        FreelogApp.eventNames['SHOW_SIGN_DIALOG'], 
        { presentableList: [res] }, 
        function (){
          // event done
        }
      )
    }
  })

// 列表显示：多个资源签约
FreelogApp.QI.fetchPresentablesList()
  .then(res => {
    if(res.errcode == 0){
      FreelogApp.trigger(
        FreelogApp.eventNames['SHOW_SIGN_DIALOG'], 
        { presentableList: res.data }, 
        function (){
          // event done
        }
      )
    }
  })
```

### `事例3: 跳转登陆页面 `

```javascript
FreelogApp.trigger(FreelogApp.eventNames['GO_TO_LOGIN'])
```








