import { 
  ADD_NEW_OBJECT,
  DELETE_ITEM,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_STATS } from "./types"

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
    case ADD_COMMENT: {
      const comments = state[action.index].comments
      comments.push(action.obj)
      return [
        ...state
      ]
    }
    case DELETE_COMMENT: {
      const comments = state[action.indexP].comments
      comments.splice(action.index, 1)
      return [
        ...state
      ]
    }
    case EDIT_STATS: {
      state[action.index].count = parseInt(action.count) 
      state[action.index].size.width = parseInt(action.width)
      state[action.index].size.heigth = parseInt(action.heigth)
      state[action.index].weight = action.weight
      return [
        ...state
      ]
    }
    default:
      return state  
  }
}