import axios from 'axios';
import { MessageBox } from 'mint-ui';
const METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};
const RESPONSE_CODE = {
    SUCCESS: 200,
    SESSION_EXPIRE: 401,
    NO_VIEW_RECORD_PERMISSION: 424
};
const config = {
    timeout: 20000,
    responseType: 'json'
    // transformRequest: [(data) => {
    //     console.log('124');
    //     data = JSON.stringify(data);
    //     return data;
    // }]
};
const service = axios.create(config);
service.interceptors.request.use((option) => {
    const sessionId = localStorage.getItem('sessionId');
    option.headers['user-sessionId'] = sessionId;
    // option.headers['Content-type'] = jsonType ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded';
    let baseUrl = 'http://rap2api.taobao.org/app/mock';
    option.url = baseUrl + option.url;
    return option;
},
(error) => Promise.reject(error));

export const post = (url, params, headers = {}, method = METHODS.POST, jsonType = true, errorTipType = 'error') => {
    let options = { headers: {} };
    options.data = JSON.stringify(params);
    options.headers['Content-type'] = jsonType ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded';
    return service({ url, method, ...options })
        .then(checkCode(errorTipType))
        .catch((e) => checkError(e));
};
export const get = (url, params, headers) => {
    let options = { headers: { 'Content-Type': 'application/json;charset=UTF-8' } };
    // options.data = params;
    return service({ method: METHODS.GET, url, params, ...options })
        .then(checkCode(errorTipType))
        .catch((e) => checkError(e));
};

// 检查有返回时
const checkCode = (errorTipType) => (res) => {
    if (res.status !== RESPONSE_CODE.SUCCESS) {
        console.log('service error');
        return window.Promise.reject('Server error occurred');
    }
    let data = res.data;
    return new Promise((resolve, reject) => {
        if (res && data.code === RESPONSE_CODE.SUCCESS) {
            resolve(data);
        } else if (res && data.code === RESPONSE_CODE.NO_VIEW_RECORD_PERMISSION) {
            MessageBox({
                title: '提示',
                message: '您没有访问权限',
                showCancelButton: false
            });
            window.location.href = 'http://baidu.com/';
        } else {
            reject(data);
        }
    });
};
// 检查错误时
const checkError = (e) => {
    if (!e.code && !navigator.onLine) {
        MessageBox({
            title: '提示',
            message: '您没有访问权限',
            showCancelButton: false
        });
    } else {
        MessageBox({
            title: '提示',
            message: '网络超时，请重试',
            showCancelButton: false
        });
    }
    return new Promise((resolve, reject) => {
        reject(e);
    });
};
