import React from 'react'
import Header from '../Header'
import Item from '../Item'
import Items from '../Items'
import './Home.css'

const Home=(props)=>{

    return(
        <div className="homeContainer">
            <Header></Header>
            <Items></Items>
        </div>
    )

}

export default Home