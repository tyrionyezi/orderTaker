import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
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
import { Modal } from 'antd-mobile-rn';
import { toJS } from 'mobx';
import List from './../../../components/list/index.component';
import Tab from './../../../components/tab/index.component';
import _state from './index.state';
@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        _state.initParams();
    }

    static navigationOptions = ({ navigation }) => ({
        headerRight: <TouchableOpacity onPress={navigation.state.params.addAccount}>
            <Text style={{ color: '#048dfbb5', marginRight: 15, }}>添加</Text>
        </TouchableOpacity>
    }
    )

    componentDidMount() {
        this.props.navigation.setParams({ addAccount: this.addAccount })
        _state.getBuyerList();
    }

    addAccount = () => {
        this.props.navigation.navigate('addAccount', {
            title: '添加账号',
            refresh: _state.getBuyerList
        })
    }

    delete = (item) => {
        Modal.alert('删除', '', [
            {
                text: '取消',
                onPress: () => console.log('cancel'),
                style: 'cancel',
            },
            { text: '确定', onPress: _state.delete(item) },
        ]);
    }

    render() {
        let tabData = [
            {
                name: '淘宝/天猫',
                value: 0,
            }, {
                name: '京东',
                value: 1,
            }, {
                name: '拼多多',
                value: 2,
            },
        ]
        return (
            <View style={_style.contianer}>
                <Tab data={tabData} onClick={_state.setCurrentListData} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshing={false}
                    onRefresh={_state.getBuyerList}
                >
                    <List
                        {...this.props}
                        data={toJS(_state.dataList)[_state.tabIndex]}
                        onLongPress={this.delete}
                    />
                </ScrollView>
                {/* <Modal
                    transparent={false}
                    visible={this.state.visible1}
                    animationType="slide-up"
                    onClose={this.onClose1}
                >
                    <View style={{ paddingVertical: 220 }}>
                        <Text style={{ textAlign: 'center' }}>Content...</Text>
                        <Text style={{ textAlign: 'center' }}>Content...</Text>
                    </View>
                    <Button
                        type="primary"
                        onPress={() => Toast.info('Hello Toast in Modal now works')}
                    >
                        Hello Toast in Modal now works
                    </Button>
                    <Button type="primary" onPress={this.onClose1}>
                        close modal
                    </Button>
                </Modal> */}
            </View>
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        backgroundColor: '#dcd8d84d'
    },
    classifyBox: {
        paddingHorizontal: 15,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#058efb',
        marginBottom: 2,
    },
    classifyTxt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    navAdd: {
        color: '#048dfb70',
        marginRight: 15,
    }
})