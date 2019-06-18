import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
    FlatList,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    NativeModules,
    DeviceEventEmitter,
    Alert
} from 'react-native';
const { height, width } = Dimensions.get('window');
import { observer } from 'mobx-react';
import { Modal } from 'antd-mobile-rn';
import List from './../../../components/list/index.component';
import Btn from './../../../components/button/index.component';
import _state from './index.state';

@observer
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        _state.getUserInfo();
    }


    render() {
        let bankInfo = _state.currentbankAccount;
        let bankList = _state.bankList;
        return (
            <View style={_style.contianer}>
                <View style={_style.inputBox}>
                    <View style={_style.headBox}>
                        <Text style={_style.bankName}>{`到账银行卡:${bankInfo.title}`}</Text>
                        <Text
                            style={_style.bankCard}
                            onPress={_state.switchModal}
                        >{bankInfo.value}</Text>
                    </View>
                    <View style={_style.labelBox}>
                        <Text style={_style.labelTxt}>
                            提现金额
                        </Text>
                    </View>
                    <View style={_style.valueBox}>
                        <Text style={_style.coin}>¥</Text>
                        <TextInput
                            autoComplete={'cc-number'}
                            autoCapitalize={'none'}
                            placeholder='请输入提现金额'
                            keyboardType={'numeric'}
                            style={_style.textInput}
                            value={_state.amount}
                            onChangeText={_state.onChange}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={_style.btnBox}
                        onPress={_state.withdraw}

                    >
                        <Text style={_style.btnTxt}>提现</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    popup={true}
                    visible={_state.flagModal}
                    animationType="slide-up"
                    maskClosable={true}
                    style={_style.modalSty}
                    onClose={_state.switchModal}
                >
                    <List
                        onClick={(item) => _state.setCurrentBankAccount(item, true)}
                        data={bankList}
                    />
                </Modal>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        // position: 'relative',
        width: width,
        height: height,
        backgroundColor: '#dcd8d84d',
        alignItems: 'center',
        paddingTop: 20,
        // justifyContent: 'center',
    },
    inputBox: {
        width: '90%',
        height: width * 0.8,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'center',
    },
    labelBox: {
        // height: 30
    },
    labelTxt: {
        lineHeight: 30,
    },
    coin: {
        fontSize: 25,
        lineHeight: 40,
        color: 'gray'
    },
    valueBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#9e9e9ec7',
    },
    textInput: {
        width: '70%',
        height: 40,
        fontSize: 16,
        marginLeft: 15,
    },
    btnBox: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#058efb',
        borderRadius: 5,

    },
    btnTxt: {
        color: '#fff',
    },
    headBox: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    bankName: {
        color: 'gray',
        marginRight: 15,
    },
    bankCard: {
        color: '#0789f1d1'
    },
    modalSty: {
        height: 150,
        // backgroundColor: '#dcd8d84d'
    }
})