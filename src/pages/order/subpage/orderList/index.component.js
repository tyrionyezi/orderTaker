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
import { Modal } from 'antd-mobile-rn';
import { toJS } from 'mobx';
import List from './../../../components/list/index.component';
import _state from './index.state';


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

    delete = (item) => {
        Modal.alert('取消订单', '', [
            {
                text: '取消',
                onPress: () => console.log('cancel'),
                style: 'cancel',
            },
            { text: '确定', onPress: _state.cancelOrder(item) },
        ]);
    }

    componentWillUnmount() {
        _state.orderList = [];
    }

    render() {
        return (
            <View style={_style.container}>
                <List
                    {...this.props}
                    data={toJS(_state.orderList)}
                    onLongPress={this.delete}
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