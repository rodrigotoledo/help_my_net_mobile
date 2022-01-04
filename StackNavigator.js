import 'react-native-gesture-handler'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardScreen from './screens/DashboardScreen'
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'
import useAuth from './hooks/useAuth'

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2c6bed' },
  headerTintStyle: { color: 'white' },
  headerTintColor: 'white',
  headerShown: false,
}
const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  const { user } = useAuth()
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen
        name="Login"
        tabBar={() => null}
        screenOptions={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator
