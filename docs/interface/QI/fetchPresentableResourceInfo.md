## `FreelogApp.QI.fetchPresentableResourceInfo(presentableId[, params])`
获取单个节点资源（presentable映射的资源）的详情信息；同时，可通过Response Header获取子资源的ID和token。
### Arguments 
- **`presentableId`** String - **必选** - 展示策略ID
- **`params`** Object - 非必填
    - **`userContractId`** String - **可选** - 用户有多个合同时明确要执行的合同.默认系统会自动匹配


### Response Headers 字段说明
- **`freelog-sub-resourceIds`** String - presentbale的子资源(没有子资源时不存在该属性)
- **`freelog-sub-resource-auth-token`** String - presentbale的子资源的授权token(没有子资源时不存在该属性)
- **`freelog-resource-type`** String - 资源类型
- **`freelog-meta`** String - 资源meta信息,encodeURIComponent编码过的json字符串
- **`freelog-system-meta`** String - 资源的系统meta,encodeURIComponent编码过的json字符串

---