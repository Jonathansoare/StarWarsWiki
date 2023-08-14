import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, SplashScreen,Detail,SearchScreen,FavoritesScreen } from '../../src/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ButtomBar } from "~/components"


const BottomRoute = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator tabBar={props => <ButtomBar {...props}/>} screenOptions={{headerShown:false}}>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen options={{tabBarLabel:"Pesquisar"}} name='Search' component={SearchScreen}/>
      <Tab.Screen options={{tabBarLabel:"Favoritos"}} name='Favorites' component={FavoritesScreen}/>
    </Tab.Navigator>
  )
}

export const Routes = () => {
  const Stack = createNativeStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={BottomRoute} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
