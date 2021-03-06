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
import { Modal } from 'antd-mobile-rn';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import Nav from './../components/nav/index.component';
import Tab from './../components/tab/index.component';
import ListItem from './components/listItem/index.component';
import List from './components/list/index.component';
import _state from './index.state';
import { tabData } from './index.data';

@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        let wrap_type = this.props.navigation.getParam('type');
        this.preData = this.props.navigation.getParam('data');
        _state.initParams(wrap_type);
    }
    onClick = (title) => {
        this.props.navigation.navigate('addAccount', {
            title: '添加账号',
            refresh: _state.getAccountList,
        })
    }

    componentDidMount() {
        _state.getTaskList();
        // _state.getAccountList();
    }

    render() {
        let cunrrentAcconutData = toJS(_state.allPlatformSet)[_state.tabIndex];
        let currentPlatformAccount = toJS(_state.currentPlatformAccount);
        return (
            <View style={_style.contianer}>
                <Tab data={tabData} onClick={_state.tabChange} />
                {
                    JSON.stringify(currentPlatformAccount) !== '{}' ?
                        <TouchableOpacity
                            style={_style.accountBox}
                            activeOpacity={0.5}
                            onPress={_state.switchModal}
                        >
                            <Text>{currentPlatformAccount.name}</Text>
                            <Image style={_style.rightIcon} source={require('./../../asset/rightArrow.png')} />
                        </TouchableOpacity>
                        :
                        <View style={_style.accountBox}>
                            <Text>暂无买号</Text>
                            <TouchableOpacity activeOpacity={0.5} style={_style.btn} onPress={this.onClick}>
                                <Text style={{ color: '#fff' }}>添加</Text>
                            </TouchableOpacity>
                        </View>
                }
                <View style={_style.listBox}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        refreshing={false}
                        onRefresh={_state.getTaskList}
                        keyExtractor={(item, index) => `f${index}`}
                        data={toJS(_state.dataList)}
                        renderItem={(item) => <ListItem obj={item} onClick={_state.receiveOrder} />}
                    >
                    </FlatList>
                </View>
                <Modal
                    popup={true}
                    visible={_state.flagModal || false}
                    animationType="slide-up"
                    maskClosable={true}
                    style={_style.modalSty}
                    onClose={_state.switchModal}
                >
                    <List
                        onClick={(item) => _state.setCurrentAccount(_state.tabIndex, item)}
                        data={cunrrentAcconutData}
                    />
                </Modal>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        flex: 1,
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
        backgroundColor: '#058efb',
        borderRadius: 15,
    },
    listBox: {
        flex: 1,
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
    },
    modalSty: {
        height: 300,
        paddingVertical: 15,
    }
})