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
        super(props)
    }
    state = {
        visible: false,
    }

    onClick = (title) => {
        this.props.navigation.push('Accont', {
            title: '添加账号',
            platform: _state.tabIndex,
        })
    }

    setAccountSort = () => {
        this.setState({visible: true})
        // this.props.navigation.push('setAccount', {
        //     title: '添加账号',
        // })
    }
    closeModal  = (item) => {
        console.log(item)
        this.setState({visible: false})
    }

    componentDidMount() {
        let wrap_type = this.props.navigation.getParam('type')
        _state.initParams(wrap_type);
        _state.getOrderList();
        _state.getAccountList();
    }

    render() {
        let cunrrentAcconutData = toJS(_state.allPlatformSet)[_state.tabIndex];
        return (
            <View style={_style.contianer}>
                <Tab data={tabData} onClick={_state.tabChange}/>
                {
                    cunrrentAcconutData.length > 0 ?
                    <TouchableOpacity 
                        style={_style.accountBox}
                        activeOpacity={0.5}
                        onPress={this.setAccountSort}
                    >
                        <Text>{cunrrentAcconutData[0].name}</Text>
                            <Image style={_style.rightIcon} source={require('./../../asset/rightArrow.png')}/>
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
                        keyExtractor={(item, index) => `f${index}`}
                        data={toJS(_state.dataList)}
                        renderItem={(item) => <ListItem obj={item} onClick={_state.receiveOrder} />}
                    >
                    </FlatList>
                </View>
                <Modal
                    popup={true}
                    visible={this.state.visible}
                    animationType="slide-up"
                    maskClosable={true}
                    style={_style.modalSty}
                    onClose={this.closeModal}
                    >
                    <List
                        onClick={this.closeModal}
                        data={cunrrentAcconutData}
                    />
                </Modal>
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
    },
    modalSty: {
        height:300,
        paddingVertical:15,
    }
})