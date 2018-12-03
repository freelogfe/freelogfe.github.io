# 全局变量

## window.__auth_info__

|属性|类型|描述| 
|--|--|--|
| window.`__auth_info__`.`__auth_node_id__` | String | 节点ID |
| window.`__auth_info__`.`__auth_node_name__` | String | 节点名称 |
| window.`__auth_info__`.`__auth_user_id__` | String | 用户ID |
| window.`__auth_info__`.`__page_build_sub_resource_auth_token` | String | 请求pagebuild依赖资源所需的token |
| window.`__auth_info__`.`__page_build_sub_resource_ids` | Array | 请求pagebuild依赖资源的id集合 |


## window.FreelogApp
| 属性 | 类型 | 描述 |
|--|--|--|
|window.FreelogApp.QI | Object | 查询接口 |
|window.FreelogApp.exceptionCode | Object | 异常码枚举：包含异常码说明及其对应事件的名称 |
|window.FreelogApp.eventNames | Object | 事件名称枚举 |
|window.FreelogApp.trigger | Function | 事件触发函数 |
|window.FreelogApp.Env | Object | 环境参数 |

## window.FreelogApp.Env
| 属性 | 类型 | 描述 |
|--|--|--|
|window.FreelogApp.Env.isTest | Boolean | 是否为测试环境 |
|window.FreelogApp.Env.nodeId | String | 节点id |
|window.FreelogApp.Env.userId | String | 用户id |
|window.FreelogApp.Env.mainDomain | String | 当前domain |
|window.FreelogApp.Env.qiOrigin | String | 当前origin |





