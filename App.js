/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView, StyleSheet, ScrollView,
  View, Text, StatusBar,
} from 'react-native';

import {
  Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, 
} from 'react-native/Libraries/NewAppScreen';

// import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WHOGuidelinesComponent from './Components/WHOGuidelines/WHOGuidelinesComponent.js';
import SecondComponent from './Components/SecondComponent.js';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Infection Prevention and control/WASH" component={WHOGuidelinesComponent} initialParams={{data:'wash'}}/>
        <Drawer.Screen name="Guidance for schools, workplaces and institutions" component={WHOGuidelinesComponent} initialParams={{data:'institute'}} />
        <Drawer.Screen name="Points of entry and mass gatherings" component={WHOGuidelinesComponent} initialParams={{data:'mass'}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
