## `FreelogApp.QI.fetchPresentablesList(params)`
分页获取节点的presentable列表

### Arguments 
- **`params`** Object - 可选
    - **`resourceType`** String - **可选** - 资源类型
    - **`isOnline`** Number - **可选** - 是否上线(0:下线 1:上线 2:全部) 默认上线
    - **`tags`** String - **可选** - 用户创建presentable时设置的自定义标签,多个用","分割
    - **`page`** Number - **可选** - 页码(默认为1)
    - **`pageSize`** Number - **可选** - 每页数量 (默认为10)
    - **`keywords`** Number - **可选** - 搜索关键字,目前支持模糊搜索节点资源名称和资源名称

### Response 字段说明
- **`presentableId`** String - 节点资源ID
- **`presentableName`** String - 节点资源名称
- **`resourceId`** String - 方案对应的资源ID
- **`userId`** Number - 创建方案的用户ID
- **`nodeId`** Number - 节点ID
- **`nodeName`** String - 节点名称
- **`policy`** Array - 节点资源策略组 (示例数据仅做参考)
- **`createDate`** String - 创建日期
- **`userDefinedTags`** Array - 用户定义的tags
- **`resourceInfo`** Object - presentable对应的资源基础信息
- **`**resourceName`** String - 资源名称
- **`**resourceType`** String - 资源类型
- **`contracts`** Array - 当前presentable关联的执行合同
- **`isOnline`** Number - 是否上线 0:否 1:是
- **`status`** Number - 状态 1:合同已完备 2:存在可用策略 总状态通过|运算

### 示例
请求示例

```javascript
//默认请求当前节点第一页的资源（每页10条数据）
FreelogApp.QI.fetchPresentablesList()
    .then((res) => {
        console.log(res)
    })
    
//请求当前节点资源类型为markdown的节点资源
FreelogApp.QI.fetchPresentablesList({
  resourceType: 'markdown'
})
    .then((res) => {
        console.log(res)
    })
    

```


返回示例

