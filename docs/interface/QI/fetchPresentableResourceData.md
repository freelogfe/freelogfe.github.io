## `FreelogApp.QI.fetchPresentableResourceData(presentableId[, params])`
获取单个节点资源（presentable映射的资源）的数据内容
### Arguments 
- **`presentableId`** String - **必选** - 节点资源ID
- **`params`** Object - 非必填
    - **`userContractId`** String - **可选** - 用户有多个合同时明确要执行的合同.默认系统会自动匹配


### Response Headers 字段说明
- **`freelog-sub-resourceIds`** String - presentbale的子资源(没有子资源时不存在该属性)
- **`freelog-sub-resource-auth-token`** String - presentbale的子资源的授权token(没有子资源时不存在该属性)
- **`freelog-resource-type`** String - 资源类型
- **`freelog-meta`** String - 资源meta信息,encodeURIComponent编码过的json字符串
- **`freelog-system-meta`** String - 资源的系统meta,encodeURIComponent编码过的json字符串


### 示例

请求示例
```javascript
FreelogApp.QI.fetchPresentableResourceData('5c1b5d9331d171002c66e6f4')
    .then((res) => {
        console.log(res)
    })
```