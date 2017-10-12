
import * as firebase from "firebase";
import { AsyncStorage } from 'react-native'
import { Toast } from 'native-base';

export class ProfileMiddleware {
    static logOutUser(props, doctors) {
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
                    props.navigation.navigate('tabnavigation')
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
}