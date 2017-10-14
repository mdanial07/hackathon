import * as firebase from "firebase";
import CirclesAction from '../actions/circlesAction'

import { Toast } from 'native-base';

export class CircleMiddleware {
    static createCircle(users, member) {
        return (dispatch) => {
            // let uid = userid.uid
            // let code = userid.code;
            let key = firebase.database().ref('Circles/').push().key
            // let key = "-KwQ-_qVap-57kNRsZua"
            let code = key.slice(15, 20)
            users['mainKey'] = key
            users['key'] = code
            // console.log(users)
            firebase.database().ref(`Circles/${key}`).set(users)
                .then((user) => {
                    // firebase.database().ref(`Circles/${key}/members`).push(member)

                    Toast.show({
                        text: 'Circle Successfully Create !',
                        position: 'bottom',
                        buttonText: 'Okay'
                    });
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    Toast.show({
                        text: errorMessage,
                        position: 'bottom',
                        buttonText: 'Okay'
                    });
                });
            console.log(key)
            console.log(users);
        }
    }

    static getAllCircles(uid) {
        return (dispatch) => {
            let id = uid
            console.log(id)
            firebase.database().ref(`/Circles/`).on('value', (data) => {
                let userData = data.val();


                console.log(userData)
                let array = [];
                for (var data in userData) {
                    array.push(userData[data])
                }
                console.log(array)

                // array.map((v, i) => {
                //     return 
                //     })
                // })
                dispatch(CirclesAction.getAllCircles(array));
            })
        }
    }

    static joinCircle(code, member) {
        return (dispatch) => {
            let joinCode = code;
            let user = member
            let circleKey = ''
            let array = []

            firebase.database().ref('/Circles/').on('value', (data) => {
                let userData = data.val();
                let array = [];
                for (var data in userData) {
                    array.push(userData[data])
                }
                array.map((value, k) => {
                    console.log(value)
                    if (value.key == joinCode) {
                        circleKey = value.mainKey
                        array = value.members
                        Toast.show({
                            text: 'Circle Join Successfully!',
                            position: 'bottom',
                            buttonText: 'Okay'
                        });
                    }
                    else {
                        console.log("there is something missing")
                    }
                })
                console.log(array)
                console.log(userData)
            })

            firebase.database().ref(`/Circles/${circleKey}/members`).push(user)
                .then((user) => {
                    Toast.show({
                        text: 'You SuccessFully Join !',
                        position: 'bottom',
                        buttonText: 'Okay'
                    });
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    Toast.show({
                        text: errorMessage,
                        position: 'bottom',
                        buttonText: 'Okay'
                    });
                });
        }
    }
}