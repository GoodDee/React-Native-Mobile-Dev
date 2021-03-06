import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './HomeScreen';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import FavoriteScreen from './FavoriteScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux'
import {store} from './redux/Store'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
	return(
		<Tab.Navigator>
			<Tab.Screen name = "Search" 
						component={SearchScreen} 
						options={{
							tabBarLabel: 'Search',
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons name="database-search" color={color} size={size} />
							),
						}}
			/>
			<Tab.Screen name = "Favorites" 
						component={FavoriteScreen}
						options={{
							tabBarLabel: 'Favorites',
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons name="account-settings" color={color} size={size} />
							),
						}}
			/>
		</Tab.Navigator>
	);
}

const MovieApp = () => {
  return (
    
	<Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
		<NavigationContainer>
			<MovieApp />
		</NavigationContainer>
	  </Provider>
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
