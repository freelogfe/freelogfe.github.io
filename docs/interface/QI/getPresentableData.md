### `FreelogApp.QI.getPresentableData(presentableId)`

获取单个节点发行的数据内容；若资源授权未通过，则获取不成功。

#### 参数

Object object

| 属性          | 类型   | 必填 | 说明        |
| ------------- | ------ | ---- | ----------- |
| presentableId | String | 是   | 节点资源 ID |

#### Response Headers 字段  说明

| 属性                     | 类型   | 说明                         |
| ------------------------ | ------ | ---------------------------- |
| freelog-entity-nid       | String | presentbale 的实体 ID        |
| freelog-sub-dependencies | String | presentbale 的子依赖信息     |
| freelog-resource-type    | String | presentbale 的资源类型       |
| freelog-meta             | String | presentbale 的资源 meta 信息 |

#### 示例

请求示例

```javascript
// 如获取节点中（presentableId为5c1b5d9331d171002c66e6f4）的json资源的数据内容
FreelogApp.QI.getPresentableData("5c1b5d9331d171002c66e6f4").then(res => {
  // res则是JSON资源字符串
});
```
