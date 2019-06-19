import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    NativeModules,
    DeviceEventEmitter,
    Alert
} from 'react-native';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import List from './../../../components/listComponent/index.component';
import Tab from './../../../components/tab/index.component';
import _state from './index.state';

import { doneOrderTab } from './../../index.data';


@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        let data = this.props.navigation.getParam('data', {});
        let type = this.props.navigation.getParam('type', 1);
        _state.initParams(data, type);
    }


    componentDidMount() {
        _state.getUserInfo();
    }

    /**
     * 进取查看审核进度页面
     * @param
     */
    goVerifyProgress = (item) => {
        if (item.status == '3') {
            this.props.navigation.push('orderProgress', {
                data: item
            })
        }
    }

    render() {
        return (
            <View style={_style.container}>
                <Tab
                    data={doneOrderTab}
                    onClick={_state.setTabIndex}
                />
                <List
                    data={toJS(_state.orderList)}
                    onClick={this.goVerifyProgress}
                />
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        backgroundColor: '#dcd8d84d',
    }
})