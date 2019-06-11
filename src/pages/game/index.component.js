import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import Card from './../components/card/index.component';
import { card1Data, card2Data } from './index.data';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={_style.container}>
                <View style={_style.navBox}>
                    <Text style={_style.titleTxt}>
                        游戏大厅
                   </Text>
                </View>
                <Card {...this.props} title={'人气游戏'} type={1} data={card1Data} />
                <Card {...this.props} title={'高佣金游戏'} type={0} data={card2Data} />
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#dcd8d84d',
    },
    navBox: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTxt: {
        fontSize: 18,
        fontWeight: '500'
    }
})