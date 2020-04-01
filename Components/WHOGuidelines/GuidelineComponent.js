import React from 'react'
import {View, Text, Linking, StyleSheet} from 'react-native'
import { DefaultTheme,Button,Card,Title,Paragraph,Colors } from "react-native-paper";
import { FlatList } from 'react-native-gesture-handler';

export default function GuidelineComponent ({item,theme}) {
    console.log('Rendering a component')
    return (
        <Card theme={{
            ...DefaultTheme,
            roundness:5,
            colors:{
                ...DefaultTheme.colors,
                surface:'#EE00EEFF',
                text:'#FFF000'
                },
            }}>
            <Card.Content>
                <Title style={{fontFamily:'monospace',fontSize:16,fontWeight:"bold",}}>{item.title}</Title>
                <Paragraph style={{fontSize:12}}>{item.content}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <RenderLinks links={item.links}/>
            </Card.Actions>
        </Card>
    );
}

function RenderLinks(props) {
    console.log(props.links)
    return (
    <FlatList 
    inverted={false}
    data={props.links} 
    collapsable={false}
    renderItem={({item})=>{
        return (
        <Button 
        mode="contained"
        color="#0000EEFF"
        style={{margin:8}}
        contentStyle={{flex:1,justifyContent:'flex-start',flexWrap:'wrap',}} 
        onPress={()=>{Linking.openURL(item.link)}}>
            <Text style={{overflow:'visible',lineHeight:20,fontSize:12,}}>{item.title}</Text>
        </Button>)
    }}
    keyExtractor={item=>item.link}
    >
    </FlatList>);
}
