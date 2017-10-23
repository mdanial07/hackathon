import React, { Component } from 'react'
import {
    Container, Header, Content, List, Right, Left, ListItem,
    Item, Label, Input, Switch, Title, Thumbnail, Text, Separator,
    Body, TabHeading, Button, Footer
} from 'native-base';
import { View, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"
import { connect } from 'react-redux';
import { LoginMiddleware } from '../../store/middlewares/loginMiddleware';
import Icon from 'react-native-vector-icons/FontAwesome';



function mapDispatchToProps(dispatch) {
    return {
        logoutUser: (props) => dispatch(LoginMiddleware.logoutUser(props))
    }
}

function mapStateToProps(state) {
    return {
        login: state.Login.login,
    }
}


class ProfileDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', pass: '', Users: [] }
    }
    static navigationOptions = {
        title: 'Login Page',
        header: null,
    }

    componentWillMount() {
        console.disableYellowBox = true;
        console.log(this.props)
        AsyncStorage.getItem('familytracker', (err, result) => {
            if (result !== null) {
                console.log(result)
                let data = JSON.parse(result);
                this.setState({ Users: [data] });
                console.log(this.state.Users);

                // AsyncStorage.removeItem('patientapp', result);   
            }
        });
    }

    back = () => {
        this.props.navigation.navigate('circles')
    }

    logout = () => {
        this.props.logoutUser(this.props)
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#05b8cc' }}>
                    <Left>
                        <Button transparent onPress={this.back}>
                            <Icon style={{ color: '#fff' }} size={20} name='arrow-left'  />
                        </Button>
                    </Left>
                    <Body >
                        {
                            this.state.Users.map((user, i) => {
                                return (
                                    <Title key={i} style={{ marginLeft: -20 }}>{user.fname}</Title>
                                )
                            })
                        }
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon style={{ color: '#fff' }} size={20} name='check' />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <Thumbnail style={{ alignSelf: 'center', borderWidth: 2, borderColor: '#05b8cc', marginTop: '5%', marginBottom: '2%' }} large source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />

                    <Text style={{ alignSelf: 'center', marginBottom: '3%' }}>Change Photo</Text>
                    {
                        this.state.Users.map((user, i) => {
                            return (<View style={{ marginLeft: '10%', marginTop: '5%', justifyContent: 'center', width: '80%' }}>
                                <Item floatingLabel  >
                                    <Label>Name</Label>
                                    <Input value={user.fname} />
                                </Item>
                                <Item floatingLabel style={{ marginTop: '4%' }}>
                                    <Label>Surname</Label>
                                    <Input value={user.sname} />
                                </Item>
                                <Item floatingLabel style={{ marginTop: '4%' }}>
                                    <Label>Email Address</Label>
                                    <Input value={user.email} />
                                </Item>
                                <Item floatingLabel style={{ marginTop: '4%' }}>
                                    <Label>Password</Label>
                                    <Input
                                        type="password"
                                        value={user.pass}
                                        secureTextEntry={true}
                                    />
                                </Item>
                            </View>
                            )
                        })
                    }
                </Content>

                <Footer style={{ backgroundColor: '#CD0000', marginTop: 15 }}>
                    <Text style={{ color: '#fff', marginTop: 15 }} onPress={this.logout}> Log Out </Text>
                </Footer>
            </Container>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);



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