import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import { Appbar } from "react-native-paper";


export default function Header(props){
    return (
        <Appbar style={{ flex:1,backgroundColor:"blue",alignItems:"center",justifyContent:'center',}}>
            <Image source={require('../assets/logo.png')} style={{width:20, height:20,margin:16}} />
            <Text style={{color:"white",alignContent:"center",fontFamily:"monospace"}}>{props.headerTitle}</Text>
        </Appbar>
    );
}