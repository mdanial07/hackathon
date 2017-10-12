import React, { Component } from 'react'
import { Container, Header, Content, List, Right, Left, Button, Title, ListItem, Item, Label, Input, Switch, Thumbnail, Text, Separator, Body, TabHeading, } from 'native-base';
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


class CirclesDetails extends Component {

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

    circles = () => {
        this.props.navigation.navigate('circles')

    }

    render() {
        return (
            <Container>
                <View>
                </View>

                <Content>
                    <Icon style={{ color: '#333', marginLeft: 15, marginTop: 15, }} size={20} name='arrow-left' onPress={this.circles} />
                    {/* <Thumbnail style={{ alignSelf: 'center', borderWidth: 2, borderColor: '#05b8cc', marginTop: '5%', marginBottom: '2%' }} large size={80} source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} /> */}

                    <Icon style={{ alignSelf: 'center', marginBottom: '2%' }} size={100} name='user-o' />

                    <Text style={{ alignSelf: 'center', marginBottom: '5%' }}>University Circle</Text>

                    <View style={{ borderWidth: 1, borderColor: '#d3d3d3', marginTop: '5%', width: '100%', alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap'  }}>
                        <Thumbnail style={{ marginTop: '4%', marginLeft: '3%' }} large  source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                        <Thumbnail style={{ marginTop: '4%', marginLeft: '3%'}} large source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                        <Thumbnail style={{ marginTop: '4%', marginLeft: '3%'}} large source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                        <Thumbnail style={{ marginTop: '4%', marginLeft: '3%'}} large source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                        <Thumbnail style={{ marginTop: '4%', marginLeft: '3%'}} large source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                        <Thumbnail style={{ marginTop: '4%', marginLeft: '3%'}} large source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                        <Thumbnail style={{ marginTop: '4%', marginLeft: '3%'}} large source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                        <Thumbnail style={{ marginTop: '4%', marginLeft: '3%'}} large source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                    </View>
                    {/* <Item floatingLabel  >
                            <Label>Name</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{ marginTop: '4%' }}>
                            <Label>Surname</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{ marginTop: '4%' }}>
                            <Label>Email Address</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{ marginTop: '4%' }}>
                            <Label>Password</Label>
                            <Input />
                        </Item> */}
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