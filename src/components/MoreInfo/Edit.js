import React from "react";
import { useDispatch } from "react-redux";
import { handleEdit } from "../../store/actions";

export default function Edit(prop) {
  const count = React.createRef()
  const width = React.createRef()
  const heigth = React.createRef()
  const weight = React.createRef()
  const dispatch = useDispatch()

  function saveChanges(i) {
    prop.setEdit()
    dispatch(handleEdit(i,
       count.current.value,
       width.current.value,
       heigth.current.value,
       weight.current.value ))
  }

  return(
    <div className="edit--div">
      <p className="modalview--stock">
        In stock:
      </p>
      <input type="number" ref={count}/>
      <p className="modalview--size">
        Width and Height: 
      </p>
      <input type="number" ref={width} placeholder="Width..."/>
      <input type="number" ref={heigth} placeholder="Heigth..."/>
      <p className="modalview--weight">
        Weight:
      </p>
      <input type="text" ref={weight} maxLength={10}/>
      <button onClick={() => saveChanges(prop.index)}>Save</button>
    </div>
  )
}