import React from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'
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
	  const movies = this.props.route.params.results;
	//const movies = this.props.navigation.getParam('results');
	
	if (movies.length > 0){
		return (
			<View style={styles.container}>
				<SectionList
					movies={movies}
					onSelectDetail={this.handleSelectContact}
				/>
			</View>
    )
	}
    return (
      <View style={styles.center}>
          <Text> 404 Not Found! </Text>
		  <Button title="Try Again" onPress={() => this.props.navigation.push('HomeScreen')} color="#a41034" />
      </View>
    )	
	
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
	justifyContent: "center", 
	alignItems: "center"	  
  },
})