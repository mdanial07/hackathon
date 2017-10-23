import React, { Component } from 'react'
import { View, AsyncStorage, Image, StyleSheet, TextInput, Text } from "react-native"
import { connect } from 'react-redux';
import {
    Container, Content, Header, List, Thumbnail, ListItem,
    Left, Body, Right, Button, Toast, Title, Form, Item,
    Input, Label
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import { CircleMiddleware } from '../../store/middlewares/circlesMiddleware';


function mapDispatchToProps(dispatch) {
    return {
        createCircle: (users, uid) => dispatch(CircleMiddleware.createCircle(users, uid)),
    }
}

function mapStateToProps(state) {
    return {

    }
}

class CreateCircle extends Component {
    constructor(props) {
        super(props);
        this.state = { showCircles: false, circleName: '', uid: '', name: '', familyTapp: null }
    }
    static navigationOptions = {
        title: "Create Circle",
        header: null,
    }


    componentWillMount() {
        console.disableYellowBox = true;
        console.log(this.props)
        AsyncStorage.getItem('familytracker', (err, result) => {
            if (result !== null) {
                console.log(result)
                let data = JSON.parse(result);
                let uid = data._id;
                let name = data.fname;
                this.setState({ uid, name })
                console.log(uid)
                this.setState({ familyTapp: data });
                console.log(this.state.familyTapp);

            }
        });
    }

    create = () => {
        let circleName = this.state.circleName;
        if (circleName == '') {
            Toast.show({
                text: 'You must enter Circle Name',
                position: 'bottom',
                buttonText: 'Okay'
            })
        }
        else {
            // let groupCode = uid.slice(0, 6);
            let uid = {
                // code: groupCode,
                uid: this.state.uid,
                name: this.state.name,
            }
            let chat = {
                uid: this.state.uid,
                msg: 'Thanks for being a part of US :)'
            }
            let userCircle = {
                uname: this.state.familyTapp.fname,
                name: this.state.circleName,
                members: [uid],
                chatbox: [chat]
            }
            console.log(userCircle)

            this.props.createCircle(userCircle, uid);
            this.setState({
                circleName: '',
            })

            this.props.navigation.navigate('circles')
        }
    }

    back = () => {
        this.props.navigation.navigate('circles');
    }

    render() {
        return (
            <Container >
                <Header style={{ backgroundColor: '#05b8cc' }}>
                    <Left>
                        <Button transparent onPress={this.back}>
                            <Icon style={{ color: '#fff' }} size={20} name='arrow-left'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title >Create a Circle</Title>
                    </Body>
                </Header>

                <Content>
                    <Form>
                        <Text style={{ alignSelf: 'center', marginTop: '10%', fontSize: 16 }}>Enter You Circle Name : </Text>
                        <Item floatingLabel style={{ width: '60%', marginLeft: '20%', marginTop: '5%' }}>
                            <Label>Enter Circle Name</Label>
                            <Input onChangeText={(circleName) => this.setState({ circleName })} />
                        </Item>


                        <Button block rounded onPress={this.create}
                            style={{ backgroundColor: '#05b8cc', marginTop: 30, padding: 10, width: 120, alignSelf: 'center' }}>
                            <Text style={{ color: '#fff', }} >Create</Text>
                        </Button>
                    </Form>
                </Content>


            </Container >
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateCircle);



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