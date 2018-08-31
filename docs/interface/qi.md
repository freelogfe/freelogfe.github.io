# Query Interface

> freelog提供的查询接口，可通过window.QI调用

## `QI.fetch(url[, options])`
对window.fetch的封装，通过QI.fetch进行的所有请求都将进行`参数组装`、`授权`和`请求头部补充`等一系列处理
### Arguments - 可参考[fetch](https://github.com/github/fetch)的参数说明
- **`url`** String 请求的url
- **`options`** Object 

---

## `fetchPresentablesList([, params])`
获取节点的presentable列表
### Arguments 
- **`params`** Object - 非必填
    - **`resourceType`** String - **可选** - 资源类型
    - **`isOnline`** Number - **可选** - 是否上线(0:下线 1:上线 2:全部) 默认上线
    - **`tags`** String - **可选** - 用户创建presentable时设置的自定义标签,多个用","分割

### Response 字段说明
- **`presentableId`** String - 展示方案ID
- **`presentableName`** String - 展示方案名称
- **`resourceId`** String - 方案对应的资源ID
- **`userId`** Number - 创建方案的用户ID
- **`nodeId`** Number - 节点ID
- **`nodeName`** String - 节点名称
- **`policy`** Array - 展示方案策略组 (示例数据仅做参考)
- **`createDate`** String - 创建日期
- **`userDefinedTags`** Array - 用户定义的tags
- **`resourceInfo`** Object - presentable对应的资源基础信息
- **`**resourceName`** String - 资源名称
- **`**resourceType`** String - 资源类型
- **`contracts`** Array - 当前presentable关联的执行合同
- **`isOnline`** Number - 是否上线 0:否 1:是
- **`status`** Number - 状态 1:合同已完备 2:存在可用策略 总状态通过|运算

### 示例
```json
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": [{
        "presentableId": "5b0d1ca255d4055cf84bdb73",
        "presentableName": "presentableName",
        "resourceId": "2900eac4e4c8d96649901ac20a245b7bfa68ba8e",
        "userId": 10026,
        "nodeId": 10015,
        "nodeName": "demo",
        "createDate": "2018-05-29T09:25:54.043Z",
        "updateDate": "2018-05-30T08:10:30.236Z",
        "contracts": [{
            "resourceId": "2900eac4e4c8d96649901ac20a245b7bfa68ba8e",
            "authSchemeId": "5afb9e67f313cc4d88a3f9a1",
            "policySegmentId": "397c06bd49cb3712437890c9cdf8b222",
            "contractId": "5b0e4d772868266bb8055c1f"
        }],
        "policy": [{
            "segmentId": "a68379dd361e74a89a37fce7a8b8d989",
            "policyName": "新的方案1",
            "segmentText": "for public: in <init> : terminate",
            "users": [{
                "userType": "group",
                "users": ["public"]
            }],
            "fsmDescription": [{
                "currentState": "<init>"
            }],
            "activatedStates": ["<init>"],
            "initialState": "<init>",
            "terminateState": "terminate",
            "status": 0
        }],
        "userDefinedTags": ["tag1", "tag2"],
        "resourceInfo": {
            "resourceName": "我的资源",
            "resourceType": "license"
        },
        "status": 0
    }]
}
```

---

## `QI.fetchPresentableInfo(presentableId[, params])`
获取单个presentable的详情
## Arguments 
- **`presentableId`** String - **必选** - 展示策略ID

### Response 字段说明
- **`presentableId`** String - 展示方案ID
- **`presentableName`** String - 展示方案名称
- **`resourceId`** String - 方案对应的资源ID
- **`userId`** Number - 创建方案的用户ID
- **`nodeId`** Number - 节点ID
- **`nodeName`** String - 节点名称
- **`policy`** Array - 展示方案策略组 (示例数据仅做参考)
- **`createDate`** String - 创建日期
- **`userDefinedTags`** Array - 用户定义的tags
- **`resourceInfo`** Object - presentable对应的资源基础信息
- **`**resourceName`** String - 资源名称
- **`**resourceType`** String - 资源类型
- **`contracts`** Array - 当前presentable关联的执行合同
- **`isOnline`** Number - 是否上线 0:否 1:是
- **`status`** Number - 状态 1:合同已完备 2:存在可用策略 总状态通过|运算

