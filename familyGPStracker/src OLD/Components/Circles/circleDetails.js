import React, { Component } from 'react'
import { Container, Header, Content, List, Right, Left, Button, Title, ListItem, Item, Label, Input, Switch, Thumbnail, Text, Separator, Body, TabHeading, } from 'native-base';
import { View, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"
import { connect } from 'react-redux';
import { LoginMiddleware } from '../../store/middlewares/loginMiddleware';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CircleMiddleware } from '../../store/middlewares/circlesMiddleware'
import * as firebase from "firebase";


function mapDispatchToProps(dispatch) {
    return {
        getAllCircles: () => dispatch(CircleMiddleware.getAllCircles()),
    }
}

function mapStateToProps(state) {
    return {
        circles: state.Circles.circles
    }
}


class CirclesDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { key: '', ownerName: '', user: [], keyValue: '', showCircles: false }
    }
    static navigationOptions = {
        title: 'Login Page',
        header: null,
    }

    componentWillMount() {
        console.disableYellowBox = true;
        this.props.getAllCircles();
        let k = this.props.navigation.state.params.keys
        let ownername = this.props.navigation.state.params.ownername
        let keyV = this.props.navigation.state.params.keyValue
        let mainkey = this.props.navigation.state.params.mainKey
        console.log(mainkey)

        firebase.database().ref(`/Circles/${mainkey}/members`).on('value', (data) => {
            let userData = data.val();
            console.log(userData)
            let array = [];
            for (var data in userData) {
                array.push(userData[data])
            }
            console.log(array)
            this.setState({ user: array })
        })

        console.log(keyV, k, ownername)

        this.setState({ ownerName: ownername, key: k, keyValue: keyV })
    }

    maps = () => {
        this.props.navigation.navigate('maps')
    }

    circles = () => {
        this.props.navigation.navigate('circles')
    }

    render() {
        console.log(this.props.circle)
        console.log(this.state.key)
        return (
            <Container>
                <Header style={{ backgroundColor: '#05b8cc' }}>
                    <View>
                        <Icon style={{ color: '#333', marginLeft: 15, marginTop: 15, }} size={20} name='arrow-left' onPress={this.circles} />
                        {/* <Icon style={{ color: '#fff', marginTop: 15, }} size={25} name='navicon' /> */}
                    </View>
                    <Body style={{ marginRight: 10, alignItems: 'center' }}>
                        {/* <Title style={{alignSelf: 'center'}}>Family GPS Tracker </Title> */}
                    </Body>
                    <Right>
                        {/* <Icon style={{ color: '#fff', marginTop: 15, marginRight: 10 }} onPress={this.Circles} size={20} name='group' /> */}
                        <Button>
                            <Text>View Map </Text>
                        </Button>
                    </Right>
                </Header>

                <Content>

                    <View >
                        <Icon style={{ alignSelf: 'center', marginBottom: '2%', marginTop: '5%' }} size={100} name='user-o' />
                    </View>

                    <Text style={{ alignSelf: 'center', marginBottom: '1%', fontSize: 14 }}>{this.state.ownerName}</Text>
                    <Text style={{ alignSelf: 'center', marginBottom: '5%', fontSize: 12 }}>Circle Code: {this.state.keyValue}</Text>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#d3d3d3', marginTop: '3%', width: '100%', alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>

                        {
                            /* this.state.key != undefined ? */

                            this.state.user.map((value, k) => {
                                return (
                                    <View key={k} style={{ marginTop: '4%', marginLeft: '2%', flexDirection: 'row', flexWrap: 'wrap' }} >
                                        <View style={{ flexDirection: 'column' }}>
                                            <Thumbnail style={{ marginTop: '4%', marginLeft: '2%' }} large source={{ uri: 'https://lh3.ggpht.com/lafQ8MEh6Gh0NU2GzCEhxxugOeqKTOJemc1liIga3anzvksjfCv5OY0fC6HiqsReUtw=w300' }} />
                                            <Text style={{ fontSize: 10, width: 70, textAlign: 'center', alignSelf: 'center' }}>{value.name} </Text>
                                        </View>
                                    </View>
                                )
                            })
                            /* : null */
                        }

                    </View>
                </Content>
            </Container>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CirclesDetails);



const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch',

    }
})