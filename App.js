import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screen/HomeScreen.js';
import Staff from './screen/Staff.js';
import Find from './screen/Find.js';
import Cus from './screen/Cus.js';
import Pac from './screen/Pac.js';
import Booking from './screen/Booking.js';
import Method from './screen/Method.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HOME') {
            iconName = 'ios-home-outline';
          } else if (route.name === 'STAFF') {
            iconName = 'people-circle-outline';
          } else if (route.name === 'FIND') {
            iconName = 'search';
          } else if (route.name === 'CUS') {
            iconName = 'people';
          } else if (route.name === 'PAC') {
            iconName = 'flag';
          } else if (route.name === 'BOOKING') {
            iconName = 'book';
          } else if (route.name === 'METHOD') {
            iconName = 'ios-list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#006633',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="STAFF" component={Staff} />
      <Tab.Screen name="FIND" component={Find} />
      <Tab.Screen name="CUS" component={Cus} />
      <Tab.Screen name="PAC" component={Pac} />
      <Tab.Screen name="BOOKING" component={Booking} />
      <Tab.Screen name="METHOD" component={Method} />
    </Tab.Navigator>
  );
};
const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: {backgroundColor: '#006633'},
    }}>
    <Stack.Screen name="Forrest Tour" component={MyTabs} />
  </Stack.Navigator>
);

const AuthenticationNavigator = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default AuthenticationNavigator;
