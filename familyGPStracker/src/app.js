import React, { Component } from 'react'
import * as firebase from "firebase";
import { View, Text } from "react-native"
import Naviagte from "./nav"
import { Container, Header, Root } from 'native-base'
import store from './store/';
import { Provider } from 'react-redux';
import { StackNavigator, DrawerNavigator } from 'react-navigation';


var config = {
    apiKey: "AIzaSyBzlwWD0fQ5xIA8JgFUR-fOFvL2DNs7B2g",
    authDomain: "familygpstracker07.firebaseapp.com",
    databaseURL: "https://familygpstracker07.firebaseio.com",
    projectId: "familygpstracker07",
    storageBucket: "familygpstracker07.appspot.com",
    messagingSenderId: "64666140686"
};
firebase.initializeApp(config);


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <Naviagte />
                </Root>
            </Provider>
        )
    }
}
export default App