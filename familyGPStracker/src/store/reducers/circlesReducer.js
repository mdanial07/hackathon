import CirclesAction from '../actions/circlesAction';

const initialState = { circles: [], }

export default function CirclesReducer(state = initialState, action) {
    // const { patients } = action;
    switch (action.type) {
        case CirclesAction.GET_ALLCIRCLES:
            console.log(action.circles);
            return Object.assign({}, state, { circles: action.circles })
        // return state = { ...state, patients }
        
        default:
            return state;
    }
}
