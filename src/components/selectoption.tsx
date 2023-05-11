import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { catapi } from './common/cat-common';
import axios from 'axios';


const selectoption=()=>{
  const [catbreed,setCatbreed] = React.useState(null);
     React.useEffect(()=>{
    axios.get(`${catapi.uri}`)
    .then((res)=>{
      setCatbreed(res.data)
      console.log(res.data)
    })
  },[]);
  return(
      <div>
        <select name="pets">
          {
              catbreed &&
              catbreed.map(({id,name})=>(
                <option value={id}>{name}</option>
              )
          )
          }
          </select>
      </div>
    )
  
  
}

export default selectoption;