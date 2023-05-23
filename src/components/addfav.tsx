import React from 'react';
import {Link,useParams} from 'react-router-dom'
import { api } from './common/http-common';
import axios from 'axios';


const addfav= () =>{
  const access = localStorage.getItem('auth');
  const userid = localStorage.getItem('id');
  const id = {
    "userid":`${userid}`
  }
  let params = useParams();
  console.log(params.id)
  const rundel=()=>{
    React.useEffect(()=>{
    axios.post(`${api.uri}/api/v1/user/${params.id}`,id,{
        headers: {
          'Authorization': `Basic ${access}`
        }
      }
    )
  },[])
  }
return (
  rundel()
)

}
export default addfav;

