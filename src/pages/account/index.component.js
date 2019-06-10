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
import Nav from './../components/nav/index.component';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        let { title } = this.props.navigation.state.params;
        return (
            <View>
                <Nav title={title}/>
                <Text>1231</Text>
            </View>
        )
    }
}