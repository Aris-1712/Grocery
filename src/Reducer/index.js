const initialState={
    basket:!JSON.parse(localStorage.getItem("basket"))?{}:JSON.parse(localStorage.getItem("basket")).basket
}

const Reducer=(state=initialState,Action)=>{
    if(Action.type==="ADD_ITEM"){
        let temp={...state.basket}
        if(/* Object.keys(temp).includes((Action.payload.id).toString()) */ Action.payload.id in temp){
            temp[Action.payload.id].qty=temp[Action.payload.id].qty+1
        }
        else{
            temp[Action.payload.id]={...Action.payload,qty:1}
        }
        localStorage.setItem("basket",JSON.stringify({...state,basket:{...temp}}))
        return {...state,basket:{...temp}}
    }
    if(Action.type==="REM_ITEM"){
        let temp={...state.basket}
        if(Action.payload.id in temp){
            if(temp[Action.payload.id].qty-1===0){
                delete temp[Action.payload.id]
            }
            else{
                temp[Action.payload.id].qty=temp[Action.payload.id].qty-1
            }
            
        }
        localStorage.setItem("basket",JSON.stringify({...state,basket:{...temp}}))
        return {...state,basket:{...temp}}
    }
    if(Action.type==="CLEAR"){
        localStorage.clear()
        return {...state,basket:{}}
    }
    return {...state}
}


export default Reducer