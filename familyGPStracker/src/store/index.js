import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import SignupReducer from './reducers/signupReducer'
import LoginReducer from './reducers/loginReducer';
import PatientsReducer from './reducers/patientsReducer'
import CirclesReducer from './reducers/circlesReducer'
import MapViewReducer from './reducers/mapViewReducer'
import ChatBoxReducer from './reducers/chatboxReducer'

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
    Signup: SignupReducer,
    Patients: PatientsReducer,
    Login: LoginReducer,
    Circles: CirclesReducer,
    MapView: MapViewReducer,
    ChatBox: ChatBoxReducer,
});

const store = createStore(
    rootReducer,
    compose(
        middleware,
    )
);


export default store;