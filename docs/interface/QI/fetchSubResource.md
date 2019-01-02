## `FreelogApp.QI.fetchSubResource(resourceId)`
获取presentable的子资源的数据内容；同时，可通过Response Header获取子资源的ID和token。
### Arguments 
- **`resourceId`** String - **必选** - 资源ID


### 示例
请求示例

```javascript
//默认请求当前节点第一页的资源（每页10条数据）
FreelogApp.QI.fetchSubResource()
    .then((res) => {
      //资源文件内容
        console.log(res)
    })
```