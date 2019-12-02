### `FreelogApp.QI.requireSubDepend(presentableId, subDependId, entityId)`
该方法用于加载js、css资源，将`<Head>`标签插入`<script>`or `<link>`标签

#### 参数

Object object

| 属性          | 类型   | 必填 | 说明               |
| ------------- | ------ | ---- | ------------------ |
| presentableId | String | 是   |  节点发行 ID       |
| subDependId   | String | 是   |  节点发行子依赖 ID |
| entityId      | String | 是   |  节点发行实体 ID   |

#### 返回 - promise
示例
```javascript
const [ presentableId, subDependId, entityId ] = [
  '5db6dac9ab5297001fa15f0a',
  '5d41380c7236940029e0de08',
  '5db6dac9ab52'
]
window.FreelogApp.QI.requireSubDepend(presentableId, subDependId, entityId)
    .then(() => {
      // 加载成功
    })
    .catch((e) => {
      // 加载失败
    })
```
---