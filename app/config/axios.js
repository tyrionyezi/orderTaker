import axios from 'axios';
import Qs from 'qs';
import {Toast} from 'antd-mobile-rn';
// import RootStore from '../config/stores';
import {Alert} from "react-native";
// const {initState} = RootStore;
// var CancelToken = axios.CancelToken;



// axios.defaults.withCredentials = true;
// if (Util.getLocalStorageInfo('KXTX_ACCESS_TOKEN')) {
//     axios.defaults.headers.common['Authorization'] = Util.getLocalStorageInfo('KXTX_ACCESS_TOKEN').accessToken;
// }
axios.defaults.timeout = 60000;
//请求拦截器
axios.interceptors.request.use((config) => {
   
    let {data, url, params} = config;
    return config;
}, (error) => {
    return Promise.reject(error);
});

//响应拦截器
let isLogin = true;
axios.interceptors.response.use((response) => {
    console.log(response);
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default axios;