import { 
  CHANGE_MODAL,
  CHANGE_ISINPUTEMPTY,
  ADD_NEW_OBJECT,
  DELETE_ITEM,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_STATS } from "./types"

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

export function addComment(index, obj) {
  return {
    type: ADD_COMMENT,
    index,
    obj
  }
}

export function handleDeleteComment(index, indexP) {
  return {
    type: DELETE_COMMENT,
    index,
    indexP
  }
}

export function handleEdit(index, count, width, heigth, weight) {
  return {
    type: EDIT_STATS,
    index,
    count,
    width,
    heigth,
    weight
  }
}