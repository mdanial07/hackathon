import * as firebase from "firebase";
import SignupAction from '../actions/signupAction'

export class SignupMiddleware {
    static createUser(users) {
        return (dispatch) => {
            // firebase.database().ref('patientsApp/').push({ doctors });
            
            let email = users.email
            let pass = users.pass;
            firebase.auth().createUserWithEmailAndPassword(email, pass)
                .then((user) => {
                    uid = user.uid;
                    users._id = uid
                    firebase.database().ref(`Users/${uid}`).set(users);

                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });

            console.log(users);
        }
    }
    static getAllUsers() {
        return (dispatch) => {
            firebase.database().ref(`/Users`).on('value', (data) => {
                let userData = data.val();

                let array = [];
                for (var data in userData) {
                    array.push(userData[data])
                }
                console.log(array)
                dispatch(SignupAction.getSignup(array));
            })
        }
    }
}