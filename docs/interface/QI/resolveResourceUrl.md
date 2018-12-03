## `FreelogApp.QI.resolveResourceUrl(params)`
- 通过presentableId获取presentable数据资源的url；
- 通过resourceId[与presentableId]获取子资源的url；


### Arguments 
- **`params`** Object - **必选** 
    - **`presentableId`** String - **可选** - 展示策略ID
    - **`resourceId`** String - **可选** - 子资源ID

### Returns - promise
### 示例
```javascript
// 获取子资源的url
FreelogApp.QI.resolveResourceUrl({ resourceId: 'be8c106c8ee0a85b67b95321353d98af92900a59' })
    .then((url) => {
        // 加载成功
        console.log(url)
    })

// 获取子资源的url
FreelogApp.QI.resolveResourceUrl({ presentableId: '5b6d54a1e321dc002caf2f3c', resourceId: 'be8c106c8ee0a85b67b95321353d98af92900a59' })
    .then((url) => {
        // 加载成功
        console.log(url)
    })

// 获取presentable数据资源的url
FreelogApp.QI.resolveResourceUrl({ presentableId: '5b6d54a1e321dc002caf2f3c' })
    .then((url) => {
        // 加载成功
        console.log(url)
    })
```
---