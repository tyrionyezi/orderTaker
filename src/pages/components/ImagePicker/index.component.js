import ImagePicker from 'react-native-image-picker';
import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


export default class App extends Component {
    state = {
        avatarSource: null,
        videoSource: null
    };


    //选择图片
    selectPhotoTapped() {
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            // customButtons: [
            //     { name: 'fb', title: 'Choose Photo from Facebook' },
            // ],
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 500,
            maxHeight: 500,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            },
            ...this.props.options
        };


        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // let source = { uri: response.data };

                // You can also display the image using data:
                let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
                if (!!this.props.onClick) {
                    this.props.onClick(response.data);
                }
            }
        });
    }

    //选择视频
    selectVideoTapped() {
        const options = {

            title: '选择视频',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '录制视频',
            chooseFromLibraryButtonTitle: '选择视频',
            mediaType: 'video',
            videoQuality: 'medium'
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    videoSource: response.uri
                });
            }
        });
    }

    render() {
        let { type = '1', width = 200, height = 200, borderRadius = 50, } = this.props;
        return (
            <View style={styles.container}>
                {
                    type === '1' ?
                        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                            <View style={[{ width: width, height: height, borderRadius: borderRadius }, styles.avatarContainer, { marginBottom: 30 }]}>
                                {this.state.avatarSource === null ?
                                    <Image style={styles.plusIcon} source={require('./../../../asset/plus.png')} />
                                    :
                                    <Image style={[styles.avatar, { width: width, height: height, borderRadius: borderRadius }]} resizeMode={'cover'} source={this.state.avatarSource} />
                                }
                            </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
                            <View style={[styles.avatar, { width: width, height: height, borderRadius: borderRadius }, styles.avatarContainer]}>
                                <Text>选择视频</Text>
                            </View>
                        </TouchableOpacity>
                }
                {this.state.videoSource &&
                    <Text style={{ margin: 8, textAlign: 'center' }}>{this.state.videoSource}</Text>
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 50,
        width: 200,
        height: 200
    },
    plusIcon: {
        width: 50,
        height: 50
    }

})