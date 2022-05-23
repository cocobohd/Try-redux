import React from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import { connect } from 'react-redux';
import { changeModal, changeIsInputEmpty, addNewObject } from "./store/actions.js"


function App(prop) {
  const imgInput = React.createRef()
  const nameInput = React.createRef()
  const countInput = React.createRef()
  const widthInput = React.createRef()
  const heigthInput = React.createRef()
  const weightInput = React.createRef()

  function newObject() {
    const newObj = {
      id: Date.now(),
      img: imgInput.current.value,
      name: nameInput.current.value,
      count: parseInt(countInput.current.value),
      size: {
        width: parseInt(widthInput.current.value),
        heigth: parseInt(heigthInput.current.value)
      },
      weigth: weightInput.current.value
    }
    clear()
    prop.changeModalVisible()
    prop.changeIsInputsEmpty()
    prop.addNewObj(newObj)
  }

  function clear() {
    imgInput.current.value = ""
    nameInput.current.value = ""
    countInput.current.value = ""
    widthInput.current.value = ""
    heigthInput.current.value = ""
    weightInput.current.value = ""
    prop.changeIsInputsEmpty(false)
  }

  function noEmptyInputs() {
    if(imgInput.current.value.trim() !== "" && nameInput.current.value.trim() !== "" && countInput.current.value.trim() !== "" && widthInput.current.value.trim() !== "" && heigthInput.current.value.trim() !== "" && weightInput.current.value.trim() !== ""){
      prop.changeIsInputsEmpty(true)
    }else {
      prop.changeIsInputsEmpty(false)
    }
  }

  return (
    <div className="app">
      <button className="add--btn" onClick={prop.changeModalVisible}>Add</button>
      <Modal isActive={prop.modalVisible} setIsActive={prop.changeModalVisible}>
        <h1 className="modal--title">
          Please write info about product
        </h1>
        <div className="modal--info" onChange={noEmptyInputs}>
          <p>Img Url</p>
          <input id="img" type="text" ref={imgInput}/>
          <p>Name</p>
          <input id="name" type="text" ref={nameInput}/>
          <p>Count</p>
          <input id="count" type="number" ref={countInput}/>
          <p>Size</p>
          <input id="width" type="number" placeholder="Width" ref={widthInput}/>
          <input id="heigth" type="number" placeholder="Heigth" ref={heigthInput}/>
          <p>Weigth</p>
          <input id="weight" type="text" ref={weightInput}/>
        </div>
        <div className="modal--btns">
          <button className={prop.isInputsEmpty ? "modal--add--btn active" : "modal--add--btn"} onClick={() => newObject()}>Add Item</button>
          <button className="modal--clear--btn" onClick={() => clear()}>Clear</button>
        </div>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  const { changeModalReducer, isInputEmptyReducer} = state
  return {
    modalVisible: changeModalReducer.modalVisible,
    isInputsEmpty: isInputEmptyReducer.isInputsEmpty,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewObj: (obj) => {
      return dispatch(addNewObject(obj))
    },
    changeIsInputsEmpty: (boolean) => {
      return dispatch(changeIsInputEmpty(boolean))
    },
    changeModalVisible: () => {
      return dispatch(changeModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)