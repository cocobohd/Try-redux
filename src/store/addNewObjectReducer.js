import { ADD_NEW_OBJECT, DELETE_ITEM } from "./types"

const initialState = []

export const addNewObjectReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_OBJECT:
      return [
        ...state, 
        action.payload
      ]
    case DELETE_ITEM: {
      const index = action.index
      const items = state
      // eslint-disable-next-line no-unused-vars
      const res = [
        ...items.splice(index, 1)
      ]
      return [
        ...state
      ]
    }  
    default:
      return state  
  }
}