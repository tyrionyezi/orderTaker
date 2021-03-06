import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
const { height, width } = Dimensions.get('window');
export default class Tab extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
    }
    state = {
        selectIndex: 0
    }

    onClick = (item, index) => {
        this.setState({ selectIndex: index });
        if (!!this.props.onClick) {
            this.props.onClick(item, index)
        }
    }

    render() {
        let { data = [] } = this.props;
        let { selectIndex } = this.state;
        return (
            <View style={_style.tabBox}>
                {
                    data && data.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={`tt${index}`}
                                activeOpacity={0.5}
                                onPress={this.onClick.bind(this, item, index)}
                                style={[_style.itemBox, selectIndex === index ? _style.activeItemBox : {}]}
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
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#b9b4b49c',
        backgroundColor: '#fff',
    },
    itemBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 50,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeItemBox: {
        borderBottomColor: '#058efb',
    }
})