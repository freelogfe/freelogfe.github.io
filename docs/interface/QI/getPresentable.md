### `FreelogApp.QI.getPresentable(presentableId)`

获取单个 presentable 的详情

#### 参数

| 属性          | 类型   | 必填 | 说明        |
| ------------- | ------ | ---- | ----------- |
| presentableId | String | 是   | 节点发行 ID |

#### Response Headers 字段  说明

| 属性                     | 类型   | 说明                     |
| ------------------------ | ------ | ------------------------ |
| freelog-entity-nid       | String | presentbale 的实体 ID    |
| freelog-sub-dependencies | String | presentbale 的子依赖信息 |

#### Response 字段  说明

Object object

| 属性            | 类型   | 说明                                                  |
| --------------- | ------ | ----------------------------------------------------- |
| presentableId   | String | 节点发行 ID                                           |
| presentableName | String | 节点资源名称                                          |
| resourceId      | String | 方案对应的资源 ID                                     |
| userId          | Number | 创建方案的用户 ID                                     |
| nodeId          | Number | 节点 ID                                               |
| nodeName        | String | 节点名称                                              |
| policy          | Array  | 节点资源策略组 (示例数据仅做参考)                     |
| createDate      | String | 创建日期                                              |
| userDefinedTags | Array  | 用户定义的 tags                                       |
| -- resourceName | String | 资源名称                                              |
| -- resourceType | String | 资源类型                                              |
| contracts       | Array  | 当前 presentable 关联的执行合同                       |
| isOnline        | Number | 是否上线 0:否 1:是                                    |
| status          | Number | 状态 1:合同已完备 2:存在可用策略 总状态通过或运算获取 |

#### 示例

请求示例

```javascript
FreelogApp.QI.getPresentable("5c1b5d9331d171002c66e6f4").then(res => {
  console.log(res);
});
```

返回数据示例

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
            "users": ["public"]
          }
        ],
        "fsmDescription": [
          {
            "currentState": "<init>"
          }
        ],
        "activatedStates": ["<init>"],
        "initialState": "<init>",
        "terminateState": "terminate",
        "status": 0
      }
    ],
    "userDefinedTags": ["tag1", "tag2"],
    "status": 0
  }
}
```
