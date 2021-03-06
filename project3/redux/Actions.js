

// action types
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'


// action creators
export const updateFav = update => ({
	type: ADD_FAVORITE,
	payload: update
})

export const removeFav = update => ({
	type: REMOVE_FAVORITE,
	payload: update
})