```json
{
  "ret": 0,
  "errcode": 0,
  "msg": "success",
  "data": {
    "page": 1,
    "pageSize": 10,
    "totalItem": 31,
    "dataList": [
      {
        "presentableId": "5c1b5d9331d171002c66e6f4",
        "resourceInfo": {
          "userId": 50001,
          "userName": "资源作者",
          "resourceName": "image-14",
          "resourceType": "image",
          "meta": {},
          "purpose": 3,
          "previewImages": [],
          "createDate": "2018-12-20T03:09:50.000Z",
          "updateDate": "2018-12-20T01:34:06.000Z"
        },
        "presentableName": "image-14",
        "policy": [
          {
            "segmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "policyName": "未命名策略",
            "status": 1,
            "authorizedObjects": [
              {
                "userType": "GROUP",
                "users": [
                  "PUBLIC"
                ]
              }
            ],
            "policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
            "fsmStates": {
              "initial": {
                "authorization": [
                  "active",
                  "recontractable",
                  "presentable"
                ],
                "transition": {
                  "terminate": null
                }
              }
            }
          }
        ],
        "masterContractId": "5c1b5f693c6de3002904f25b",
        "userDefinedTags": [],
        "presentableIntro": "",
        "isOnline": 1,
        "status": 7,
        "nodeId": 80000002,
        "resourceId": "1da34892e22ea88f4beeb8c9751a6ce3e0db39db",
        "userId": 50002,
        "nodeName": "images",
        "contracts": [
          {
            "resourceId": "1da34892e22ea88f4beeb8c9751a6ce3e0db39db",
            "authSchemeId": "5c1b0cf91325fa0029ca83ba",
            "policySegmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "contractId": "5c1b5f693c6de3002904f25b"
          }
        ],
        "createDate": "2018-12-20T09:14:59.508Z",
        "updateDate": "2018-12-20T09:34:24.993Z"
      },
      {
        "presentableId": "5c1b5da031d171002c66e6f8",
        "resourceInfo": {
          "userId": 50001,
          "userName": "资源作者",
          "resourceName": "image-11",
          "resourceType": "image",
          "meta": {},
          "purpose": 3,
          "previewImages": [],
          "createDate": "2018-12-20T03:09:51.000Z",
          "updateDate": "2018-12-20T19:07:05.000Z"
        },
        "presentableName": "image-11",
        "policy": [
          {
            "segmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "policyName": "未命名策略",
            "status": 1,
            "authorizedObjects": [
              {
                "userType": "GROUP",
                "users": [
                  "PUBLIC"
                ]
              }
            ],
            "policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
            "fsmStates": {
              "initial": {
                "authorization": [
                  "active",
                  "recontractable",
                  "presentable"
                ],
                "transition": {
                  "terminate": null
                }
              }
            }
          }
        ],
        "masterContractId": "5c1b5f6d3c6de3002904f25e",
        "userDefinedTags": [],
        "presentableIntro": "",
        "isOnline": 1,
        "status": 7,
        "nodeId": 80000002,
        "resourceId": "1ee647cf1f5c63e8779ae6cc15b349a849e36c97",
        "userId": 50002,
        "nodeName": "images",
        "contracts": [
          {
            "resourceId": "1ee647cf1f5c63e8779ae6cc15b349a849e36c97",
            "authSchemeId": "5c1b08791325fa0029ca83af",
            "policySegmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "contractId": "5c1b5f6d3c6de3002904f25e"
          }
        ],
        "createDate": "2018-12-20T09:15:12.174Z",
        "updateDate": "2018-12-21T08:09:36.540Z"
      },
      {
        "presentableId": "5c1b5d9c31d171002c66e6f7",
        "resourceInfo": {
          "userId": 50001,
          "userName": "资源作者",
          "resourceName": "image-9",
          "resourceType": "image",
          "meta": {},
          "purpose": 3,
          "previewImages": [],
          "createDate": "2018-12-20T03:16:35.000Z",
          "updateDate": "2018-12-20T19:07:06.000Z"
        },
        "presentableName": "image-9",
        "policy": [
          {
            "segmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "policyName": "未命名策略",
            "status": 1,
            "authorizedObjects": [
              {
                "userType": "GROUP",
                "users": [
                  "PUBLIC"
                ]
              }
            ],
            "policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
            "fsmStates": {
              "initial": {
                "authorization": [
                  "active",
                  "recontractable",
                  "presentable"
                ],
                "transition": {
                  "terminate": null
                }
              }
            }
          }
        ],
        "masterContractId": "5c1b5f713c6de3002904f261",
        "userDefinedTags": [],
        "presentableIntro": "",
        "isOnline": 1,
        "status": 7,
        "nodeId": 80000002,
        "resourceId": "26ba0c84d2cdc10a7b744a76a1868e8b999ef5c4",
        "userId": 50002,
        "nodeName": "images",
        "contracts": [
          {
            "resourceId": "26ba0c84d2cdc10a7b744a76a1868e8b999ef5c4",
            "authSchemeId": "5c1b0cd71325fa0029ca83b4",
            "policySegmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "contractId": "5c1b5f713c6de3002904f261"
          }
        ],
        "createDate": "2018-12-20T09:15:08.247Z",
        "updateDate": "2018-12-21T08:09:37.423Z"
      },
      {
        "presentableId": "5c1b0e1131d171002c66e6e4",
        "resourceInfo": {
          "userId": 50001,
          "userName": "资源作者",
          "resourceName": "image-17",
          "resourceType": "image",
          "meta": {},
          "purpose": 3,
          "previewImages": [],
          "createDate": "2018-12-20T03:09:49.000Z",
          "updateDate": "2018-12-20T19:07:07.000Z"
        },
        "presentableName": "image-17",
        "policy": [
          {
            "segmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "policyName": "未命名策略",
            "status": 1,
            "authorizedObjects": [
              {
                "userType": "GROUP",
                "users": [
                  "PUBLIC"
                ]
              }
            ],
            "policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
            "fsmStates": {
              "initial": {
                "authorization": [
                  "active",
                  "recontractable",
                  "presentable"
                ],
                "transition": {
                  "terminate": null
                }
              }
            }
          }
        ],
        "masterContractId": "5c1b5dcf3c6de3002904f20a",
        "userDefinedTags": [],
        "presentableIntro": "",
        "isOnline": 1,
        "status": 7,
        "nodeId": 80000002,
        "resourceId": "2b4394ad3a4beb04de3498b0cde7cc59f80ec99b",
        "userId": 50002,
        "nodeName": "images",
        "contracts": [
          {
            "resourceId": "2b4394ad3a4beb04de3498b0cde7cc59f80ec99b",
            "authSchemeId": "5c1b0d1d1325fa0029ca83c0",
            "policySegmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "contractId": "5c1b5dcf3c6de3002904f20a"
          }
        ],
        "createDate": "2018-12-20T03:35:45.564Z",
        "updateDate": "2018-12-21T07:46:27.062Z"
      },
      {
        "presentableId": "5c1b5da231d171002c66e6f9",
        "resourceInfo": {
          "userId": 50001,
          "userName": "资源作者",
          "resourceName": "image-1",
          "resourceType": "image",
          "meta": {},
          "purpose": 3,
          "previewImages": [],
          "createDate": "2018-12-20T03:10:14.000Z",
          "updateDate": "2018-12-20T19:07:08.000Z"
        },
        "presentableName": "image-1",
        "policy": [
          {
            "segmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "policyName": "未命名策略",
            "status": 1,
            "authorizedObjects": [
              {
                "userType": "GROUP",
                "users": [
                  "PUBLIC"
                ]
              }
            ],
            "policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
            "fsmStates": {
              "initial": {
                "authorization": [
                  "active",
                  "recontractable",
                  "presentable"
                ],
                "transition": {
                  "terminate": null
                }
              }
            }
          }
        ],
        "masterContractId": "5c1b5ddb3c6de3002904f20d",
        "userDefinedTags": [],
        "presentableIntro": "",
        "isOnline": 1,
        "status": 7,
        "nodeId": 80000002,
        "resourceId": "350c46befb41b837b5bb4391b3743936012577ae",
        "userId": 50002,
        "nodeName": "images",
        "contracts": [
          {
            "resourceId": "350c46befb41b837b5bb4391b3743936012577ae",
            "authSchemeId": "5c1b084e1325fa0029ca83ad",
            "policySegmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "contractId": "5c1b5ddb3c6de3002904f20d"
          }
        ],
        "createDate": "2018-12-20T09:15:14.909Z",
        "updateDate": "2018-12-21T07:46:27.621Z"
      },
      {
        "presentableId": "5c1b0e0f31d171002c66e6e3",
        "resourceInfo": {
          "userId": 50001,
          "userName": "资源作者",
          "resourceName": "image-2",
          "resourceType": "image",
          "meta": {},
          "purpose": 3,
          "previewImages": [],
          "createDate": "2018-12-20T03:09:49.000Z",
          "updateDate": "2018-12-20T19:07:09.000Z"
        },
        "presentableName": "image-2",
        "policy": [
          {
            "segmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "policyName": "未命名策略",
            "status": 1,
            "authorizedObjects": [
              {
                "userType": "GROUP",
                "users": [
                  "PUBLIC"
                ]
              }
            ],
            "policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
            "fsmStates": {
              "initial": {
                "authorization": [
                  "active",
                  "recontractable",
                  "presentable"
                ],
                "transition": {
                  "terminate": null
                }
              }
            }
          }
        ],
        "masterContractId": "5c1b5de53c6de3002904f210",
        "userDefinedTags": [],
        "presentableIntro": "",
        "isOnline": 1,
        "status": 7,
        "nodeId": 80000002,
        "resourceId": "36a482fe167fc61cd521daa5d978938732436846",
        "userId": 50002,
        "nodeName": "images",
        "contracts": [
          {
            "resourceId": "36a482fe167fc61cd521daa5d978938732436846",
            "authSchemeId": "5c1b0d291325fa0029ca83c2",
            "policySegmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "contractId": "5c1b5de53c6de3002904f210"
          }
        ],
        "createDate": "2018-12-20T03:35:43.185Z",
        "updateDate": "2018-12-21T08:09:07.514Z"
      },
      {
        "presentableId": "5c1b5d7931d171002c66e6f2",
        "resourceInfo": {
          "userId": 50001,
          "userName": "资源作者",
          "resourceName": "image-12",
          "resourceType": "image",
          "meta": {},
          "purpose": 3,
          "previewImages": [],
          "createDate": "2018-12-20T08:12:14.000Z",
          "updateDate": "2018-12-20T19:07:10.000Z"
        },
        "presentableName": "image-12",
        "policy": [
          {
            "segmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "policyName": "未命名策略",
            "status": 1,
            "authorizedObjects": [
              {
                "userType": "GROUP",
                "users": [
                  "PUBLIC"
                ]
              }
            ],
            "policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
            "fsmStates": {
              "initial": {
                "authorization": [
                  "active",
                  "recontractable",
                  "presentable"
                ],
                "transition": {
                  "terminate": null
                }
              }
            }
          }
        ],
        "masterContractId": "5c1b5ded3c6de3002904f213",
        "userDefinedTags": [],
        "presentableIntro": "",
        "isOnline": 1,
        "status": 7,
        "nodeId": 80000002,
        "resourceId": "3909f9a7e26702a52fc8dbbdcb9524649c78b919",
        "userId": 50002,
        "nodeName": "images",
        "contracts": [
          {
            "resourceId": "3909f9a7e26702a52fc8dbbdcb9524649c78b919",
            "authSchemeId": "5c1b4edf1325fa0029ca83e9",
            "policySegmentId": "22ef3a4d803bf09f6d9946e103c6f756",
            "contractId": "5c1b5ded3c6de3002904f213"
          }
        ],
        "createDate": "2018-12-20T09:14:33.563Z",
        "updateDate": "2018-12-24T07:09:08.740Z"
      },
      {
        "presentableId": "5c1b0e0c31d171002c66e6e2",
        "resourceInfo": {
          "userId": 50001,
          "userName": "资源作者",
          "resourceName": "image-13",
          "resourceType": "image",
          "meta": {},
          "purpose": 3,
          "previewImages": [],
          "createDate": "2018-12-20T03:09:49.000Z",
          "updateDate": "2018-12-20T19:07:11.000Z"
        },
        "presentableName": "image-13",
        "policy": [
          {
            "segmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "policyName": "未命名策略",
            "status": 1,
            "authorizedObjects": [
              {
                "userType": "GROUP",
                "users": [
                  "PUBLIC"
                ]
              }
            ],
            "policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
            "fsmStates": {
              "initial": {
                "authorization": [
                  "active",
                  "recontractable",
                  "presentable"
                ],
                "transition": {
                  "terminate": null
                }
              }
            }
          }
        ],
        "masterContractId": "5c1b5df63c6de3002904f216",
        "userDefinedTags": [],
        "presentableIntro": "",
        "isOnline": 1,
        "status": 7,
        "nodeId": 80000002,
        "resourceId": "3cec9e23c914d03b21f2e0caa68b389c9d9deba3",
        "userId": 50002,
        "nodeName": "images",
        "contracts": [
          {
            "resourceId": "3cec9e23c914d03b21f2e0caa68b389c9d9deba3",
            "authSchemeId": "5c1b0d351325fa0029ca83c4",
            "policySegmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "contractId": "5c1b5df63c6de3002904f216"
          }
        ],
        "createDate": "2018-12-20T03:35:40.698Z",
        "updateDate": "2018-12-21T07:46:29.642Z"
      },
      {
        "presentableId": "5c1b0e0331d171002c66e6df",
        "resourceInfo": {
          "userId": 50001,
          "userName": "资源作者",
          "resourceName": "image-7",
          "resourceType": "image",
          "meta": {},
          "purpose": 3,
          "previewImages": [],
          "createDate": "2018-12-20T03:09:13.000Z",
          "updateDate": "2018-12-20T19:07:13.000Z"
        },
        "presentableName": "image-7",
        "policy": [
          {
            "segmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "policyName": "未命名策略",
            "status": 1,
            "authorizedObjects": [
              {
                "userType": "GROUP",
                "users": [
                  "PUBLIC"
                ]
              }
            ],
            "policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
            "fsmStates": {
              "initial": {
                "authorization": [
                  "active",
                  "recontractable",
                  "presentable"
                ],
                "transition": {
                  "terminate": null
                }
              }
            }
          }
        ],
        "masterContractId": "5c1b5dff3c6de3002904f219",
        "userDefinedTags": [],
        "presentableIntro": "",
        "isOnline": 1,
        "status": 7,
        "nodeId": 80000002,
        "resourceId": "3f04fa3aecce92d8c89b172199e4e3e09a81989f",
        "userId": 50002,
        "nodeName": "images",
        "contracts": [
          {
            "resourceId": "3f04fa3aecce92d8c89b172199e4e3e09a81989f",
            "authSchemeId": "5c1b0dc51325fa0029ca83cb",
            "policySegmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "contractId": "5c1b5dff3c6de3002904f219"
          }
        ],
        "createDate": "2018-12-20T03:35:31.462Z",
        "updateDate": "2018-12-21T08:09:09.822Z"
      },
      {
        "presentableId": "5c1b5d2931d171002c66e6e6",
        "resourceInfo": {
          "userId": 50001,
          "userName": "资源作者",
          "resourceName": "image-28",
          "resourceType": "image",
          "meta": {},
          "purpose": 3,
          "previewImages": [],
          "createDate": "2018-12-20T08:12:14.000Z",
          "updateDate": "2018-12-20T00:47:07.000Z"
        },
        "presentableName": "image-28",
        "policy": [
          {
            "segmentId": "8cefe2f1dcc6dd0bdaadac946cb63dbc",
            "policyName": "未命名策略",
            "status": 1,
            "authorizedObjects": [
              {
                "userType": "GROUP",
                "users": [
                  "PUBLIC"
                ]
              }
            ],
            "policyText": "for public:\n  initial:\n    active\n    recontractable\n    presentable\n    terminate",
            "fsmStates": {
              "initial": {
                "authorization": [
                  "active",
                  "recontractable",
                  "presentable"
                ],
                "transition": {
                  "terminate": null
                }
              }
            }
          }
        ],
        "masterContractId": "5c1b5e073c6de3002904f21c",
        "userDefinedTags": [],
        "presentableIntro": "",
        "isOnline": 1,
        "status": 7,
        "nodeId": 80000002,
        "resourceId": "40a12d32995ee483203e64ee5049e8e7b58f8304",
        "userId": 50002,
        "nodeName": "images",
        "contracts": [
          {
            "resourceId": "40a12d32995ee483203e64ee5049e8e7b58f8304",
            "authSchemeId": "5c1b4edf1325fa0029ca83e2",
            "policySegmentId": "22ef3a4d803bf09f6d9946e103c6f756",
            "contractId": "5c1b5e073c6de3002904f21c"
          }
        ],
        "createDate": "2018-12-20T09:13:13.200Z",
        "updateDate": "2018-12-21T08:09:10.843Z"
      }
    ]
  }
}
```