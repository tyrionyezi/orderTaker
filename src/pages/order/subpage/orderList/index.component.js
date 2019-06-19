import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
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
import ListComponent from './../../../components/listComponent/index.component';
import _state from './index.state';


@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        let data = this.props.navigation.getParam('data', {});
        let type = this.props.navigation.getParam('type', 1);
        _state.initParams(data, type);
    }

    goComfirm = (item) => {
        this.props.navigation.navigate(item.path, {
            data: item,
            refresh: _state.getHasOrderList,
        })
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
            { text: '确定', onPress: _state.cancelOrder.bind(this, item) },
        ]);
    }

    componentWillUnmount() {
        _state.orderList = [];
    }

    render() {
        return (
            <View style={_style.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <ListComponent
                        {...this.props}
                        data={toJS(_state.orderList)}
                        onLongPress={this.delete}
                        onClick={this.goComfirm}
                    />
                </ScrollView>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        backgroundColor: '#dcd8d84d',
    }
})