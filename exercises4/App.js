import React from 'react';
import { SectionList, StyleSheet, Text, View, Button } from 'react-native';
import items from './list';
import SectionListView from './SectionListView.js'
import Constants from 'expo-constants'
import AddNewForm from './AddnewVal.js'

export default class App extends React.Component {
   state = {
    items: items,
	showForm: false,
	showList: true
  }
  
  // Toggle the list on and off
  toggleList = () => {
    this.setState(prevState => ({showList: !prevState.showList}))
  }
  
  // Show the form if pressed
  showForm = () => {
    this.setState({showForm: true})
  }
  
  // Add key value pair
  addKeyVal = newKeyVal => {
	// Log new key (title)
	const newKey = newKeyVal.key
	// Keep track of the key
	let keyItem = 0
	// Let's see how many counts do we have
	const count = this.state.items.reduce((accum, item) => {
		if (item.title === newKey){
			keyItem = item.key
			return accum + 1}
		return accum
	}, 0)
	console.log(count)
	
	if (count > 1 ){
		this.setState(prevState => ({showForm: false, items: [...prevState.items, {key: items.length, title: newKeyVal.key, val: newKeyVal.val}]}))
	}
	else if (count === 1){
		this.setState(prevState => ({showForm: false, items: prevState.items.map(function(item){if (item.title !== newKey)
																								{ return item}
																								return {key: items.length, title: newKeyVal.key, val: newKeyVal.val}})}))
	}
	else{
		this.setState(prevState => ({showForm: false, items: [...prevState.items, {key: items.length, title: newKeyVal.key, val: newKeyVal.val}]}))
	}

  }
	
	
	
  render() {
	if (this.state.showForm) return <AddNewForm onSubmit={this.addKeyVal} />
    return (
      <View style={styles.container}>
			<Button title="toggle contacts" onPress={this.toggleList} />
			<Button title="add contact" onPress={this.showForm} />
		   {this.state.showList && <SectionListView items = {this.state.items} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
	paddingTop: Constants.statusBarHeight,
  },
});
