import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { AuthScreen } from '../screens/AuthScreen'
import { ListScreen } from '../screens/ListSreen'
import { ElementScreen } from '../screens/ElementScreen'


const PostNavigator = createStackNavigator(
  {
    Auth: {
      screen: AuthScreen
    },
    List: {
      screen: ListScreen
    },
    Element: {
      screen: ElementScreen
    }
  },
  {
    initialRouteName: 'Auth'
  }
)
 
export const AppNavigation = createAppContainer(PostNavigator)