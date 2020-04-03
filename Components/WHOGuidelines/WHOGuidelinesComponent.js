import React, {useState, useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import {Appbar, ActivityIndicator, Colors, Title} from 'react-native-paper'
import Header from '../Header'
import links from '../../Data/links.json'
import GuidelineComponent from './GuidelineComponent'

export default function WHOGuidelinesComponent ({route, navigation}) {
  const [guidelines, setGuidelines] = useState([])
  const [loading, setLoading] = useState(true)
  let datalink
  const trylink = links['links'].filter(obj => {
    return obj.title === route.params?.data
  })[0]
  // console.log('trylink: '+JSON.stringify(trylink));
  datalink = trylink
  // console.log(datalink)
  useEffect(() => {
    fetch(datalink['link'])
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        setGuidelines(json)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  // console.log(component)
  if (loading) {
    return (
      <>
        <Header headerTitle='WHO Guidlines' navigation={navigation} />
        <View style={{alignContent:'center',alignItems: 'center', justifyContent: 'center'}}>
         <ActivityIndicator animating={true} color={Colors.amber900} />
        </View>
      </>
    )
  } else {
    return (
      <>
        <Header headerTitle='WHO Guidlines' navigation={ navigation } />
        <View nativeID='Container'>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {/* {console.log(guidelines)} */}
            <Title style={{fontSize: 16}}>{guidelines.title}</Title>
            <FlatList
              data={guidelines.guidelines}
              renderItem={GuidelineComponent}
              collapsable={false}
              keyExtractor={item => item.title}
            />
          </View>
        </View>
      </>
    )
  }
}
