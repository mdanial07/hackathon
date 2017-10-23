import * as firebase from "firebase";
import ViewMapShow from '../actions/mapViewAction'

import { Toast } from 'native-base';

export class MapViewMiddleware {

    static ViewMapShow(userID) {
        return (dispatch) => {
            console.log(userID)
            let array = [];
            let NewArray = [];
            userID.map((uid, k) => {
                firebase.database().ref(`/Users/${uid}/`).on('value', (data) => {
                    let userData = data.val();
                    array.push(userData);
                    console.log(userData)
                    // for (var data in userData) {
                    //     array.push(userData[data])
                    // }
                    console.log(array.length, array)
                    setTimeout(function () {
                        console.log("hogiya")
                        dispatch(ViewMapShow.ViewMapShow(array));
                    }, 3000);
                })
            })
            // firebase.database().ref(`/Users/`).on('value', (data) => {
            //     let array = [];
            //     let userArray = []
            //     let userData = data.val();
            //     // array.push(userData);
            //     console.log(userData)
            //     for (var data in userData) {
            //         array.push(userData[data])
            //     }

            //     for (var i = 0; i < array.length; i++) {
            //         if (array._id == userID[i]) {
            //             console.log("rania", array[i])
            //         }
            //     }


            //     // console.log(array)
            //     // array.map((user, i) => {
            //     //     console.log(userID[i])
            //     //     console.log(user._id)
            //     //     if (user._id == userID[i]) {
            //     //         console.log(user._id)
            //     //         userArray.push(user);
            //     //     }
            //     //     console.log(userArray)
            //     // })

            // })
        }
    }

}