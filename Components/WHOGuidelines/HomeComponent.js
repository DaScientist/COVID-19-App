import React from 'react'
import {View, Text,FlatList} from 'react-native'
import {Appbar} from 'react-native-paper'
import Header from '../Header'
import links from '../../Data/links.json'
import GuidelineComponent from "./GuidelineComponent";

export default function Home () {
  let guidelines = null;
  let datalink = links['links'][0];
  console.log(datalink)
  fetch(datalink['link']).then((response)=>response.json()).then((json)=>{console.log(json);guidelines=json});
  console.log(guidelines);
  return (
    <View style={{flex:1}}>
      <Header style={{ flex:1 }} headerTitle='WHO Guidlines' />
      <View style={{ flex:9 }} nativeID='Container'>
        <View style={{ alignItems:'center', justifyContent:'center' }}>
          <FlatList data={guidelines} renderItem={GuidelineComponent} />
        </View>
      </View>
    </View>
  )
}
