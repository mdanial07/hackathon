import React, { Component } from 'react'
import { Container, Header, Title, Button, Content, Form, Icon, Item, Input, Label, Toast, Footer } from 'native-base';
import { View, Text, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"
import { LoginMiddleware } from '../../store/middlewares/loginMiddleware'
import { connect } from "react-redux";
import * as firebase from "firebase";


function mapDispatchToProps(dispatch) {
    return {
        loginUser: (props, doctor) => dispatch(LoginMiddleware.loginUser(props, doctor)),
        getAllUsers: (email) => dispatch(LoginMiddleware.getAllUsers(email)),

    }
}

function mapStateToProps(state) {
    return {

    }
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', pass: '', user: [] }
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
                var email = data.email;
                var pass = data.pass;
                console.log(email, pass)
                firebase.auth().signInWithEmailAndPassword(email, pass)
                    .then((user) => {
                        console.log("dadad")
                        this.props.navigation.navigate('maps')
                    })
            }
        });

    }
    loginCheck = () => {

        if (this.state.email == '' || this.state.pass == '') {
            // console.log(this.props, "props")

            Toast.show({
                text: 'Enter Email and Password !',
                position: 'bottom',
                buttonText: 'Okay'
            });
        }
        else {
            var email = this.state.email;
            var pass = this.state.pass;

            var users = {
                email: email,
                pass: pass,
            }
            console.log(users)

            this.props.loginUser(this.props, users)
            this.props.getAllUsers(email);
            this.setState({
                email: '',
                pass: '',
            })
        }
    }

    render() {
        return (
            <Image source={require('../Images/bg1.jpg')} style={styles.bgImage}>
                <Container >
                    <Content style={{ width: 240, marginTop: 200 }} >
                        <TextInput
                            style={{ height: 40, color: '#fff' }}
                            placeholder="Email Address"
                            placeholderTextColor="white"
                            onChangeText={(email) => this.setState({ email })}
                            underlineColorAndroid='#fff'
                            required
                        />
                        <TextInput
                            style={{ height: 40, color: '#fff' }}
                            placeholder="Password"
                            placeholderTextColor="white"
                            onChangeText={(pass) => this.setState({ pass })}
                            underlineColorAndroid='#fff'
                            secureTextEntry={true}
                        />
                        <Button block rounded style={{ marginTop: 20, backgroundColor: 'rgba(255,255,255, 0.3 )', padding: 10, width: 240 }} onPress={this.loginCheck}>
                            <Text style={{ color: '#fff', }} >Login</Text>
                        </Button>
                        <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', marginTop: 10 }}> Forgot your login details?<Text style={{ fontWeight: 'bold', }}> Get login help.</Text> </Text>
                    </Content>
                    <Footer style={{ backgroundColor: 'none', height: 100 }}>
                        <Button block rounded style={{ backgroundColor: 'rgba(45,92,227, 0.7 )', padding: 10, width: 240 }} onPress={() => { this.props.navigation.navigate('signup') }}>
                            <Text style={{ color: '#fff', }} >Create an account </Text>
                        </Button>
                    </Footer>

                </Container>
            </Image  >


        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)




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