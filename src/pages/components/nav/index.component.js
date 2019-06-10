import React, { Component } from 'react';
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
const { height, width } = Dimensions.get('window');
export default class Nav extends Component {
    constructor(props) {
        super(props)
    }

    back = () => {
        this.props.navigation.pop();
    }

    render() {
        let { title = '' } = this.props
        return (
            <View style={_style.navBox}>
                <TouchableOpacity activeOpacity={0.5} style={_style.left} onPress={this.back}>
                    <Image style={_style.backIcon} source={require('./../../../asset/back.png')}></Image>
                </TouchableOpacity>
                <View style={_style.center}>
                    <Text style={_style.titleTxt}>{title}</Text>
                </View >
                <View style={_style.right}></View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    navBox: {
        width: width,
        height: 50,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff'

    },
    left: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    backIcon: {
        width: 15,
        height: 25,
    },
    center: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleTxt: {
        fontSize: 16,
    },
    right: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'green',
    }
})