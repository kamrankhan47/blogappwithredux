import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Add from './Add'
import Edit from './darkLight'
import DarkModeLightMode from './darkLight'
const Tab=createBottomTabNavigator()
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="DarkLight" component={DarkModeLightMode} />
    </Tab.Navigator>
  )
}

export default Tabs
