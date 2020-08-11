import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Welcome from './screens/Welcome'
import Explore from './screens/Explore'
import Details from './screens/Details'
import Cart from './screens/Cart'
import Menu    from './screens/Menu'

const AppStack = createStackNavigator()
// const AppDrawer = createDrawerNavigator()



// const Drawer = () => {
//   return (
//     <AppDrawer.Navigator  drawerContent={() => <Menu />}>
//         <AppDrawer.Screen name="Explore" component={Explore} />
//         <AppDrawer.Screen name="Details" component={Details} />
//         <AppDrawer.Screen name="Cart" component={Cart} />
//     </AppDrawer.Navigator>
//   )
// }


const Routes = () => {
  return (
    <NavigationContainer>
        <AppStack.Navigator
         headerMode="none">

         <AppStack.Screen name="Welcome" component={Welcome} />
         <AppStack.Screen name="Explore" component={Explore} />
         <AppStack.Screen name="Cart" component={Cart} />
         <AppStack.Screen name="Details" component={Details} />

        </AppStack.Navigator>
    </NavigationContainer>
  )
}


export default Routes;