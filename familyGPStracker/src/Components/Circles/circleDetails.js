import React, { Component } from 'react'
import { Container, Header, Content, List, Right, Left, Button, Title, ListItem, Item, Label, Input, Switch, Thumbnail, Text, Separator, Body, TabHeading, } from 'native-base';
import { View, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginMiddleware } from '../../store/middlewares/loginMiddleware';
import { MapViewMiddleware } from '../../store/middlewares/mapViewMiddleware'
import { CircleMiddleware } from '../../store/middlewares/circlesMiddleware'
import { ChatBoxMiddleware } from '../../store/middlewares/chatboxMiddleware'
import * as firebase from "firebase";


function mapDispatchToProps(dispatch) {
    return {
        getAllCircles: () => dispatch(CircleMiddleware.getAllCircles()),
        viewmap: (userID) => dispatch(MapViewMiddleware.ViewMapShow(userID)),
        chatbox: (key) => dispatch(ChatBoxMiddleware.ChatBox(key)),
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
        this.state = { key: '', ownerName: '', user: [], keyValue: '', mainKey: '', showCircles: false, uidArray: [] }
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
        this.setState({ mainKey: mainkey })
        console.log(mainkey)
        let array = [];
        this.props.chatbox(mainkey)
        firebase.database().ref(`/Circles/${mainkey}/members`).on('value', (data) => {
            let userData = data.val();
            console.log(userData)
            for (var data in userData) {
                array.push(userData[data])
            }
            console.log(array)
            this.setState({ user: array })
        })

        uid_array = []
        array.map((uidd, i) => {
            return uid_array.push(uidd.uid);
        })
        console.log(uid_array);
        this.setState({ uidArray: uid_array })
        console.log(keyV, k, ownername)

        this.setState({ ownerName: ownername, key: k, keyValue: keyV })
    }

    maps = () => {
        this.props.navigation.navigate('maps')
    }
    back = () => {
        this.props.navigation.navigate('circles')
    }
    ViewMapShow = () => {
        this.props.viewmap(this.state.uidArray)
        this.props.navigation.navigate('mapview')
    }

    chat = () => {
        let key = this.state.mainKey;
        console.log(key)
        this.props.navigation.navigate('chatbox', { key })
    }

    render() {
        console.log(this.state.uidArray)
        console.log(this.props.circle)
        console.log(this.state.key)
        return (
            <Container>
                <Header style={{ backgroundColor: '#05b8cc' }}>
                    <Left>
                        <Button transparent onPress={this.back}>
                            <Icon style={{ color: '#fff' }} size={20} name='arrow-left' />
                        </Button>
                    </Left>
                    <Body style={{ marginRight: 10, alignItems: 'center' }}>
                        {/* <Title style={{alignSelf: 'center'}}>Family GPS Tracker </Title> */}
                    </Body>
                    <Right>
                        <Button transparent onPress={this.ViewMapShow}>
                            <Text style={{ color: '#fff', fontSize: 12 }}>View Map </Text>
                        </Button>
                    </Right>
                </Header>

                <Content>

                    <View >
                        <Icon style={{ alignSelf: 'center', marginBottom: '2%', marginTop: '5%' }} size={100} name='user-o' />
                    </View>

                    <Text style={{ alignSelf: 'center', marginBottom: '1%', fontSize: 14 }}>{this.state.ownerName}</Text>
                    <Text style={{ alignSelf: 'center', marginBottom: '1%', fontSize: 12 }}>Circle Code: {this.state.keyValue}</Text>
                    <Text style={{ alignSelf: 'center', marginBottom: '4%', fontSize: 16, color: '#Cd0000' }} onPress={this.chat}>Start Chat</Text>

                    <View style={{ borderTopWidth: 1, borderTopColor: '#d3d3d3', marginTop: '3%', width: '100%', alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>

                        {
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