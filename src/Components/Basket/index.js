import React from 'react'
import Modal from 'react-modal';
import { connect } from 'react-redux';
const Basket = (props) => {
    const customStyles = {
        content : {
          top                   : '30%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
    return (
        <Modal
        style={customStyles}
            isOpen={props.modalIsOpen}
        >   
        <div >
            <div style={{textAlign:"right"}}>
                <button onClick={props.close}>CLOSE</button>
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
        </Modal>
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