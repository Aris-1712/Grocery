import React, { useState } from 'react'
import Modal from 'react-modal';
import Basket from '../Basket';

const Header=(props)=>{
    const [openModal,setModalOpen]=useState(false)
    return(
        <div>
            <button onClick={()=>{setModalOpen(true)}}>Basket</button>
            <Basket close={()=>{setModalOpen(false)}} modalIsOpen={openModal}></Basket>
        </div>
    )
}


export default Header