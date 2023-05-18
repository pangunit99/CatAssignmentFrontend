import React from 'react'
import { useNavigate } from "react-router-dom";
import {axios} from "axios"


const logout=()=>{
  const navigate = useNavigate();
  
  const clear=()=>{
    localStorage.clear();
    window.location.reload();
  }
  return (
    <button onClick={clear}>Logout</button>
  )
}

export default logout;