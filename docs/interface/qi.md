# Query Interface

> freelog提供的查询接口，可通过window.QI调用

## fetch
``window.QI.fetch(target[, params])`` 对window.fetch的封装

## fetchResource
``window.QI.fetchResource(resourceId[, params])`` 获取免授权的资源数据，比如license

## fetchPresentableData
``window.QI.fetchPresentableData(target[, params])``  获取presentable数据内容

## fetchPresentableInfo
``window.QI.fetchPresentable(target[, params])``  获取presentable详情信息