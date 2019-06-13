import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
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
import List from './../../../components/list/index.component';
import _state from './index.state';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={_style.contianer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <List {...this.props} data={_state.bankList} />
                </ScrollView>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        backgroundColor: '#dcd8d84d'
    }
})