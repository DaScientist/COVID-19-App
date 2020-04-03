import React from 'react'
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native'
import {Appbar,Colors} from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Header (props) {
  return (
    <Appbar
      style={{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <TouchableHighlight
        style={{marginLeft: 12,color:Colors.white}}
        onPress={() => {
          console.log('The props are:' + JSON.stringify(props?.navigation))
          props.navigation.openDrawer()
        }}>
        <Icon
          name="menu"
          size={32}
          color={Colors.white}
        />
      </TouchableHighlight>
      <Image
        source={require('../assets/icons8-virus-48-1.png')}
        style={{width: 48, height: 48, margin: 8,marginLeft:32}}
      />
      {/* <Icon
      name="virus"
      size={20}
      color={Colors.grey900}/> */}
      <Text
        style={{
          color: 'white',
          alignContent: 'center',
          fontFamily: 'monospace',
          fontSize:16
        }}>
        {props.headerTitle}
      </Text>
    </Appbar>
  )
}
