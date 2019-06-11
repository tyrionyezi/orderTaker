import React, {Component} from 'react';
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
export default class Tab extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        selectIndex: 0
    }

    onClick = (item,index) => {
        this.setState({selectIndex: index});
        if(!!this.props.onClick) {
            this.props.onClick(item,index)
        }
    }

    render() {
        let { data = []} = this.props;
        let {selectIndex} = this.state;
        return (
            <View style={_style.tabBox}>
                {
                    data&&data.map((item,index) => {
                        return (
                            <TouchableOpacity
                                key={`tt${index}`}
                                activeOpacity={0.5}
                                onPress={this.onClick.bind(this,item,index)}
                                style={[_style.itemBox,selectIndex === index ? _style.activeItemBox: {}]}
                                >
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
}

const _style = StyleSheet.create({
    tabBox: {
        height:50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    itemBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        height:50,
        borderWidth:0,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
    },
    activeItemBox: {
        borderBottomColor: '#2196F3',
    }
})