import React, {useEffect, useState} from 'react'
import {Appbar, Button, Colors} from 'react-native-paper'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from 'react-native'
import Header from './Header'

export default function HomeComponent ({navigation}) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(
      'https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true',
      {
        method: 'GET',
      },
    )
      .then(response => {
        // console.log(response)
        return response.json();
      }).then((json)=>{
        console.log(json);
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return (
      <>
        <Header headerTitle='Home' navigation={navigation} />
        <SafeAreaView>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator animating={true} color={Colors.amber900} />
          </View>
        </SafeAreaView>
      </>
    )
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header headerTitle='Home' navigation={navigation} />
        <View>
          <View
            nativeID='whoLinks'
            style={{
              marginTop: 16,
              // flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Button
              mode='contained'
              onPress={() => {
                Linking.openURL('https://who.int')
                return null
              }}
              title='WHO Website'
              style={style.button}
              color={style.button.color}>
              <Text style={style.buttonText}>WHO Website</Text>
            </Button>
            <Button
              mode='contained'
              style={style.button}
              onPress={() => {
                Linking.openURL('https://blog.trello.com/work-from-home-guides')
                return null
              }}
              color={style.button.color}>
              <Text style={style.buttonText}>Work from home guides</Text>
            </Button>
          </View>
          {/* Center Stats */}

          <View
            nativeID='covidStats'
            style={{
              marginTop: 16,
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{fontSize: 24}}>Covid-19 Info App</Text>
            <Image
              style={{width: 96, height: 96}}
              source={require('../assets/icons8-virus-96.png')}
            />
            <Text>Current Stats in India are:</Text>
            <Text>{data.activeCases} Active</Text>
            <Text>{data.recovered} Cured</Text>
            <Text>{data.deaths} Deaths</Text>
            <Text>{data.totalCases} Total Cases</Text>
          </View>

          {/* Bottom Links */}
          <View
            nativeID='relatedLinks'
            style={{
              marginTop: 32,
              marginBottom: 32,
              justifyContent: 'space-around',
            }}>
            <Button
              mode='contained'
              style={style.button}
              onPress={() => {
                Linking.openURL('https://mohfw.gov.in')
                return null
              }}
              title='MOH GOI Website'
              color={style.button.color}>
              <Text style={style.buttonText}>MOH GOI Website</Text>
            </Button>
            <Button
              mode='contained'
              style={style.button}
              onPress={() => {
                Linking.openURL('https://mohfw.gov.in')
                return null
              }}
              color={style.button.color}>
              <Text style={style.buttonText}>Statewise stats on COVID-19</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  button: {
    margin: 8,
    color: '#0000FF',
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
})
