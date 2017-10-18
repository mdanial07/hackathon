import React, { Component } from 'react'
import * as firebase from "firebase";
import { View, Text } from "react-native"
import Naviagte from "./nav"
import { Container, Header, Root } from 'native-base'

import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Naviagte />
        )
    }
}
export default App