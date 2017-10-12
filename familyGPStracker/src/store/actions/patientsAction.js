export default class PatientsAction{
    static GET_ALLPATIENTS = 'GET_ALLPATIENTS';
  
    static getAllPatients(patients){
        console.log(patients)
        return {
            type: PatientsAction.GET_ALLPATIENTS,
            patients
        }
    }
}