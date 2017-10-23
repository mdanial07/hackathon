import React, { Component } from 'react'
import { Container, Header, Content, List, Right, Left, Button, Fab, Title, ListItem, Switch, Thumbnail, Text, Separator, Body, TabHeading, } from 'native-base';
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
        this.state = { email: '', pass: '', user: [], showCircles: false, active: false }
    }
    static navigationOptions = {
        header: null,
    }

    componentWillMount() {
        console.disableYellowBox = true;
        AsyncStorage.getItem('familytracker', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                var uid = data._id;
                console.log(uid)
                this.props.getAllCircles(uid);
            }
        });
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
    profile = () => {
        this.props.navigation.navigate('profiledetails')
    }

    currentCircle = (key, name, keyV, mainKey) => {
        let array = this.props.circles[key]
        let keys = key
        let ownername = name
        let keyValue = keyV
        this.props.navigation.navigate('circleDetails', { keys, ownername, keyValue, mainKey })

        console.log(keys, name, keyValue)
        console.log(array)
    }


    render() {

        console.log(this.props.circles)
        return (
            <Container>
                <Header style={{ backgroundColor: '#05b8cc' }}>
                    <Left>
                    </Left>
                    <Body >
                        <Title style={{ marginLeft: 10, alignSelf: 'center' }}>All Circles </Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.profile}>
                            <Icon style={{ color: '#fff' }} size={25} name="gear" />
                        </Button>
                    </Right>
                </Header>
                <Content style={{ backgroundColor: '#fff', flex: 1 }}>
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
                                <View key={k}>
                                    <ListItem onPress={() => this.currentCircle(k, value.name, value.key, value.mainKey)} avatar style={{ marginLeft: 0 }} >
                                        <Left>
                                            <Icon style={{ marginLeft: 10 }} size={20} name='user-o' />
                                        </Left>
                                        <Body>
                                            <Text style={{ color: '#999', fontSize: 16 }}>{value.name}</Text>
                                        </Body>
                                        <Right>
                                            <Icon style={{ marginTop: '5%' }} size={15} name="gear" />
                                        </Right>
                                    </ListItem>
                                </View>

                            )
                        })
                    }
                </Content>
                {/* <View style={{ flex: 1 }}>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ size: 25 }}
                        style={{ backgroundColor: '#5067FF', }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="share" />
                        <Button style={{ backgroundColor: '#34A34F' }}>
                            <Icon name="logo-whatsapp" />
                        </Button>
                        <Button style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="logo-facebook" />
                        </Button>

                    </Fab>
                </View> */}
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