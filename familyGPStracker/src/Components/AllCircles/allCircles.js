import React, { Component } from 'react'

import { View, AsyncStorage, Image, StyleSheet, TextInput, Text } from "react-native"
import { connect } from 'react-redux';
import {
    Container, Content, Header,
    List, Thumbnail, ListItem, Left, Body, Right, Button, Icon, Title,
    Form, Item, Input, Label,
} from 'native-base';

import axios from 'axios'

import { CircleMiddleware } from '../../store/middlewares/circlesMiddleware'

function mapDispatchToProps(dispatch) {
    return {
        getAllCircles: (props) => dispatch(CircleMiddleware.getAllCircles(props)),
    }
}

function mapStateToProps(state) {
    return {

    }
}

class AllCircles extends Component {
    constructor(props) {
        super(props);
        this.state = { showCircles: false, circleName: '', Doctor: [], uid: '', }
    }
    static navigationOptions = {
        title: "Create Circle",
        header: null,
    }

    componentWillMount() {
        console.disableYellowBox = true;
        console.log("daddadad")
        AsyncStorage.getItem('familytracker', (err, result) => {
            if (result !== null) {
                console.log(result)
                let data = JSON.parse(result);

                let uid = data._id;
                this.props.getAllCircles(uid);
                console.log(data)
                this.setState({ uid })
            }
        });
    }

    create = () => {
        var circleName = this.state.circleName;
        var createCircle = {
            circleName: circleName,
        }
        console.log(createCircle)
        this.setState({
            circleName: '',
        })
    }

    render() {
        return (
            <Container >
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>All Circles Circle</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>


                    <List>
                        {/* <ListItem avatar>
                            <Left>
                                <Thumbnail
                                    style={{ width: 80, height: 80 }}
                                    source={{ uri: 'http://www.ambsw.com/wp-content/uploads/2015/09/avatar-patient.png' }}
                                />
                            </Left>
                            <Body>
                                <Text>Danial</Text>
                                <Text note>Diseases: </Text>
                            </Body>
                            <Right>
                                <Text note>View</Text>
                            </Right>
                        </ListItem > */}
                        <ListItem avatar>
                            <Thumbnail square size={80} source={{ uri: 'http://icons.iconarchive.com/icons/aha-soft/software/256/user-group-icon.png' }} />
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Text note>View</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Thumbnail square size={80} source={{ uri: 'http://icons.iconarchive.com/icons/aha-soft/software/256/user-group-icon.png' }} />
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Text note>View</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Thumbnail square size={80} source={{ uri: 'http://icons.iconarchive.com/icons/aha-soft/software/256/user-group-icon.png' }} />
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Text note>View</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Thumbnail square size={80} source={{ uri: 'http://icons.iconarchive.com/icons/aha-soft/software/256/user-group-icon.png' }} />
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Text note>View</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container >
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllCircles);



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