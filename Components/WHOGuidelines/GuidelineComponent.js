import React from 'react'
import {View, Text, Linking} from 'react-native'
import { Button,Card,Title,Paragraph,Colors } from "react-native-paper";
import { FlatList } from 'react-native-gesture-handler';

export default function GuidelineComponent ({item}) {
    console.log('Rendering a component')
    return (
        <Card>
            <Card.Content>
                {console.log({item})}
                <Title>{item.title}</Title>
                <Paragraph>{item.content}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <RenderLinks links={item.links}/>
            </Card.Actions>
        </Card>
    );
}

function RenderLinks(props) {
    console.log(props.links)
    return (<FlatList data={props.links} renderItem={({item})=> {console.log('The item link is:'+JSON.stringify(item));return <Button color={Colors.blue} onPress={()=>{Linking.openURL(item.link)}} title={item.title} />}}></FlatList>);
}