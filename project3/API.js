const processMovie = movie => ({
  title: movie.Title,
  year: movie.Year,
  id: movie.imdbID,
  type: movie.Type,
})

const MovieDetail = movie => ({
  title: movie.Title,
  year: movie.Year,
  rated: movie.Rated,
  released: movie.Released,
  genre: movie.Genre,
  plot: movie.Plot,
  language: movie.Language,
  country: movie.Country,
  type: movie.Type,
  rating: movie.imdbRating,
})

export const fetchMovies = async (name) => {
	const APIKEY = '47f8a9d9'
	const URL = 'http://www.omdbapi.com/?s=' + name + '&apikey=' + APIKEY + '&page=10'
	
	try{
		const response = await fetch(URL)
		const {Search} = await response.json()
		return Search.map(processMovie)
	} catch(err){
		console.log(err)
		return []
	}
}

export const fetchMovieDetail = async (id) => {
	const APIKEY = '47f8a9d9'
	const URL = 'http://www.omdbapi.com/?i=' + id + '&apikey=' + APIKEY
	
	const response = await fetch(URL)
	const Result = await response.json()
	return MovieDetail(Result)
}