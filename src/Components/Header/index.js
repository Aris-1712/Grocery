import React, { useState } from 'react'

import Basket from '../Basket';
import './Header.css'
const Header=(props)=>{
    const [openModal,setModalOpen]=useState(false)
    return(
        <div className="headerContainer">
            <h1>Grocery Application</h1>
            <button  onClick={()=>{
                document.getElementById("modalID").style.display="flex"
            }}>Basket</button>
            
            {/* <Basket close={()=>{setModalOpen(false)}} modalIsOpen={openModal}></Basket> */}
        </div>
    )
}


export default Header