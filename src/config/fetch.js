import React from 'react';
import { Toast } from 'antd-mobile-rn';
//一个 Promise 就是一个代表了异步操作最终完成或者失败的对象
const baseURL = 'http://106.14.155.124/api/';
export default class HttpUtils {
    static get = (url) => {
        return new Promise(((resolve, reject) => {//resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）
            fetch(baseURL + url)//默认是GET
                .then(response => response.json())//把数据解析成json格式,然后取出
                .then(result => {
                    resolve(result);//表示完成
                })
                .catch(error => {
                    reject(error);//表示失败
                })
        })
        )
    };
    static post = (url, data, loading = true) => {
        if (loading === true) {
            Toast.loading('请稍等...', 0);
        }
        let params = {
            user_id: global.userInfo && global.userInfo.id,
            ...data
        }
        console.log('--------------', url, params, '---------------------------')
        return new Promise(((resolve, reject) => {
            fetch(baseURL + url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',//告诉服务器，我们能接受json格式的返回类型，
                    'Content-Type': 'application/json;charset=utf-8' //告诉服务器，我们提交的数据类型
                },
                body: JSON.stringify(params),//(把你想提交得数据序列化为json字符串类型，然后提交)body中的数据就是我们需要向服务器提交的数据,比如用户名,密码等
            }).then(response => response.json())//返回 服务器处理的结果
                .then(result => {
                    Toast.hide();
                    console.log(result, 'resultresult')
                    resolve(result);
                })
                .catch(error => {
                    Toast.hide();
                    reject(error);
                })
        }))
    }
}
//数据转换成字符串 JSON.stringify(params)      //将数据JSON化 JSON.parse(responseJSON)