import React from 'react'
import {Button, Text, View} from 'react-native'
import store from './redux/Store'
import {updateFav, removeFav} from './redux/Actions.js'
import { connect } from 'react-redux'

const Viewed = (array, entry) => {
	const filtered = [...array.filter(x => x.title === entry.title)];
	if (filtered.length === 0){
		return false
	}
	return true
}

class ContactDetailsScreen extends React.Component {
  
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('title'),
	headerRight: (
      <Button title="Search" onPress={() => navigation.push('HomeScreen')} color="#a41034" />
    ),
  })
  

  render() {
	const movie = {title: this.props.route.params.title,
				year: this.props.route.params.year,
				rated: this.props.route.params.rated,
				released: this.props.route.params.released,
				genre: this.props.route.params.genre,
				plot: this.props.route.params.plot,
				language: this.props.route.params.language,
				country: this.props.route.params.country,
				type: this.props.route.params.type,
				rating: this.props.route.params.rating,};
	const viewed = Viewed(this.props.favorites, movie);
	if (viewed) {
    return (
      <View>
        <Text> Title: {movie.title} </Text>
		<Text>Year: {movie.year}</Text>
		<Text>Rated: {movie.rated}</Text>
		<Text>Released: {movie.released}</Text>
		<Text>Genre: {movie.genre}</Text>
		<Text>Plot: {movie.plot}</Text>
		<Text>Language: {movie.language}</Text>
		<Text>Country: {movie.country}</Text>
		<Text>Type: {movie.type}</Text>
		<Text>IMDB Rating: {movie.rating}</Text>
		<Button title="Delete" onPress={()=> {this.props.removeFav(movie);
										  console.log(this.props.favorites);
										  this.props.navigation.push('HomeScreen');}} 
		/>
      </View>
    )
	}
    return (
      <View>
        <Text> Title: {movie.title} </Text>
		<Text>Year: {movie.year}</Text>
		<Text>Rated: {movie.rated}</Text>
		<Text>Released: {movie.released}</Text>
		<Text>Genre: {movie.genre}</Text>
		<Text>Plot: {movie.plot}</Text>
		<Text>Language: {movie.language}</Text>
		<Text>Country: {movie.country}</Text>
		<Text>Type: {movie.type}</Text>
		<Text>IMDB Rating: {movie.rating}</Text>
		<Button title="Add" onPress={()=> {this.props.updateFav(movie);
										  console.log(this.props.favorites);
										  this.props.navigation.push('HomeScreen');}} 
		/>
      </View>
    )		
  }
}

const mapStateToProps = state => ({
  favorites: state.movies,
})

export default connect(mapStateToProps, {updateFav, removeFav})(ContactDetailsScreen)