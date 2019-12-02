### `FreelogApp.QI.pagingGetPresentables(params)`

分页获取节点的 presentable 列表

#### 参数

Object object

| 属性         | 类型   | 必填 | 说明                                                  |
| ------------ | ------ | ---- | ----------------------------------------------------- |
| resourceType | String | 否   | 资源类型                                              |
| isOnline     | Number | 否   | 是否上线(0:下线 1:上线 2:全部) 默认上线               |
| tags         | String | 否   | 用户创建 presentable 时设置的自定义标签,多个用","分割 |
| page         | Number | 否   | 页码(默认为 1)                                        |
| pageSize     | Number | 否   | 每页数量 (默认为 10)                                  |
| keywords     | Number | 否   | 搜索关键字,目前支持模糊搜索节点资源名称和资源名称     |

#### Response 字段  说明

Object object

| 属性            | 类型   | 说明                                                  |
| --------------- | ------ | ----------------------------------------------------- |
| presentableId   | String | 节点资源 ID                                           |
| presentableName | String | 节点资源名称                                          |
| resourceId      | String | 方案对应的资源 ID                                     |
| userId          | Number | 创建方案的用户 ID                                     |
| nodeId          | Number | 节点 ID                                               |
| nodeName        | String | 节点名称                                              |
| policy          | Array  | 节点资源策略组 (示例数据仅做参考)                     |
| createDate      | String | 创建日期                                              |
| userDefinedTags | Array  | 用户定义的 tags                                       |
| contracts       | Array  | 当前 presentable 关联的执行合同                       |
| isOnline        | Number | 是否上线 0:否 1:是                                    |
| status          | Number | 状态 1:合同已完备 2:存在可用策略 总状态通过或运算获取 |

#### 示例

请求示例

```javascript
//默认请求当前节点第一页的资源（每页10条数据）
FreelogApp.QI.pagingGetPresentables().then(res => {
  console.log(res);
});

//请求当前节点资源类型为markdown的节点资源
FreelogApp.QI.pagingGetPresentables({
  resourceType: "markdown"
}).then(res => {
  console.log(res);
});
```

返回示例

```json
{
  "ret": 0,
  "errcode": 0,
  "msg": "success",
  "data": {
    "page": 1,
    "pageSize": 100,
    "totalItem": 2,
    "dataList": [
      {
        "presentableId": "5da43fcf7359ed0022d53afc",
        "userDefinedTags": [],
        "intro": "",
        "previewImages": [
          "https://image.freelog.com/preview/9ce79795-596c-40c9-8c2f-ec06a0ce61b6.jpg"
        ],
        "isOnline": 1,
        "contractStatus": 2,
        "status": 0,
        "presentableName": "Contra",
        "userId": 50018,
        "resolveReleases": [
          {
            "contracts": [
              {
                "contractId": "5da43fcfd431cd002912d898",
                "policyId": "1695c7481f58acefe31c967598000d53"
              }
            ],
            "releaseId": "5d6731f70f7937002bf43ee4",
            "releaseName": "ww-zh/Contra"
          }
        ],
        "policies": [
          {
            "authorizedObjects": [{ "userType": "GROUP", "users": ["PUBLIC"] }],
            "policyName": "免费策略",
            "status": 1,
            "policyText": "for public:\n  initial:\n    active\n    terminate",
            "policyId": "1695c7481f58acefe31c967598000d53"
          }
        ],
        "nodeId": 80000047,
        "releaseInfo": {
          "releaseId": "5d6731f70f7937002bf43ee4",
          "releaseName": "ww-zh/Contra",
          "resourceType": "nes",
          "version": "0.1.0",
          "previewImages": [
            "https://image.freelog.com/preview/9ce79795-596c-40c9-8c2f-ec06a0ce61b6.jpg"
          ],
          "versions": ["0.1.0"]
        },
        "createDate": "2019-10-14T09:28:47.414Z",
        "updateDate": "2019-11-25T07:01:19.586Z",
        "authResult": {
          "isAuth": true,
          "authCode": 201,
          "data": {},
          "errors": [],
          "freelog-sub-dependencies": "W10=",
          "freelog-entity-nid": "5da43fcf7359"
        }
      },
      {
        "presentableId": "5da43fcc7359ed0022d53af9",
        "userDefinedTags": [],
        "intro": "",
        "previewImages": [
          "https://image.freelog.com/preview/e374760c-9dfc-4bc5-96aa-62a33eec9703.jpg"
        ],
        "isOnline": 1,
        "contractStatus": 2,
        "status": 0,
        "presentableName": "Super-Mario-Bros",
        "userId": 50018,
        "resolveReleases": [
          {
            "contracts": [
              {
                "contractId": "5da43fccd431cd002912d895",
                "policyId": "1695c7481f58acefe31c967598000d53"
              }
            ],
            "releaseId": "5d6635600f7937002bf43ece",
            "releaseName": "ww-zh/Super-Mario-Bros"
          }
        ],
        "policies": [
          {
            "authorizedObjects": [{ "userType": "GROUP", "users": ["PUBLIC"] }],
            "policyName": "免费策略",
            "status": 1,
            "policyText": "for public:\n  initial:\n    active\n    terminate",
            "policyId": "1695c7481f58acefe31c967598000d53"
          }
        ],
        "nodeId": 80000047,
        "releaseInfo": {
          "releaseId": "5d6635600f7937002bf43ece",
          "releaseName": "ww-zh/Super-Mario-Bros",
          "resourceType": "nes",
          "version": "0.1.0",
          "previewImages": [
            "https://image.freelog.com/preview/e374760c-9dfc-4bc5-96aa-62a33eec9703.jpg"
          ],
          "versions": ["0.1.0"]
        },
        "createDate": "2019-10-14T09:28:44.724Z",
        "updateDate": "2019-11-25T07:01:19.151Z",
        "authResult": {
          "isAuth": true,
          "authCode": 201,
          "data": {},
          "errors": [],
          "freelog-sub-dependencies": "W10=",
          "freelog-entity-nid": "5da43fcc7359"
        }
      }
    ]
  }
}
```
