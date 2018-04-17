<a id="top"></a>
> **粮食溯源数据库接口**
##### 基本接口地址：
```
http://47.95.252.170:1337/api
```
### 目录
---
一.仓储企业
- [x] 1.[仓储企业登录](#storages_login)
- [x] 1.[仓储企业注册](#storages_regregister)
- [x] 2.[仓储企业注销](#storages_delete)
- [x] 3.[仓储企业更新](#storages_update)
- [x] 4.[仓储企业查找](#storages_find)
---
二.加工企业
- [x] 1.[加工企业登录](#processor_login)
- [x] 1.[加工企业注册](#processor_regregister)
- [x] 2.[加工企业注销](#processor_delete)
- [x] 3.[加工企业更新](#processor_update)
- [x] 4.[加工企业查找](#processor_find)
---
三.物流企业
- 企业管理
- [x] 1.[物流企业登录](#carriage_login)
- [x] 1.[物流企业注册](#carriage_regregister)
- [x] 2.[物流企业注销](#carriage_delete)
- [x] 3.[物流企业更新](#carriage_update)
- [x] 4.[物流企业查找](#carriage_find) 
- 运力管理
- [x] 1.[物流企业运力添加](#carriage/transport/add)
- [x] 2.[物流企业运力删除](#carriage/transport/delete)
- [x] 3.[物流企业运力更新](#carriage/transport/update)
- [x] 4.[物流企业运力查找](#carriage/transport/find) 
- 司机管理
- [x] 1.[物流企业司机添加](#carriage/driver/add)
- [x] 2.[物流企业司机删除](#carriage/driver/delete)
- [x] 3.[物流企业司机更新](#carriage/driver/update)
- [x] 4.[物流企业司机查找](#carriage/driver/find) 
- 物流信息管理
- [x] 1.[物流企业信息添加](#carriage/carriageInfo/add)
- [x] 2.[物流企业信息删除](#carriage/carriageInfo/delete)
- [x] 3.[物流企业信息更新](#carriage/carriageInfo/update)
- [x] 4.[物流企业信息查找](#carriage/carriageInfo/find) 
---
四.库区管理
- [x] 1.[企业库区添加](#/reservoir/add)
- [x] 2.[企业库区删除](#/reservoir/delete)
- [x] 3.[企业库区更新](#/reservoir/update)
- [x] 4.[企业库区查找](#/reservoir/find) 
- 仓库管理
- [x] 1.[仓库添加](#/stock/add)
- [x] 2.[仓库删除](#/stock/delete)
- [x] 3.[仓库更新](#/stock/update)
- [x] 4.[仓库查找](#/stock/find) 
- 廒间管理
- [x] 1.[廒间添加](#/ao/add)
- [x] 2.[廒间删除](#/ao/delete)
- [x] 3.[廒间更新](#/ao/update)
- [x] 4.[廒间查找](#/ao/find) 
- 货位管理
- [x] 1.[货位添加](#/goods/add)
- [x] 2.[货位删除](#/goods/delete)
- [x] 3.[货位更新](#/goods/update)
- [x] 4.[货位查找](#/goods/find) 

- 货位粮食信息管理
- [x] 1.[货位粮食信息添加](#/goodsInfo/add)
- [x] 2.[货位粮食信息删除](#/goodsInfo/delete)
- [x] 3.[货位粮食信息更新](#/goodsInfo/update)
- [x] 4.[货位粮食信息查找](#/goodsInfo/find) 
---
五.企业客户管理
- [x] 1.[企业客户添加](#/client/add)
- [x] 2.[企业客户删除](#/client/delete)
- [x] 3.[企业客户更新](#/client/update)
- [x] 4.[企业客户查找](#/client/find) 
---
六.入库管理
- [x] 1.[企业添加入库信息](#/stockIn/add)
- [x] 2.[企业删除入库信息](#/stockIn/delete)
- [x] 3.[企业更新入库信息](#/stockIn/update)
- [x] 4.[企业查找入库信息](#/stockIn/find) 
- 出库管理
- [x] 1.[企业添加出库信息](#/stockOut/add)
- [x] 2.[企业删除出库信息](#/stockOut/delete)
- [x] 3.[企业更新出库信息](#/stockOut/update)
- [x] 4.[企业查找出库信息](#/stockOut/find) 
---
七.质检企业
- [x] 1.[质检企业质检信息添加](#/QCInfo/add)
- [x] 2.[质检企业质检信息删除](#/QCInfo/delete)
- [x] 3.[质检企业质检信息更新](#/QCInfo/update)
- [x] 4.[质检企业质检信息查找](#/QCInfo/find)
---
八.监管企业
- [x] 4.[注册企业信息查找](#/supervise/find)
---





### 一.仓储企业
<a id="storages_login"></a>
- [x] [回到顶部](#top)
#### 仓储企业登录
##### 接口地址：
```
POST /storages/login
```
接口作用：
```
仓储企业注册
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
companyName | string | 企业名称|Y
password | string | 密码|Y

##### input:
```
{
    "companyName":"百度1",
    "password":"password"
}
```
##### output:
```
{
    "code": 1,
    "message": "登录成功！",
    "data": [
        {
            "socialcreditCode": "xiamenjiagongB1234",
            "companyName": "厦门加工企业B",
            "organizationCode": "agongB123",
            "password": "123456",
            "companyType": "小麦加工企业",
            "companyLinkman": "李小花",
            "companyTele": "15678900987",
            "address": "福建省厦门市",
            "lealPerson": "刘明",
            "legalID": "531819198707231829",
            "legalTele": "13267890987",
            "status": "待审核",
            "createdAt": "2018-04-12T12:46:41.037Z",
            "updatedAt": "2018-04-12T12:46:41.037Z",
            "id": "5acf553102d3fd6a6f7afd5e"
        }
    ]
}
```
<a id="storages_regregister"></a>
- [x] [回到顶部](#top)
####  1.仓储企业注册
##### 接口地址：

```
POST /storages/register
```
接口作用：

```
仓储企业注册
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode | string | 社会信用代码|Y
companyName | string | 企业名称|Y
organizationCode | string | 企业组织代码|Y
password | string | 密码|Y
companyType | string | 企业类型|Y
companyLinkman | string | 企业联系人|Y
companyTele | string | 联系人电话|Y
address | string | 企业地址|Y
lealPerson | string | 法人代表|Y
legalID | string | 法人身份证ID|Y
legalTele|string|法人电话|Y
status|string|注册状态|Y（此处默认填写“待审核”）

##### input:
```
{
  "socialcreditCode":"1",
  "companyName":"百度1",
  "organizationCode":"百度1",
  "password":"password",
  "companyType":"companyType",
  "companyLinkman":"123343",
  "companyTele":"organizationCode",
  "address":"百度3",
  "lealPerson":"123343",
  "legalID":"organizationCode",
  "legalTele":"百度3",
  "status":"待审核"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "companyName": "百度1",
        "organizationCode": "百度1",
        "password": "password",
        "companyType": "companyType",
        "companyLinkman": "123343",
        "companyTele": "organizationCode",
        "address": "百度3",
        "lealPerson": "123343",
        "legalID": "organizationCode",
        "legalTele": "百度3",
        "status": "待审核",
        "createdAt": "2018-04-08T12:26:46.323Z",
        "updatedAt": "2018-04-08T12:26:46.323Z",
        "id": "5aca0a8661bf39fa0d98372a"
    }
}
```
<a id="storages_delete"></a>
- [x] [回到顶部](#top)
####  2.注销企业注册
##### 接口地址：

```
POST /storages/delete
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
  "id":"5aca0a8661bf39fa0d98372a"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "password",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "待审核",
            "createdAt": "2018-04-08T12:26:46.323Z",
            "updatedAt": "2018-04-08T12:26:46.323Z",
            "id": "5aca0a8661bf39fa0d98372a"
        }
    ]
}
```

<a id="storages_update"></a>
- [x] [回到顶部](#top)
####  3.更改企业注册信息
##### 接口地址：

```
POST /storages/update
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
	"id":"5aca0c0861bf39fa0d98372b",
	"password":"123456"（其余字段选填）
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "123456",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "审核通过",
            "createdAt": "2018-04-08T12:33:12.492Z",
            "updatedAt": "2018-04-08T12:34:46.593Z",
            "id": "5aca0c0861bf39fa0d98372b"
        }
    ]
}
```
<a id="storages_find"></a>
- [x] [回到顶部](#top)
####  4.查找企业注册信息
##### 接口地址：

```
POST /storages/find
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
	"id":"5aca0c0861bf39fa0d98372b"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "123456",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "审核通过",
            "createdAt": "2018-04-08T12:33:12.492Z",
            "updatedAt": "2018-04-08T12:34:46.593Z",
            "id": "5aca0c0861bf39fa0d98372b"
        }
    ]
}
```

### 二.加工企业
<a id="processor_login"></a>
- [x] [回到顶部](#top)
#### 企业登录
##### 接口地址：
```
POST /processor/login
```
接口作用：
```
仓储企业注册
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
companyName | string | 企业名称|Y
password | string | 密码|Y

##### input:
```
{
    "companyName":"百度1",
    "password":"password"
}
```
##### output:
```
{
    "code": 1,
    "message": "登录成功！",
    "data": [
        {
            "socialcreditCode": "xiamenjiagongB1234",
            "companyName": "厦门加工企业B",
            "organizationCode": "agongB123",
            "password": "123456",
            "companyType": "小麦加工企业",
            "companyLinkman": "李小花",
            "companyTele": "15678900987",
            "address": "福建省厦门市",
            "lealPerson": "刘明",
            "legalID": "531819198707231829",
            "legalTele": "13267890987",
            "status": "待审核",
            "createdAt": "2018-04-12T12:46:41.037Z",
            "updatedAt": "2018-04-12T12:46:41.037Z",
            "id": "5acf553102d3fd6a6f7afd5e"
        }
    ]
}
```
<a id="processor_regregister"></a>
- [x] [回到顶部](#top)
####  1.加工企业注册
##### 接口地址：

```
POST /processor/register
```
接口作用：

```
仓储企业注册
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode | string | 社会信用代码|Y
companyName | string | 企业名称|Y
organizationCode | string | 企业组织代码|Y
password | string | 密码|Y
companyType | string | 企业类型|Y
companyLinkman | string | 企业联系人|Y
companyTele | string | 联系人电话|Y
address | string | 企业地址|Y
lealPerson | string | 法人代表|Y
legalID | string | 法人身份证ID|Y
legalTele|string|法人电话|Y
status|string|注册状态|Y（此处默认填写“待审核”）

##### input:
```
{
  "socialcreditCode":"1",
  "companyName":"百度1",
  "organizationCode":"百度1",
  "password":"password",
  "companyType":"companyType",
  "companyLinkman":"123343",
  "companyTele":"organizationCode",
  "address":"百度3",
  "lealPerson":"123343",
  "legalID":"organizationCode",
  "legalTele":"百度3",
  "status":"待审核"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "companyName": "百度1",
        "organizationCode": "百度1",
        "password": "password",
        "companyType": "companyType",
        "companyLinkman": "123343",
        "companyTele": "organizationCode",
        "address": "百度3",
        "lealPerson": "123343",
        "legalID": "organizationCode",
        "legalTele": "百度3",
        "status": "待审核",
        "createdAt": "2018-04-08T12:26:46.323Z",
        "updatedAt": "2018-04-08T12:26:46.323Z",
        "id": "5aca0a8661bf39fa0d98372a"
    }
}
```
<a id="processor_delete"></a>
- [x] [回到顶部](#top)
####  2.注销企业注册
##### 接口地址：

```
POST /processor/delete
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
  "id":"5aca0a8661bf39fa0d98372a"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "password",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "待审核",
            "createdAt": "2018-04-08T12:26:46.323Z",
            "updatedAt": "2018-04-08T12:26:46.323Z",
            "id": "5aca0a8661bf39fa0d98372a"
        }
    ]
}
```
<a id="processor_update"></a>
- [x] [回到顶部](#top)
####  3.更改企业注册信息
##### 接口地址：

```
POST /processor/update
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
	"id":"5aca0c0861bf39fa0d98372b",
	"password":"123456"（其余字段选填）
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "123456",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "审核通过",
            "createdAt": "2018-04-08T12:33:12.492Z",
            "updatedAt": "2018-04-08T12:34:46.593Z",
            "id": "5aca0c0861bf39fa0d98372b"
        }
    ]
}
```
<a id="processor_find"></a>
- [x] [回到顶部](#top)
####  4.查找企业注册信息
##### 接口地址：

```
POST /processor/find
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
	"id":"5aca0c0861bf39fa0d98372b"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "123456",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "审核通过",
            "createdAt": "2018-04-08T12:33:12.492Z",
            "updatedAt": "2018-04-08T12:34:46.593Z",
            "id": "5aca0c0861bf39fa0d98372b"
        }
    ]
}
```

### 二.加工企业
<a id="processor_regregister"></a>
- [x] [回到顶部](#top)
####  1.加工企业注册
##### 接口地址：

```
POST /processor/register
```
接口作用：

```
仓储企业注册
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode | string | 社会信用代码|Y
companyName | string | 企业名称|Y
organizationCode | string | 企业组织代码|Y
password | string | 密码|Y
companyType | string | 企业类型|Y
companyLinkman | string | 企业联系人|Y
companyTele | string | 联系人电话|Y
address | string | 企业地址|Y
lealPerson | string | 法人代表|Y
legalID | string | 法人身份证ID|Y
legalTele|string|法人电话|Y
status|string|注册状态|Y（此处默认填写“待审核”）

##### input:
```
{
  "socialcreditCode":"1",
  "companyName":"百度1",
  "organizationCode":"百度1",
  "password":"password",
  "companyType":"companyType",
  "companyLinkman":"123343",
  "companyTele":"organizationCode",
  "address":"百度3",
  "lealPerson":"123343",
  "legalID":"organizationCode",
  "legalTele":"百度3",
  "status":"待审核"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "companyName": "百度1",
        "organizationCode": "百度1",
        "password": "password",
        "companyType": "companyType",
        "companyLinkman": "123343",
        "companyTele": "organizationCode",
        "address": "百度3",
        "lealPerson": "123343",
        "legalID": "organizationCode",
        "legalTele": "百度3",
        "status": "待审核",
        "createdAt": "2018-04-08T12:26:46.323Z",
        "updatedAt": "2018-04-08T12:26:46.323Z",
        "id": "5aca0a8661bf39fa0d98372a"
    }
}
```
<a id="processor_delete"></a>
- [x] [回到顶部](#top)
####  2.注销企业注册
##### 接口地址：

```
POST /processor/delete
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
  "id":"5aca0a8661bf39fa0d98372a"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "password",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "待审核",
            "createdAt": "2018-04-08T12:26:46.323Z",
            "updatedAt": "2018-04-08T12:26:46.323Z",
            "id": "5aca0a8661bf39fa0d98372a"
        }
    ]
}
```
<a id="processor_update"></a>
- [x] [回到顶部](#top)
####  3.更改企业注册信息
##### 接口地址：

```
POST /processor/update
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
	"id":"5aca0c0861bf39fa0d98372b",
	"password":"123456"（其余字段选填）
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "123456",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "审核通过",
            "createdAt": "2018-04-08T12:33:12.492Z",
            "updatedAt": "2018-04-08T12:34:46.593Z",
            "id": "5aca0c0861bf39fa0d98372b"
        }
    ]
}
```
<a id="processor_find"></a>
- [x] [回到顶部](#top)
####  4.查找企业注册信息
##### 接口地址：

```
POST /processor/find
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
	"id":"5aca0c0861bf39fa0d98372b"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "123456",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "审核通过",
            "createdAt": "2018-04-08T12:33:12.492Z",
            "updatedAt": "2018-04-08T12:34:46.593Z",
            "id": "5aca0c0861bf39fa0d98372b"
        }
    ]
}
```

### 三.物流企业
<a id="carriage_login"></a>
- [x] [回到顶部](#top)
#### 企业登录
##### 接口地址：
```
POST /carriage/login
```
接口作用：
```
仓储企业注册
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
companyName | string | 企业名称|Y
password | string | 密码|Y

##### input:
```
{
    "companyName":"百度1",
    "password":"password"
}
```
##### output:
```
{
    "code": 1,
    "message": "登录成功！",
    "data": [
        {
            "socialcreditCode": "xiamenjiagongB1234",
            "companyName": "厦门加工企业B",
            "organizationCode": "agongB123",
            "password": "123456",
            "companyType": "小麦加工企业",
            "companyLinkman": "李小花",
            "companyTele": "15678900987",
            "address": "福建省厦门市",
            "lealPerson": "刘明",
            "legalID": "531819198707231829",
            "legalTele": "13267890987",
            "status": "待审核",
            "createdAt": "2018-04-12T12:46:41.037Z",
            "updatedAt": "2018-04-12T12:46:41.037Z",
            "id": "5acf553102d3fd6a6f7afd5e"
        }
    ]
}
```
<a id="carriage_regregister"></a>
- [x] [回到顶部](#top)
####  1.加工企业注册
##### 接口地址：

```
POST /carriage/register
```
接口作用：

```
仓储企业注册
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode | string | 社会信用代码|Y
companyName | string | 企业名称|Y
organizationCode | string | 企业组织代码|Y
password | string | 密码|Y
companyType | string | 企业类型|Y
companyLinkman | string | 企业联系人|Y
companyTele | string | 联系人电话|Y
address | string | 企业地址|Y
lealPerson | string | 法人代表|Y
legalID | string | 法人身份证ID|Y
legalTele|string|法人电话|Y
status|string|注册状态|Y（此处默认填写“待审核”）

##### input:
```
{
  "socialcreditCode":"1",
  "companyName":"百度1",
  "organizationCode":"百度1",
  "password":"password",
  "companyType":"companyType",
  "companyLinkman":"123343",
  "companyTele":"organizationCode",
  "address":"百度3",
  "lealPerson":"123343",
  "legalID":"organizationCode",
  "legalTele":"百度3",
  "status":"待审核"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "companyName": "百度1",
        "organizationCode": "百度1",
        "password": "password",
        "companyType": "companyType",
        "companyLinkman": "123343",
        "companyTele": "organizationCode",
        "address": "百度3",
        "lealPerson": "123343",
        "legalID": "organizationCode",
        "legalTele": "百度3",
        "status": "待审核",
        "createdAt": "2018-04-08T12:26:46.323Z",
        "updatedAt": "2018-04-08T12:26:46.323Z",
        "id": "5aca0a8661bf39fa0d98372a"
    }
}
```
<a id="carriage_delete"></a>
- [x] [回到顶部](#top)
####  2.注销企业注册
##### 接口地址：

```
POST /carriage/delete
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
  "id":"5aca0a8661bf39fa0d98372a"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "password",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "待审核",
            "createdAt": "2018-04-08T12:26:46.323Z",
            "updatedAt": "2018-04-08T12:26:46.323Z",
            "id": "5aca0a8661bf39fa0d98372a"
        }
    ]
}
```
<a id="carriage_update"></a>
- [x] [回到顶部](#top)
####  3.更改企业注册信息
##### 接口地址：

```
POST /carriage/update
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
	"id":"5aca0c0861bf39fa0d98372b",
	"password":"123456"（其余字段选填）
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "123456",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "审核通过",
            "createdAt": "2018-04-08T12:33:12.492Z",
            "updatedAt": "2018-04-08T12:34:46.593Z",
            "id": "5aca0c0861bf39fa0d98372b"
        }
    ]
}
```
<a id="carriage_find"></a>
- [x] [回到顶部](#top)
####  4.查找企业注册信息
##### 接口地址：

```
POST /carriage/find
```
接口作用：

```
仓储企业注销
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|注册的ID|Y

##### input:
```
{
	"id":"5aca0c0861bf39fa0d98372b"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "百度1",
            "organizationCode": "百度1",
            "password": "123456",
            "companyType": "companyType",
            "companyLinkman": "123343",
            "companyTele": "organizationCode",
            "address": "百度3",
            "lealPerson": "123343",
            "legalID": "organizationCode",
            "legalTele": "百度3",
            "status": "审核通过",
            "createdAt": "2018-04-08T12:33:12.492Z",
            "updatedAt": "2018-04-08T12:34:46.593Z",
            "id": "5aca0c0861bf39fa0d98372b"
        }
    ]
}
```
### 运力管理
<a id="carriage/transport/add"></a>
- [x] [回到顶部](#top)
#### 1.添加运力
##### 接口地址
```
POST /carriage/transport/add
```
接口作用：

```
物流企业添加运力
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
carriageType|enum|运力类型（汽车，船舶）|Y
carriageNo|string|运力牌号|Y
##### input:
```
{
  "socialcreditCode":"1",
  "carriageType":"汽车",
  "carriageNo":"d68jnj819"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "carriageType": "汽车",
        "carriageNo": "d68jnj819",
        "createdAt": "2018-04-09T02:07:12.032Z",
        "updatedAt": "2018-04-09T02:07:12.032Z",
        "id": "5acacad0f11587d9033e35c2"
    }
}
```
<a id="carriage/transport/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除运力
##### 接口地址
```
POST /carriage/transport/delete
```
接口作用：

```
物流企业删除运力
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|编号|Y

##### input:
```
{
  "id":"5acacad0f11587d9033e35c2"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "carriageType": "汽车",
            "carriageNo": "d68jnj819",
            "createdAt": "2018-04-09T02:07:12.032Z",
            "updatedAt": "2018-04-09T02:07:12.032Z",
            "id": "5acacad0f11587d9033e35c2"
        }
    ]
}
```
<a id="carriage/transport/update"></a>
- [x] [回到顶部](#top)
#### 3.更新运力
##### 接口地址
```
POST /carriage/transport/update
```
接口作用：

```
物流企业更新运力
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|编号|Y
socialcreditCode|string|社会信用代码|N
carriageType|string|运力类型|N

##### input:
```
{
  "id":"5acacad0f11587d9033e35c2",
  "socialcreditCode":"2",
  "carriageType":"船舶",
  "carriageNo":"2"
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1",
            "carriageType": "汽车",
            "carriageNo": "d68jnj819",
            "createdAt": "2018-04-09T02:07:12.032Z",
            "updatedAt": "2018-04-09T02:07:12.032Z",
            "id": "5acacad0f11587d9033e35c2"
        }
    ]
}
```
<a id="carriage/transport/find"></a>
#### 4.查找运力
##### 接口地址
```
POST /carriage/transport/find
```
接口作用：

```
物流企业查找运力
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|编号|Y
socialcreditCode|string|社会信用代码|N
carriageType|string|运力类型|N

##### input:
```
{
  "socialcreditCode":"2"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "2",
            "carriageType": "船舶",
            "carriageNo": "2",
            "createdAt": "2018-04-09T02:06:23.147Z",
            "updatedAt": "2018-04-09T02:16:51.567Z",
            "id": "5acaca9f581e78b003c163cc"
        }
    ]
}
```

### 物流信息登记管理
<a id="carriage/carriageInfo/add"></a>
- [x] [回到顶部](#top)
#### 1.添加物流信息
##### 接口地址
```
POST /carriage/carriageInfo/add
```
接口作用：

```
物流企业添加物流信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
companyName|enum|企业名称|Y
waybillNo|string|运单号|Y
carriageStatus|string|运单号|Y
shipper|string|发货方(企业信用代码)|Y
deliveryTime|string|发货时间|Y
receiver|string|接受方(企业信用代码)|Y
receiverTime|string|接收时间|Y
contractNo|string|合同号|Y
variety|string|品种|Y
startCount|string|装车数量|Y
endCount|string|卸车数量|Y
packing|string|包装方式|Y
carriageType|string|运力类型|Y
carriageNo|string|船号／车号|Y
driverName|string|司机姓名|Y
driverTele|string|司机电话|Y
inType|string|录入类型（枚举：待办，自主）|Y
##### input:
```
{
	"socialcreditCode":"123451",
	"companyName":"京东",
	"waybillNo":"12345611",
	"carriageStatus":"在途",
	"shipper":"123",
	"deliveryTime":"20180410",
	"receiver":"12345",
	"receiverTime":"20180411",
	"contractNo":"12345",
	"variety":"12345",
	"startCount":"12345",
	"endCount":"12345",
	"packing":"包装",
	"carriageType":"汽车",
	"carriageNo":"12345",
	"driverName":"时昌雪",
	"driverTele":"18811776463",
	"inType":"自主"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "123451",
        "companyName": "京东",
        "waybillNo": "12345611",
        "carriageStatus": "在途",
        "shipper": "123",
        "deliveryTime": "20180410",
        "receiver": "12345",
        "receiverTime": "20180411",
        "contractNo": "12345",
        "variety": "12345",
        "startCount": "12345",
        "endCount": "12345",
        "packing": "包装",
        "carriageType": "汽车",
        "carriageNo": "12345",
        "driverName": "时昌雪",
        "driverTele": "18811776463",
        "inType": "自主",
        "createdAt": "2018-04-15T07:16:51.930Z",
        "updatedAt": "2018-04-15T07:16:51.930Z",
        "id": "5ad2fc63ee507c3d0430c003"
    }
}
```
<a id="carriage/carriageInfo/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除登记信息
##### 接口地址
```
POST /carriage/carriageInfo/delete
```
接口作用：

```
物流企业删除登记信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|编号|Y

##### input:
```
{
  "id":"5acad0a4f11587d9033e35c3"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
        "socialcreditCode": "123451",
        "companyName": "京东",
        "waybillNo": "12345611",
        "carriageStatus": "在途",
        "shipper": "123",
        "deliveryTime": "20180410",
        "receiver": "12345",
        "receiverTime": "20180411",
        "contractNo": "12345",
        "variety": "12345",
        "startCount": "12345",
        "endCount": "12345",
        "packing": "包装",
        "carriageType": "汽车",
        "carriageNo": "12345",
        "driverName": "时昌雪",
        "driverTele": "18811776463",
        "inType": "自主",
        "createdAt": "2018-04-15T07:16:51.930Z",
        "updatedAt": "2018-04-15T07:16:51.930Z",
        "id": "5ad2fc63ee507c3d0430c003"
    }
    ]
}
```
<a id="carriage/carriageInfo/update"></a>
- [x] [回到顶部](#top)
#### 3.更新登记信息
##### 接口地址
```
POST /carriage/carriageInfo/update
```
接口作用：

```
物流企业更新登记信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|编号|Y
carriageType|string|运力类型|N

##### input:
```
{
  "id":"5acad351ae906d3604cdd3bc",
  "driverName":"Lucy"
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
        "socialcreditCode": "123451",
        "companyName": "京东",
        "waybillNo": "12345611",
        "carriageStatus": "在途",
        "shipper": "123",
        "deliveryTime": "20180410",
        "receiver": "12345",
        "receiverTime": "20180411",
        "contractNo": "12345",
        "variety": "12345",
        "startCount": "12345",
        "endCount": "12345",
        "packing": "包装",
        "carriageType": "汽车",
        "carriageNo": "12345",
        "driverName": "Lucy",
        "driverTele": "18811776463",
        "inType": "自主",
        "createdAt": "2018-04-15T07:16:51.930Z",
        "updatedAt": "2018-04-15T07:16:51.930Z",
        "id": "5ad2fc63ee507c3d0430c003"
    }
    ]
}
```
<a id="carriage/carriageInfo/find"></a>
- [x] [回到顶部](#top)
#### 4.查找登记信息
##### 接口地址
```
GET /carriage/carriageInfo/find
```
接口作用：

```
物流企业查找登记信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y

##### input:
```
{
  "socialcreditCode":"2"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
        "socialcreditCode": "123451",
        "companyName": "京东",
        "waybillNo": "12345611",
        "carriageStatus": "在途",
        "shipper": "123",
        "deliveryTime": "20180410",
        "receiver": "12345",
        "receiverTime": "20180411",
        "contractNo": "12345",
        "variety": "12345",
        "startCount": "12345",
        "endCount": "12345",
        "packing": "包装",
        "carriageType": "汽车",
        "carriageNo": "12345",
        "driverName": "Lucy",
        "driverTele": "18811776463",
        "inType": "自主",
        "createdAt": "2018-04-15T07:16:51.930Z",
        "updatedAt": "2018-04-15T07:16:51.930Z",
        "id": "5ad2fc63ee507c3d0430c003"
        }
    ]
}
```
### 司机管理
<a id="carriage/driver/add"></a>
- [x] [回到顶部](#top)
#### 1.添加司机
##### 接口地址
```
POST /carriage/driver/add
```
接口作用：

```
物流企业添加司机
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
driverName|enum|司机姓名（汽车，船舶）|Y
driverTele|string|司机电话|Y
##### input:
```
{
  "socialcreditCode":"2",
  "driverName":"Lucy",
  "driverTele":"18811715625"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "2",
        "driverName": "Lucy",
        "driverTele": "18811715625",
        "createdAt": "2018-04-09T02:32:04.724Z",
        "updatedAt": "2018-04-09T02:32:04.724Z",
        "id": "5acad0a4f11587d9033e35c3"
    }
}
```
<a id="carriage/driver/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除司机
##### 接口地址
```
POST /carriage/driver/delete
```
接口作用：

```
物流企业删除司机
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|编号|Y

##### input:
```
{
  "id":"5acad0a4f11587d9033e35c3"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "2",
            "driverName": "时昌雪2",
            "driverTele": "18811715625",
            "createdAt": "2018-04-09T02:32:04.724Z",
            "updatedAt": "2018-04-09T02:32:04.724Z",
            "id": "5acad0a4f11587d9033e35c3"
        }
    ]
}
```
<a id="carriage/driver/update"></a>
- [x] [回到顶部](#top)
#### 3.更新司机
##### 接口地址
```
POST /carriage/driver/update
```
接口作用：

```
物流企业更新司机
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|编号|Y
carriageType|string|运力类型|N

##### input:
```
{
  "id":"5acad351ae906d3604cdd3bc",
  "driverName":"Lucy"
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "2",
            "driverName": "Lucy",
            "driverTele": "18811715625",
            "createdAt": "2018-04-09T02:43:29.057Z",
            "updatedAt": "2018-04-09T02:43:43.837Z",
            "id": "5acad351ae906d3604cdd3bc"
        }
    ]
}
```
<a id="carriage/driver/find"></a>
- [x] [回到顶部](#top)
#### 4.查找司机
##### 接口地址
```
GET /carriage/driver/find
```
接口作用：

```
物流企业查找运力
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y

##### input:
```
{
  "socialcreditCode":"2"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "2",
            "driverName": "时昌雪2",
            "driverTele": "18811715625",
            "createdAt": "2018-04-09T02:43:29.057Z",
            "updatedAt": "2018-04-09T02:43:43.837Z",
            "id": "5acad351ae906d3604cdd3bc"
        }
    ]
}
```
### 四.库区管理
<a id="/reservoir/add"></a>
- [x] [回到顶部](#top)
#### 1.添加库区
##### 接口地址
```
POST /reservoir/add
```
##### 接口作用：

```
物流企业添加库区
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
reservoirNo|string|库区号|Y
reservoirName|string|库区名称|Y
QHDM|string|行政区域代码|Y
province|string|省份|Y
city|string|城市|Y
county|string|县|Y
town|string|镇|Y
postalCode|string|邮政编码|Y
##### input:
```
{
  "socialcreditCode":"1",
  "reservoirNo":"001",
  "reservoirName":"库区2",
  "QHDM":"1fsd3435n1",
  "province":"北京",
  "city":"北京",
  "county":"北京",
  "town":"北京",
  "postalCode":"1000439"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "reservoirNo": "001",
        "reservoirName": "库区2",
        "QHDM": "1fsd3435n1",
        "province": "北京",
        "city": "北京",
        "county": "北京",
        "town": "北京",
        "postalCode": "1000439",
        "createdAt": "2018-04-09T02:48:07.943Z",
        "updatedAt": "2018-04-09T02:48:07.943Z",
        "id": "5acad467ae906d3604cdd3bd"
    }
}
```

<a id="/reservoir/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除库区
##### 接口地址
```
POST /reservoir/delete
```
##### 接口作用：

```
物流企业删除库区
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y

##### input:
```
{
  "id":"5acad467ae906d3604cdd3bd"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "reservoirNo": "001",
            "reservoirName": "库区2",
            "QHDM": "1fsd3435n1",
            "province": "北京",
            "city": "北京",
            "county": "北京",
            "town": "北京",
            "postalCode": "1000439",
            "createdAt": "2018-04-09T02:48:07.943Z",
            "updatedAt": "2018-04-09T02:48:07.943Z",
            "id": "5acad467ae906d3604cdd3bd"
        }
    ]
}
```

<a id="/reservoir/update"></a>
- [x] [回到顶部](#top)
#### 3.更新库区
##### 接口地址
```
POST /reservoir/update
```
##### 接口作用：

```
物流企业删除库区
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y
reservoirName|string|库区名称|N

##### input:
```
{
  "id":"5acae874ae906d3604cdd3be",
  "reservoirName": "库区1"
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1",
            "reservoirNo": "001",
            "reservoirName": "库区1",
            "QHDM": "1fsd3435n1",
            "province": "北京",
            "city": "北京",
            "county": "北京",
            "town": "北京",
            "postalCode": "1000439",
            "createdAt": "2018-04-09T04:13:40.120Z",
            "updatedAt": "2018-04-09T04:14:46.713Z",
            "id": "5acae874ae906d3604cdd3be"
        }
    ]
}
```
<a id="/reservoir/find"></a>
- [x] [回到顶部](#top)
#### 4.查找库区
##### 接口地址
```
POST /reservoir/find
```
##### 接口作用：

```
物流企业删除库区
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y

##### input:
```
{
  "socialcreditCode":"1"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1",
            "reservoirNo": "001",
            "reservoirName": "库区1",
            "QHDM": "1fsd3435n1",
            "province": "北京",
            "city": "北京",
            "county": "北京",
            "town": "北京",
            "postalCode": "1000439",
            "createdAt": "2018-04-09T04:13:40.120Z",
            "updatedAt": "2018-04-09T04:14:46.713Z",
            "id": "5acae874ae906d3604cdd3be"
        }
    ]
}
```

### 仓库管理
<a id="/stock/add"></a>
- [x] [回到顶部](#top)
#### 1.添加仓库
##### 接口地址
```
POST /stock/add
```
##### 接口作用：

```
物流企业添加仓库
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
reservoirNo|string|库区号|Y
reservoirName|string|库区名称|Y
QHDM|string|行政区域代码|Y
province|string|省份|Y
city|string|城市|Y
county|string|县|Y
town|string|镇|Y
postalCode|string|邮政编码|Y
##### input:
```
{
  "socialcreditCode":"1",
  "reservoirNo":"001",
  "reservoirName":"库区1",
  "stockNo":"001",
  "stockName":"仓库1",
  "stockType":"圆筒仓",
  "capacity":"10000",
  "vaildCapacity":"10000"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "reservoirNo": "001",
        "reservoirName": "库区1",
        "stockNo": "001",
        "stockName": "仓库1",
        "stockType": "圆筒仓",
        "capacity": "10000",
        "vaildCapacity": "10000",
        "createdAt": "2018-04-09T04:24:31.460Z",
        "updatedAt": "2018-04-09T04:24:31.460Z",
        "id": "5acaeaffae906d3604cdd3bf"
    }
}
```

<a id="/stock/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除库区
##### 接口地址
```
POST /stock/delete
```
##### 接口作用：

```
物流企业删除库区
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y

##### input:
```
{
  "id":"5acad467ae906d3604cdd3bd"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "reservoirNo": "001",
            "reservoirName": "库区1",
            "stockNo": "001",
            "stockName": "仓库1",
            "stockType": "圆筒仓",
            "capacity": "10000",
            "vaildCapacity": "10000",
            "createdAt": "2018-04-09T04:24:31.460Z",
            "updatedAt": "2018-04-09T04:24:31.460Z",
            "id": "5acaeaffae906d3604cdd3bf"
        }
    ]
}
```

<a id="/stock/update"></a>
- [x] [回到顶部](#top)
#### 3.更新仓库
##### 接口地址
```
POST /stock/update
```
##### 接口作用：

```
物流企业删除仓库
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y
reservoirName|string|仓库名称|N

##### input:
```
{
  "id":"5acae874ae906d3604cdd3be",
  "reservoirName": "库区1"
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1",
            "reservoirNo": "001",
            "reservoirName": "库区1",
            "stockNo": "001",
            "stockName": "仓库1",
            "stockType": "圆筒仓",
            "capacity": "10000",
            "vaildCapacity": "10000",
            "createdAt": "2018-04-09T04:32:31.964Z",
            "updatedAt": "2018-04-09T04:33:03.019Z",
            "id": "5acaecdfae906d3604cdd3c0"
        }
    ]
}
```
<a id="/stock/find"></a>
- [x] [回到顶部](#top)
#### 4.查找仓库
##### 接口地址
```
POST /stock/find
```
##### 接口作用：

```
物流企业删除库区
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y

##### input:
```
{
  "socialcreditCode":"1"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1",
            "reservoirNo": "001",
            "reservoirName": "库区1",
            "stockNo": "001",
            "stockName": "仓库1",
            "stockType": "圆筒仓",
            "capacity": "10000",
            "vaildCapacity": "10000",
            "createdAt": "2018-04-09T04:32:31.964Z",
            "updatedAt": "2018-04-09T04:33:03.019Z",
            "id": "5acaecdfae906d3604cdd3c0"
        }
    ]
}
```

### 廒间管理
<a id="/ao/add"></a>
- [x] [回到顶部](#top)
#### 1.添加廒间
##### 接口地址
```
POST /ao/add
```
##### 接口作用：

```
物流企业添加廒间
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
reservoirNo|string|库区号|Y
reservoirName|string|库区名称|Y
stockNo|string|仓库号|Y
stockName|string|仓库名称|Y
aoNo|string|廒间号|Y
aoName|string|廒间名称|Y
capacity|string|容量|Y
##### input:
```
{
	"socialcreditCode":"1",
	"reservoirNo":"001",
	"reservoirName":"库区1",
	"stockNo":"001",
	"stockName":"仓库1",
	"aoNo":"001",
	"aoName":"廒间1",
	"capacity":"200"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "reservoirNo": "001",
        "reservoirName": "库区1",
        "stockNo": "001",
        "stockName": "仓库1",
        "aoNo": "001",
        "aoName": "廒间1",
        "capacity": "200",
        "createdAt": "2018-04-10T11:50:37.898Z",
        "updatedAt": "2018-04-10T11:50:37.898Z",
        "id": "5acca50d0968d70e6cac7d78"
    }
}
```

<a id="/ao/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除廒间
##### 接口地址
```
POST /ao/delete
```
##### 接口作用：

```
物流企业删除廒间
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y

##### input:
```
{
  "id":"5acad467ae906d3604cdd3bd"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "reservoirNo": "001",
            "reservoirName": "库区1",
            "stockNo": "001",
            "stockName": "仓库1",
            "aoNo": "001",
            "aoName": "廒间1",
            "capacity": "200",
            "createdAt": "2018-04-10T12:57:56.475Z",
            "updatedAt": "2018-04-10T12:57:56.475Z",
            "id": "5accb4d4c8df950620674b21"
        }
    ]
}
```

<a id="/ao/update"></a>
- [x] [回到顶部](#top)
#### 3.更新廒间
##### 接口地址
```
POST /stock/update
```
##### 接口作用：

```
物流企业更新廒间
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y
reservoirName|string|仓库名称|N

##### input:
```
{
  "id":"5acae874ae906d3604cdd3be",
  "reservoirName": "库区1"
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1",
            "reservoirNo": "001",
            "reservoirName": "库区1",
            "stockNo": "001",
            "stockName": "仓库1",
            "stockType": "圆筒仓",
            "capacity": "10000",
            "vaildCapacity": "10000",
            "createdAt": "2018-04-09T04:32:31.964Z",
            "updatedAt": "2018-04-09T04:33:03.019Z",
            "id": "5acaecdfae906d3604cdd3c0"
        }
    ]
}
```
<a id="/ao/find"></a>
- [x] [回到顶部](#top)
#### 4.查找廒间
##### 接口地址
```
POST /stock/find
```
##### 接口作用：

```
物流企业查找廒间
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y

##### input:
```
{
  "socialcreditCode":"1"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1",
            "reservoirNo": "001",
            "reservoirName": "库区1",
            "stockNo": "001",
            "stockName": "仓库1",
            "aoNo": "001",
            "aoName": "廒间1",
            "capacity": "200",
            "createdAt": "2018-04-10T13:01:22.009Z",
            "updatedAt": "2018-04-10T13:01:22.009Z",
            "id": "5accb5a2c8df950620674b22"
        }
    ]
}
```

### 货位管理
<a id="/goods/add"></a>
- [x] [回到顶部](#top)
#### 1.添加货位
##### 接口地址
```
POST /goods/add
```
##### 接口作用：

```
物流企业添加货位
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
reservoirNo|string|库区号|Y
reservoirName|string|库区名称|Y
stockNo|string|仓库号|Y
stockName|string|仓库名称|Y
aoNo|string|廒间号|Y
aoName|string|廒间名称|Y
goodsNo|string|货位号|Y
goodsName|string|货位名称|Y
sealingMark|string|封仓时间|Y
goodsCode|string|货位编码|Y
capacity|integer|容量|Y
##### input:
```
{
	"socialcreditCode":"1",
	"reservoirNo":"001",
	"reservoirName":"库区1",
	"stockNo":"001",
	"stockName":"仓库1",
	"aoNo":"001",
	"aoName":"廒间1",
	"goodsNo":"001",
	"goodsName":"货位1",
	"sealingMark":"20180408",
	"goodsCode":"001001001",
	"capacity":"200"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "reservoirNo": "001",
        "reservoirName": "库区1",
        "stockNo": "001",
        "stockName": "仓库1",
        "aoNo": "001",
        "aoName": "廒间1",
        "goodsNo": "001",
        "goodsName": "货位1",
        "sealingMark": "20180408",
        "goodsCode": "001001001",
        "capacity": "200",
        "createdAt": "2018-04-10T13:10:24.429Z",
        "updatedAt": "2018-04-10T13:10:24.429Z",
        "id": "5accb7c0e2957fe40f231b66"
    }
}
```

<a id="/goods/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除货位
##### 接口地址
```
POST /goods/delete
```
##### 接口作用：

```
物流企业删除货位
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y

##### input:
```
{
  "id":"5accb7c0e2957fe40f231b66"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "reservoirNo": "001",
            "reservoirName": "库区1",
            "stockNo": "001",
            "stockName": "仓库1",
            "aoNo": "001",
            "aoName": "廒间1",
            "goodsNo": "001",
            "goodsName": "货位1",
            "sealingMark": "20180408",
            "goodsCode": "001001001",
            "capacity": "200",
            "createdAt": "2018-04-10T13:10:24.429Z",
            "updatedAt": "2018-04-10T13:10:24.429Z",
            "id": "5accb7c0e2957fe40f231b66"
        }
    ]
}
```

<a id="/goods/update"></a>
- [x] [回到顶部](#top)
#### 3.更新货位
##### 接口地址
```
POST /goods/update
```
##### 接口作用：

```
物流企业更新货位
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y
reservoirName|string|仓库名称|N

##### input:
```
{
  "id":"5acae874ae906d3604cdd3be",
  "reservoirName": "库区1"
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "2",
            "reservoirNo": "001",
            "reservoirName": "库区1",
            "stockNo": "001",
            "stockName": "仓库1",
            "aoNo": "001",
            "aoName": "廒间1",
            "goodsNo": "001",
            "goodsName": "货位1",
            "sealingMark": "20180408",
            "goodsCode": "001001001",
            "capacity": "200",
            "createdAt": "2018-04-10T13:14:22.084Z",
            "updatedAt": "2018-04-10T13:14:33.641Z",
            "id": "5accb8aec8df950620674b24"
        }
    ]
}
```
<a id="/goods/find"></a>
- [x] [回到顶部](#top)
#### 4.查找货位
##### 接口地址
```
POST /goods/find
```
##### 接口作用：

```
物流企业查找货位
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
##### input:
```
{
  "socialcreditCode":"1",
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": {
        "goods": [
            {
                "socialcreditCode": "xiamenjiagongB1234",
                "reservoirNo": "001",
                "reservoirName": "库区001",
                "stockNo": "P01",
                "stockName": "平房仓P01",
                "aoNo": "001",
                "aoName": "廒间001",
                "goodsNo": "01",
                "goodsName": "货位01",
                "sealingMark": "20180411",
                "goodsCode": "001P0100101",
                "capacity": "500",
                "createdAt": "2018-04-12T12:59:31.400Z",
                "updatedAt": "2018-04-12T12:59:31.400Z",
                "id": "5acf58338dcb0e6feebef41d"
            },
            {
                "socialcreditCode": "xiamenjiagongB1234",
                "reservoirNo": "001",
                "reservoirName": "库区001",
                "stockNo": "P01",
                "stockName": "平房仓P01",
                "aoNo": "001",
                "aoName": "廒间001",
                "goodsNo": "02",
                "goodsName": "货位02",
                "sealingMark": "20180411",
                "goodsCode": "001P0100102",
                "capacity": "500",
                "createdAt": "2018-04-12T12:59:46.308Z",
                "updatedAt": "2018-04-12T12:59:46.308Z",
                "id": "5acf58428dcb0e6feebef41e"
            },
            {
                "socialcreditCode": "xiamenjiagongB1234",
                "reservoirNo": "002",
                "reservoirName": "库区002",
                "stockNo": "L02",
                "stockName": "楼房仓L02",
                "aoNo": "002",
                "aoName": "廒间002",
                "goodsNo": "04",
                "goodsName": "货位04",
                "sealingMark": "20180411",
                "goodsCode": "002L0200204",
                "capacity": "500",
                "createdAt": "2018-04-15T05:44:16.354Z",
                "updatedAt": "2018-04-15T05:44:16.354Z",
                "id": "5ad2e6b004ca76686242a177"
            },
            {
                "socialcreditCode": "xiamenjiagongB1234",
                "reservoirNo": "001",
                "reservoirName": "库区001",
                "stockNo": "P01",
                "stockName": "平房仓P01",
                "aoNo": "001",
                "aoName": "廒间001",
                "goodsNo": "03",
                "goodsName": "货位03",
                "sealingMark": "20180411",
                "goodsCode": "001P0100103",
                "capacity": "500",
                "createdAt": "2018-04-15T05:44:54.043Z",
                "updatedAt": "2018-04-15T05:44:54.043Z",
                "id": "5ad2e6d604ca76686242a178"
            },
            {
                "socialcreditCode": "xiamenjiagongB1234",
                "reservoirNo": "001",
                "reservoirName": "库区001",
                "stockNo": "P01",
                "stockName": "平房仓P01",
                "aoNo": "001",
                "aoName": "廒间001",
                "goodsNo": "05",
                "goodsName": "货位05",
                "sealingMark": "20180411",
                "goodsCode": "001P0100105",
                "capacity": "500",
                "createdAt": "2018-04-15T05:45:21.805Z",
                "updatedAt": "2018-04-15T05:45:21.805Z",
                "id": "5ad2e6f104ca76686242a179"
            }
        ],
        "goodsInfo": [
            {
                "socialcreditCode": "xiamenjiagongB1234",
                "goodsCode": "001P0100101",
                "variety": "小麦",
                "grade": "二级",
                "production": "哈尔滨",
                "producingYear": "2018",
                "packing": "包装",
                "capacity": 100,
                "createdAt": "2018-04-16T07:45:42.923Z",
                "updatedAt": "2018-04-16T07:45:42.923Z",
                "id": "5ad454a697c64dfc0be4d1d5"
            }
        ]
    }
}
```
### 货位粮食信息管理
<a id="/goodsInfo/add"></a>
- [x] [回到顶部](#top)
#### 1.添加货位
##### 接口地址
```
POST /goodsInfo/add
```
##### 接口作用：

```
物流企业添加货位
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
companyName|string|企业名称|Y
goodsCode|string|货位编码|Y
variety|string|品种|Y
grade|string|等级|Y
production|string|产地|Y
producingYear|string|生产年份|Y
packing|string|包装方式|Y
capacity|integer|容量|Y
QC|boolean|是否已有质检信息（默认：false）|Y
##### input:
```
{
  "socialcreditCode":"12345671",
  "companyName":"baidu",
  "goodsCode":"001001001001",
  "variety":"小麦",
  "grade":"二级",
  "production":"哈尔滨",
  "producingYear":"2018",
  "packing":"包装",
  "capacity":100
}
```
##### output:（若当前货位有粮食就更新，没有就新建）
```
{
    "code": 1,
    "message": "更新货位信息成功",
    "data": {
        "preGoodsInfo": [
            {
                "socialcreditCode": "12345671",
                "companyName": "baidu",
                "goodsCode": "001001001001",
                "variety": "小麦",
                "grade": "二级",
                "production": "哈尔滨",
                "producingYear": "2018",
                "packing": "包装",
                "capacity": 500,
                "createdAt": "2018-04-16T03:40:31.413Z",
                "updatedAt": "2018-04-16T03:54:44.835Z",
                "id": "5ad41b2f85d4970c0774ae2d"
            }
        ],
        "currentGoodsInfo": [
            {
                "socialcreditCode": "12345671",
                "companyName": "baidu",
                "goodsCode": "001001001001",
                "variety": "小麦",
                "grade": "二级",
                "production": "哈尔滨",
                "producingYear": "2018",
                "packing": "包装",
                "capacity": 600,
                "createdAt": "2018-04-16T03:40:31.413Z",
                "updatedAt": "2018-04-16T04:00:07.030Z",
                "id": "5ad41b2f85d4970c0774ae2d"
            }
        ]
    }
}
```

<a id="/goodsInfo/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除货位粮食信息
##### 接口地址
```
POST /goodsInfo/delete
```
##### 接口作用：

```
物流企业删除货位粮食信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y

##### input:
```
{
  "id":"5accb7c0e2957fe40f231b66"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "12345671",
            "companyName": "baidu",
            "goodsCode": "001001001001",
            "variety": "小麦",
            "grade": "二级",
            "production": "黑龙江",
            "producingYear": "2019",
            "packing": "包装",
            "capacity": 100,
            "createdAt": "2018-04-16T03:40:31.413Z",
            "updatedAt": "2018-04-16T04:21:44.476Z",
            "id": "5ad41b2f85d4970c0774ae2d"
        }
    ]
}
```

<a id="/goodsInfo/update"></a>
- [x] [回到顶部](#top)
#### 3.更新货位粮食信息
##### 接口地址
```
POST /goodsInfo/update
```
##### 接口作用：

```
物流企业更新货位粮食信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y
reservoirName|string|仓库名称|N

##### input:
```
{
  "id":"5ad41b2f85d4970c0774ae2d",
  "socialcreditCode":"12345671",
  "capacity":100
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "12345671",
            "companyName": "baidu",
            "goodsCode": "001001001001",
            "variety": "小麦",
            "grade": "二级",
            "production": "黑龙江",
            "producingYear": "2019",
            "packing": "包装",
            "capacity": 100,
            "createdAt": "2018-04-16T03:40:31.413Z",
            "updatedAt": "2018-04-16T04:21:44.476Z",
            "id": "5ad41b2f85d4970c0774ae2d"
        }
    ]
}
```
<a id="/goodsInfo/find"></a>
- [x] [回到顶部](#top)
#### 4.查找货位粮食信息
##### 接口地址
```
POST /goodsInfo/find
```
##### 接口作用：

```
物流企业查找货位粮食信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
goodsCode|string|货位编码|Y

##### input:
```
{
  "socialcreditCode":"12345671",
  "goodsCode":"001001001001"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "12345671",
            "companyName": "baidu",
            "goodsCode": "001001001001",
            "variety": "小麦",
            "grade": "二级",
            "production": "哈尔滨",
            "producingYear": "2018",
            "packing": "包装",
            "capacity": 600,
            "createdAt": "2018-04-16T03:40:31.413Z",
            "updatedAt": "2018-04-16T04:00:07.030Z",
            "id": "5ad41b2f85d4970c0774ae2d"
        }
    ]
}
```
### 五.企业客户管理
<a id="/client/add"></a>
- [x] [回到顶部](#top)
#### 1.添加客户
##### 接口地址
```
POST /client/add
```
##### 接口作用：

```
企业添加客户
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
companysocialcreditCode|string|客户的社会信用代码|Y
companyName|string|客户名称|Y
province|string|省|Y
city|string|城市|Y
address|string|企业地址|Y
lealPerson|string|法人代表|Y
legalTele|string|法人代表联系电话|Y
companyLinkman|string|企业联系人|Y
companyTele|string|联系电话|Y
email|string|邮箱|Y
fax|string|传真|Y
##### input:
```
{
	"socialcreditCode":"1",
	"companysocialcreditCode":"百度2",
	"companyName":"百度2",
	"province":"北京",
	"city":"北京",
	"address":"北京朝阳区",
	"lealPerson":"lucy",
	"legalTele":"18811715625",
	"companyLinkman":"jeo",
	"companyTele":"188116653748",
	"email":"920189165@qq.com",
	"fax":"123-47899"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "companysocialcreditCode": "百度2",
        "companyName": "百度2",
        "province": "北京",
        "city": "北京",
        "address": "北京朝阳区",
        "lealPerson": "lucy",
        "legalTele": "18811715625",
        "companyLinkman": "jeo",
        "companyTele": "188116653748",
        "email": "920189165@qq.com",
        "fax": "123-47899",
        "createdAt": "2018-04-11T04:51:56.404Z",
        "updatedAt": "2018-04-11T04:51:56.404Z",
        "id": "5acd946cc8df950620674b29"
    }
}
```

<a id="/client/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除客户
##### 接口地址
```
POST /client/delete
```
##### 接口作用：

```
企业删除客户
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y

##### input:
```
{
  "id":"5acd946cc8df950620674b29"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companysocialcreditCode": "百度2",
            "companyName": "百度2",
            "province": "北京",
            "city": "北京",
            "address": "北京朝阳区",
            "lealPerson": "lucy",
            "legalTele": "18811715625",
            "companyLinkman": "jeo",
            "companyTele": "188116653748",
            "email": "920189165@qq.com",
            "fax": "123-47899",
            "createdAt": "2018-04-11T04:51:56.404Z",
            "updatedAt": "2018-04-11T04:51:56.404Z",
            "id": "5acd946cc8df950620674b29"
        }
    ]
}
```

<a id="/client/update"></a>
- [x] [回到顶部](#top)
#### 3.更新客户
##### 接口地址
```
POST /client/update
```
##### 接口作用：

```
企业更新客户
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y
reservoirName|string|仓库名称|N

##### input:
```
{
  "id":"5acae874ae906d3604cdd3be",
  "companysocialcreditCode": "百度"
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companysocialcreditCode": "百度",
            "companyName": "百度2",
            "province": "北京",
            "city": "北京",
            "address": "北京朝阳区",
            "lealPerson": "lucy",
            "legalTele": "18811715625",
            "companyLinkman": "jeo",
            "companyTele": "188116653748",
            "email": "920189165@qq.com",
            "fax": "123-47899",
            "createdAt": "2018-04-11T05:00:49.284Z",
            "updatedAt": "2018-04-11T05:01:09.269Z",
            "id": "5acd9681c8df950620674b2a"
        }
    ]
}
```
<a id="/client/find"></a>
- [x] [回到顶部](#top)
#### 4.查找客户
##### 接口地址
```
POST /client/find
```
##### 接口作用：

```
企业查找客户
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y

##### input:
```
{
  "socialcreditCode":"1"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companysocialcreditCode": "百度2",
            "companyName": "百度2",
            "province": "北京",
            "city": "北京",
            "address": "北京朝阳区",
            "lealPerson": "lucy",
            "legalTele": "18811715625",
            "companyLinkman": "joe",
            "companyTele": "188116653748",
            "email": "920189165@qq.com",
            "fax": "123-47899",
            "createdAt": "2018-04-11T04:51:56.404Z",
            "updatedAt": "2018-04-11T04:51:56.404Z",
            "id": "5acd946cc8df950620674b29"
        }
    ]
}
```
### 六.企业入库管理
<a id="/stockIn/add"></a>
- [x] [回到顶部](#top)
#### 1.添加入库信息
##### 接口地址
```
POST /stockIn/add
```
##### 接口作用：

```
企业添加入库信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
stockinidentificationCode|string|入库识别码|Y
stockinNo|string|入库流水号|Y
variety|string|种类|Y
grade|string|等级|Y
production|string|产地|Y
producingYear|string|生产年份|Y
stockinCount|integer|入库数量|Y
packing|string|包装方式（枚举：包装，散装）|Y
waybillNo|string|运单号|Y
carriage|string|承运方的社会信用代码|Y
carriageName|string|承运方的名称|Y
carriageType|string|运输类型（枚举：汽车，船舶）|Y
carriageNo|string|车号／船号|Y
driverName|string|司机姓名|Y
driverTele|string|司机电话|Y
stockinTime|string|入库时间|Y
upstreamorganizationCode|string|上游企业社会信用代码|Y
upstreamcompanyName|string|上游企业名称|Y
contractNo|string|合同号|Y
goodsCode|string|货位编码|Y
IPFS|string|上传至ipfs的hash|Y
inType|string|办理入库类型（枚举：待办，自主）|Y
##### input:
```
{
	"socialcreditCode":"1234567",
    "companyName": "百度",
	"stockinidentificationCode":"123400100100100120180410",
	"stockinNo":"shichangxue",
	"variety":"小麦",
	"grade":"二级",
	"production":"黑龙江",
	"producingYear":"2018",
	"stockinCount":"10000",
	"packing":"包装",
	"carriageType":"汽车",
	"carriageNo":"34hhjk8",
	"stockinTime":"20180410",
	"upstreamorganizationCode":"123456",
    "upstreamcompanyName":"百度",
	"contractNo":"dsahkflj43794",
	"goodsCode":"001001001001",
	"IPFS":"Qmdsfhuoefonfsdnncnsjf",
    "inType": "待办"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1234567",
        "companyName": "百度",
        "stockinidentificationCode": "123400100100100120180410",
        "stockinNo": "shichangxue",
        "variety": "小麦",
        "grade": "二级",
        "production": "黑龙江",
        "producingYear": "2018",
        "stockinCount": "10000",
        "packing": "包装",
        "carriageType": "汽车",
        "carriageNo": "34hhjk8",
        "stockinTime": "20180410",
        "upstreamorganizationCode": "123456",
        "contractNo": "dsahkflj43794",
        "goodsCode": "001001001001",
        "inType": "待办",
        "createdAt": "2018-04-15T07:03:53.629Z",
        "updatedAt": "2018-04-15T07:03:53.629Z",
        "id": "5ad2f959b25de6ef0328dccd"
    }
}
```

<a id="/stockIn/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除入库信息
##### 接口地址
```
POST /stockIn/delete
```
##### 接口作用：

```
企业删除入库信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y

##### input:
```
{
  "id":"5acd946cc8df950620674b29"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
        "socialcreditCode": "1234567",
        "stockinidentificationCode": "123400100100100120180410",
        "stockinNo": "shichangxue",
        "variety": "小麦",
        "grade": "二级",
        "production": "黑龙江",
        "producingYear": "2018",
        "stockinCount": "10000",
        "packing": "包装",
        "carriageType": "汽车",
        "carriageNo": "34hhjk8",
        "stockinTime": "20180410",
        "upstreamorganizationCode": "123456",
        "contractNo": "dsahkflj43794",
        "goodsCode": "001001001001",
        "IPFS": "Qmdsfhuoefonfsdnncnsjf",
        "createdAt": "2018-04-11T05:33:23.832Z",
        "updatedAt": "2018-04-11T05:33:23.832Z",
        "id": "5acd9e23c8df950620674b2e"
        }
    ]
}
```

<a id="/stockIn/update"></a>
- [x] [回到顶部](#top)
#### 3.更新入库信息
##### 接口地址
```
POST /stockIn/update
```
##### 接口作用：

```
企业更新入库信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y
reservoirName|string|仓库名称|N

##### input:
```
{
  "id":"5acae874ae906d3604cdd3be",
  "stockinNo": "123"
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
        "socialcreditCode": "1234567",
        "stockinidentificationCode": "123400100100100120180410",
        "stockinNo": "123",
        "variety": "小麦",
        "grade": "二级",
        "production": "黑龙江",
        "producingYear": "2018",
        "stockinCount": "10000",
        "packing": "包装",
        "carriageType": "汽车",
        "carriageNo": "34hhjk8",
        "stockinTime": "20180410",
        "upstreamorganizationCode": "123456",
        "contractNo": "dsahkflj43794",
        "goodsCode": "001001001001",
        "IPFS": "Qmdsfhuoefonfsdnncnsjf",
        "createdAt": "2018-04-11T05:33:23.832Z",
        "updatedAt": "2018-04-11T05:33:23.832Z",
        "id": "5acd9e23c8df950620674b2e"
        }
    ]
}
```
<a id="/stockIn/find"></a>
- [x] [回到顶部](#top)
#### 4.查找入库信息
##### 接口地址
```
POST /stockIn/find
```
##### 接口作用：

```
企业查找入库信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
inType|string|入库类型（待办，自主）|Y

##### input:
```
{
  "socialcreditCode":"1234567"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1234567",
            "stockinidentificationCode": "123400100100100120180410",
            "stockinNo": "shichangxue",
            "variety": "小麦",
            "grade": "二级",
            "production": "黑龙江",
            "producingYear": "2018",
            "stockinCount": "10000",
            "packing": "包装",
            "carriageType": "汽车",
            "carriageNo": "34hhjk8",
            "stockinTime": "20180410",
            "upstreamorganizationCode": "123456",
            "contractNo": "dsahkflj43794",
            "goodsCode": "001001001001",
            "IPFS": "Qmdsfhuoefonfsdnncnsjf",
            "createdAt": "2018-04-11T05:33:23.832Z",
            "updatedAt": "2018-04-11T05:33:23.832Z",
            "id": "5acd9e23c8df950620674b2e"
        }
    ]
}
```
### 企业出库管理
<a id="/stockOut/add"></a>
- [x] [回到顶部](#top)
#### 1.添加出库信息
##### 接口地址
```
POST /stockOut/add
```
##### 接口作用：

```
企业添加出库信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
stockoutNo|string|入库识别码|Y
variety|string|种类|Y
grade|string|等级|Y
production|string|产地|Y
producingYear|string|生产年份|Y
stockoutCount|string|入库数量|Y
packing|string|包装方式（枚举：包装，散装）|Y
carriageType|string|运输类型（枚举：汽车，船舶）|Y
carriageNo|string|车号／船号|Y
driverName|string|司机姓名|Y
driverTele|string|司机电话|Y
stockoutTime|string|入库时间|Y
carriage|string|运输企业社会信用代码|Y
carriageName|string|运输企业名称|Y
waybillNo|string|运单号|Y
downstreamorganizationCode|string|下游企业社会信用代码|Y
downstreamcompanyName|string|下游企业名称|Y
contractNo|string|合同号|Y
goodsCode|string|货位编码|Y
IPFS|string|上传至ipfs的hash|Y
##### input:
```
{
	"socialcreditCode":"1234567",
	"stockoutNo":"1234001001001001220180410",
	"variety":"小麦",
	"grade":"二级",
	"production":"黑龙江",
	"producingYear":"2018",
	"stockoutCount":"10000",
	"packing":"包装",
	"carriageType":"汽车",
	"carriageNo":"34hhjk8",
	"stockoutTime":"20180410",
	"carriage":"123456",
	"carriageName":"dsahkflj43794",
	"waybillNo":"123",
	"downstreamorganizationCode":"001001001001",
	"downstreamcompanyName":"Qmdsfhuoefonfsdnncnsjf",
	"contractNo":"dsahkflj43794",
	"goodsCode":"001001001001",
    "IPFS":"dshkljauefsdg"
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1234567",
        "stockoutNo": "1234001001001001220180410",
        "variety": "小麦",
        "grade": "二级",
        "production": "黑龙江",
        "producingYear": "2018",
        "stockoutCount": "10000",
        "packing": "包装",
        "carriageType": "汽车",
        "carriageNo": "34hhjk8",
        "stockoutTime": "20180410",
        "carriage": "123456",
        "carriageName": "dsahkflj43794",
        "waybillNo": "123",
        "downstreamorganizationCode": "001001001001",
        "downstreamcompanyName": "Qmdsfhuoefonfsdnncnsjf",
        "contractNo": "dsahkflj43794",
        "goodsCode": "001001001001",
        "IPFS":"dshkljauefsdg",
        "createdAt": "2018-04-11T05:59:00.616Z",
        "updatedAt": "2018-04-11T05:59:00.616Z",
        "id": "5acda424c8df950620674b2f"
    }
}
```

<a id="/stockOut/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除出库信息
##### 接口地址
```
POST /stockOut/delete
```
##### 接口作用：

```
企业删除出库信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y

##### input:
```
{
  "id":"5acd946cc8df950620674b29"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
        "socialcreditCode": "1234567",
        "stockoutNo": "1234001001001001220180410",
        "variety": "小麦",
        "grade": "二级",
        "production": "黑龙江",
        "producingYear": "2018",
        "stockoutCount": "10000",
        "packing": "包装",
        "carriageType": "汽车",
        "carriageNo": "34hhjk8",
        "stockoutTime": "20180410",
        "carriage": "123456",
        "carriageName": "dsahkflj43794",
        "waybillNo": "123",
        "downstreamorganizationCode": "001001001001",
        "downstreamcompanyName": "Qmdsfhuoefonfsdnncnsjf",
        "contractNo": "dsahkflj43794",
        "goodsCode": "001001001001",
        "IPFS":"dshkljauefsdg",
        "createdAt": "2018-04-11T05:59:00.616Z",
        "updatedAt": "2018-04-11T05:59:00.616Z",
        "id": "5acda424c8df950620674b2f"
        }
    ]
}
```

<a id="/stockOut/update"></a>
- [x] [回到顶部](#top)
#### 3.更新出库信息
##### 接口地址
```
POST /stockOut/update
```
##### 接口作用：

```
企业更新出库信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|删除编号|Y
reservoirName|string|仓库名称|N

##### input:
```
{
  "id":"5acae874ae906d3604cdd3be",
  "stockoutNo": "123"
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1234567",
            "stockoutNo": "1234001001001001220180410",
            "variety": "小麦",
            "grade": "一级",
            "production": "黑龙江",
            "producingYear": "2018",
            "stockoutCount": "10000",
            "packing": "包装",
            "carriageType": "汽车",
            "carriageNo": "34hhjk8",
            "stockoutTime": "20180410",
            "carriage": "123456",
            "carriageName": "dsahkflj43794",
            "waybillNo": "123",
            "downstreamorganizationCode": "001001001001",
            "downstreamcompanyName": "Qmdsfhuoefonfsdnncnsjf",
            "contractNo": "dsahkflj43794",
            "goodsCode": "001001001001",
            "createdAt": "2018-04-11T05:59:00.616Z",
            "updatedAt": "2018-04-11T06:12:47.615Z",
            "id": "5acda424c8df950620674b2f"
        }
    ]
}
```
<a id="/stockOut/find"></a>
- [x] [回到顶部](#top)
#### 4.查找出库信息
##### 接口地址
```
POST /stockOut/find
```
##### 接口作用：

```
企业查找出库信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y

##### input:
```
{
  "socialcreditCode":"1234567"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1234567",
            "stockoutNo": "1234001001001001220180410",
            "variety": "小麦",
            "grade": "二级",
            "production": "黑龙江",
            "producingYear": "2018",
            "stockoutCount": "10000",
            "packing": "包装",
            "carriageType": "汽车",
            "carriageNo": "34hhjk8",
            "stockoutTime": "20180410",
            "carriage": "123456",
            "carriageName": "dsahkflj43794",
            "waybillNo": "123",
            "downstreamorganizationCode": "001001001001",
            "downstreamcompanyName": "Qmdsfhuoefonfsdnncnsjf",
            "contractNo": "dsahkflj43794",
            "goodsCode": "001001001001",
            "createdAt": "2018-04-11T05:59:00.616Z",
            "updatedAt": "2018-04-11T05:59:00.616Z",
            "id": "5acda424c8df950620674b2f"
        }
    ]
}
```

### 七.质检信息管理
<a id="/QCInfo/add"></a>
- [x] [回到顶部](#top)
#### 1.添加质检信息
##### 接口地址
```
POST /QCInfo/add
```
##### 接口作用：

```
质检企业添加货位质检信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|质检企业社会信用代码|Y
companyName|string|质检企业名称|Y
checksocialcreditCode|string|抽检企业社会信用代码|Y
checkcompanyName|string|抽检企业名称|Y
checkgoodsCode|string|抽检货位编码|Y
reportNumber|string|报告编号|Y
taskSource|string|任务来源|Y
sampleName|string|样品名称|Y
sampleNo|string|样品编号|Y
taskType|string|任务类型|Y
client|json|委托单位|Y
samplingInfo|json|抽样情况|Y
sampleInfo|string|样品概况|Y
sampleLog|string|抽样日志|Y
reportDate|string|报告日期|Y
testStandard|string|检验依据|Y
testResult|string|检验结果|Y
testConclusion|string|检验结论|Y
instruction|string|说明|Y
qualityIndex|json|质量指标|Y
characterIndex|json|品质指标|Y
healthIndex|json|卫生指标|Y
isComplete|boolean|是否保存（true：之后不可编辑false（默认）：不修改此字段，质检信息可编辑）|Y
##### input:
```
{
	"socialcreditCode":"1",
	"companyName":"1",
	"checksocialcreditCode":"1",
	"checkcompanyName":"1",
	"checkgoodsCode":"1",
	"reportNumber":"1",
	"taskSource":"1",
	"sampleName":"1",
	"sampleNo":"1",
	"taskType":"1",
	"client":{},
	"samplingInfo":{"sampleMethod":"简单抽样","sampleDate":"2018-04-15"},
	"sampleInfo":{},
	"sampleLog":"1",
	"reportDate":"1",
	"testStandard":"1",
	"testResult":"1",
	"testConclusion":"1",
	"instruction":"1",
	"qualityIndex":{},
	"characterIndex":{},
	"healthIndex":{},
	"isComplete":false
}
```
##### output:
```
{
    "code": 1,
    "message": "创建成功",
    "data": {
        "socialcreditCode": "1",
        "companyName": "1",
        "checksocialcreditCode": "1",
        "checkcompanyName": "1",
        "checkgoodsCode": "2",
        "reportNumber": "1",
        "taskSource": "1",
        "sampleName": "1",
        "sampleNo": "1",
        "taskType": "1",
        "client": {},
        "samplingInfo": {
            "sampleMethod": "简单抽样",
            "sampleDate": "2018-04-15"
        },
        "sampleInfo": {},
        "sampleLog": "1",
        "reportDate": "1",
        "testStandard": "1",
        "testResult": "1",
        "testConclusion": "1",
        "instruction": "1",
        "qualityIndex": {},
        "characterIndex": {},
        "healthIndex": {},
        "isComplete": false,
        "createdAt": "2018-04-15T12:25:55.530Z",
        "updatedAt": "2018-04-15T12:25:55.530Z",
        "id": "5ad344d3ba2ff5880b5d1abd"
    }
}
```
<a id="/QCInfo/delete"></a>
- [x] [回到顶部](#top)
#### 2.删除质检信息
##### 接口地址
```
POST /QCInfo/delete
```
##### 接口作用：

```
质检企业删除货位质检信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|id|Y
##### input:
```
{
	"id":"5ad33f55bdddc0230b351819"
}
```
##### output:
```
{
    "code": 1,
    "message": "删除成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "1",
            "checksocialcreditCode": "1",
            "checkcompanyName": "1",
            "checkgoodsCode": "1",
            "reportNumber": "1",
            "taskSource": "1",
            "sampleName": "1",
            "sampleNo": "1",
            "taskType": "1",
            "client": {},
            "samplingInfo": {},
            "sampleInfo": {},
            "sampleLog": "1",
            "reportDate": "1",
            "testStandard": "1",
            "testResult": "1",
            "testConclusion": "1",
            "instruction": "1",
            "qualityIndex": {},
            "characterIndex": {},
            "healthIndex": {},
            "isComplete": false,
            "createdAt": "2018-04-15T12:02:29.699Z",
            "updatedAt": "2018-04-15T12:02:29.699Z",
            "id": "5ad33f55bdddc0230b351819"
        }
    ]
}
```
<a id="/QCInfo/update"></a>
- [x] [回到顶部](#top)
#### 3.更新质检信息
##### 接口地址
```
POST /QCInfo/update
```
##### 接口作用：

```
质检企业更新货位质检信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
id|string|id|Y
##### input:
```
{
	"id":"5ad33f55bdddc0230b351819",
    "":""(更新的字段)
}
```
##### output:
```
{
    "code": 1,
    "message": "更新成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "1",
            "checksocialcreditCode": "1",
            "checkcompanyName": "1",
            "checkgoodsCode": "1",
            "reportNumber": "1",
            "taskSource": "1",
            "sampleName": "1",
            "sampleNo": "1",
            "taskType": "1",
            "client": {},
            "samplingInfo": {},
            "sampleInfo": {},
            "sampleLog": "1",
            "reportDate": "1",
            "testStandard": "1",
            "testResult": "1",
            "testConclusion": "1",
            "instruction": "1",
            "qualityIndex": {},
            "characterIndex": {},
            "healthIndex": {},
            "isComplete": false,
            "createdAt": "2018-04-15T12:02:29.699Z",
            "updatedAt": "2018-04-15T12:02:29.699Z",
            "id": "5ad33f55bdddc0230b351819"
        }
    ]
}
```
<a id="/QCInfo/find"></a>
- [x] [回到顶部](#top)
#### 4.查找质检信息
##### 接口地址
```
POST /QCInfo/find
```
##### 接口作用：

```
质检企业查找货位质检信息
```
接口参数

参数名 | 类型 |参数解释 | 是否必选（Y必选N可选）
---|---|---|---
socialcreditCode|string|社会信用代码|Y
##### input:
```
{
	"socialcreditCode":"5ad33f55bdddc0230b351819"
}
```
##### output:
```
{
    "code": 1,
    "message": "查找成功",
    "data": [
        {
            "socialcreditCode": "1",
            "companyName": "1",
            "checksocialcreditCode": "1",
            "checkcompanyName": "1",
            "checkgoodsCode": "1",
            "reportNumber": "1",
            "taskSource": "1",
            "sampleName": "1",
            "sampleNo": "1",
            "taskType": "1",
            "client": {},
            "samplingInfo": {},
            "sampleInfo": {},
            "sampleLog": "1",
            "reportDate": "1",
            "testStandard": "1",
            "testResult": "1",
            "testConclusion": "1",
            "instruction": "1",
            "qualityIndex": {},
            "characterIndex": {},
            "healthIndex": {},
            "isComplete": false,
            "createdAt": "2018-04-15T12:02:29.699Z",
            "updatedAt": "2018-04-15T12:02:29.699Z",
            "id": "5ad33f55bdddc0230b351819"
        }
    ]
}
```
### 八.监管企业
<a id="/supervise/find"></a>
- [x] [回到顶部](#top)
#### 查询所有企业
##### 接口地址：
```
POST /supervise/find
```
接口作用：
```
查询所有企业注册的信息
```
##### output:
```
{
    "code": 1,
    "message": "注册企业信息",
    "data": {
        "carriage": [
            {
                "socialcreditCode": "fuzhouwuliua123456",
                "companyName": "福州物流企业A",
                "organizationCode": "liua12345",
                "password": "123456",
                "companyType": "运输企业",
                "companyLinkman": "王二",
                "companyTele": "18811391890",
                "address": "福建省福州市",
                "lealPerson": "张三",
                "legalID": "531819198706171829",
                "legalTele": "13267890987",
                "status": "待审核",
                "createdAt": "2018-04-11T06:18:04.033Z",
                "updatedAt": "2018-04-11T06:18:04.033Z",
                "id": "5acda89cc8df950620674b31"
            },
            {
                "socialcreditCode": "sanmingwuliuA12345",
                "companyName": "三明物流企业A",
                "organizationCode": "uliuA1234",
                "password": "123456",
                "companyType": "运输企业",
                "companyLinkman": "李四",
                "companyTele": "18811391890",
                "address": "福建省三明市",
                "lealPerson": "张三",
                "legalID": "531819198706171829",
                "legalTele": "13516789098",
                "status": "待审核",
                "createdAt": "2018-04-11T07:19:22.276Z",
                "updatedAt": "2018-04-11T07:19:22.276Z",
                "id": "5acdb6fac8df950620674b3c"
            },
            {
                "socialcreditCode": "fuzhouwuliuB123456",
                "companyName": "福州物流企业B",
                "organizationCode": "liuB12345",
                "password": "123456",
                "companyType": "运输企业",
                "companyLinkman": "李四",
                "companyTele": "18811391890",
                "address": "福建省福州市",
                "lealPerson": "张三",
                "legalID": "531819198706171829",
                "legalTele": "13516789098",
                "status": "待审核",
                "createdAt": "2018-04-11T07:55:07.103Z",
                "updatedAt": "2018-04-11T07:55:07.103Z",
                "id": "5acdbf5bbe54251c4cd02c8f"
            },
            {
                "socialcreditCode": "xiamenwuliuA123456",
                "companyName": "厦门物流企业A",
                "organizationCode": "liuA12345",
                "password": "123456",
                "companyType": "运输企业",
                "companyLinkman": "李四",
                "companyTele": "18811391890",
                "address": "福建省厦门市",
                "lealPerson": "张三",
                "legalID": "531819198706171829",
                "legalTele": "13516789098",
                "status": "待审核",
                "createdAt": "2018-04-11T10:42:43.136Z",
                "updatedAt": "2018-04-11T10:42:43.136Z",
                "id": "5acde6a3be54251c4cd02c98"
            },
            {
                "socialcreditCode": "xiamenyunshuB12345",
                "companyName": "厦门运输企业B",
                "organizationCode": "nshuB1234",
                "password": "123456",
                "companyType": "运输企业",
                "companyLinkman": "李敬",
                "companyTele": "15910765432",
                "address": "福建省厦门市",
                "lealPerson": "王磊",
                "legalID": "531819198306171829",
                "legalTele": "13817098765",
                "status": "待审核",
                "createdAt": "2018-04-12T12:48:14.802Z",
                "updatedAt": "2018-04-12T12:48:14.802Z",
                "id": "5acf558e02d3fd6a6f7afd5f"
            },
            {
                "socialcreditCode": "quanzhouyunshuC123",
                "companyName": "泉州运输企业A",
                "organizationCode": "yunshuC12",
                "password": "123456",
                "companyType": "运输企业",
                "companyLinkman": "李军",
                "companyTele": "18617895431",
                "address": "福建省泉州市",
                "lealPerson": "冯清远",
                "legalID": "531819198706171829",
                "legalTele": "13910651342",
                "status": "待审核",
                "createdAt": "2018-04-16T11:55:35.906Z",
                "updatedAt": "2018-04-16T11:55:35.906Z",
                "id": "5ad48f371539e13aaed43453"
            }
        ],
        "processor": [
            {
                "socialcreditCode": "1",
                "companyName": "百度1",
                "organizationCode": "百度1",
                "password": "password",
                "companyType": "companyType",
                "companyLinkman": "123343",
                "companyTele": "organizationCode",
                "address": "百度3",
                "lealPerson": "123343",
                "legalID": "organizationCode",
                "legalTele": "百度3",
                "status": "待审核",
                "createdAt": "2018-04-11T05:22:41.561Z",
                "updatedAt": "2018-04-11T05:22:41.561Z",
                "id": "5acd9ba1c8df950620674b2c"
            },
            {
                "code": 1,
                "message": "创建成功！",
                "data": {
                    "socialcreditCode": "1",
                    "companyName": "美团",
                    "organizationCode": "美团",
                    "password": "password",
                    "companyType": "companyType",
                    "companyLinkman": "123343",
                    "companyTele": "organizationCode",
                    "address": "望京",
                    "lealPerson": "123343",
                    "legalID": "organizationCode",
                    "legalTele": "美团",
                    "status": "待审核",
                    "createdAt": "2018-04-11T05:22:41.561Z",
                    "updatedAt": "2018-04-11T05:22:41.561Z",
                    "id": "5acd9ba12345650620674b2c"
                },
                "createdAt": "2018-04-11T05:24:32.867Z",
                "updatedAt": "2018-04-11T05:24:32.867Z",
                "id": "5acd9c10c8df950620674b2d"
            },
            {
                "socialcreditCode": "sanmingjiagongA123",
                "companyName": "福州加工企业A",
                "organizationCode": "iagongA12",
                "password": "123456",
                "companyType": "小麦加工企业",
                "companyLinkman": "张华",
                "companyTele": "13567893456",
                "address": "福建省三明市",
                "lealPerson": "李静",
                "legalID": "531819198706171829",
                "legalTele": "18818906543",
                "status": "待审核",
                "createdAt": "2018-04-12T12:17:13.138Z",
                "updatedAt": "2018-04-12T12:17:13.138Z",
                "id": "5acf4e4902d3fd6a6f7afd54"
            },
            {
                "socialcreditCode": "xiamenjiagongB1234",
                "companyName": "厦门加工企业B",
                "organizationCode": "agongB123",
                "password": "123456",
                "companyType": "小麦加工企业",
                "companyLinkman": "李小花",
                "companyTele": "15678900987",
                "address": "福建省厦门市",
                "lealPerson": "刘明",
                "legalID": "531819198707231829",
                "legalTele": "13267890987",
                "status": "待审核",
                "createdAt": "2018-04-12T12:46:41.037Z",
                "updatedAt": "2018-04-12T12:46:41.037Z",
                "id": "5acf553102d3fd6a6f7afd5e"
            },
            {
                "socialcreditCode": "quanzhoujiagongB12",
                "companyName": "泉州加工企业B",
                "organizationCode": "jiagongB1",
                "password": "123456",
                "companyType": "大米加工企业",
                "companyLinkman": "张云龙",
                "companyTele": "13516741321",
                "address": "福建省泉州市",
                "lealPerson": "杨乐",
                "legalID": "531819198706171829",
                "legalTele": "18817895643",
                "status": "待审核",
                "createdAt": "2018-04-16T11:53:57.720Z",
                "updatedAt": "2018-04-16T11:53:57.720Z",
                "id": "5ad48ed51539e13aaed43452"
            }
        ],
        "storages": [
            {
                "socialcreditCode": "12",
                "companyName": "百度2",
                "organizationCode": "百度2",
                "password": "123",
                "companyType": "companyType",
                "companyLinkman": "123343",
                "companyTele": "organizationCode",
                "address": "百度3",
                "lealPerson": "123343",
                "legalID": "organizationCode",
                "legalTele": "百度3",
                "status": "待审核",
                "createdAt": "2018-04-10T12:47:25.727Z",
                "updatedAt": "2018-04-10T12:47:25.727Z",
                "id": "5accb25dc8df950620674b20"
            },
            {
                "socialcreditCode": "1",
                "companyName": "百度1",
                "organizationCode": "百度1",
                "password": "password",
                "companyType": "companyType",
                "companyLinkman": "123343",
                "companyTele": "organizationCode",
                "address": "百度3",
                "lealPerson": "123343",
                "legalID": "organizationCode",
                "legalTele": "百度3",
                "status": "待审核",
                "createdAt": "2018-04-11T05:20:18.759Z",
                "updatedAt": "2018-04-11T05:20:18.759Z",
                "id": "5acd9b12c8df950620674b2b"
            },
            {
                "socialcreditCode": "fuzhoucangchuA1234",
                "companyName": "福州仓储企业A",
                "organizationCode": "ngchuA123",
                "password": "123456",
                "companyType": "仓储企业",
                "companyLinkman": "李四",
                "companyTele": "18811391890",
                "address": "福建省福州市",
                "lealPerson": "张三",
                "legalID": "531819198706171829",
                "legalTele": "13516789098",
                "status": "待审核",
                "createdAt": "2018-04-11T07:46:32.347Z",
                "updatedAt": "2018-04-11T07:46:32.347Z",
                "id": "5acdbd58be54251c4cd02c8d"
            },
            {
                "socialcreditCode": "fuzhoucangchuB1234",
                "companyName": "福州仓储企业B",
                "organizationCode": "ngchuB123",
                "password": "123456",
                "companyType": "仓储企业",
                "companyLinkman": "李四",
                "companyTele": "18811391890",
                "address": "福建省福州市",
                "lealPerson": "张三",
                "legalID": "531819198706171829",
                "legalTele": "13516789098",
                "status": "待审核",
                "createdAt": "2018-04-11T07:53:48.650Z",
                "updatedAt": "2018-04-11T07:53:48.650Z",
                "id": "5acdbf0cbe54251c4cd02c8e"
            },
            {
                "socialcreditCode": "xiamencangchuB4321",
                "companyName": "厦门仓储企业B",
                "organizationCode": "ngchuB432",
                "password": "123456",
                "companyType": "仓储企业",
                "companyLinkman": "李先云",
                "companyTele": "18811391890",
                "address": "福建省厦门市",
                "lealPerson": "张文文",
                "legalID": "532189198505161890",
                "legalTele": "18818906543",
                "status": "待审核",
                "createdAt": "2018-04-12T12:44:50.938Z",
                "updatedAt": "2018-04-12T12:44:50.938Z",
                "id": "5acf54c202d3fd6a6f7afd5d"
            },
            {
                "socialcreditCode": "quanzhoucangchuA12",
                "companyName": "泉州仓储企业A",
                "organizationCode": "cangchuA1",
                "password": "123456",
                "companyType": "仓储企业",
                "companyLinkman": "王勇",
                "companyTele": "13267891456",
                "address": "福建省泉州市",
                "lealPerson": "李贤禹",
                "legalID": "531819198706171829",
                "legalTele": "15617891455",
                "status": "待审核",
                "createdAt": "2018-04-16T11:51:39.066Z",
                "updatedAt": "2018-04-16T11:51:39.066Z",
                "id": "5ad48e4b1539e13aaed43451"
            }
        ]
    }
}
```