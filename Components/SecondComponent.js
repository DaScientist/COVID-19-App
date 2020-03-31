import React from 'react';
import { Appbar } from 'react-native-paper';
import { View,Text } from "react-native";

export default function SecondComponent() {
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
            <Text>Hello World, This is your Second Component</Text>
        </View>
    );
}