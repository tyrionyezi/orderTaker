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
import { NoticeBar, Toast, Button } from 'antd-mobile-rn';
import { observer } from 'mobx-react';


@observer
export default class List extends Component {
    constructor(props) {
        super(props)
    }

    onClick = (item) => {

        if (item.isTail && !!this.props.navigation) {
            this.props.navigation.push(item.path, { data: item })
        }
    }

    render() {
        let { data = [] } = this.props;
        return (
            <View style={_style.listBox}>
                {
                    data && data.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={`l${index}`}
                                activeOpacity={0.5}
                                style={_style.itemBox}
                                onPress={this.onClick.bind(this, item)}
                            >
                                <View>
                                    <Text style={_style.titleTxt}>{item.title}</Text>
                                </View>

                                <View style={_style.right}>
                                    <Text>{item.value}</Text>
                                    {
                                        item.isTail ?
                                            <Image style={_style.rightIcon} source={require('./../../../asset/rightArrow.png')}></Image>
                                            :
                                            <View />
                                    }
                                </View>

                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
}

const _style = StyleSheet.create({
    listBox: {
    },
    itemBox: {
        height: 50,
        marginBottom: 1,
        paddingHorizontal: 15,
        borderWidth: 0,
        // borderBottomWidth: 1,
        borderBottomColor: '#ccc9c9',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    titleTxt: {
        fontSize: 16,
    },
    rightIcon: {
        width: 8,
        height: 15,
        marginLeft: 10,
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})