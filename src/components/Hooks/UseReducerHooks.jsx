import React, { useReducer } from 'react'


const reducer = (state, action) =>{
  if(action.type === 'dic'){
    return {money : state.money - 10};
  }
  if(action.type === 'inc'){
    return {money : state.money + 10};
  }
  if(action.type === 'advInc'){
    return {money : state.money + 100};
  }
  
  return state;
}


export default function UseReducerHooks() {
  const initialState = {money : 100};
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>Wallet: {state.money}</h2>
      <div>
        <button onClick={()=>dispatch({type:'dic'})}>Dic</button>
        <button onClick={()=>dispatch({type:'inc'})}>Inc</button>
        <button onClick={()=>dispatch({type:'advInc'})}>advInc</button>
      </div>
    </div>
  )
}
