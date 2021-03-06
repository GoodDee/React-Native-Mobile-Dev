import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';
import SectionList from './SectionList';

class FavoriteScreen extends React.Component {
	
  getMovieDetail = (movie) => {
	const detail = movie
	this.props.navigation.push('DetailScreen', detail)
  }
  
  render() {
	const movie = this.props.favorites;
	if (movie.length > 0){
		return (
			<View style={styles.container}>
				<SectionList
					movies={this.props.favorites}
					onSelectDetail={this.getMovieDetail}
				/>
			</View>
		)
	}
	
	return (
		<View style={styles.center}>
			<Text> Add Favorites Here </Text>
		</View>
	)
  }
}

const mapStateToProps = state => ({
  favorites: state.movies,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
	justifyContent: "center", 
	alignItems: "center"	  
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

export default connect(mapStateToProps)(FavoriteScreen)