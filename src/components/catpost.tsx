import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {Card,Col,Row} from 'antd'
import { api } from './common/http-common';
import { catapi } from './common/cat-common';
import axios from 'axios';

const Catpost = () => {
  const navigate = useNavigate();
  const [catpost,setcatpost] = React.useState(null)
  const [loading,setLoading] = React.useState(null)

  const [catbreed,setCatbreed] = React.useState(null);
  const [getbreedcat,setGetbreedcat] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  axios.get(`${catapi.uri}`)
    .then((res)=>{
      setCatbreed(res.data)
//      console.log(res.data)
    })
  
  function changeStatus(e) {
    setStatus(e.target.value);
    apigetbybreed(e.target.value)
  }

  function apigetbybreed(cbreed){
  var value = cbreed;
  const breed=`${api.uri}/api/v1/catpost/b${cbreed}`
  
    axios.get(`${breed}`)
      .catch((err)=>{
        if (err.response) {
          alert(`There are not this breed cat`);
        }
      })
    .then((rest)=>{
      setGetbreedcat(rest.data);
    })
}
  
  const getBybreed=(
        <div>
          <select  value={status} onChange={changeStatus}>
            {
                catbreed &&
                catbreed.map(({id,name})=>(
                  <option value={name} key={id}>{name}</option>
                ))
            }
            </select>
        </div>
  )

  const breedcatshow=(
         <Row justify = "space-around">
          {
            getbreedcat &&
              getbreedcat.map(({id,title,alltext,imageurl})=>(
              <Col span={8} key={id} >
                <Card title={title} style={{ width:300}} >
                  <div className="custom-image">
                    <img alt="example" width="80%" src={imageurl} />
                  </div>
                  <p>{alltext}</p>
                  <p></p>
                  <Link to={`/dcat/${id}`}>Details</Link>
                </Card>
              </Col>
              ))
          }
          </Row>
  )

  
  React.useEffect(()=>{
    axios.get(`${api.uri}/api/v1/catpost/`)
    .then((res)=>{
      setcatpost(res.data)
      console.log(res.data)
    }).then(()=>{
      setLoading(false);
    })
  },[])


  if(loading){
    return (
      <p>Loading...</p>
    )
  } else{
    if(!catpost){
      <p>no catpost found</p>
    }else if(status!==null){
      return(
        <div>
          {getBybreed}
          {breedcatshow}
        </div>
        
      )
    }else{
    return(
      <Row justify = "space-around">
        <div>
          {getBybreed}
          {breedcatshow}
        </div>
          {
            catpost &&
              catpost.map(({id,title,alltext,imageurl})=>(
              <Col span={8} key={id} >
                <Card title={title} style={{ width:300}} >
                  <div className="custom-image">
                    <img alt="example" width="80%" src={imageurl} />
                  </div>
                  <p>{alltext}</p>
                  <p></p>
                  <Link to={`/dcat/${id}`}>Details</Link>
                </Card>
              </Col>
              ))
          }
          </Row>
    )
      
    }
}
}
export default Catpost;