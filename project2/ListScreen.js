import React from 'react'
import {Button, View, StyleSheet} from 'react-native'
import {fetchMovieDetail} from './API'

import SectionList from './SectionList'

export default class ListScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Movies',
    headerRight: (
      <Button title="Back" onPress={() => navigation.goBack()} color="#a41034" />
    ),
  })

  handleSelectContact = movie => {
    this.getMovieDetail(movie)
  }
  
  getMovieDetail = async (movie) => {
	const detail = await fetchMovieDetail(movie.id)
	this.props.navigation.push('DetailScreen', detail)
  }

  render() {
	const movies = this.props.navigation.getParam('results');
    return (
      <View style={styles.container}>
          <SectionList
            movies={movies}
            onSelectDetail={this.handleSelectContact}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})