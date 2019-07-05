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
import { observer } from 'mobx-react';
import Header from './components/header/index.component';
import List from './../components/list/index.component';
import { exitApp } from './../components/exitApp/index.component';
import { listData } from './index.data';
import _state from './index.state';
import { toJS } from 'mobx';
@observer
class Mine extends Component {
    constructor(props) {
        super(props)
    }

    toWallet = () => {
        this.props.navigation.push('accountInfo')
    };
    componentDidMount() {
        _state.getUserInfo();
    }


    render() {
        let { userInfo } = _state;
        return (
            <View style={_style.container}>
                <Header {...this.props} data={toJS(_state.headInfo)} />
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={_style.userInfoBox}
                    onPress={this.toWallet}
                >
                    <View style={_style.leftBox}>
                        <Image style={_style.headIcon} source={require('./../../asset/headIcon.png')} />
                        <View>
                            <Text>{userInfo.name}</Text>
                        </View>
                    </View>
                    <View>
                        <Image style={_style.rightIcon} source={require('./../../asset/rightArrow.png')} />
                    </View>
                </TouchableOpacity>
                <List {...this.props} data={listData} />
            </View>
        )
    }
}
export default exitApp(Mine);
const _style = StyleSheet.create({
    container: {
        backgroundColor: '#dcd8d84d'
    },
    userInfoBox: {
        marginVertical: 5,
        height: 60,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    leftBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headIcon: {
        height: 35,
        width: 35,
        marginRight: 20,
    },
    rightIcon: {
        width: 8,
        height: 15,
    }
})