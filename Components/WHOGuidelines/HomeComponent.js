import React, {useState, useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import {Appbar, ActivityIndicator, Colors} from 'react-native-paper'
import Header from '../Header'
import links from '../../Data/links.json'
import GuidelineComponent from './GuidelineComponent'

export default function Home () {
  const [guidelines, setGuidelines] = useState([])
  const [loading, setLoading] = useState(true)
  let datalink = links['links'][0]
  useEffect(() => {
    fetch(datalink['link'])
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setGuidelines(json);
        setLoading(false);
      }).catch(error => {
        console.error(error);
      });
  }, [])
  // console.log(component)
  if (loading) {
    return <ActivityIndicator animating={true} color={Colors.blueGrey800} />
  } else {
    return (
      <View style={{flex: 1}}>
        <Header style={{flex: 1}} headerTitle='WHO Guidlines' />
        <View style={{flex: 9}} nativeID='Container'>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {console.log(guidelines)}
            <FlatList data={guidelines.guidelines} renderItem={GuidelineComponent} />
          </View>
        </View>
      </View>
    )
  }
}
