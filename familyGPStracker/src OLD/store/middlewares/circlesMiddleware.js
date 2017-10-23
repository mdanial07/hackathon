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
                let CirclesForthisUser = []
                array.map((u, i) => {
                    return u.members.map((mem, k) => {
                        if (uid == mem.uid) {
                            CirclesForthisUser.push(u);
                        }
                    })
                })

                console.log(CirclesForthisUser)
                // array.map((v, i) => {
                //     return 
                //     })
                // })
                dispatch(CirclesAction.getAllCircles(CirclesForthisUser));
            })
        }
    }

    static joinCircle(code, member) {
        return (dispatch) => {
            let joinCode = code;
            let user = member
            let uid = member.uid
            let circleKey = ''
            let array = []
            let membersArray = []

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
                        membersArray = value.members
                        let memberExist = false;

                        for (var i = 0; i < membersArray.length; i++) {
                            if (uid == membersArray[i].uid) {
                                memberExist = true;
                                break;
                            }
                        }
                        if (memberExist) {
                            Toast.show({
                                text: 'You are already a member',
                                position: 'bottom',
                                buttonText: 'Okay'
                            });
                        }
                        else {
                            membersArray.push(user)
                            firebase.database().ref(`/Circles/${circleKey}/members/`).set(membersArray)
                                .then((user) => {
                                    Toast.show({
                                        text: 'You Successfully Join!',
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
                    else {
                        Toast.show({
                            text: 'Invalid Key !!!',
                            position: 'bottom',
                            buttonText: 'Okay'
                        });
                    }
                })
                // array['members'] = membersArray
                console.log(membersArray)
                console.log(array)
                console.log(userData)
            })

            // firebase.database().ref(`/Circles/${circleKey}/members/`).set(membersArray)
            //     .then((user) => {
            //         Toast.show({
            //             text: 'You Successfully Join!',
            //             position: 'bottom',
            //             buttonText: 'Okay'
            //         });
            //     })
            //     .catch(function (error) {
            //         var errorCode = error.code;
            //         var errorMessage = error.message;
            //         Toast.show({
            //             text: errorMessage,
            //             position: 'bottom',
            //             buttonText: 'Okay'
            //         });
            //     });
        }
    }
}