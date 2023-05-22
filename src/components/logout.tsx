import React from 'react'
import { useNavigate } from "react-router-dom";


const logout=()=>{
  const navigate = useNavigate();
  
  const clear=()=>{
    localStorage.clear();
    window.location.replace("https://catassignmentfrontend.railpang1999.repl.co");
  }
  return (
    <button onClick={clear}>Logout</button>
  )
}

export default logout;