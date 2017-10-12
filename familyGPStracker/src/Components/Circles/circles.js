import React, { Component } from 'react'
import { Container, Header, Content, List, Right, Left, Button, Title, ListItem, Switch, Thumbnail, Text, Separator, Body, TabHeading, } from 'native-base';
import { View, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"
import { connect } from 'react-redux';
import { LoginMiddleware } from '../../store/middlewares/loginMiddleware';
import Icon from 'react-native-vector-icons/FontAwesome';

function mapDispatchToProps(dispatch) {
    return {
    }
}

function mapStateToProps(state) {
    return {
    }
}


class Circles extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', pass: '', user: [], showCircles: false }
    }
    static navigationOptions = {
        title: 'Login Page',
        header: null,
    }

    maps = () => {
        this.props.navigation.navigate('maps')
    }

    circleDetail = () => {
        this.props.navigation.navigate('circleDetails')
    }

    createCircle = () => {
        this.props.navigation.navigate('createcircle')
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#05b8cc' }}>
                    <View>
                        <Icon style={{ color: '#fff', marginLeft: 5, marginTop: 15, }} size={30} name='caret-left' onPress={this.maps} />
                    </View>
                    <Body >
                        <Title style={{ marginLeft: 10, alignSelf: 'center' }}>All Circles </Title>
                    </Body>
                </Header>
                <View >
                    <ListItem avatar style={{ marginLeft: 0 }} onPress={this.createCircle}>
                        <Left>
                            <Icon style={{ marginLeft: 10, color: '#CD0000' }} size={20} name='plus-circle' />
                        </Left>
                        <Body>
                            <Text style={{ color: '#999', fontSize: 16 }}>Create Circle</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar style={{ marginLeft: 0 }} onPress={this.circleDetail}>
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
                </View>
            </Container>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Circles);



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