import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, SafeAreaView,ScrollView} from 'react-native'
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
        <SafeAreaView>
        <View style={{alignContent:'center',alignItems: 'center', justifyContent: 'center'}}>
         <ActivityIndicator animating={true} color={Colors.amber900} />
        </View>
        </SafeAreaView>
      </>
    )
  } else {
    return (
      <>
        <Header headerTitle='WHO Guidelines' navigation={ navigation } />
        <View nativeID='Container'>
          <ScrollView>
            {/* {console.log(guidelines)} */}
            <Title style={{
              margin:8, 
              fontSize: 14,
              fontWeight:'bold',
              justifyContent:'flex-start',
              fontFamily:'serif',
              lineHeight:22,
              marginTop:12,
              textAlign:'center'
              }}>{guidelines.title}</Title>
            <FlatList
            style={{marginBottom:100}}
              data={guidelines.guidelines}
              renderItem={GuidelineComponent}
              collapsable={false}
              keyExtractor={item => item.title}
            />
          </ScrollView>
        </View>
      </>
    )
  }
}
