import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './Item.css'
const Item = (props) => {
    const [item,setItem]=useState({})
    useEffect(()=>{
        if(props.item.id in props.basket){
        Object.keys(props.basket).map((ele)=>{
            if((props.item.id)==ele){
                console.log("HERE")
                setItem({...props.basket[ele]})
            }
        })
    }else{
        setItem({...props.item,qty:0})
    }
    },[props])
    return (
        <div className="itemContainer">
            <img src={item.src}></img>

            <div style={{ textAlign: "center" }}><p>{item.Name}</p>
                <p >Price: {item.price} AED</p>
                <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center"}}><button disabled={item.qty && item.qty!==0?false:true} onClick={() => {
                    props.rem(item)
                }}>-</button>
                <p>{item.qty?item.qty:0}</p>
                <button onClick={() => {
                    props.add(item)
                }}>+</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return ({
        basket: state.basket
    })
}
const mapActionToProps = (dispatch) => {
    return (
        {
            add: (data) => {
                dispatch({ type: "ADD_ITEM", payload: { ...data } })
            },
            rem:(data)=>{
                dispatch({ type: "REM_ITEM", payload: { ...data } })
            }
        }
    )
}

export default connect(mapStateToProps, mapActionToProps)(Item)