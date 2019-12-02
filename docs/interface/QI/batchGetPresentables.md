### `FreelogApp.QI.batchGetPresentables(params)`

根据发行 ID 或发行名称批量查询节点 presentable

#### 参数

Object object

| 属性         | 类型   | 必填 | 说明                              |
| ------------ | ------ | ---- | --------------------------------- |
| releaseIds   | Number | 否   | 发行 ID，多个 ID 以逗号（,）隔开  |
| releaseNames | String | 否   | 发行名称，多个名称以逗号（,）隔开 |

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
// 根据发行名称
FreelogApp.QI.batchGetPresentables({
  releaseNames: ["ww-zh/歌曲-陈绮贞-距离", "ww-zh/歌曲-郑钧-灰姑娘"].join(",")
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
    "dataList": [
      {
        "presentableId": "9cf16950d6344d08f01fd34b1c66359c",
        "presentableName": "陈绮贞-距离",
        "previewImages": [
          "https://image.freelog.com/preview/9261f29b-1711-480b-a4f4-fdb9ae05409b.jpg"
        ],
        "intro": "",
        "isOnline": 1,
        "resourceType": "audio",
        "userDefinedTags": ["new-song"],
        "originInfo": {
          "version": "0.1.0",
          "versions": ["0.1.0"],
          "id": "5da81cce66acb1002b8b7dc0",
          "name": "ww-zh/歌曲-陈绮贞-距离",
          "type": "release"
        },
        "resolveReleases": [],
        "nodeId": 80000050,
        "userId": 50018,
        "updateDate": "2019-11-26T09:58:12.850Z",
        "createDate": "2019-11-26T09:58:12.850Z",
        "releaseInfo": {
          "releaseId": "5da81cce66acb1002b8b7dc0",
          "releaseName": "ww-zh/歌曲-陈绮贞-距离",
          "version": "0.1.0"
        },
        "authResult": {
          "isAuth": true,
          "authCode": 201,
          "data": {},
          "errors": [],
          "freelog-sub-dependencies": "W10=",
          "freelog-entity-nid": "9cf16950d634"
        }
      },
      {
        "presentableId": "b5cdfe9c58890b5f2728369f7b6ba6cd",
        "presentableName": "郑钧-灰姑娘",
        "previewImages": [
          "https://image.freelog.com/preview/0cbd6ff4-d381-4f5b-a39b-e62e9612797f.jpg"
        ],
        "intro": "",
        "isOnline": 1,
        "resourceType": "audio",
        "userDefinedTags": ["new-song"],
        "originInfo": {
          "version": "0.1.0",
          "versions": ["0.1.0"],
          "id": "5db0123876e5c3002bdb52f0",
          "name": "ww-zh/歌曲-郑钧-灰姑娘",
          "type": "release"
        },
        "resolveReleases": [],
        "nodeId": 80000050,
        "userId": 50018,
        "updateDate": "2019-11-26T09:58:12.852Z",
        "createDate": "2019-11-26T09:58:12.852Z",
        "releaseInfo": {
          "releaseId": "5db0123876e5c3002bdb52f0",
          "releaseName": "ww-zh/歌曲-郑钧-灰姑娘",
          "version": "0.1.0"
        },
        "authResult": {
          "isAuth": true,
          "authCode": 201,
          "data": {},
          "errors": [],
          "freelog-sub-dependencies": "W10=",
          "freelog-entity-nid": "b5cdfe9c5889"
        }
      }
    ]
  }
}
```
