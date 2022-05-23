import { CHANGE_MODAL } from "./types"

const initialState = {
  modalVisible: false
}

export const changeModalReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_MODAL:
      return {
        ...state,
        modalVisible: !state.modalVisible
      }
    default:
      return state  
  }
}