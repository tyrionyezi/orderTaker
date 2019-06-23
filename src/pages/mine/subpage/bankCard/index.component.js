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
import List from './../../../components/list/index.component';
import ListComponent from './../../../components/listComponent/index.component';
import _state from './index.state';

@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        _state.initParams();
    }

    componentDidMount() {
        _state.getBankList();
    }

    goComfirm = (item) => {
        this.props.navigation.navigate(item.path, {
            data: item,
            refresh: _state.getBankList,
        })
    }


    render() {
        return (
            <View style={_style.contianer}>
                <ScrollView
                    refreshing={false}
                    onRefresh={_state.getBankList}
                    showsVerticalScrollIndicator={false}
                >
                    <List {...this.props} data={_state.bankList} />
                    <ListComponent
                        {...this.props}
                        data={_state.addBank}
                        onClick={this.goComfirm}
                    />
                </ScrollView>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        backgroundColor: '#dcd8d84d'
    }
})