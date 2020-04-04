import React, {Component} from 'react'
import {Appbar, Card} from 'react-native-paper'
import {View, Text, SafeAreaView, Image} from 'react-native'
import Header from './Header'

export default class AboutComponent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <>
        <Header navigation={this.props.navigation} headerTitle='About' />
        <View
          style={{flex: 9, alignContent: 'center', justifyContent: 'center'}}>
          <Card style={{flex: 1, margin: 16}}>
            <Card.Content
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                alignSelf:'center'
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 24}}>Covid-19 Info App</Text>
                <Image
                  style={{width: 96, height: 96}}
                  source={require('../assets/icons8-virus-96.png')}
                />
                <Text>Version 1.0.0</Text>
                <Text>{'\u24b8'} 2020-2020</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      </>
    )
  }
}
