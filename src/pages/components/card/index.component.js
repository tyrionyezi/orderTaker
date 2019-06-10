import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    NativeModules,
    DeviceEventEmitter,
    Alert
} from 'react-native'
const { height, width } = Dimensions.get('window');
export default class Card extends Component {
    constructor(props) {
        super(props)
    }

    onClick = (item, index) => {
        this.props.navigation.push(item.path, {
            title: item.title
        })
    }


    render() {
        let { title = '', data = []} = this.props;
        console.log(title, data, 'datadatadata')
        return (
            <View style={_style.cardBox}>
                <TouchableOpacity activeOpacity={0.5} style={_style.titleCard} onPress={() => {}}>
                    <View style={_style.titleBox}>
                        <View style={_style.viewIcon}></View>
                        <Text style={_style.titleTxt}>{title}</Text>
                    </View>
                    <View style={_style.right}></View>
                </TouchableOpacity>
                <View style={_style.blockCard}>
                {
                    data&&data.map((item, index) => {
                        return (
                            <TouchableOpacity key={`cd${index}`} style={_style.itemCard} onPress={this.onClick.bind(this,item,index)}>
                                <Image style={_style.itemIcon} source={item.icon}/>
                                <Text style={_style.subTitleTxt}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    cardBox: {
        width: width,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        marginBottom:10,
        // backgroundColor: 'yellow'
    },
    titleCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 15,
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    viewIcon: {
        width:3,
        height:20,
        marginRight: 15,
        backgroundColor: '#0000ffb8'
    },
    titleTxt: {
        fontSize:18,
        fontWeight: '600'
    },
    subTitleTxt: {
        fontSize:16,
        // fontWeight: '600'
    },
    itemIcon: {
        height:50,
        width:50,
        marginBottom: 10,
    },
    blockCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal:15,
    },
    itemCard: {
        width: '33.3333333333%',
        paddingHorizontal:10,
        paddingVertical: 15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green'
    }
})