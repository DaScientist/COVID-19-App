import React,{Component} from 'react'
import {View, Text, Linking, StyleSheet, FlatList} from 'react-native'
import { DefaultTheme,Button,Card,Title,Paragraph,Colors } from "react-native-paper";


export default function GuidelineComponent ({item,theme}) {
    // console.log('Rendering a component')
    return (
        <Card style={{margin:8}}>
            <Card.Content>
                <Title style={{fontFamily:'monospace',fontSize:16,textAlign:'justify',fontWeight:"bold",lineHeight:18,textTransform:'uppercase',justifyContent:'center'}}>{item.title}</Title>
                <Paragraph style={{fontSize:12,justifyContent:'center',textAlign:'left'}}>{item.content}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <RenderLinks links={item.links}/>
            </Card.Actions>
        </Card>
    );
}

// export default class GuidelineComponent extends Component {
//     render(){
//         return (
//             <Card>
//                 <Card.Content>
//                     <Title style={{fontFamily:'monospace',fontSize:16,fontWeight:"bold",lineHeight:18}}>{this.props.item.title}</Title>
//                     <Paragraph style={{fontSize:12}}>{this.props.item.content}</Paragraph>
//                 </Card.Content>
//                 <Card.Actions>
//                     <RenderLinks links={this.props.item.links}/>
//                 </Card.Actions>
//             </Card>
//         );  
//     }
// }


class RenderLinks extends Component {
    render() {
        return (
            <FlatList 
            inverted={false}
            data={this.props.links} 
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
}

// function RenderLinks(props) {
//     // console.log(props.links)
//     return (
//     <FlatList 
//     inverted={false}
//     data={props.links} 
//     collapsable={false}
//     renderItem={({item})=>{
//         return (
//         <Button 
//         mode="contained"
//         color="#0000EEFF"
//         style={{margin:8}}
//         contentStyle={{flex:1,justifyContent:'flex-start',flexWrap:'wrap',}} 
//         onPress={()=>{Linking.openURL(item.link)}}>
//             <Text style={{overflow:'visible',lineHeight:20,fontSize:12,}}>{item.title}</Text>
//         </Button>)
//     }}
//     keyExtractor={item=>item.link}
//     >
//     </FlatList>);
// }
