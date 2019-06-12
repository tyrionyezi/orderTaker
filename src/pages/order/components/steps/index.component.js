import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    ImageBackground,
    FlatList,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    NativeModules,
    DeviceEventEmitter,
    Alert
} from 'react-native';
import { List, InputItem } from 'antd-mobile-rn';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        keywords: '',
        shop_name: '',
        goods_url: '',
    }

    render() {
        let { data = [] } = this.props;
        return (
            <View style={_style.stepsBox}>
                <View
                    style={_style.itemBox}>
                    <View>
                        <Text style={_style.titleTxt}>{data[0].title}</Text>
                        <Text style={_style.valueTxt}>{data[0].txt}</Text>
                    </View>
                    <View>
                        <InputItem
                            clear
                            value={this.state.keywords}
                            onChange={(keywords) => {
                                this.setState({ keywords });
                                this.props.onChange('keywords', keywords)
                            }}
                            labelNumber={6}
                            placeholder={data[0].placeholder}
                        >
                            {data[0].label}
                        </InputItem>
                    </View>
                </View>
                <View
                    style={_style.itemBox}>
                    <View>
                        <Text style={_style.titleTxt}>{data[1].title}</Text>
                        <Text style={_style.valueTxt}>{data[1].txt}</Text>
                    </View>
                    <View>
                        <InputItem
                            clear
                            value={this.state.shop_name}
                            onChange={(shop_name) => {
                                this.setState({ shop_name });
                                this.props.onChange('shop_name', shop_name)
                            }}
                            labelNumber={6}
                            placeholder={data[1].placeholder}
                        >
                            {data[1].label}
                        </InputItem>
                    </View>
                </View>
                <View
                    style={_style.itemBox}>
                    <View>
                        <Text style={_style.titleTxt}>{data[2].title}</Text>
                        <Text style={_style.valueTxt}>{data[2].txt}</Text>
                    </View>
                    <View>
                        <InputItem
                            clear
                            value={this.state.goods_url}
                            onChange={(goods_url) => {
                                this.setState({ goods_url });
                                this.props.onChange('goods_url', goods_url)
                            }}
                            labelNumber={6}
                            placeholder={data[2].placeholder}
                        >
                            {data[2].label}
                        </InputItem>
                    </View>
                </View>
                {/* {
                    data && data.map((item, index) => {
                        return (
                            <View
                                key={`s${index}`}
                                style={_style.itemBox}>
                                <View>
                                    <Text style={_style.titleTxt}>{item.title}</Text>
                                    <Text style={_style.valueTxt}>{item.txt}</Text>
                                </View>
                                <View>
                                    <InputItem
                                        clear
                                        value={''}
                                        onChange={this.onChange}
                                        labelNumber={6}
                                        placeholder={item.placeholder}
                                    >
                                        {item.label}
                                    </InputItem>
                                </View>
                            </View>
                        )
                    })
                } */}
            </View>
        )
    }
}


const _style = StyleSheet.create({
    stepsBox: {
        // marginTop: 10
    },
    itemBox: {
        marginBottom: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    titleTxt: {
        height: 50,
        justifyContent: 'center',
        fontSize: 16,
        color: '#058efbba',
        lineHeight: 30,
        fontWeight: '500',
    },
    valueTxt: {
    }
})