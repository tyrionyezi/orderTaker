import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
    FlatList,
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
import { toJS } from 'mobx';
import List from './../../../components/list/index.component';
import Btn from './../../../components/button/index.component';
import ImgPicker from './../../../components/ImagePicker/index.component'
import _state from './index.state';
import Listhead from './../../components/headCard/index.component';
@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        let rootInfo = this.props.navigation.state.params;
        _state.initParams(rootInfo);
    }

    componentDidMount() {
        _state.getOrderInfo();
        _state.getUserInfo();
    }

    componentWillUnmount() {
        // this.props.navigation.state.params.refresh()
    }

    render() {
        return (
            <View style={_style.container}>
                <ScrollView>
                    <Listhead title={'账户信息'} value={'倒计时'} />
                    <List {...this.props} data={toJS(_state.acconutInfoList)} />
                    <Listhead title={'任务步骤'} />
                    <View style={_style.imgPickerBox}>
                        <Text style={_style.txtBox}>1、上传支付截图</Text>
                        <ImgPicker
                            onClick={_state.onChange}
                        />
                    </View>
                    <View style={_style.rowLayout}>
                        <Text>2、支付订单号</Text>
                        <TextInput
                            autoCapitalize={'none'}
                            placeholder='请输入支付宝订单号'
                            keyboardType={'default'}
                            style={_style.textInput}
                            value={_state.payOrder}
                            onChangeText={_state.payOrderOnChange}
                        />
                    </View>
                    <View style={_style.rowLayout}>
                        <Text>3、实际垫付金额</Text>
                        <TextInput
                            autoCapitalize={'none'}
                            placeholder='请输入实际垫付金额'
                            keyboardType={'default'}
                            style={_style.textInput}
                            value={_state.feeValue}
                            onChangeText={_state.feeOnChange}
                        />
                    </View>
                    <View style={_style.btnBox}>
                        <Btn txt={'确认提交'} onClick={_state.orderComplete} />
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
    btnBox: {
        height: 100,
        backgroundColor: '#fff',
        paddingVertical: 20
    },
    imgPickerBox: {
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    txtBox: {
        marginBottom: 10,
    },
    rowLayout: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        marginVertical: 2,
        backgroundColor: '#fff'
    },
    textInput: {
        width: '60%',
        height: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#dcd8d84d'
    }
})