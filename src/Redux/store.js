const { createStore } = require("redux");

export const SET_LOGIN = "SET_LOGIN";

const defaultState = {
	login: '',
}

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case SET_LOGIN:
			return {...state, login: action.payload}
		default: 
			return state
	}
}

export const store = createStore(reducer)