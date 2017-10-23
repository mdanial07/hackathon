import LoginAction from '../actions/loginAction';

const initialState = { login: [] }

export default function LoginReducer(state = initialState, action) {
    // const { login } = action;
    switch (action.type) {
        case LoginAction.GET_LOGIn:
            console.log(action.login);
            return Object.assign({}, state, { login: action.login })
        // return state = { ...state, login }
        default:
            return state;
    }
}
