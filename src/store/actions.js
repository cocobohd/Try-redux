import { CHANGE_MODAL } from "./types"
import { CHANGE_ISINPUTEMPTY } from "./types"
import { ADD_NEW_OBJECT } from "./types"

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