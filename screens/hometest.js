import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




  export default class hometest extends Component{
      constructor(props){
          super(props)
          this.state = {
              test: ''
          }
      }

      render(){
          return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Wtf2')}
            />
          </View>
          )
      }
  }
