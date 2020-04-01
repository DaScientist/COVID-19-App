import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import { Appbar } from "react-native-paper";


export default function Header(props){
    return (
        <Appbar style={{ flex:1,flexWrap:'nowrap',backgroundColor:"blue",alignItems:"center",justifyContent:'center'}}>
            {/* <View style={{flex:9,alignItems:"center",justifyContent:'center',flexWrap:'nowrap'}}> */}
                <Image source={require('../assets/logo.png')} style={{width:20,float:'left', height:20,margin:16}} />
                <Text style={{color:"white",alignContent:"center",fontFamily:"monospace",float:'left'}}>{props.headerTitle}</Text>
            {/* </View> */}
        </Appbar>
    );
}