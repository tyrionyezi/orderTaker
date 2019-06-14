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
        super(props)
    }
    state = {
        tel: false,
        password: false
    }

    telOnFocus = () => {
        this.setState({ tel: !this.state.tel })
    }

    passwordOnFocus = () => {
        this.setState({ password: !this.state.password })
    }

    nameOnFocus = () => {
        this.setState({ name: !this.state.name })
    }

    emailOnFocus = () => {
        this.setState({ email: !this.state.email })
    }

    link = () => {
        this.props.navigation.push('login')
    }

    doRegister = async () => {
        let result = await _state.register();
        if (result) {
            this.props.navigation.replace('navigator');
        }
    }


    render() {
        return (
            <View style={_style.contianer}>
                <View style={_style.loginBox}>
                    <View style={_style.layout}>
                        <Text style={_style.titleTxt}>手机号</Text>
                        <TextInput
                            placeholder='请输入手机号'
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
                        <Text style={_style.titleTxt}>账户名</Text>
                        <TextInput
                            placeholder='请输入账户名'
                            autoCapitalize={'none'}
                            style={[_style.textInput, this.state.name ? _style.onFoucs : {}]}
                            value={_state.name}
                            onFocus={this.nameOnFocus}
                            onBlur={this.nameOnFocus}
                            onChangeText={_state.nameChange}
                        />
                    </View>
                    <View style={_style.layout}>
                        <Text style={_style.titleTxt}>邮箱</Text>
                        <TextInput
                            placeholder='请输入邮箱'
                            autoCapitalize={'none'}
                            style={[_style.textInput, this.state.email ? _style.onFoucs : {}]}
                            value={_state.email}
                            onFocus={this.emailOnFocus}
                            onBlur={this.emailOnFocus}
                            onChangeText={_state.emailChange}
                        />
                    </View>
                    <View style={_style.layout}>
                        <Text style={_style.titleTxt}>密码</Text>
                        <TextInput
                            autoCapitalize={'none'}
                            placeholder='请输入密码'
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
                    {/* <View style={_style.layout}>
                        <Text style={_style.titleTxt}>确认密码</Text>
                        <TextInput
                            autoCapitalize={'none'}
                            placeholder='请再次输入密码'
                            keyboardType={'default'}
                            secureTextEntry={true}
                            autoComplete={'password'}
                            style={[_style.textInput, this.state.password ? _style.onFoucs : {}]}
                            value={_state.password}
                            onFocus={this.passwordOnFocus}
                            onBlur={this.passwordOnFocus}
                            onChangeText={_state.pwdChange}
                        />
                    </View> */}
                    <View style={_style.btnBox}>
                        <Btn txt={'注册'} onClick={this.doRegister} />
                    </View>
                </View>
                <View style={_style.info}>
                    <Text
                        onPress={this.link}
                        style={_style.text}
                    >已有账号？去登陆</Text>
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
        // position: 'relative',
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
        width: '65%',
        height: 40,
        // borderBottomColor: '#0490ffa6',
        // backgroundColor: 'green'
    },
    onFoucs: {
        borderBottomColor: '#0490ffa6',
    },
    layout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
    },
    titleTxt: {
        width: '25%',
        textAlign: 'right'
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