
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Transactionscreen from './screens/transactionscreen'
import Searchscreen from './screens/searchscreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component{
  render(){
  return (
  <Appcontainer/>
  );
}
}
const Tabnavigator= createBottomTabNavigator({
transaction:{screen:Transactionscreen},
search:{screen:Searchscreen}
})

const Appcontainer=createAppContainer(Tabnavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
