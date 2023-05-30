import {View, Text} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import {Provider} from 'react-redux';
import store from './store/Store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './screens/Tabs';
import Details from './screens/Details';
import EditScreen from './screens/EditScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="EditScreen" component={EditScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
