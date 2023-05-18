import React from 'react';
import {Link,useParams} from 'react-router-dom'
import { api } from './common/http-common';
import axios from 'axios';



const delcat= () =>{
  const access = localStorage.getItem('auth');
  let params = useParams();
  console.log(params.id)
  const rundel=()=>{
    axios.delete(`${api.uri}/api/v1/catpost/${params.id}`,{
        headers: {
          'Authorization': `Basic ${access}`
        }
      }
    )
  }
return (
  rundel(),
  window.location.href = "https://catassignmentfrontend.railpang1999.repl.co"
)
  
}

export default delcat;

