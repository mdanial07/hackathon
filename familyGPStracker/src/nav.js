import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation"


import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import HomePage from "./Components/HomePage/homePage"
import Circles from "./Components/Circles/circles"
import CreateCircle from "./Components/createCircle/createcircle"
import Maps from "./Components/Maps/maps"
import CirclesDetails from './Components/Circles/circleDetails'
// import AllCircles from "./Components/AllCircles/allCircles"
// import PatientRegForm from "./Components/RegForm/regForm"
// import PatientList from "./Components/PatientsList/patientsList"
// import TabNavigation from "./Components/TabsNav/tabNavigation"
import Profile from './Components/Profile/profile'
import ProfileDetails from './Components/Profile/details'
// import PatientList from "./Components/PatientsList/patientssList"
// import TabsNav from './Components/TabsNav/tabsNav'

const Naviagte = StackNavigator({
    circleDetails: { screen: CirclesDetails },
    maps: { screen: Maps },
    circles: { screen: Circles },
    homePage: { screen: HomePage },
    profile: { screen: Profile },
    profiledetails: { screen: ProfileDetails },
    login: { screen: Login },
    createcircle: { screen: CreateCircle },
    signup: { screen: Signup },
    // tabnavigation: { screen: TabNavigation },
    // allCircles: { screen: AllCircles },
    // patientList: { screen: PatientList },   
    // tabsnav: { screen: TabsNav },
    // regFrom: { screen: PatientRegForm },
})


export default Naviagte;
