> **粮食溯源数据库接口**
##### 基本接口地址：
```
http://101.200.32.35:1337/api
```
### 目录
---
一.仓储企业
- [x] 1.[仓储企业注册](#storages_regregister)
- [x] 2.[仓储企业注销](#storages_delete)
- [x] 3.[仓储企业更新](#storages_update)
- [x] 4.[仓储企业查找](#storages_find)
---
二.加工企业
- [x] 1.[加工企业注册](#processor_regregister)
- [x] 2.[加工企业注销](#processor_delete)
- [x] 3.[加工企业更新](#processor_update)
- [x] 4.[加工企业查找](#processor_find)
---
三.物流企业
- 企业管理
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






### 一.仓储企业
<a id="storages_regregister"></a>
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
<a id="processor_regregister"></a>
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
<a id="carriage_regregister"></a>
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

### 司机管理
<a id="carriage/driver/add"></a>
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
areaCode|string|电话区号|Y
driverTele|string|司机电话|Y
##### input:
```
{
  "socialcreditCode":"2",
  "driverName":"Lucy",
  "areaCode":"+86",
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
        "areaCode": "+86",
        "driverTele": "18811715625",
        "createdAt": "2018-04-09T02:32:04.724Z",
        "updatedAt": "2018-04-09T02:32:04.724Z",
        "id": "5acad0a4f11587d9033e35c3"
    }
}
```
<a id="carriage/driver/delete"></a>
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
            "areaCode": "+86",
            "driverTele": "18811715625",
            "createdAt": "2018-04-09T02:32:04.724Z",
            "updatedAt": "2018-04-09T02:32:04.724Z",
            "id": "5acad0a4f11587d9033e35c3"
        }
    ]
}
```
<a id="carriage/driver/update"></a>
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
areaCode|string|电话区号|N
carriageType|string|运力类型|N

##### input:
```
{
  "id":"5acad351ae906d3604cdd3bc",
  "areaCode":"+85"
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
            "areaCode": "+85",
            "driverTele": "18811715625",
            "createdAt": "2018-04-09T02:43:29.057Z",
            "updatedAt": "2018-04-09T02:43:43.837Z",
            "id": "5acad351ae906d3604cdd3bc"
        }
    ]
}
```
<a id="carriage/driver/find"></a>
#### 4.查找运力
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
            "areaCode": "+85",
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



