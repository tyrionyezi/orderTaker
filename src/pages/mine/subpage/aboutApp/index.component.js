import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
    FlatList,
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
import { guideList } from './index.data'
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={_style.contianer}>
                <ScrollView>
                    <List {...this.props} data={guideList} />
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