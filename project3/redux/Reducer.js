import {combineReducers} from 'redux'
import {ADD_FAVORITE} from './Actions'

// Add or Remove Favorite Based on action.type

const MovieReducer = (state = [], action) => {
  if (action.type === ADD_FAVORITE) return [...state.filter(x => x.title !== action.payload.title), action.payload]
  return [...state.filter(x => x.title !== action.payload.title)]
}

const reducer = combineReducers({
  movies: MovieReducer
})


export default reducer