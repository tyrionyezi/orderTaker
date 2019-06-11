import React, { Component } from 'react';
import { Easing, Animated, Image } from 'react-native';
import Login from './../pages/login/index.component';
import GuideList from './../pages/guideList/index.component';
import HelpDoc from './../pages/helpDoc/index.component';
import GoodsList from './../pages/goodsList/index.component';
import Accont from './../pages/account/index.component';
import Authentiacion from './../pages/mine/subpage/authentication/index.component';
import BankCard from './../pages/mine/subpage/bankCard/index.component';
import AccountInfo from './../pages/mine/subpage/accountInfo/index.component';
import UpdatePassword from './../pages/mine/subpage/updatePassoword/index.component';
import SetAccount from './../pages/goodsList/subPage/setAccount/index.compoent';
export default Routes = {
    Login: {
        screen: Login,
    },
    GuideList: {
        screen: GuideList,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title,
        }),
    },
    HelpDoc: {
        screen: HelpDoc
    },
    GoodsList: {
        screen: GoodsList,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title,
        }),
    },
    setAccount: {
        screen: SetAccount,
        navigationOptions: ({ navigation }) => ({
            title: '修改账号顺序',
        }),
    },
    Accont: {
        screen: Accont,
        navigationOptions: {
            title: '添加账号',
        }
    },
    authentiacion: {
        screen: Authentiacion,
        navigationOptions: ({ navigation }) => ({
            title: '实名认证',
        }),
    },
    bankCard: {
        screen: BankCard,
        navigationOptions: ({ navigation }) => ({
            title: '银行账户',
        }),
    },
    accountInfo: {
        screen: AccountInfo,
        navigationOptions: ({ navigation }) => ({
            title: '账户信息',
        }),
    },
    updatePassword: {
        screen: UpdatePassword,
        navigationOptions: ({ navigation }) => ({
            title: '修改密码',
        }),
    }

}