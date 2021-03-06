import React from 'react'
import {Button, Text, View} from 'react-native'

export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('title'),
	headerRight: (
      <Button title="Search" onPress={() => navigation.push('HomeScreen')} color="#a41034" />
    ),
  })

  render() {
    return (
      <View>
        <Text>Year: {this.props.navigation.getParam('year')}</Text>
		<Text>Rated: {this.props.navigation.getParam('rated')}</Text>
		<Text>Released: {this.props.navigation.getParam('released')}</Text>
		<Text>Genre: {this.props.navigation.getParam('genre')}</Text>
		<Text>Plot: {this.props.navigation.getParam('plot')}</Text>
		<Text>Language: {this.props.navigation.getParam('language')}</Text>
		<Text>Country: {this.props.navigation.getParam('country')}</Text>
		<Text>Type: {this.props.navigation.getParam('type')}</Text>
		<Text>IMDB Rating: {this.props.navigation.getParam('rating')}</Text>
      </View>
    )
  }
}