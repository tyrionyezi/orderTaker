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
} from 'react-native'
import { NoticeBar, Toast, Button} from 'antd-mobile-rn';
import { observer } from 'mobx-react';


@observer
export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render () {
       return(
        <View>
            <Text>123123123</Text>
        </View>
       )
    }
}