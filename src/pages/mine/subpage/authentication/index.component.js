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
import _state from './index.state';

@observer
export default class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={_style.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={_style.inputBox}>
                        <Text style={_style.titleTxt}>真实姓名</Text>
                        <TextInput
                            placeholder='请输入真实姓名'
                            autoCapitalize={'none'}
                            style={[_style.textInput]}
                            value={_state.name}
                            autoFocus={true}
                            onChangeText={_state.nameChange}
                        />
                    </View>
                    <View style={_style.inputBox}>
                        <Text style={_style.titleTxt}>身份证号码</Text>
                        <TextInput
                            placeholder='请输入身份证号码'
                            autoCapitalize={'none'}
                            style={[_style.textInput]}
                            value={_state.idCard}
                            onChangeText={_state.idCardChange}
                        />
                    </View>
                    <View style={_style.imagePicker}>
                        <Text style={{ height: 30 }}>证件照片</Text>
                        <ImagePicker
                            width={300}
                            height={180}
                            borderRadius={10}
                            type='1'
                        />
                        <ImagePicker
                            width={300}
                            height={180}
                            borderRadius={10}
                            type='1'
                        />
                    </View>
                    <View style={_style.statusBox}>
                        <Text>审核状态</Text>
                        <Text>未完成</Text>
                    </View>
                    <View>
                        <Btn txt={'提交'} />
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
        alignItems: 'center'
    },
    statusBox: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#c1bcbc',
        marginBottom: 10,
    }
})