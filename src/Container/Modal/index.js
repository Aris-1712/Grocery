import React from 'react'
import Basket from '../../Components/Basket'
import './Modal.css'

const Modal = (props) => {

    return (
        <div id="modalID" className="Modal" >
            <div className="modalContainer">
                <Basket></Basket>
            </div>
        </div>
    )
}

export default Modal