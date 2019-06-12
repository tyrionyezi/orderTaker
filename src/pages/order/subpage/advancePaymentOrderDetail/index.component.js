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
// import List from './../../../components/list/index.component';
import _state from './index.state';
import Listhead from './../../components/headCard/index.component';
import Progress from './../../components/progress/index.component';
import { progressData } from './../../index.data'

@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        let data = this.props.navigation.getParam('data', {});
        _state.initParams(data);
    }

    componentDidMount() {
        _state.getOrderInfo();
    }

    render() {
        return (
            <View style={_style.container}>
                <ScrollView>
                    <Progress data={progressData} />
                    <Listhead title={'账户信息'} value={'倒计时'} />
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