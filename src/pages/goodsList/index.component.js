import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    FlatList,
    ImageBackground,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { toJS } from 'mobx';
import Nav from './../components/nav/index.component';
import Tab from './../components/tab/index.component';
import List from './components/list/index.component';
import _state from './index.state';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    onClick = (title) => {
        this.props.navigation.push('Accont', {
            title: '添加账号'
        })
    }

    componentDidMount() {
        _state.getOrderList();
    }

    render() {
        return (
            <View style={_style.contianer}>
                <Tab />
                <View style={_style.accountBox}>
                    <Text>暂无买号</Text>
                    <TouchableOpacity activeOpacity={0.5} style={_style.btn} onPress={this.onClick}>
                        <Text style={{ color: '#fff' }}>添加</Text>
                    </TouchableOpacity>
                </View>
                <View style={_style.listBox}>
                    <FlatList
                        keyExtractor={(item, index) => `f${index}`}
                        data={toJS(_state.dataList)}
                        renderItem={(item) => <List obj={item} />}
                    >
                    </FlatList>
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        backgroundColor: '#dcd8d84d',
    },
    accountBox: {
        paddingHorizontal: 15,
        marginTop: 5,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#2196F3',
        borderRadius: 15,
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