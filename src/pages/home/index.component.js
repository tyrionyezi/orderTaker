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
import Header from './components/header/index.component';
import CardBox from './components/cardBox/index.component';
import PermissionAndroidViewComponent from './../components/PermissionAndroidView/index'
import { cardBoxData } from './index.data';
import _state from './index.state'
@observer
export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    onClick = () => {
        this.props.navigation.push('rookie', {
            data: { title: '新手指南' },
        })
    }
    componentDidMount = () => {
        _state.getUserInfo();
    }

    render() {
        return (
            <View style={_style.main}>
                <Header data={_state.userInfo} />
                {Platform.OS == 'android' && <PermissionAndroidViewComponent {...this.props} />}
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this.onClick}
                    style={_style.more}>
                    <View style={_style.direction}>
                        <Image style={_style.bellIcon} source={require('./../../asset/bell.png')} />
                        <Text>指南</Text>
                    </View>
                    <View style={_style.direction}>
                        <Text>更多</Text>
                        <Image style={_style.rightIcon} source={require('./../../asset/rightArrow.png')} />
                    </View>
                </TouchableOpacity>
                <CardBox
                    {...this.props}
                    data={cardBoxData} />
            </View>
        )
    }
}

const _style = StyleSheet.create({
    main: {
        backgroundColor: '#dcd8d84d'
    },
    more: {
        marginVertical: 10,
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    bellIcon: {
        height: 20,
        width: 15,
        marginRight: 15,
    },
    direction: {
        flexDirection: 'row'
    },
    rightIcon: {
        width: 8,
        height: 16
    }
})