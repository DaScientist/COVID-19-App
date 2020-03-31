import React from 'react'
import {View, Text, Linking} from 'react-native'
import { Button,Card,Title,Paragraph } from "react-native-paper";
export default function GuidelineComponent (props) {
    console.log('Rendering a component')
    return (
        <Card>
            <Card.Content>
                <Title>{props.guideline.title}</Title>
                <Paragraph>{props.guideline.content}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Renderlinks links={props.guideline.links}/>
            </Card.Actions>
        </Card>
    );
}

function RenderLinks(props) {
    let buttons = null;
    console.log('Generating buttons for a card.');
    props.links.forEach(link => {
        console.log('Making a button with link:'+JSON.stringify(link));
        button += <Button onPress={()=>{Linking.openURL(link)}} link={link.link}>{link.title}</Button>
    });
    return buttons;
}