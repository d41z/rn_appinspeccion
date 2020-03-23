import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Orientation from 'react-native-orientation-locker';




export default class testRotate extends Component{




    _onOrientationDidChange = (orientation) => {
        if (orientation == 'LANDSCAPE-LEFT') {
          //do something with landscape left layout
        } else {
          //do something with portrait layout
        }
      };

      componentDidMount(){
        Orientation.lockToLandscapeRight();
      }


    render(){
        return(
            <View>
                <Text>
                    hola
                </Text>
            </View>
        )
    }
}

