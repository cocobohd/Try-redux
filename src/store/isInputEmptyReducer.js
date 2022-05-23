import { CHANGE_ISINPUTEMPTY } from "./types"

const initialState = {
  isInputsEmpty: false
}

export const isInputEmptyReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_ISINPUTEMPTY:
      return {
        ...state,
        isInputsEmpty: action.payload
      }
    default:
      return state  
  }
}