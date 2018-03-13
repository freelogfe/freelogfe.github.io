# Query Interface

> freelog提供的查询接口，可通过window.QI调用

## fetch

``window.QI.fetch(target[, params])`` 对window.fetch的封装，所有请求最后都可以通过这个接口进行发送

## fetchResource
``window.QI.fetchResource(resourceId[, params])`` 获取资源数据

## fetchPresentable
``window.QI.fetchPresentable(presentableId[, params])``  获取presentable数据，可通过extName获取不同的数据类型

|extName值|extName说明|
| --- | --- |
|[empty]|	系统直接返回当前presentable对应的resource基础信息|
|data|	系统直接返回当前presnetable对应的resource文件,即创建资源时上传的文件
