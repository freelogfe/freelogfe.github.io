### `FreelogApp.QI.fetchPresentableResourceInfo(presentableId[, params])`
获取单个节点资源的详情信息(包含资源的授权状态)；同时，可通过Response Header获取子资源的ID和token。
#### 参数
Object object

| 属性 | 类型 | 必填 | 说明 | 
|--|--|--|--|
| presentableId | String | 是 | 节点资源ID | 
| userContractId | String | 否 | 用户有多个合同时明确要执行的合同.默认系统会自动匹配 


#### Response Headers 字段说明

|属性|类型|说明| 
|--|--|--|
| freelog-sub-resourceIds | String | presentbale的子资源(没有子资源时不存在该属性) |
| freelog-sub-resource-auth-token | String | presentbale的子资源的授权token(没有子资源时不存在该属性) |
| freelog-resource-type | String | 资源类型 |
| freelog-meta | String | 资源meta信息,encodeURIComponent编码过的json字符串 |
| freelog-system-meta | String | 资源的系统meta,encodeURIComponent编码过的json字符串 |



#### 示例

请求示例
```javascript
FreelogApp.QI.fetchPresentableResourceInfo('5c1b5d9331d171002c66e6f4')
    .then((res) => {
        // res即为presentable详情
        console.log(res)
    })
```