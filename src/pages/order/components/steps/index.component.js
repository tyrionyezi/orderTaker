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

export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { data = [] } = this.props
        return (
            <View style={_style.stepsBox}>
                {
                    data && data.map((item, index) => {
                        return (
                            <View
                                key={`s${index}`}
                                style={_style.itemBox}>
                                <View>
                                    <Text style={_style.titleTxt}>{item.title}</Text>
                                    <Text style={_style.valueTxt}>{item.txt}</Text>
                                </View>
                                <View></View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}


const _style = StyleSheet.create({
    stepsBox: {
        // marginTop: 10
    },
    itemBox: {
        marginBottom: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    titleTxt: {
        height: 50,
        justifyContent: 'center',
        fontSize: 16,
        color: '#058efbba',
        lineHeight: 30,
        fontWeight: '500',
    },
    valueTxt: {
    }
})