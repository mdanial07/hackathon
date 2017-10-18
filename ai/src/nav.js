import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation"


import MainPage from "./components/MainPage/mainpage"

const Naviagte = StackNavigator({
    mainpage: { screen: MainPage },
})


export default Naviagte;
