import { combineReducers } from "redux";
import { changeModalReducer } from "./changeModalReducer";
import { isInputEmptyReducer } from "./isInputEmptyReducer"
import { addNewObjectReducer } from "./addNewObjectReducer";

export const rootReducer = combineReducers({
  changeModalReducer,
  isInputEmptyReducer,
  addNewObjectReducer
})