### 示例
```json
{
    "ret": 0,
    "errcode": 0,
    "msg": "success",
    "data": {
        "presentableId": "5b0d1ca255d4055cf84bdb73",
        "presentableName": "presentableName",
        "resourceId": "2900eac4e4c8d96649901ac20a245b7bfa68ba8e",
        "userId": 10026,
        "nodeId": 10015,
        "nodeName": "demo",
        "createDate": "2018-05-29T09:25:54.043Z",
        "updateDate": "2018-05-30T08:10:30.236Z",
        "contracts": [
            {
                "resourceId": "2900eac4e4c8d96649901ac20a245b7bfa68ba8e",
                "authSchemeId": "5afb9e67f313cc4d88a3f9a1",
                "policySegmentId": "397c06bd49cb3712437890c9cdf8b222",
                "contractId": "5b0e4d772868266bb8055c1f"
            }
        ],
        "policy": [
            {
                "segmentId": "a68379dd361e74a89a37fce7a8b8d989",
                "policyName": "新的方案1",
                "segmentText": "for public: in <init> : terminate",
                "users": [
                    {
                        "userType": "group",
                        "users": [
                            "public"
                        ]
                    }
                ],
                "fsmDescription": [
                    {
                        "currentState": "<init>"
                    }
                ],
                "activatedStates": [
                    "<init>"
                ],
                "initialState": "<init>",
                "terminateState": "terminate",
                "status": 0
            }
        ],
        "userDefinedTags": [
            "tag1",
            "tag2"
        ],
        "resourceInfo": {
            "resourceName": "我的资源",
            "resourceType": "license"
        },
        "status": 0
    }
}
```

---

## `QI.fetchPresentableResourceData(presentableId[, params])`
获取单个节点资源（presentable映射的资源）的数据内容
## Arguments 
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

## `QI.fetchPresentableResourceInfo(presentableId[, params])`
获取单个节点资源（presentable映射的资源）的详情信息；同时，可通过Response Header获取子资源的ID和token。
## Arguments 
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

## `QI.fetchSubResource(resourceId)`
获取presentable的子资源的数据内容；同时，可通过Response Header获取子资源的ID和token。
## Arguments 
- **`resourceId`** String - **必选** - 资源ID

---

## `QI.requireSubResource(resourceId)`
该方法用于加载js、css资源，将`<Head>`标签插入`<script>`or `<link>`标签
## Arguments 
- **`resourceId`** String - **必选** - 资源ID

## Returns - promise
## 示例
```javascript
QI.requireSubResource('be8c106c8ee0a85b67b95321353d98af92900a59')
    .then(() => {
        // 加载成功
    })
    .catch(e => {
        // 加载失败
    })
```

---

## `QI.resolveResourceUrl(params)`
- 通过presentableId获取presentable数据资源的url；
- 通过resourceId[与presentableId]获取子资源的url；


## Arguments 
- **`params`** Object - **必选** 
    - **`presentableId`** String - **可选** - 展示策略ID
    - **`resourceId`** String - **可选** - 子资源ID

## Returns - promise
## 示例
```javascript
// 获取子资源的url
QI.resolveResourceUrl({ resourceId: 'be8c106c8ee0a85b67b95321353d98af92900a59' })
    .then((url) => {
        // 加载成功
        console.log(url)
    })

// 获取子资源的url
QI.resolveResourceUrl({ presentableId: '5b6d54a1e321dc002caf2f3c', resourceId: 'be8c106c8ee0a85b67b95321353d98af92900a59' })
    .then((url) => {
        // 加载成功
        console.log(url)
    })

// 获取presentable数据资源的url
QI.resolveResourceUrl({ presentableId: '5b6d54a1e321dc002caf2f3c' })
    .then((url) => {
        // 加载成功
        console.log(url)
    })
```
---



