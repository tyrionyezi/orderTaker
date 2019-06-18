import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
    FlatList,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    NativeModules,
    DeviceEventEmitter,
    Alert
} from 'react-native';
const { height, width } = Dimensions.get('window');
import { List, InputItem } from 'antd-mobile-rn';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let { data = [] } = this.props;
        return (
            <View style={_style.progress}>
                {
                    data && data.map((item, index) => {
                        return (
                            <View key={`p${index}`} style={_style.itemBox}>
                                <View style={_style.leftBox}>
                                    <View style={[_style.numberBox, item.status ? _style.completeColor : {}]}>
                                        <Text style={_style.numberTxt}>1</Text>
                                    </View>
                                    <View style={[_style.line, item.status ? _style.completeColor : {}]}></View>
                                </View>
                                <View style={_style.rightBox}>
                                    <View style={_style.rightHead}>
                                        <Text style={_style.valueTxt}>{item.value}</Text>
                                        <Text style={_style.explain}>{item.title}</Text>
                                    </View>
                                    {
                                        item.info.map((it, ind) => {
                                            return (
                                                <View key={`p${index}-${ind}`} style={_style.txtItemBox}>
                                                    <Text style={_style.valueTxt}>{it.value}</Text>
                                                    <Text style={_style.explain}>{it.title}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}


const _style = StyleSheet.create({
    progress: {
        // marginTop: 10
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    itemBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    leftBox: {
        width: '5%',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    rightBox: {
        width: '85%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    rightHead: {
        width: '100%',
        alignItems: 'flex-end',
        height: 40,
        backgroundColor: '#d4d0d0c2',
    },
    numberBox: {
        width: 25,
        height: 25,
        borderRadius: 8,
        backgroundColor: '#b3acacc2',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 1,
    },
    numberTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    line: {
        width: 3,
        backgroundColor: '#b3acacc2',
        flex: 1,
    },
    txtItemBox: {
        width: '100%',
        alignItems: 'flex-end',
        paddingTop: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#d2cfcfc2',
    },
    valueTxt: {
        fontSize: 16,
        color: '#6d6c6c',
        lineHeight: 20,
        marginBottom: 5,
    },
    explain: {
        fontSize: 10,
        color: '#888080e3',
    },
    completeColor: {
        backgroundColor: '#058efb',
    }
})