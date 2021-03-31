import React from 'react'
import { connect } from 'react-redux'
import './Item.css'
const Item=(props)=>{
    
    return(
        <div className="itemContainer">
            <img  src={props.item.src}></img>
            
            <div style={{textAlign:"center"}}><p>{props.item.Name}</p>
            <p >Price: {props.item.price} AED</p>
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