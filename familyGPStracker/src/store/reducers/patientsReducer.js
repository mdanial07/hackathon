import PatientsAction from '../actions/patientsAction';

const initialState = { patients: [] }

export default function PatientsReducer(state = initialState, action) {
    // const { patients } = action;
    switch (action.type) {
        case PatientsAction.GET_ALLPATIENTS:
            console.log(action.patients);
            return Object.assign({}, state, { patients: action.patients })
        // return state = { ...state, patients }
        default:
            return state;
    }
}
