import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TextInput,
    ImageBackground,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { List, Picker, DatePicker, InputItem } from 'antd-mobile-rn';
import { observer } from 'mobx-react';
const { height, width } = Dimensions.get('window');
import _state from './index.state';
import data from './../../../data/provinces';

@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.rootInfo = this.props.navigation.state.params;
        _state.initParams(this.rootInfo);
    }

    render() {
        let platformData = [
            {
                label: '天猫/淘宝',
                value: '0'
            }, {
                label: '京东',
                value: '1'
            }, {
                label: '拼多多',
                value: '2'
            },
        ]
        return (
            <View style={_style.container}>
                <View style={_style.formBox}>
                    <List>
                        <Picker
                            data={platformData}
                            cols={1}
                            value={_state.addFileds.platform}
                            onOk={(platform) => _state.setAddFiledsValue('platform', platform)}
                        >
                            <List.Item arrow="horizontal" style={_style.label}>平台</List.Item>
                        </Picker>
                        <InputItem
                            clear
                            value={_state.addFileds.name}
                            onChange={name => {
                                _state.setAddFiledsValue('name', name)
                            }}
                            placeholder="请输入"
                        >
                            平台账号
                        </InputItem>
                        <Picker
                            data={[
                                { label: '男', value: '1' },
                                { label: '女', value: '2' }
                            ]}
                            cols={1}
                            value={_state.addFileds.sex}
                            onOk={(sex) => _state.setAddFiledsValue('sex', sex)}
                        >
                            <List.Item arrow="horizontal" style={_style.label}>性别</List.Item>
                        </Picker>
                        <DatePicker
                            value={_state.addFileds.Ymd}
                            mode="date"
                            minDate={new Date(1980, 1, 1)}
                            maxDate={new Date(2026, 11, 3)}
                            onOk={(Ymd) => _state.setAddFiledsValue('Ymd', Ymd)}
                            format="YYYY-MM-DD"
                        >
                            <List.Item arrow="horizontal" style={_style.label}>生日</List.Item>
                        </DatePicker>
                        {/* <Picker
                            data={[
                                { label: '☆', value: '1' },
                                { label: '☆☆', value: '2' },
                                { label: '☆☆☆', value: '3' },
                                { label: '☆☆☆☆', value: '4' },
                                { label: '☆☆☆☆☆', value: '5' },
                            ]}
                            cols={1}
                            value={_state.addFileds.credit}
                            onOk={(credit) => _state.setAddFiledsValue('credit',credit)}
                        >
                            <List.Item arrow="horizontal" style={_style.label}>信用等级</List.Item>
                        </Picker>
                        <Picker
                            data={[
                                { label: '男', value: '0' },
                                { label: '女', value: '1' }
                            ]}
                            cols={1}
                            value={_state.addFileds.tag}
                            onOk={(tag) => _state.setAddFiledsValue('tag',tag)}
                        >
                            <List.Item arrow="horizontal" style={_style.label}>购物标签</List.Item>
                        </Picker> */}
                        <InputItem
                            clear
                            value={_state.addFileds.serial}
                            onChange={(serial) => _state.setAddFiledsValue('serial', serial)}
                            placeholder="请输入"
                        >
                            订单编号
                        </InputItem>
                        <InputItem
                            clear
                            value={_state.addFileds.receiver_name}
                            onChange={(receiver_name) => _state.setAddFiledsValue('receiver_name', receiver_name)}
                            placeholder="请输入"
                        >
                            收件人
                        </InputItem>
                        <InputItem
                            clear
                            value={_state.addFileds.receiver_tel}
                            onChange={(receiver_tel) => _state.setAddFiledsValue('receiver_tel', receiver_tel)}
                            placeholder="请输入"
                        >
                            电话
                        </InputItem>
                        <Picker
                            data={data}
                            cols={3}
                            value={_state.addFileds.address}
                            onOk={(address) => _state.setAddFiledsValue('address', address)}
                        >
                            <List.Item arrow="horizontal" style={_style.label}>省市选择</List.Item>
                        </Picker>
                        <InputItem
                            clear
                            value={_state.addFileds.street}
                            onChange={(street) => _state.setAddFiledsValue('street', street)}
                            placeholder="请输入"
                        >
                            街道地址
                        </InputItem>
                    </List>
                </View>
                <View style={_style.addAccount}>
                    <TouchableOpacity
                        style={_style.btnBox}
                        activeOpacity={0.5}
                        onPress={_state.addAccount}
                    >
                        <Text style={_style.btnTxt}>确认提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#dcd8d84d',
    },
    formBox: {
        marginTop: 5,
    },
    btnContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnBox: {
        width: 200,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#058efb',
        borderRadius: 30,
        // marginHorizontal: 'auto',
    },
    btnTxt: {
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: '#fff'
    },
    addAccount: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})