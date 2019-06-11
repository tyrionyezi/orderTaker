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
import Nav from './../../components/nav/index.component';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        tabBarVisible: false, // 隐藏底部导航栏
        header:null,  //隐藏顶部导航栏
    };

    back = () => {
        this.props.navigation.setParams({name:1})
        this.props.navigation.goBack()
    }

    render() {
        let data = this.props.navigation.getParam('title');
        console.log(data)
        return (
            <View style={_style.container}>
                <Nav {...this.props} title={'账号排序'} onClick={this.back} />
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        // backgroundColor: '#dcd8d84d',
        paddingTop: 30,
    }

})