import React from "react";
import "./comments.css"
import { useDispatch } from "react-redux";
import { handleDeleteComment } from "../../store/actions";

export default function Comments(props) {
  const dispatch = useDispatch()

  function handleDelete(i, iP) {
    dispatch(handleDeleteComment(i, iP))
  }

  return(
    <div className="comments">
      <button onClick={() => handleDelete(props.index, props.indexP)} className="comments--btn handledelete">X</button>
      <p className="comments--text">{props.description}</p>
      <p className="comments--time">{props.time}</p>
    </div>
  )
}