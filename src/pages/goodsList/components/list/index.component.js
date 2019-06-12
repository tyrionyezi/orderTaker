import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    FlatList,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    NativeModules,
    DeviceEventEmitter,
    Alert
} from 'react-native'
const { height, width } = Dimensions.get('window');
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    onClick = (item, index) => {
        if (!!this.props.onClick) {
            this.props.onClick(item, index)
        }
    }

    render() {
        let { data } = this.props;
        return (
            <View style={_style.listBox}>
                {data && data.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={`l${index}`}
                            style={_style.itemBox}
                            onPress={this.onClick.bind(this, item, index)}
                        >
                            <Text style={_style.Txt}>{item.name}</Text>
                            <Text>1</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

const _style = StyleSheet.create({
    listBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemBox: {
        width: width,
        paddingHorizontal: 15,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        backgroundColor: '#fff',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    Txt: {
        fontSize: 18,
        lineHeight: 30,
    }
})