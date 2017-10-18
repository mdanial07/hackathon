import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import * as firebase from 'firebase'
import { Button } from 'native-base'
import FilePickerManager from 'react-native-file-picker'
import base64 from 'base-64'
import RNFetchBlob from 'react-native-fetch-blob'
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
// window.XMLHttpRequest = RNFetchBlob.polufill.XMLHttpRequest
window.Blob = Blob



var config = {
    apiKey: "AIzaSyBzlwWD0fQ5xIA8JgFUR-fOFvL2DNs7B2g",
    authDomain: "familygpstracker07.firebaseapp.com",
    databaseURL: "https://familygpstracker07.firebaseio.com",
    projectId: "familygpstracker07",
    storageBucket: "familygpstracker07.appspot.com",
    messagingSenderId: "64666140686"
};
firebase.initializeApp(config);


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = { uriCode: '', file: {} }
    }

    static navigationOptions = {
        title: 'Login Page',
        header: null,
    }

    //componentWillMount() {
    //let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dowrjiwpe/image/upload';

    //}

    browse = () => {
        FilePickerManager.showFilePicker(null, (response) => {
            console.log('Response = ', response.uri);
            // let code = response.uri
            // this.setState({ uriCode: code })

            if (response.didCancel) {
                console.log('User cancelled file picker');
            }
            else if (response.error) {
                console.log('FilePickerManager Error: ', response.error);
            }
            else {
                this.setState({
                    file: response
                });
            }
        });
    }

    encode = (uri, audioName, mime = "audio/mp3") => {


        // let uploadBlob = null;

        // RNFetchBlob.fs.readFile(uploaduri, 'base64')
        //     .then((data) => {
        //         console.log(data)
        //         return Blob.build(data, { type: `${}`})
        //     })
        return new Promise((resolve, reject) => {

            let uploadUri = this.state.file.uri;
            let uploadBlod = null
            console.log(uploadUri)
            const audioLink = firebase.storage().ref('post').child('mdanial')
            console.log(audioLink)
            // const uploaduri = this.state.file.uri
            fs.readFile(uploadUri, 'base64')
                .then((data) => {
                    console.log(data, "danial")
                    return Blob.build(data, { type: `${mime};BASE64` })
                })
        })

        // let input = 'http://res.cloudinary.com/dowrjiwpe/video/upload/v1508074987/music_frd72g.flac'

        // // let bytes = uft8(input)
        // var encodedData = base64.encode(input);

        // console.log(encodedData)

    }

    blob = () => {
        console.log("adasdwe")
        RNFetchBlob.fetch('GET', this.state.uriCode, {
            Authorization: 'Bearer access-token...',
            // more headers  .. 
        })
        console.log("adasdwe")

            // when response status code is 200 
            .then((res) => {
                // the conversion is done in native code 
                let base64Str = res.base64()

                console.log(base64Str)
                // the following conversions are done in js, it's SYNC 
                let text = res.text()
                console.log(text)
                let json = res.json()
                console.log(json)

            })
            // Status code is not 200 
            .catch((errorMessage, statusCode) => {
                // error handling 
            })
    }



    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.browse}>
                    <Text> Browse </Text>
                </Button>

                <Button onPress={this.encode}>
                    <Text> Encode </Text>
                </Button>

                <Button onPress={this.blob}>
                    <Text> BLOB </Text>
                </Button>
                <Text>
                    Danial
                </Text>
            </View>
        );
    }
}
export default MainPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
