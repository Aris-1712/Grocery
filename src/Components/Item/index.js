import React from 'react'
import { connect } from 'react-redux'
import './Item.css'
const Item=(props)=>{
    
    return(
        <div className="itemContainer">
            <img style={{widht:100,height:100}} src={props.item.src}></img>
            
            <div style={{textAlign:"center"}}><p style={{fontWeight:600,margin:0}}>{props.item.name}</p>
            <p style={{margin:0}}>Price: {props.item.price} AED</p>
            <button onClick={()=>{
                props.add(props.item)}}>ADD ITEM</button>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return({
        basket:state.basket
    })
}
const mapActionToProps=(dispatch)=>{
    return(
        {
            add:(data)=>{
                dispatch({type:"ADD_ITEM",payload:{...data}})}
        }
    )
}

export default connect(mapStateToProps,mapActionToProps)(Item)