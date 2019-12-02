## `FreelogApp.QI.resolveSubDependDataUrl(presentableId, subDependId, entityId)`

- 获取presentable子依赖的数据内容的url；

#### 参数
Object object

| 属性 | 类型 | 必填 | 说明 | 
|--|--|--|--|
| presentableId | String | 是   |  节点发行 ID       |
| subDependId   | String | 是   |  节点发行子依赖 ID |
| entityId      | String | 是   |  节点发行实体 ID   |

#### 返回 - promise
示例
```javascript
// 获取子依赖的url
const [ presentableId, subDependId, entityId ] = [
  '1450feb3e49e365d35fe2486f92ddc5a',
  '5d429d100dbda5002a7b64e1',
  '1450feb3e49e'
]
const url = FreelogApp.QI.resolveSubDependDataUrl(presentableId, subDependId, entityId)

```
