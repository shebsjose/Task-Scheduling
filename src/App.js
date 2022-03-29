import Routers from "./route";
import "./App.css";
import { useEffect } from "react";

function App() {

useEffect(()=>{
   const getData = JSON.parse(localStorage.getItem('Token'));
})
  return <Routers />;
}

export default App;
