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
import { toJS } from 'mobx';
import Progress from './../../components/progress/index.component';
import { progressData } from './../../index.data'
import _state from './index.state';


@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        let data = this.props.navigation.getParam('data', {});
        let type = this.props.navigation.getParam('type', 1);
        // _state.initParams(data, type);
    }


    componentDidMount() {
        // _state.getUserInfo();
    }

    render() {
        return (
            <View style={_style.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Progress data={progressData} />
                </ScrollView>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
})