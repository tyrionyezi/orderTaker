import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TextInput,
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
import Btn from './../../../components/button/index.component';
import ImagePicker from './../../../components/ImagePicker/index.component';
import { List, Picker } from 'antd-mobile-rn';
import _state from './index.state';
import { bankList } from './index.data'

@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        _state.initParams();
    }
    render() {
        return (
            <View style={_style.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={_style.inputBox}>
                        <Text style={_style.titleTxt}>持卡人姓名</Text>
                        <TextInput
                            placeholder='请输入持卡人姓名'
                            autoCapitalize={'none'}
                            style={[_style.textInput]}
                            value={_state.name}
                            autoFocus={true}
                            onChangeText={_state.nameChange}
                        />
                    </View>
                    <View style={_style.inputBox}>
                        <Text style={_style.titleTxt}>银行卡号</Text>
                        <TextInput
                            placeholder='请输入银行卡号'
                            autoCapitalize={'none'}
                            style={[_style.textInput]}
                            value={_state.card}
                            onChangeText={_state.cardChange}
                        />
                    </View>
                    <Picker
                        data={bankList}
                        cols={1}
                        value={_state.depositBank}
                        onChange={_state.depositChange}
                    >
                        <List.Item style={{ paddingLeft: -10, fontSize: 14, justifyContent: 'space-between' }} arrow="horizontal" onPress={this.onPress}>
                            开户银行
                        </List.Item>
                    </Picker>
                    <View style={_style.imagePicker}>
                        <Text style={{ height: 30 }}>银行卡正面照片</Text>

                        <ImagePicker
                            type='1'
                            width={300}
                            height={180}
                            borderRadius={10}
                            onClick={_state.getBankCardPic}
                        />
                    </View>
                    <View>
                        <Btn txt={'提交'} onClick={_state.addBank} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    inputBox: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleTxt: {
        width: '25%',
    },
    textInput: {
        padding: 0,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#c1bcbc',
        width: '70%',
        height: 40,
        // borderBottomColor: '#0490ffa6',
        // backgroundColor: 'green'
    },
    onFoucs: {
        borderBottomColor: '#0490ffa6',
    },
    imagePicker: {
        marginTop: 10,
        alignItems: 'center',
    },
    statusBox: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 40,
    }
})