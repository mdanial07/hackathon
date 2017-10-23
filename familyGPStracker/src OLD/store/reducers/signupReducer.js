import SignupAction from '../actions/signupAction';

const initialState = { signup: [] }

export default function SignupReducer(state = initialState, action) {
    // const { signup } = action;
    switch (action.type) {
        case SignupAction.GET_SIGNUP:
            console.log(action.signup);
            return Object.assign({}, state, { signup: action.signup })
        // return state = { ...state, signup }
        default:
            return state;
    }
}
