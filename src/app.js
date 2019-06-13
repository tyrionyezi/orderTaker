import React, { Component } from 'react';
import asyncStorage from './config/storage'
import { ToastAndroid, BackHandler, StatusBar } from 'react-native';
import { createAppContainer } from "react-navigation";
import routerStack from "./router/index.js";
export default createAppContainer(routerStack);

global.storage = asyncStorage;
global.loginStatus = false,
    getLoginStatus = () => {
        storage.load({
            key: 'loginInfo'
        }).then(res => {
            console.log('成功', res);
            global.loginStatus = true;
        }).catch(err => {
            console.log('失败', err);
        })
    }

getLoginStatus();