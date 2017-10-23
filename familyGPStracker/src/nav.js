import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation"


import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import Circles from "./Components/Circles/circles"
import CreateCircle from "./Components/createCircle/createcircle"
import Maps from "./Components/Maps/maps"
import CirclesDetails from './Components/Circles/circleDetails'
import JoinCircle from './Components/createCircle/joincircle'
import Profile from './Components/Profile/profile'
import ProfileDetails from './Components/Profile/details'
import ChatBox from './Components/ChatBox/chat'
import ViewMap from './Components/ViewMap/viewMap'

// import HomePage from "./Components/HomePage/homePage"
// import AllCircles from "./Components/AllCircles/allCircles"
// import PatientRegForm from "./Components/RegForm/regForm"
// import PatientList from "./Components/PatientsList/patientsList"
// import TabNavigation from "./Components/TabsNav/tabNavigation"
// import PatientList from "./Components/PatientsList/patientssList"
// import TabsNav from './Components/TabsNav/tabsNav'

const Naviagte = StackNavigator({
    circles: { screen: Circles },
    login: { screen: Login },
    profiledetails: { screen: ProfileDetails },
    mapview: { screen: ViewMap },
    chatbox: { screen: ChatBox },
    circleDetails: { screen: CirclesDetails },
    maps: { screen: Maps },
    profile: { screen: Profile },
    joincircle: { screen: JoinCircle },
    createcircle: { screen: CreateCircle },
    signup: { screen: Signup },
    // homePage: { screen: HomePage },
    // tabnavigation: { screen: TabNavigation },
    // allCircles: { screen: AllCircles },
    // patientList: { screen: PatientList },   
    // tabsnav: { screen: TabsNav },
    // regFrom: { screen: PatientRegForm },
})


export default Naviagte;
