import Routers from "./route";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
 
  const [token, setToken]=useState('');
   
useEffect(()=>{
   const token = JSON.parse(localStorage.getItem('Token'));
   setToken(token);
   console.log('App',token);
},[]);

  return <Routers token ={token}/>;
}

export default App;
