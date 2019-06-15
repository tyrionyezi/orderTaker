import React, { Component } from 'react';
import asyncStorage from './config/storage';
import NavigationService from './config/NavigationService';
import { createAppContainer } from "react-navigation";
import routerStack from "./router/index.js";

const AppContainer = createAppContainer(routerStack);

global.storage = asyncStorage;
global.loginStatus = false,
    getLoginStatus = () => {
        storage.load({
            key: 'userInfo'
        }).then(res => {
            console.log('成功', res);
            global.loginStatus = true;
        }).catch(err => {
            console.log('失败', err);
        })
    }

getLoginStatus();

export default class App extends Component {
    // ...

    render() {
        return (
            <AppContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}