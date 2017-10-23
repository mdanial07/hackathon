import React, { Component } from 'react'
import { Container, Header, Content, List, Right, Left, Button, Title, ListItem, Switch, Thumbnail, Text, Separator, Body, TabHeading, } from 'native-base';
import { View, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CircleMiddleware } from '../../store/middlewares/circlesMiddleware'

function mapDispatchToProps(dispatch) {
    return {
        getAllCircles: (uid) => dispatch(CircleMiddleware.getAllCircles(uid)),
    }
}

function mapStateToProps(state) {
    return {
        circles: state.Circles.circles
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




    componentWillMount() {
        console.disableYellowBox = true;
        AsyncStorage.getItem('familytracker', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                var uid = data._id;
                this.props.getAllCircles(uid);
            }
        });
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

    joinCircle = () => {
        this.props.navigation.navigate('joincircle')
    }


    currentCircle = (key, name, keyV, mainKey) => {

        // this.props.circles[key].members.map((value, k) => {
        //     return (console.log(value))
        // })

        let array = this.props.circles[key]
        let keys = key
        let ownername = name
        let keyValue = keyV


        // array.members.map((a, i) => {
        //     console.log(a)
        // })
        // console.log(array.members)

        this.props.navigation.navigate('circleDetails', { keys, ownername, keyValue, mainKey })

        console.log(keys, name, keyValue)
        console.log(array)

    }


    render() {

        console.log(this.props.circles)
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

                    <ListItem avatar style={{ marginLeft: 0 }} onPress={this.joinCircle}>
                        <Left>
                            <Icon style={{ marginLeft: 10, color: '#CD0000' }} size={20} name='plus-circle' />
                        </Left>
                        <Body>
                            <Text style={{ color: '#999', fontSize: 16 }}>Join Circle</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar style={{ marginLeft: 0 }} onPress={this.createCircle}>
                        <Left>
                            <Icon style={{ marginLeft: 10, color: '#CD0000' }} size={20} name='plus-circle' />
                        </Left>
                        <Body>
                            <Text style={{ color: '#999', fontSize: 16 }}>Create Circle</Text>
                        </Body>
                    </ListItem>
                    {
                        this.props.circles.map((value, k) => {
                            return (
                                <ListItem onPress={() => this.currentCircle(k, value.name, value.key, value.mainKey)} avatar style={{ marginLeft: 0 }} key={k}>
                                    <Left>
                                        <Icon style={{ marginLeft: 10 }} size={20} name='user-o' />
                                    </Left>
                                    <Body>
                                        <Text style={{ color: '#999', fontSize: 16 }}>{value.name}</Text>
                                    </Body>
                                    <Right>
                                        <Icon size={15} name="gear" />
                                    </Right>
                                </ListItem>

                            )
                        })
                    }
                    {/* <ListItem avatar style={{ marginLeft: 0 }} onPress={this.circleDetail}>
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
                    </ListItem> */}
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