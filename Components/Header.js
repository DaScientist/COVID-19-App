import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import { Appbar } from "react-native-paper";


export default function Header(props){
    return (
        <Appbar style={{ backgroundColor:"blue",alignItems:"center",justifyContent:'center'}}>
            {/* <View style={{flex:9,alignItems:"center",justifyContent:'center',flexWrap:'nowrap'}}> */}
                <Image source={require('../assets/logo.png')} style={{width:20,height:20,margin:16}} />
                <Text style={{color:"white",alignContent:"center",fontFamily:"monospace"}}>{props.headerTitle}</Text>
            {/* </View> */}
        </Appbar>
    );
}