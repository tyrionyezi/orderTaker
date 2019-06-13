import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');
export default class Index extends Component {
    constructor(props) {
        super(props)
    }
    onClick = (item, index) => {
        this.props.navigation.push(item.path, {
            data: item
        })
    }
    render() {
        let { data = [] } = this.props
        return (
            <View style={_style.box}>
                {
                    data && data.map((item, index) => {
                        return (
                            <TouchableOpacity style={_style.itemBox} key={`c${index}`} activeOpacity={0.5} onPress={this.onClick.bind(this, item, index)}>
                                <Image style={_style.guideIcon} source={item.icon}></Image>
                                <Text style={_style.valueTxt}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
}

const _style = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
    },
    itemBox: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        width: '33.333333333%',
        flexDirection: 'column',
        alignItems: 'center',
        // borderWidth: 1,
        // backgroundColor: 'green'
    },
    guideIcon: {
        width: 50,
        height: 50,
    },
    valueTxt: {
        marginTop: 15,
        // color: '#fff'
    }
})