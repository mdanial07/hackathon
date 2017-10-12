import * as firebase from "firebase";
import PatientsAction from '../actions/patientsAction'

export class PatientsMiddleware {
    static createPatient(patient) {
        return (dispatch) => {
            let docId = patient.docId
            firebase.database().ref(`Patients/${docId}`).push(patient);
            console.log(patient);
        }
    }

    static getAllPatietns(docId) {
        return (dispatch) => {
            firebase.database().ref(`/Patients/${docId}`).on('value', (data) => {
                let userData = data.val();

                let array = [];
                for (var data in userData) {
                    array.push(userData[data])
                }
                console.log("dsadsa", array)
                dispatch(PatientsAction.getAllPatients(array));
            })
        }
    }
}