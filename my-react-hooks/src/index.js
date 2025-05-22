import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';


const initialstate={
  message: 'hii'
}

function reducer(state,action){
  
  switch(action.type){
    case "YELL":
      return{message:`hey! I Justed Said ${state.message}`}
    case "Wshiper":
      return{message:`Excuseme! I Justed Said ${state.message}`}
}

  
  
}

function App() {

  const [state, dispatch]=useReducer(reducer,initialstate);
  return (
    <>
      <p>message:{state.message}</p>
      <button onClick={()=>dispatch({type:"YELL"})}>YELL</button>
      <button onClick={()=>dispatch({type:"Wshiper"})}>Wshiper</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
