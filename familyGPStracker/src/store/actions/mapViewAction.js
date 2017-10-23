export default class MapViewAction {
    static MAP_ALLUSERS = 'MAP_ALLUSERS';

    static ViewMapShow(mapUsers) {
        console.log(mapUsers)
        return {
            type: MapViewAction.MAP_ALLUSERS,
            mapUsers
        }
    }
}