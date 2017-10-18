
import * as firebase from "firebase";
import LoginAction from '../actions/loginAction'
import { AsyncStorage } from 'react-native'
import { Toast } from 'native-base';

export class LoginMiddleware {
    static loginUser(props, doctors) {
        console.log(props);
        return (dispatch) => {
            // firebase.database().ref('patientsApp/').push({ doctors });
            console.log(doctors)
            let email = doctors.email
            let pass = doctors.pass;
            firebase.auth().signInWithEmailAndPassword(email, pass)
                .then((user) => {
                    console.log(user)
                    Toast.show({
                        text: 'Successfully Login !',
                        position: 'bottom',
                        buttonText: 'Okay'
                    });

                    props.navigation.navigate('maps')
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                    // ...
                    Toast.show({
                        text: errorMessage,
                        position: 'bottom',
                        buttonText: 'Okay'
                    });
                });
        }
    }

    static logoutUser(props) {
        return (dispatch) => {

            AsyncStorage.removeItem('familytracker')
            props.navigation.navigate("login")

        }
    }


    static getAllUsers(currentEmail) {
        return (dispatch) => {
            firebase.database().ref('/Users').on('value', (data) => {
                let userData = data.val();
                let array = [];
                for (var data in userData) {
                    array.push(userData[data])
                }
                console.log(array)
                var sortData = {}

                array.map((doc, i) => {
                    console.log(currentEmail, doc.email)
                    if (doc.email === currentEmail) {
                        return (
                            sortData = {
                                _id: doc._id,
                                email: doc.email,
                                pass: doc.pass,
                                fname: doc.fname,
                                sname: doc.sname,
                                latitude: doc.latitude,
                                longitude: doc.longitude,
                            }
                        )
                    }
                })

                console.log(sortData);
                AsyncStorage.setItem('familytracker', JSON.stringify(sortData))
                console.log(array)
                dispatch(LoginAction.getUsers(array));

                // var sortArray = []
                // sortArray.push(sortData);
                // AsyncStorage.getItem('patientapp', (err, result) => {
                //     if (result !== null) {
                //         AsyncStorage.removeItem('patientapp', result);
                //     }
                // });
            })
        }
    }
}