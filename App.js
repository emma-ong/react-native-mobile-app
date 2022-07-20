import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import PetsScreen from "./src/screens/PetsScreen"

//contains all screens in app
const navigator = createStackNavigator(
  {
  Pets: PetsScreen,
  Home: HomeScreen,
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "BusinessSearch"
  }
})

export default createAppContainer(navigator)
  

