import React, { Component } from 'react'
import { View, AsyncStorage, Image, StyleSheet, TextInput, Text } from "react-native"
import { connect } from 'react-redux';
import { Container, Header, Left, List, ListItem, Thumbnail, Body, Right, Button, Title } from 'native-base';
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from "react-native-maps"


function mapDispatchToProps(dispatch) {
    return {

    }
}

function mapStateToProps(state) {
    return {
        mapUsers: state.MapView.mapUsers
    }
}

class ViewMap extends Component {

    constructor(props) {
        super(props);
        this.state = { latitude: 0, longitude: 0, uid: '', }
    }
    static navigationOptions = {
        header: null,
    }

    componentWillMount() {
        AsyncStorage.getItem('familytracker', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                var uid = data._id;
                this.setState({ uid })
            }
        });

        console.disableYellowBox = true;
        // AsyncStorage.getItem('familytracker', (err, result) => {
        //     if (result !== null) {
        //         let data = JSON.parse(result);
        //         console.log(data)
        //         let longitude = data.longitude;
        //         let latitude = data.latitude;
        //         // this.setState({ longitude, latitude })
        //     }
        // });
        // navigator.geolocation.getCurrentPosition((pos) => {
        //     console.log(pos.coords)
        //     var crd = pos.coords;
        //     console.log(crd.latitude)
        //     this.setState({
        //         latitude: crd.latitude,
        //         longitude: crd.longitude
        //     })
        // },
        //     (err) => {
        //         alert('check your network conectivity and location or gps')
        //     }),
        //     () => {
        //         var options = {
        //             enableHighAccuracy: true,
        //             timeout: 5000,
        //             maximumAge: 0
        //         };
        //     }
        // axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=24.8871,67.0371&radius=500&key=AIzaSyB1frgnPYvJ4N4q2kjHoKk8rnC2VYfKhr4')
        //     .then((responce) => {
        //         console.log(responce)
        //         var abc = responce.data.results
        //         console.log(abc)
        //     })
        // this.setState({
        //     latitude: 24.8788,
        //     longitude: 67.0408
        // })
    }

    ProfileDetails = () => {
        this.props.navigation.navigate('profiledetails')
    }


    Circles = () => {
        this.props.navigation.navigate('circles')
    }

    render() {
        console.log(this.props.mapUsers)
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: '#05b8cc' }}>
                    <View>
                        <Icon style={{ color: '#fff', marginTop: 15, }} size={25} name='user' onPress={this.ProfileDetails} />
                    </View>
                    <Body style={{ marginRight: 10, alignItems: 'center' }}>
                        <Title style={{ alignSelf: 'center' }}>Family GPS Tracker</Title>
                    </Body>
                    <View>
                        <Icon style={{ color: '#fff', marginTop: 15, marginRight: 10 }} onPress={this.Circles} size={25} name='group' />
                    </View>
                </Header>
                {
                    this.state.latitude || this.state.longitude != undefined ?
                        <MapView
                            style={styles.map}
                            iitialRegion={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 0.049,
                                longitudeDelta: 0.021,
                            }}
                            followsUserLocation
                            showsUserLocation
                            showsCompass
                            showsMyLocationButton
                            toolbarEnabled
                        >
                            {
                                this.props.mapUsers.map((loc, i) => {
                                    console.log(loc.latitude, loc.longitude)
                                    if (loc._id == this.state.uid) {
                                        return < MapView.Marker
                                            key={i}
                                            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
                                            title="You"
                                        />
                                    }
                                    else {
                                        return < MapView.Marker
                                            key={i}
                                            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
                                            title={loc.fname}
                                        />
                                    }

                                })
                            }
                        </MapView> :
                        null
                }
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMap);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    locations: {
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    map: {
        left: 0,
        right: 0,
        top: 50,
        bottom: 0,
        position: 'absolute'
    },
});