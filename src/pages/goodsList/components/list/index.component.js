import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    FlatList,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    NativeModules,
    DeviceEventEmitter,
    Alert
} from 'react-native'
const { height, width } = Dimensions.get('window');
export default class List extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        selectIndex: 0
    }

    onClick = (item, index) => {
        this.setState({ selectIndex: index });
        if (!!this.props.onClick) {
            this.props.onClick(item, index)
        }
    }

    render() {
        let { obj = {} } = this.props;
        let { item = {} } = obj;
        return (
            <View style={_style.itemBox}>
                <View style={_style.titleBox}>
                    <Text style={{ color: '#8a8484', }}>{`常规游戏：${item.serial}`}</Text>
                </View>
                <View style={_style.contentBox}>
                    <View style={_style.leftBox}>
                        {/* <Text style={_style.labelTxt}>¥</Text> */}
                        <Image style={_style.rmbIcon} source={require('./../../../../asset/¥.png')} />
                        <Text style={_style.valueTxt}>{item.charge}</Text>
                    </View>
                    <TouchableOpacity style={_style.btnBox}>
                        <Text style={_style.btnTxt}>立即领取</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    itemBox: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 100,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#c3c0c08c',
    },
    titleBox: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentBox: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    btnBox: {
        backgroundColor: '#f1c02fba',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 30,
    },
    btnTxt: {
        fontSize: 16,
        color: '#fff'
    },
    valueTxt: {
        color: '#f3be1e',
        fontSize: 25,
        lineHeight: 30,
        fontWeight: '600',
        marginLeft: 30,
    },
    rmbIcon: {
        width: 25,
        height: 25,
    }
})