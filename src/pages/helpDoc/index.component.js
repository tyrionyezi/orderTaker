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
import moment from 'moment'
import Nav from './../components/nav/index.component';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.navigation.getParam('data', {});
        let arr = data.guideDoc || [];
        return (
            <View style={_style.contianer}>
                {/* <View style={_style.titleBox}>
                    <Text style={_style.TitleTxt}>{data.title}</Text>
                    <Text>{moment().format("YYYY/MM/DD")}</Text>
                </View> */}
                <View style={_style.listBox}>
                    <ScrollView>
                        {
                            arr && arr.map((item, index) => {
                                return (
                                    <View key={`txt${index}`} style={_style.itemBox}>
                                        <Text style={_style.subTilte}>
                                            {`${index + 1}.${item.title}`}
                                        </Text>
                                        <Text>
                                            {item.txt}
                                        </Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const _style = StyleSheet.create({
    contianer: {
        backgroundColor: '#dcd8d84d',
    },
    listBox: {
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    titleBox: {
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#9e9e9e73',
    },
    TitleTxt: {
        fontSize: 18,
    },
    itemBox: {
        flex: 1,
        paddingTop: 10,
    },
    subTilte: {
        marginBottom: 25,
    }
})