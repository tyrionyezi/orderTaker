import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer, TabBarBottom } from 'react-navigation';
const home = require('./../asset/home.png');
const game = require('./../asset/game.png');
const mine = require('./../asset/mine.png');
const order = require('./../asset/order.png');
import Home from './../../src/pages/home/index.component';
import Game from './../../src/pages/halllobby/index.component';
import Order from './../../src/pages/order/index.component';
import Mine from './../../src/pages/mine/index.component';

export default createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            tabBarLabel: '首页',
            tabBarIcon: <Image style={_style.barIcon} source={home} />
        })
    },
    Game: {
        screen: Game,
        navigationOptions: () => ({
            tabBarLabel: '游戏大厅',
            tabBarIcon: <Image style={_style.barIcon} source={game} />,
        })
    },
    Order: {
        screen: Order,
        navigationOptions: () => ({
            tabBarLabel: '订单',
            tabBarIcon: <Image style={_style.barIcon} source={order} />,
        })
    },
    Mine: {
        screen: Mine,
        navigationOptions: () => ({
            tabBarLabel: '我的',
            tabBarIcon: <Image style={_style.barIcon} source={mine} />,
        })
    }
}, {
        //首次加载时显示的页面
        initialRouteName: "Home",
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            //当前选中的tab的文本颜色和图标颜色
            activeTintColor: '#000',
            //当前选中tab的背景颜色
            activeBackgroundColor: "#f5f5f5",
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#666',
            //当前未选中tab的背景颜色
            // inactiveBackgroundColor: "#fff",
            //是否显示tab的文字
            showLabel: true,
            // 是否显示tab的图标
            showIcon: true,
            //tab bar的样式
            style: {},
            //tab的样式对象。
            tabStyle: {
                // backgroundColor: '#000',
                // borderTopColor: '#ccc',
            }
        },
        //是否在切换tab页时使用动画
        animationEnabled: true,
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否懒加载
        lazy: true,
    });

// export default createAppContainer(TabNavigator);


const _style = StyleSheet.create({
    barIcon: {
        height: 25,
        width: 25
    },
})
