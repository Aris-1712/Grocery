import React, { useState } from 'react'
import Modal from 'react-modal';
import Basket from '../Basket';
import './Header.css'
const Header=(props)=>{
    const [openModal,setModalOpen]=useState(false)
    return(
        <div className="headerContainer">
            <h1>Grocery App</h1>
            <button  onClick={()=>{setModalOpen(true)}}>Basket</button>
            <Basket close={()=>{setModalOpen(false)}} modalIsOpen={openModal}></Basket>
        </div>
    )
}


export default Header