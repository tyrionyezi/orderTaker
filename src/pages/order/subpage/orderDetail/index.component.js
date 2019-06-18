import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
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
import Steps from './../../components/steps/index.component';
import { stepsData } from './../../index.data'
import _state from './index.state';


@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        let data = this.props.navigation.getParam('data', {});
        let type = this.props.navigation.getParam('type', 1);
        _state.initParams(data, type);
    }


    componentDidMount() {
        _state.getUserInfo();
    }

    render() {
        return (
            <View style={_style.container}>
                <Steps data={stepsData} onChange={_state.onChange} />
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        backgroundColor: '#dcd8d84d',
    }
})