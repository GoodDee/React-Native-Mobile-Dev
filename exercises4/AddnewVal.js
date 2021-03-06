import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
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

export default class AddNewForm extends React.Component{
	state = { // Define the state used to update the form, and submit the form
		key: '',
		val: '',
		isFormValid: false
	}
	
	// Generic code to update the state
	getHandler = key => val => {
		this.setState({[key]: val})
	}
	
	// Helper function to see whether the form is validated
	validateForm = () => {
		console.log(this.state)
		if (this.state.key && this.state.val) {
			this.setState({isFormValid: true})
		} else {
			this.setState({isFormValid: false})
		}
	}
	
	// Validate the form using validateForm() when the state.key or state.val changes	
	componentDidUpdate(prevProps, prevState) {
    if (this.state.key !== prevState.key || this.state.val !== prevState.val) {
		this.validateForm()
		}
	}
	
	handleSubmit = () => {  // Use to submit the form; have to define onSubmit later in App
		this.props.onSubmit(this.state)
	}

	render(){
		return (
		<KeyboardAvoidingView styles = {styles.container} behavior = 'padding'>
			<TextInput 
				style={styles.input}
				value = {this.state.key}
				placeholder = 'key'
				onChangeText={this.getHandler('key')}
			/>
			
			<TextInput
				style = {styles.input}
				value = {this.state.val}
				placeholder = 'value'
				onChangeText = {this.getHandler('val')}
			/>
			
			<Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
		
		</KeyboardAvoidingView>
		)
		
	}
	
	
	
	
	
}

