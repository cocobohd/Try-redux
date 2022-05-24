import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addComment } from "../../store/actions"
import Comments from "./Comments"
import Edit from "./Edit"
import Modal from "../Modal/Modal"

export default function MoreInfo(prop) {
  const comment = React.createRef()
  const [handleEditState, setHandleEditState] = React.useState(false)
  const state = useSelector(store => store.addNewObjectReducer)
  const dispatch = useDispatch()
  const renderComments = state[prop.index].comments.map((i, indx) => {
    return <Comments 
            key = {i.id}
            description = {i.description}
            time = {i.date}
            index = {indx}
            indexP = {prop.index}
    />
  })
  const send = () => {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    if (minutes <= 9) {
      minutes = '0' + minutes
    }
    if (hours <= 9) {
      hours = '0' + hours
    }
    if (day <= 9) {
      day = '0' + day
    }
    if (month <= 9) {
      month = '0' + month
    }

    const time = `${hours}:${minutes} | ${day}.${month}.${year}`
    const newComment = 
      {
        id: Date.now(),
        productId: prop.id,
        description: comment.current.value,
        date: time
      }
    comment.current.value = ""
    dispatch(addComment(prop.index, newComment))
  }

  function handleEdit(i) {
    setHandleEditState(true)
  }

  return(
    <div>
      <h1 className="more--info--title">
          More info about {prop.name}
      </h1>
      <div className="more--info--div">
        <div className="more--info--information">
          <p>
            In stock: {prop.count}
          </p>
          <p>
            Width: {prop.width} 
          </p>
          <p>
            Height: {prop.heigth}
          </p>
          <p>
            Weight: {prop.weight} 
          </p>
          <button onClick={() => handleEdit(prop.index)}>Edit</button>
        </div>
        <div className="more--info--comments">
          <div className="comments--div">
            Comments: {state[prop.index].comments.length === 0 ? "No comments..." : state[prop.index].comments.length} {renderComments}
          </div>
          <p>
            Leave comment?
          </p>
          <textarea type="textarea" ref={comment}/>
          <button onClick={send}>Send!</button>
        </div>
      </div>

      <Modal isActive={handleEditState} setIsActive={setHandleEditState}>
        <Edit 
          index = {prop.index}
          key = {prop.id}
          setEdit = {() => setHandleEditState(false)}
        />
      </Modal> 
    </div>
  )
} 