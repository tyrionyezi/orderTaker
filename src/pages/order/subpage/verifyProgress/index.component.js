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
import { toJS } from 'mobx';
import Progress from './../../components/progress/index.component';
import { progressData } from './../../index.data';
import moment from 'moment';
import _state from './index.state';


@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        let data = this.props.navigation.state.params;
        _state.initParams(data);
    }


    componentDidMount() {
        _state.getHasOrderList();
    }

    render() {
        let data = toJS(_state.orderInfo)
        let statusTxt = {
            '0': '待审核',
            '1': '审核通过',
        }
        return (
            <View style={_style.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={_style.infoBox}>
                        <View style={_style.itemBox}>
                            <Text>任务提交时间</Text>
                            <Text>{moment(data.ctime).format('YYYY/MM/DD')}</Text>
                        </View>
                        <View style={_style.itemBox}>
                            <Text>买手姓名</Text>
                            <Text>{data.name}</Text>
                        </View>
                        <View style={_style.itemBox}>
                            <Text>订单号</Text>
                            <Text>{data.serial}</Text>
                        </View>
                        <View style={_style.itemBox}>
                            <Text>支付宝商户订单号</Text>
                            <Text>{data.alipay_order}</Text>
                        </View>
                        <View style={_style.itemBox}>
                            <Text>垫付金额</Text>
                            <Text>{data.price}</Text>
                        </View>
                        <View style={_style.itemBox}>
                            <Text>佣金</Text>
                            <Text>{data.charge}</Text>
                        </View>
                        <View style={_style.itemBox}>
                            <Text>审核状态</Text>
                            <Text>{statusTxt[data.status]}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        backgroundColor: '#dcd8d84d',
    },
    infoBox: {
    },
    itemBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        marginBottom: 1.5,
        paddingHorizontal: 15
    }
})