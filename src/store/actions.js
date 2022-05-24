import { CHANGE_MODAL, CHANGE_ISINPUTEMPTY, ADD_NEW_OBJECT, DELETE_ITEM } from "./types"

export function changeModal () {
  return {
    type: CHANGE_MODAL
  }
} 

export function changeIsInputEmpty(boolean) {
  return {
    type: CHANGE_ISINPUTEMPTY,
    payload: boolean
  }
} 

export function addNewObject(obj) {
  return {
    type: ADD_NEW_OBJECT,
    payload: obj
  }
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    index
  }
}