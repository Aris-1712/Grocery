import React from 'react'
import { connect } from 'react-redux';
const Basket = (props) => {
    
    return (
         
        <div >
            <div style={{textAlign:"right"}}>
                <button onClick={()=> {document.getElementById("modalID").style.display="none"}}>CLOSE</button>
            </div>
            <h3>Basket</h3>
        {Object.keys(props.basket).map(ele=>{
            return(
                <li>{`Item: ${props.basket[ele].Name} ,  Quantity: ${props.basket[ele].qty} ,  Total Price: ${props.basket[ele].qty*props.basket[ele].price} AED`}</li>
            )
        })}
        <br></br>
        <button onClick={()=>{props.clear()}}>CLEAR BASKET</button>
        </div>
     
    )
}
const mapActionToProps=(dispatch)=>{
    return(
        {
            clear:()=>{
                dispatch({type:"CLEAR"})}
        }
    )
}
const mapStateToProps=(state)=>{
    return({
        basket:state.basket
    })
}
export default connect(mapStateToProps,mapActionToProps)(Basket)