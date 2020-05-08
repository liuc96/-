2 登录注册

***\*1.1 密码登录\****

请求方式：POST

接口地址：https://api.loophot.com/more/login_normal

参数：

| 参数名称 | 类型   | 说明     | 是非必填 | 默认值 |
| -------- | ------ | -------- | -------- | ------ |
| phone    | string | 手机号码 | YES      | 无     |
| password | string | 密码     | YES      | 无     |

 

错误码：1 参数错误 2账号或密码错误

返回示例

```json
{
    "code": 0,
    "data": {
        "userinfo": {
            "user_id": "6",
            "nickname": "小星",
            "avatar": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqjR2c1rJmtu0jwNqv75mYrXyfmfrdoBGJVNIiat0pDUfEmTXJ7APG2S1Gy59L8IEOclR4P4ztPZGQ/132",
            "created_at": "2018-07-27 12:01:14",
            "country": "斯里兰卡",
            "province": "",
            "city": ""
        },
        "shops": [
            {
                "shop_id": "52",
                "name": "圣玛莉婚庆礼仪机构"
            },
...
        ]
    }
}
```



***\*1.2 短信登录\****

请求方式：POST	

接口地址：https://api.loophot.com/more/login_msg

错误码： 1请求错误 2登录失败

参数：

| 参数名称 | 类型   | 说明       | 是非必填 | 默认值 |
| -------- | ------ | ---------- | -------- | ------ |
| phone    | string | 手机号码   | YES      | 无     |
| code     | string | 短信验证码 | YES      | 无     |



返回示例

```json
{
    "code": 0,
    "data": {
        "userinfo": {
            "user_id": "6",
            "nickname": "小星",
            "avatar": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqjR2c1rJmtu0jwNqv75mYrXyfmfrdoBGJVNIiat0pDUfEmTXJ7APG2S1Gy59L8IEOclR4P4ztPZGQ/132",
            "created_at": "2018-07-27 12:01:14",
            "country": "斯里兰卡",
            "province": "",
            "city": ""
        },
        "shops": [
            {
                "shop_id": "52",
                "name": "圣玛莉婚庆礼仪机构"
            },
...
        ]
    }
}
```

