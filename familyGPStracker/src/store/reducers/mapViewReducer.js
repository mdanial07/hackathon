import MapViewAction from '../actions/mapViewAction';

const initialState = {  mapUsers: [] }

export default function MapViewReducer(state = initialState, action) {
    switch (action.type) {
        case MapViewAction.MAP_ALLUSERS:
            console.log(action.mapUsers);
            return Object.assign({}, state, { mapUsers: action.mapUsers })
        default:
            return state;
    }
}
