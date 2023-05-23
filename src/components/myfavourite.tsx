import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {Card,Col,Row} from 'antd'
import { api } from './common/http-common';
import { catapi } from './common/cat-common';
import axios from 'axios';

const Catpost = () => {
  const navigate = useNavigate();
  const [catpost,setcatpost] = React.useState(null)

  const [status, setStatus] = React.useState(null);
  
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
                  <p></p>
                  <Link to={`/addfav/${id}`}>Add favourite</Link>
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