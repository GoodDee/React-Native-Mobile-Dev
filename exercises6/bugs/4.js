import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Home Screen</Text>
    <Button
      title="Go to Jane's Contact Screen"
      onPress={() => {
        navigation.navigate('ContactScreen', { name: 'Jane' });
      }}
    />
  </View>
);

class InfoScreen extends React.Component{
	render(){
		return(
				<View style={styles.screen}>
					<Text style={styles.label}>Contact Info</Text>
				</View>)
			}
}

const FriendsScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.label}>Friends</Text>
    <Button
      title="Go to Bob's Contact Screen"
      onPress={() => {
        navigation.navigate('InfoScreen', { name: 'Bob' });
      }}
    />
  </View>
);

/////
// Do not edit anything above this line
/////

const Tab = createBottomTabNavigator();

function ContactScreen({navigation}){
	const name = navigation.getParam('name', false);
	console.log(name);
  return (
	<NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="InfoScreen" component={InfoScreen} />
      <Tab.Screen name="FriendsScreen" component={FriendsScreen} />
    </Tab.Navigator>
	</NavigationContainer>
  );
}


const AppStack = createStackNavigator({
  HomeScreen,
  ContactScreen,
});

const AppNavigator = createAppContainer(AppStack);

export default AppNavigator;
