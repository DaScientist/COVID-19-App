import React, {Component, useCallback} from 'react'
import {Appbar, Card} from 'react-native-paper'
import {View, Text, SafeAreaView, Linking, Button, Image} from 'react-native'
import Header from './Header'
import {CommonActions} from '@react-navigation/native'

export default function DonationConponent (props) {
  //   Linking.openURL('https://www.investindia.gov.in/bip/resources/state-and-national-relief-funds-accepting-donations-covid-19')
  //   props.navigation.dispatch(CommonActions.goBack())
  return (
    <>
      <Header headerTitle='Donate' navigation={props.navigation} />
      <Card
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          margin: 18,
          alignSelf: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            margin: 18,
            alignSelf: 'center',
          }}>
          <Image
            source={require('../assets/icons8-india-96.png')}
            style={{width: 96, height: 96}}
          />
          <Image
            source={require('../assets/icons8-donation-80.png')}
            style={{width: 96, height: 96}}
          />
          <Text
            style={{
              fontSize: 16,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign:'center',
              alignSelf: 'center',
              marginBottom:20,
              marginTop:32,
              fontWeight:'bold'
            }}>
            Donate to PM Cares Fund and State Relief Funds
          </Text>
          <Button
            onPress={() => {
              Linking.openURL(
                'https://www.investindia.gov.in/bip/resources/state-and-national-relief-funds-accepting-donations-covid-19',
              )
            }}
            title='Donate'
          />
        </View>
      </Card>
    </>
  )
}
