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
} from 'react-native'
import Nav from './../components/nav/index.component';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    onClick = (title) => {
        this.props.navigation.push('HelpDoc', {
            title: title
        })
    }

    render() {
        let { title } = this.props.navigation.state.params;
        return (
            <View style={_style.contianer}>
                <Nav {...this.props} title={title} />
                <View style={_style.listBox}>
                    <TouchableOpacity activeOpacity={0.5} style={_style.itemBox} onPress={this.onClick.bind(this, title)}>
                        <View style={_style.leftBox}>
                            <Image style={_style.leftIcon} source={require('./../../asset/plane.png')} />
                            <Text>12312312</Text>
                        </View>
                        <View>
                            <Image style={_style.rightIcon} source={require('./../../asset/rightArrow.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        backgroundColor: '#dcd8d84d',
    },
    listBox: {
        paddingHorizontal: 10,
        marginTop: 5,
        backgroundColor: '#fff'
    },
    leftIcon: {
        width: 25,
        height: 25,
        marginRight: 20,
    },
    itemBox: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#9e9e9e73',
    },
    leftBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rightIcon: {
        width: 8,
        height: 16
    }
})