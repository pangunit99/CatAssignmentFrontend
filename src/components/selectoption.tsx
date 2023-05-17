import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { catapi } from './common/cat-common';
import axios from 'axios';
import {Col,Row} from 'antd';


const selectoption=()=>{
  const [catimage,setCatimage] = React.useState(null);
  const [catbreed,setCatbreed] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  React.useEffect(()=>{
    axios.get(`${catapi.uri}`)
    .then((res)=>{
      setCatbreed(res.data)
//      console.log(res.data)
    })
  },[]);

  function apicatimage(breedid){
  var value = breedid;
  const httpimage=`https://api.thecatapi.com/v1/images/search?limit=9&breed_ids=${value}&api_key=live_AbDhifUXJaYZCVA6JtzxmxrYRxCXb4wmTuZ3bgxxB3f26mRp6fyqxiKE7TqG86nz`
  
    axios.get(`${httpimage}`)
    .then((rest)=>{
      setCatimage(rest.data)
    })
}


  function changeStatus(e) {
    setStatus(e.target.value);
    apicatimage(e.target.value)
  }

  
      const showimage =(
          <Row justify = "space-around">
          {
            catimage &&
              catimage.map(({id,url})=>(
              <Col span={8} key={id} >
                  <div className="custom-image">
                    <img alt="example" width="80%" src={url} />
                  </div>
              </Col>
              ))
          }
          </Row>
  )

  return(
      <div>
        <select  value={status} onChange={changeStatus}>
          {
              catbreed &&
              catbreed.map(({id,name})=>(
                <option value={id} key={id}>{name}</option>
              ))
          }
          </select>
        {showimage}
      </div>
    )
}

export default selectoption;