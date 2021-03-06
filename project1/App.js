import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {vibrate} from './utils';

const Timer = props => (
		<>
		<Text style = {styles.font} > {props.todo.mode} </Text>
		<Text style = {styles.font} >{String(props.todo.min).padStart(2, '0')} : {String(props.todo.sec).padStart(2, '0')}</Text>
		<Button onPress={props.onChange} title={props.todo.display} />
		</>
	  
  )


class Countdown extends React.Component {
	
  state = {
    min: 25,
	sec: 0,
	mode: "work",
	display: "pause",
	isRunning: true
  }

  componentDidMount() {
	this.startTimer()
  }
  
  vibration() {
	vibrate()
	console.log("vibrate occurs")
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
	console.log('clearing')
  }
  
 startTimer = () => {
    this.interval = setInterval(this.decrementSec, 1000);

    this.setState(prevState => {
      isRunning: !this.state.isRunning
    });
  };

  stopTimer = () => {
    clearInterval(this.interval);

    this.setState(prevState => {
      isRunning: !this.state.isRunning
    });
  };
  
  
  Reset = () => {
	  clearInterval(this.interval)
	  this.setState(prevState => ({min: 25, sec: 0, mode: "work"}))
	  this.stopTimer()
	  this.startTimer()
  }
  
  onChange = () => {
	 if (this.state.display === "pause"){
		this.setState(prevState => ({display: "start"}))
		this.stopTimer()
	 }
	 else{
		 this.setState(prevState => ({display: "pause"}))
		 this.startTimer()
	 }
  }
  
  
  changeMode = () => {
	if (this.state.mode == "work"){
		this.vibration()
		this.setState(prevState => ({min: 5, sec: 0, mode: "rest"}))
	}
	else{
		this.vibration()
		this.setState(prevState => ({min: 25, sec: 0, mode: "work"}))
	}
  }
  
  decrementSec = () => {
    if (this.state.min == 0 && this.state.sec == 0){
		this.changeMode()
	}
	else{
		if (this.state.sec == 0){
			this.setState(prevState => ({min: prevState.min - 1, sec: 59}))
		}
		else{
			this.setState(prevState => ({sec: prevState.sec - 1}))
		}
	}
  } 
  
  render() {
    return (
      <Timer todo = {this.state} onChange = {() => this.onChange()}/>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCounter: true,
    }
  }
  
  toggleCounter = () => this.setState(prevState => ({
    showCounter: !prevState.showCounter,
  }))


  // this is a more concise version with the same functionality
  render() {
    return (
       <View style={styles.container}>
	   {this.state.showCounter && <Countdown/>}
	   <Button onPress={() => {this.toggleCounter();}} title= "reset" />
	   </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
	fontSize: 48
  }
});
