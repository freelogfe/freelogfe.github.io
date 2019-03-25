## Query Interface

> freelog提供的查询接口，可通过window.FreelogApp.QI调用

### `FreelogApp.QI.fetch(url[, options])`
对window.fetch的封装，通过QI.fetch进行的所有请求都将进行`参数组装`、`授权`和`请求头部补充`等一系列处理
#### 参数 - 可参考[fetch](https://github.com/github/fetch)的参数说明

| 属性 | 类型 | 必填 | 说明 | 
|--|--|--|--|
| url | String | 是 | 请求url |
| options | Object | 否 | - |


#### 示例
```javascript
// 获取presentable详情
FreelogApp.QI.fetch(`/v1/presentables/${presentableId}`)
    .then((res) => {
        console.log(res)
    })
```
---

