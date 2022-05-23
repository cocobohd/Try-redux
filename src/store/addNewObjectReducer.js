import { ADD_NEW_OBJECT } from "./types"

const initialState = []

export const addNewObjectReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_OBJECT:
      return [
        ...state, 
        action.payload
      ]
    default:
      return state  
  }
}