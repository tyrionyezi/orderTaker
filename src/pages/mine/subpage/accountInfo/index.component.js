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

import List from './../../components/list/index.component';
import { accountInfo } from './../../index.data';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={_style.container}>
                <List {...this.props} data={accountInfo}></List>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        backgroundColor: '#dcd8d84d'
    },
})