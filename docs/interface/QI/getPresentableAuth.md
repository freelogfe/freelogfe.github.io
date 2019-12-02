### `FreelogApp.QI.getPresentableAuth(presentableId)`

获取单个节点发行的授权结果

#### 参数

Object object

| 属性          | 类型   | 必填 | 说明        |
| ------------- | ------ | ---- | ----------- |
| presentableId | String | 是   | 节点资源 ID |

#### Response Headers 字段  说明

| 属性                     | 类型   | 说明                         |
| ------------------------ | ------ | ---------------------------- |
| freelog-entity-nid       | String | presentbale 的实体 ID        |
| freelog-sub-dependencies | String | presentbale 的子依赖信息     |
| freelog-resource-type    | String | presentbale 的资源类型       |
| freelog-meta             | String | presentbale 的资源 meta 信息 |

#### 示例

请求示例

```javascript
// 如获取节点中（presentableId为5c1b5d9331d171002c66e6f4）的授权结果
FreelogApp.QI.getPresentableAuth("5c1b5d9331d171002c66e6f4").then(res => {
  // todo
});
```

返回数据示例

```json
{
  "ret": 0,
  "errcode": 0,
  "msg": "success",
  "data": {
    "isAuth": true,
    "authCode": 201,
    "data": {},
    "errors": [],
    "freelog-sub-dependencies": "W3siaWQiOiI1ZDQyOWM3ZTBkYmRhNTAwMmE3YjY0ZDIiLCJuYW1lIjoiY2h0ZXMvaW1hZ2UwMSIsInR5cGUiOiJyZWxlYXNlIiwicmVzb3VyY2VUeXBlIjoiaW1hZ2UifSx7ImlkIjoiNWQ0MjljYTYwZGJkYTUwMDJhN2I2NGQ3IiwibmFtZSI6ImNodGVzL2ltYWdlIiwidHlwZSI6InJlbGVhc2UiLCJyZXNvdXJjZVR5cGUiOiJpbWFnZSJ9LHsiaWQiOiI1ZDQyOWNkNjBkYmRhNTAwMmE3YjY0ZGMiLCJuYW1lIjoiY2h0ZXMvaW1hZ2UwMiIsInR5cGUiOiJyZWxlYXNlIiwicmVzb3VyY2VUeXBlIjoiaW1hZ2UifSx7ImlkIjoiNWQ0MjlkMTAwZGJkYTUwMDJhN2I2NGUxIiwibmFtZSI6ImNodGVzL2ltYWdlMDMiLCJ0eXBlIjoicmVsZWFzZSIsInJlc291cmNlVHlwZSI6ImltYWdlIn0seyJpZCI6IjVkNDI5ZDNhMGRiZGE1MDAyYTdiNjRlNiIsIm5hbWUiOiJjaHRlcy9pbWFnZTA0IiwidHlwZSI6InJlbGVhc2UiLCJyZXNvdXJjZVR5cGUiOiJpbWFnZSJ9XQ==",
    "freelog-entity-nid": "1450feb3e49e"
  }
}
```
