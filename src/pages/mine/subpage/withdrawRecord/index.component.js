import React, { Component } from 'react';
import moment from 'moment';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
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
const { height, width } = Dimensions.get('window');
import _state from './index.state';
import { toJS } from 'mobx';

@observer
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        _state.getUserInfo();
    }

    render() {
        let recordList = toJS(_state.recordList) || [];
        let status = {
            '0': '未审核',
            '1': '审核通过',
            '2': '审核失败',
        }
        console.log(recordList, 'rr')
        return (
            <View style={_style.contianer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {
                        recordList && recordList.map((item, index) => {
                            return (
                                <View key={`r${index}`} style={_style.itemBox}>
                                    <View style={_style.itemHead}>
                                        <Text style={_style.headTitle}>流水号：{item.serial}</Text>
                                        <Text style={_style.headTitle}>{moment(item.ctime).format('YYYY/MM/DD')}</Text>
                                    </View>
                                    <View style={_style.body}>
                                        <View style={_style.bodyItem}>
                                            <Text style={_style.labelTxt}>
                                                银行卡号
                                            </Text>
                                            <Text style={_style.valueTxt}>
                                                {item.card}
                                            </Text>
                                        </View>
                                        <View style={_style.bodyItem}>
                                            <Text style={_style.labelTxt}>
                                                提现金额
                                            </Text>
                                            <Text style={_style.valueTxt}>
                                                {item.balance}
                                            </Text>
                                        </View>
                                        <View style={_style.bodyItem}>
                                            <Text style={_style.labelTxt}>
                                                状态
                                            </Text>
                                            <Text style={_style.valueTxt}>
                                                {status[item.status]}
                                            </Text>
                                        </View>
                                        <Text>
                                            {item.desc}
                                        </Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View >
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        // position: 'relative',
        width: width,
        height: height,
        backgroundColor: '#dcd8d84d',
    },
    itemBox: {
        // marginHorizontal: 10,
        marginTop: 2,
        paddingHorizontal: 15,
        backgroundColor: '#fff'
    },
    itemHead: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#9e9e9e8f',
    },
    body: {

    },
    headTitle: {
        color: 'gray'
    },
    bodyItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        height: 20
    },
    labelTxt: {
        color: 'gray',
    },
    valueTxt: {
        fontSize: 16,
        color: '#4e4c4c'
    }
})