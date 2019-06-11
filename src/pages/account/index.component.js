import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TextInput,
    ImageBackground,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { List, Picker, DatePicker, InputItem } from 'antd-mobile-rn';
const { height, width } = Dimensions.get('window');
import data from './index.data'
export default class Index extends Component {
    constructor(props) {
        super(props)
    }
    // state = {
    //     userName: '',
    // }
    state = {
        userName: '',
        data: [],
        value: [],
        pickerValue: [],
    }
    onPress = () => {
        setTimeout(() => {
            this.setState({
                data: [],
            });
        }, 500);
    };
    onChange = (value, index, data) => {
        console.log(value, index, data, 'valuevalue')
        this.setState({ value });
    };
    render() {
        let { title } = this.props.navigation.state.params;
        return (
            <View style={_style.container}>
                <View style={_style.formBox}>
                    <List>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={userName => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="请输入"
                        >
                            账号
                        </InputItem>
                        <Picker
                            data={[
                                { label: '男', value: '0' },
                                { label: '女', value: '1' }
                            ]}
                            cols={1}
                            value={this.state.value}
                            onChange={this.onChange}
                        >
                            <List.Item arrow="horizontal" style={_style.label}>性别</List.Item>
                        </Picker>
                        <DatePicker
                            value={''}
                            mode="date"
                            minDate={new Date(1980, 1, 1)}
                            maxDate={new Date(2026, 11, 3)}
                            onChange={(data) => {
                                this.setState({ birthDay: data })
                            }}
                            format="YYYY-MM-DD"
                        >
                            <List.Item arrow="horizontal" style={_style.label}>生日</List.Item>
                        </DatePicker>
                        <Picker
                            data={[
                                { label: '男', value: '0' },
                                { label: '女', value: '1' }
                            ]}
                            cols={1}
                            value={this.state.value}
                            onChange={this.onChange}
                        >
                            <List.Item arrow="horizontal" style={_style.label}>信用等级</List.Item>
                        </Picker>
                        <Picker
                            data={[
                                { label: '男', value: '0' },
                                { label: '女', value: '1' }
                            ]}
                            cols={1}
                            value={this.state.value}
                            onChange={this.onChange}
                        >
                            <List.Item arrow="horizontal" style={_style.label}>购物标签</List.Item>
                        </Picker>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="请输入"
                        >
                            订单编号
                        </InputItem>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="请输入"
                        >
                            收件人
                        </InputItem>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="请输入"
                        >
                            电话
                        </InputItem>
                        <Picker
                            data={data}
                            cols={3}
                            value={this.state.value}
                            onChange={this.onChange}
                        >
                            <List.Item arrow="horizontal" style={_style.label}>省市选择</List.Item>
                        </Picker>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="请输入"
                        >
                            街道地址
                        </InputItem>
                    </List>
                </View>
                <View style={_style.btnContainer}>
                    <TouchableOpacity
                        style={_style.btnBox}
                        activeOpacity={0.5}>
                        <Text style={_style.btnTxt}>确认提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#dcd8d84d',
    },
    formBox: {
        marginTop: 5,
    },
    btnContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnBox: {
        width: 200,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#089de0',
        borderRadius: 30,
        // marginHorizontal: 'auto',
    },
    btnTxt: {
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: '#fff'
    }
})