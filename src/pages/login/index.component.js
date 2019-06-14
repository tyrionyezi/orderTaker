import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import { observer } from 'mobx-react';
import _state from './index.state';
import Btn from './../components/button/index.component';

@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        _state.initParams();
    }
    state = {
        tel: false,
        password: false
    }

    telOnFocus = () => {
        this.setState({ tel: !this.state.tel });
    }

    passwordOnFocus = () => {
        this.setState({ password: !this.state.password });
    }

    link = () => {
        this.props.navigation.push('register');
    }

    componentDidMount() { }

    doLogin = async () => {
        let result = await _state.login();
        if (result) {
            this.props.navigation.replace('navigator');
        }
    }


    render() {
        return (
            <View style={_style.contianer}>
                <View style={_style.loginBox}>
                    <View style={_style.layout}>
                        <Image style={_style.icon} source={require('./../../asset/login.png')} />
                        <TextInput
                            placeholder='手机号'
                            keyboardType={'numeric'}
                            autoCapitalize={'none'}
                            autoComplete={'tel'}
                            style={[_style.textInput, this.state.tel ? _style.onFoucs : {}]}
                            value={_state.tel}
                            autoFocus={true}
                            onFocus={this.telOnFocus}
                            onBlur={this.telOnFocus}
                            onChangeText={_state.telChange}
                        />
                    </View>
                    <View style={_style.layout}>
                        <Image style={_style.icon} source={require('./../../asset/password.png')} />
                        <TextInput
                            autoCapitalize={'none'}
                            placeholder='密码'
                            keyboardType={'default'}
                            secureTextEntry={true}
                            autoComplete={'password'}
                            style={[_style.textInput, this.state.password ? _style.onFoucs : {}]}
                            value={_state.password}
                            onFocus={this.passwordOnFocus}
                            onBlur={this.passwordOnFocus}
                            onChangeText={_state.pwdChange}
                        />
                    </View>
                    <View style={_style.btnBox}>
                        <Btn txt={'登陆'} onClick={this.doLogin} />
                    </View>
                </View>
                <View style={_style.info}>
                    <Text
                        onPress={this.link}
                        style={_style.text}
                    >登陆遇到问题？去注册</Text>
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    loginBox: {
        width: '75%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // backgroundColor: 'gray',
    },
    textInput: {
        padding: 0,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#c1bcbc',
        width: '70%',
        height: 40,
        // borderBottomColor: '#0490ffa6',
        // backgroundColor: 'green'
    },
    onFoucs: {
        borderBottomColor: '#0490ffa6',
    },
    layout: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
    },
    icon: {
        width: 30,
        height: 30,
    },
    btnBox: {
        marginTop: 50,
    },
    info: {
        paddingRight: 15,
        paddingBottom: 15,
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    text: {
        color: '#1598ff87',
        textAlign: 'center'
    }
})