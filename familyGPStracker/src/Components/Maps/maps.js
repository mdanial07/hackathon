import React, { Component } from 'react'
import { View, AsyncStorage, Image, StyleSheet, TextInput, Text } from "react-native"
import { connect } from 'react-redux';
import { Container, Header, Left, List, ListItem, Thumbnail, Body, Right, Button, Title } from 'native-base';
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';

function mapDispatchToProps(dispatch) {
    return {

    }
}

function mapStateToProps(state) {
    return {
        login: state.Login.login,
    }
}

class Maps extends Component {

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


    Circles = () => {
        this.props.navigation.navigate('circles')
    }

    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Header style={{ backgroundColor: '#05b8cc' }}>
                        <View>
                            <Icon style={{ color: '#fff', marginTop: 15, }} size={25} name='navicon' />
                        </View>
                        <Body style={{  marginRight: 10, alignItems   : 'center' }}>
                            <Title style={{alignSelf: 'center'}}>Family GPS Tracker </Title>
                        </Body>
                        <View>
                            <Icon style={{ color: '#fff', marginTop: 15, marginRight: 10 }} onPress={this.Circles} size={25} name='group' />
                        </View>
                    </Header>
                    {/* <View >
                        <ListItem avatar style={{ marginLeft: 0 }}>
                            <Left>
                                <Icon style={{ marginLeft: 10 }} size={20} name='user-o' />
                            </Left>
                            <Body>
                                <Text style={{ color: '#999', fontSize: 16 }}>University Circle</Text>
                            </Body>
                            <Right>
                                <Icon size={15} name="gear" />
                            </Right>
                        </ListItem>
                        <ListItem avatar style={{ marginLeft: 0 }}>
                            <Left>
                                <Icon style={{ marginLeft: 10 }} size={20} name='user-o' />
                            </Left>
                            <Body>
                                <Text style={{ color: '#999', fontSize: 16 }}>Family Circle</Text>
                            </Body>
                            <Right>
                                <Icon size={15} name="gear" />
                            </Right>
                        </ListItem>
                        <ListItem avatar style={{ marginLeft: 0 }}>
                            <Left>
                                <Icon style={{ marginLeft: 10 }} size={20} name='user-o' />
                            </Left>
                            <Body>
                                <Text style={{ color: '#999', fontSize: 16 }}>Friends Circle</Text>
                            </Body>
                            <Right>
                                <Icon size={15} name="gear" />
                            </Right>
                        </ListItem>
                    </View> */}



                    {/* <MapView style={styles.mapView}
                    style={styles.map}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                /> */}
                </Container>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Maps);

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
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
});