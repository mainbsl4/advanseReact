// import React, { useReducer } from 'react'

// const reducer = (state, action) =>{
//   if(action.type === 'dic'){
//     return {money : state.money - 10};
//   }
//   if(action.type === 'inc'){
//     return {money : state.money + 10};
//   }
//   if(action.type === 'advInc'){
//     return {money : state.money + 100};
//   }

//   if(action.type === 'incPro'){
//     return {pro : state.pro + 1};
//   }

//   return state;
// }

// export default function UseReducerHooks() {
//   const initialState = {money : 100, pro: 0};
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//       <h2>Wallet: {state.money}</h2>
//       <h2>Wallet: {state.pro}</h2>
//       <div>
//         <button onClick={()=>dispatch({type:'dic'})}>Dic</button>
//         <button onClick={()=>dispatch({type:'inc'})}>Inc</button>
//         <button onClick={()=>dispatch({type:'advInc'})}>advInc</button>
//         <button onClick={()=>dispatch({type:'incPro'})}>incPro</button>
//       </div>
//     </div>
//   )
// }

// import React, { useReducer } from "react";

// const reducer = (state, action) => {
//   if (action.type === "dic") {
//     return { ...state, money: state.money - 10 };
//   }
//   if (action.type === "inc") {
//     return { ...state, money: state.money + 10 };
//   }
//   if (action.type === "advInc") {
//     return { ...state, money: state.money + 100 };
//   }
//   if (action.type === "incPro") {
//     return { ...state, pro: state.pro + 1 };
//   }

//   return state;
// };

// export default function UseReducerHooks() {
//   const initialState = { money: 100, pro: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h2>Wallet: {state.money}</h2>
//       <h2>Product: {state.pro}</h2> {/* Corrected typo in the label */}
//       <div>
//         <button onClick={() => dispatch({ type: "dic" })}>Dic</button>
//         <button onClick={() => dispatch({ type: "inc" })}>Inc</button>
//         <button onClick={() => dispatch({ type: "advInc" })}>advInc</button>
//         <button onClick={() => dispatch({ type: "incPro" })}>incPro</button>
//       </div>
//     </div>
//   );
// }

// ====================================

import React, { useReducer } from "react";

export default function UseReducerHooks() {
  const reducer = (state, action) => {
    if (action.type === "inc") {
      return { state, money: state.money + 10 };
    }
  };
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Wallet: {state.money}</h2>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "inc" });
          }}
        >
          INC
        </button>
      </div>
    </div>
  );
}
