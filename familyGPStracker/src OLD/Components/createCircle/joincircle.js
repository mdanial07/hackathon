import React, { Component } from 'react'
import { View, AsyncStorage, Image, StyleSheet, TextInput, Text } from "react-native"
import { connect } from 'react-redux';
import {
    Container, Content, Header, List, Thumbnail, ListItem,
    Left, Body, Right, Button, Toast, Icon, Title, Form, Item,
    Input, Label
} from 'native-base';
import axios from 'axios'
import { CircleMiddleware } from '../../store/middlewares/circlesMiddleware';
import * as firebase from 'firebase'



function mapDispatchToProps(dispatch) {
    return {
        joinCircle: (joinCode, member) => dispatch(CircleMiddleware.joinCircle(joinCode, member)),
    }
}

function mapStateToProps(state) {
    return {

    }
}

class JoinCircle extends Component {
    constructor(props) {
        super(props);
        this.state = { showCircles: false, circleCode: '', uid: '', name: '', familyTapp: null }
    }
    static navigationOptions = {
        title: "Create Circle",
        header: null,
    }


    componentWillMount() {
        console.disableYellowBox = true;
        AsyncStorage.getItem('familytracker', (err, result) => {
            if (result !== null) {
                console.log(result)
                let data = JSON.parse(result);
                let uid = data._id;
                let name = data.fname;
                this.setState({ uid, name })
            }
        });
        // this.props.joinCircle();
    }

    join = () => {

        let member = {
            name: this.state.name,
            uid: this.state.uid,
        }
        let joinCode = this.state.circleCode;

        if (joinCode == '') {
            Toast.show({
                text: 'Code Field is Empty!',
                position: 'bottom',
                buttonText: 'Okay'
            });
        }
        else {
            this.props.joinCircle(joinCode, member)
        }
        // console.log('dadadadadadadadadadad')
        // firebase.database().ref('/Circles/').on('value', (data) => {
        //     console.log(data)
        // })
    }
    allCircles = () => {
        this.props.navigation.navigate('circles');
    }

    render() {
        return (
            <Container >
                <Header style={{ backgroundColor: '#05b8cc' }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' onPress={this.allCircles} />
                        </Button>
                    </Left>
                    <Body>
                        <Title >Join a Circle</Title>
                    </Body>
                </Header>

                <Content  >
                    <Form>
                        <Text style={{ alignSelf: 'center', marginTop: '20%', fontSize: 16 }}>Please, enter invite code</Text>
                        <Item floatingLabel style={{ width: '60%', marginLeft: '20%', marginTop: '5%' }}>
                            <Label>Enter Circle Code</Label>
                            <Input onChangeText={(circleCode) => this.setState({ circleCode })} />
                        </Item>

                        <Text style={{ alignSelf: 'center', marginTop: '8%', fontSize: 16 }}>
                            Get the Code from your Circle's admin
                       </Text>
                        <Button block rounded onPress={this.join}
                            style={{ backgroundColor: '#05b8cc', marginTop: 20, padding: 10, width: 120, alignSelf: 'center' }}>
                            <Text style={{ color: '#fff', }} >SUBMIT</Text>
                        </Button>
                    </Form>
                </Content>


            </Container >
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JoinCircle);



const styles = StyleSheet.create({
    container: {
        flex: 2,
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