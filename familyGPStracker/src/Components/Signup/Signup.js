import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button, Footer } from 'native-base';
import { View, Text, AsyncStorage, Image, StyleSheet, TextInput } from "react-native"
import { connect } from "react-redux";
import { SignupMiddleware } from '../../store/middlewares/signupMiddleware';
import * as firebase from "firebase";



function mapDispatchToProps(dispatch) {
    return {
        createUser: (users) => dispatch(SignupMiddleware.createUser(users)),
        getAllUsers: () => dispatch(SignupMiddleware.getAllUsers()),

    }
}
function mapStateToProps(state) {
    return {
        signup: state.Signup.signup,
    }
}



class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            sname: '',
            email: '',
            password: '',
            usersAllData: [],
            user: [],
        }
    }

    static navigationOptions = {
        title: "Create an account",
        header: null,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signup) {
            this.setState({ usersAllData: nextProps.signup });
        }
        console.log("nextProps", nextProps.signup)
    }

    componentWillMount() {

        console.disableYellowBox = true;
        // console.log(this.props.allUsers);

        this.props.getAllUsers();

        console.log("dadsda", this.props.signup)


        // firebase.database().ref('/patientsApp/').on('value', (data) => {

        //     let obj = data.val();
        //     console.log(obj)
        // })



        // console.disableYellowBox = true;
        // AsyncStorage.getItem('users', (err, result) => {
        //     if (result !== null) {
        //         let data = JSON.parse(result);
        //         this.setState({ user: data });
        //         console.log(this.state.user, 'dadadadada');
        //     }
        // })
    }

    createAnAccount = (e) => {
        // e.preventDefault();
        // AsyncStorage.getItem('users', (err, result) => {
        //     if (result !== null) {
        //         let data = JSON.parse(result);
        //         this.setState({ user: data }); 1
        //         console.log(this.state.user, 'dadadadada');
        //     }
        // })
        // var userExist = false;
        // var users = this.state.user;
        var obj = {
            fname: this.state.fname,
            sname: this.state.sname,
            email: this.state.email,
            pass: this.state.password,
        }

        console.log(obj);

        this.props.createUser(obj)

        // for (var i = 0; i < users.length; i++) {
        //     if (users[i].email === this.state.email) {
        //         userExist = true;
        //     }
        // }

        // if (userExist === true) {
        //     console.log('user already exists!!')
        // }
        // else {

        //     users.push(obj);
        //     console.log(users);
        //     AsyncStorage.setItem('users', JSON.stringify(users))
        //     console.log('Signup SuccessFully')
        // }
    }

    render() {
        console.log(this.props.signup)
        return (
            <Image source={require('../Images/bg1.jpg')} style={styles.bgImage}>
                <Container>
                    <Content style={{ width: 240, marginTop: 120 }} >
                        <TextInput
                            style={{ height: 40, color: '#fff' }}
                            placeholder="Full Name"
                            placeholderTextColor="white"
                            onChangeText={(fname) => this.setState({ fname })}
                            underlineColorAndroid='#fff'

                        />
                        <TextInput
                            style={{ height: 40, color: '#fff' }}
                            placeholder="Surname"
                            placeholderTextColor="white"
                            onChangeText={(sname) => this.setState({ sname })}
                            underlineColorAndroid='#fff'

                        />
                        <TextInput
                            style={{ height: 40, color: '#fff' }}
                            placeholder="Email Address or Mobile Number"
                            placeholderTextColor="white"
                            onChangeText={(email) => this.setState({ email })}
                            underlineColorAndroid='#fff'

                        />
                        <TextInput
                            style={{ height: 40, color: '#fff' }}
                            placeholder="Password"
                            placeholderTextColor="white"
                            onChangeText={(password) => this.setState({ password })}
                            underlineColorAndroid='#fff'
                            secureTextEntry={true}
                        />
                        <Button block rounded style={{ marginTop: 20, backgroundColor: 'rgba(255,255,255, 0.3 )', padding: 10, width: 240 }} onPress={this.createAnAccount}>
                            <Text style={{ color: '#fff', }} >Sign up</Text>
                        </Button>
                        {/* {
                        (this.props.signup)?
                        this.props.signup.map((user, i) => {
                            console.log(user.fname)
                            return (<View key={i}>
                                            <Text style={{ color: '#fff' }}>{user.fname}</Text>
                                {keys.users.map((p, i) => {
                                    return (
                                      <View key={i + 1}>
                                            <Text >{p.fname}</Text>
                                            <Text >{p.email}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                            )
                        })
                        :null
                        } */}
                        <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', marginTop: 10 }}> Forgot your login details?<Text style={{ fontWeight: 'bold', }}> Get login help.</Text> </Text>
                    </Content>
                    <Footer style={{ backgroundColor: 'none',height: 100 }}>
                        <Button block rounded style={{ backgroundColor: 'rgba(45,92,227, 0.7 )', padding: 10, width: 240 }} onPress={() => { this.props.navigation.navigate('login') }}>
                            <Text style={{ color: '#fff', }} >Already have account </Text>
                        </Button>
                    </Footer>

                </Container>
            </Image >

        )
    }
}

// export default Signup;
export default connect(mapStateToProps, mapDispatchToProps)(Signup)



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