//upload and see cat type on one page
import React from 'react'
import { useNavigate } from "react-router-dom";
import Uploadpost from './uploadpost'
import Selectoption from './selectoption'
import './fullupload.css'

const showupload=()=>{

  return(
    <div className="display-flex">
      <div className="div-size"><Uploadpost /></div>
      <div className="div-size"><Selectoption /></div>
    </div>
  )
}
export default showupload;