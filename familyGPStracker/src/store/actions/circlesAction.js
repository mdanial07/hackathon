export default class CirclesAction {
    static GET_ALLCIRCLES = 'GET_ALLCIRCLES';
    static getAllCircles(circles) {
        console.log(circles)
        return {
            type: CirclesAction.GET_ALLCIRCLES,
            circles
        }
    }

}