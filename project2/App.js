import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import { createAppContainer } from 'react-navigation';


const AppStack = createStackNavigator({
  HomeScreen,
  ListScreen,
  DetailScreen
});
const MovieApp = createAppContainer(AppStack);


export default class App extends React.Component {
  render() {
    return (
      <MovieApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
