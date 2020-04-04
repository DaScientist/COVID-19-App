/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Linking,
} from 'react-native'

// import { Colors } from "react-native/Libraries/NewAppScreen";

// import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
  DrawerContent,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import {Colors} from 'react-native-paper'
import FastImage from 'react-native-fast-image'
import AppIntroSlider from 'react-native-app-intro-slider'

import WHOGuidelinesComponent from './Components/WHOGuidelines/WHOGuidelinesComponent.js'
import HomeComponent from './Components/HomeComponent.js'
import DonationComponent from './Components/DonationComponent'
import AboutComponent from './Components/AboutComponent.js'

const Drawer = createDrawerNavigator()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    }
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({showRealApp: true})
  }
  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 52,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginTop: 8,
          }}>
          {item.title}
        </Text>
        <Image style={item.imageStyle} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    )
  }

  render () {
    if (this.state.showRealApp) {
      return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeComponent} />

            <Drawer.Screen
              name='Infection Prevention and control/WASH'
              component={WHOGuidelinesComponent}
              initialParams={{data: 'wash'}}
            />

            <Drawer.Screen
              name='Guidance for schools, workplaces and institutions'
              component={WHOGuidelinesComponent}
              initialParams={{data: 'institute'}}
            />

            <Drawer.Screen
              name='Points of entry and mass gatherings'
              component={WHOGuidelinesComponent}
              initialParams={{data: 'mass'}}
            />
            <Drawer.Screen
              name='Donate to the Country'
              component={DonationComponent}
            />

            <Drawer.Screen name='About' component={AboutComponent} />
          </Drawer.Navigator>
        </NavigationContainer>
      )
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          data={slides}
          renderItem={this._renderItem}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
        />
      )
    }
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: 'white',
    fontSize: 12,
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
  },
})

const slides = [
  {
    key: 's1',
    title: 'Wash your hands frequently \n',
    text:
      'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.\n\nWhy? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: require('./assets/icons8-wash-your-hands-100.png'),
    imageStyle: styles.image,
    backgroundColor: '#3395ff',
  },
  {
    key: 's2',
    title: 'Maintain social distancing \n',
    text:
      'Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.\n\nWhy? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.',
    titleStyle: styles.title,
    image: require('./assets/istockphoto-1213746352-612x612.jpg'),
    imageStyle: {width: 200, height: 200},
    backgroundColor: '#3395ff',
  },
  {
    key: 's3',
    title: 'Avoid touching eyes, nose and mouth \n',
    text:
      'Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.',
    titleStyle: styles.title,
    image: require('./assets/iconfinder_Coronavirus_dont_touch_eyes_and_nose_21_5740512.jpg'),
    imageStyle: {width: 200, height: 200},
    backgroundColor: '#3395ff',
  },
  {
    key: 's4',
    title: 'Practice respiratory hygiene \n',
    text:
      'Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.\n\nWhy? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.',
    titleStyle: styles.title,
    image: require('./assets/iconfinder_Coronavirus-Practise-_respiratory-hygiene-_arm_5898755.png'),
    imageStyle: {width: 200, height: 200},
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title:
      'If you have fever, cough and difficulty breathing, seek medical care early',
    text:
      'Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.\n\nWhy? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.',
    titleStyle: styles.title,
    image: require('./assets/i-ambulance-b51c9cb65dbae842e23d3168ba229aa3.png'),
    imageStyle: styles.image,
    backgroundColor: '#3395ff',
  },
  {
    key: 's6',
    title: 'Stay informed and follow advice given by your healthcare provider',
    text:
      'Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.\n\nWhy? National and local authorities will have the most up to date information on whether COVID-19 is spreading in your area. They are best placed to advise on what people in your area should be doing to protect themselves.',
    titleStyle: styles.title,
    image: require('./assets/world-health-organization.png'),
    imageStyle: styles.image,
    backgroundColor: '#3395ff',
  },
]

export default App
