import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import {fetchMovies} from './API'

export default class HomeScreen extends React.Component {
	
	state = {
		movie: '',
		isFormValid: false,
	}
	
	handleNameChange = movie => {
		this.setState({movie})
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (this.state.movie !== prevState.movie) {
		this.validateForm()
		}
	}
	
	validateForm = () => {
		console.log(this.state)
		if (this.state.movie.length >= 3) {
			this.setState({isFormValid: true})
		} else {
			this.setState({isFormValid: false})
		}
	}
	
	handleSubmit = () => {
		// Refer to API and search then return the results to the next page
		this.getMovies(this.state.movie)
	}
	
	getMovies = async (movie) => {
		const results = await fetchMovies(movie)
		this.props.navigation.navigate('ListScreen', { results: results })
	}
	
	render(){
		return(
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
		<TextInput
			style={styles.input}
			value={this.state.movie}
			onChangeText={this.handleNameChange}
			placeholder = 'movie'
		/>
		<Button title="Search" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
		</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})
