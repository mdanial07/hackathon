import * as firebase from "firebase";
import ChatBoxAction from '../actions/chatboxAction'

import { Toast } from 'native-base';

export class ChatBoxMiddleware {

  static ChatBox(mainkey) {
    return (dispatch) => {
      console.log(mainkey)
      let array = [];
      let NewArray = [];
      firebase.database().ref(`/Circles/${mainkey}/chatbox`).on('value', (data) => {
        let userData = data.val();
        console.log(userData)
        for (var data in userData) {
            array.push(userData[data])
        }
        dispatch(ChatBoxAction.Chatbox(array));
      })
    }
  }

  static ChatMessages(chat, key) {
    return (dispatch) => {
      console.log(chat, key)
      let array = []

      firebase.database().ref(`Circles/${key}/chatbox/`).push(chat)
        .then((chat) => {

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


      // firebase.database().ref(`/Circles/${key}/chatbox`).on('value', (data) => {
      //   let userData = data.val();
      //   console.log(userData)
      //   array = userData;
      //   array.push(chat);
      //   console.log(array)
      // })

    }
  }
}