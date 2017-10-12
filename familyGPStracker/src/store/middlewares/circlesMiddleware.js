import * as firebase from "firebase";


import CirclesAction from '../actions/circlesAction'


// import { Toast } from 'native-base';
// import SignupAction from '../actions/signupAction'

export class CircleMiddleware {
    static createCircle(users) {
        return (dispatch) => {
            let uid = users.uid
            let pass = users.pass;
            firebase.database().ref(`Cirlces/${uid}`).push(users)

                .then((user) => {
                    console.log('Successfully Login')
                    // Toast.show({
                    //     text: 'Successfully Login !',
                    //     position: 'bottom',
                    //     buttonText: 'Okay'
                    // });
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log('Successfully Logi')
                    // Toast.show({
                    //     text: 'Successfully Login !',
                    //     position: 'bottom',
                    //     buttonText: 'Okay'
                    // });
                });
            console.log(users);
        }
    }

    static getAllCircles(users) {
        return (dispatch) => {

            let uid = users;
            console.log("dsadadasdadsadsa", uid)

            firebase.database().ref(`/Circles/${uid}`).on('value', (data) => {
                let userData = data.val();

                let array = [];
                for (var data in userData) {
                    array.push(userData[data])
                }
                console.log(array)
                // dispatch(CirclesAction.getAllCircles(array));
            })
        }
    }
}