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
        let { data = [] } = this.props
        let { title } = this.props.navigation.state.params;
        return (
            <View style={_style.contianer}>
                <Nav {...this.props} title={'帮助中心'} />
                <View style={_style.titleBox}>
                    <Text style={_style.TitleTxt}>{title}</Text>
                    <Text>{moment().format("YYYY/MM/DD")}</Text>
                </View>
                <View style={_style.listBox}>
                    <ScrollView>
                        {
                            data && data.map((item, index) => {
                                return (
                                    <View style={_style.itemBox}>
                                        <Text style={_style.subTilte}>
                                            {`${index}.${item.subTilte}`}
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
        paddingTop: 10
    },
    subTilte: {
        marginBottom: 25,
    }
})