import React, { Component } from 'react'

import { View, AsyncStorage, Image, StyleSheet, TextInput, Text } from "react-native"
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import MapView from "react-native-maps"
import axios from 'axios'





function mapDispatchToProps(dispatch) {
    return {

    }
}

function mapStateToProps(state) {
    return {
        login: state.Login.login,
    }
}


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { latitude: '', longitude: '' }
    }
    static navigationOptions = {
        header: null,
    }



    componentWillMount() {
        // navigator.geolocation.getCurrentPosition((pos) => {
        //   console.log(pos.coords)
        //   var crd = pos.coords;
        //   console.log(crd.latitude)
        //   this.setState({
        //     latitude: crd.latitude,
        //     longitude: crd.longitude
        //   })
        // },
        //   (err) => {
        //     alert('check your network conectivity and location or gps')
        //   }),
        //   () => {
        //     var options = {
        //       enableHighAccuracy: true,
        //       timeout: 5000,
        //       maximumAge: 0
        //     };
        //   }

        axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=24.8871,67.0371&radius=500&key=AIzaSyB1frgnPYvJ4N4q2kjHoKk8rnC2VYfKhr4')
            .then((responce) => {
                console.log(responce)
                var abc = responce.data.results
                console.log(abc)
            })


        this.setState({
            latitude: 24.8788,
            longitude: 67.0408
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapView}
                    style={styles.map}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    locations: {
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    mapView: {
        flex: 2,
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
});