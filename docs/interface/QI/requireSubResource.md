## `FreelogApp.QI.requireSubResource(resourceId)`
该方法用于加载js、css资源，将`<Head>`标签插入`<script>`or `<link>`标签
## Arguments 
- **`resourceId`** String - **必选** - 资源ID

### Returns - promise
### 示例
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