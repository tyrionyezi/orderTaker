import React, { Component } from 'react'
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
import { toJS } from 'mobx';
import List from './../../../components/list/index.component';
import _state from './index.state';
import Listhead from './../../components/headCard/index.component';
import Steps from './../../components/steps/index.component';
import { stepsData } from './../../index.data'

@observer
export default class Index extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={_style.container}>
                <ScrollView>
                    <Listhead title={'账户信息'} value={'倒计时'} />
                    <List {...this.props} data={toJS(_state.acconutInfoList)} />
                    <Listhead title={'任务步骤'} />
                    <Steps data={stepsData} />
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