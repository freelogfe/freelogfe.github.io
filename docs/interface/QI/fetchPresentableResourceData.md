### `FreelogApp.QI.fetchPresentableResourceData(presentableId[, params])`
获取单个节点资源的数据内容；若资源授权未通过，则获取不成功。
#### 参数
Object object

| 属性 | 类型 | 必填 | 说明 | 
|--|--|--|--|
| presentableId | String | 是 | 节点资源ID | 
| userContractId | String | 否 | 用户有多个合同时明确要执行的合同.默认系统会自动匹配 | 



#### 示例

请求示例
```javascript
// 如获取节点中（presentableId为5c1b5d9331d171002c66e6f4）的json资源的数据内容
FreelogApp.QI.fetchPresentableResourceData('5c1b5d9331d171002c66e6f4')
    .then((res) => {
      // res则是JSON资源字符串
    })
```