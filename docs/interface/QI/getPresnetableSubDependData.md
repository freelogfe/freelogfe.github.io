### `FreelogApp.QI.getPresnetableSubDependData(presentableId, subDependId, entityId)`

获取 presentable 的子资源的数据内容；

#### 参数

Object object

| 属性          | 类型   | 必填 | 说明               |
| ------------- | ------ | ---- | ------------------ |
| presentableId | String | 是   |  节点发行 ID       |
| subDependId   | String | 是   |  节点发行子依赖 ID |
| entityId      | String | 是   |  节点发行实体 ID   |

#### 示例

请求示例

```javascript
const [ presentableId, subDependId, entityId ] = [
  '1450feb3e49e365d35fe2486f92ddc5a',
  '5d429d100dbda5002a7b64e1',
  '1450feb3e49e'
]
FreelogApp.QI.getPresnetableSubDependData(presentableId, subDependId, entityId).then(response => {
  // do something
});
```
