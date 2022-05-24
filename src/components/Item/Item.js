import "./item.css"
import React from "react"
import { useDispatch } from "react-redux"
import { deleteItem } from "../../store/actions"
import Modal from "../Modal/Modal"
import MoreInfo from "../MoreInfo/MoreInfo"

export default function Item(prop) {
  const dispatch = useDispatch()
  const [confirmDelete, setConfirmDelete] = React.useState(false)
  const [moreInfoBtn, setMoreInfoBtn] = React.useState(false)
  
  function handleDelete() {
    setConfirmDelete(true)
  }
  function handleConfirmDelete(index) {
    setConfirmDelete(false)
    dispatch(deleteItem(index))
  }
  function handleMoreInfo(){
    setMoreInfoBtn(true)
  }

  return(
    <div className="item">
      <div className="img">
        <img className="item--img" src={prop.imgUrl} alt="Don`t Load.." />
      </div>
      <div className="item--info">
        <h1 className="item--title">{prop.name}</h1>
        <p className="item--count">In Stock: {prop.count}</p>
        <div className="item--btns">
          <button className="item--btn more" onClick={() => handleMoreInfo()}>More Info</button>
          <button className="item--btn delete" onClick={() => handleDelete()}>Delete Item</button>
        </div>
      </div>

      <Modal isActive={confirmDelete} setIsActive={setConfirmDelete}>
        <div className="confirm--title">
          You want delete this one item?
        </div>
        <div className="confirm--btns">
          <button onClick={() => handleConfirmDelete(prop.index)}>Yes</button>
          <button onClick={() => setConfirmDelete(false)}>No</button>
        </div>
      </Modal>

      <Modal isActive={moreInfoBtn} setIsActive={setMoreInfoBtn}>
        <MoreInfo 
          name = {prop.name}
          count = {prop.count}
          width = {prop.width}
          heigth = {prop.heigth}
          weight = {prop.weight}
          id = {prop.id}
          index = {prop.index}
        />
      </Modal>
    </div>
  )
}