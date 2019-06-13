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
import _state from './index.state';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        _state.getBuyerList();
    }
    render() {
        return (
            <View>

            </View>
        )
    }
}

const _style = StyleSheet.create({

})