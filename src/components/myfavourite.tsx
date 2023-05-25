import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {Card,Col,Row} from 'antd'
import { api } from './common/http-common';
import axios from 'axios';

const Catpost = () => {
  const navigate = useNavigate();
  const [catpost,setcatpost] = React.useState(null)
  const [loading,setLoading] = React.useState()
  const userid = localStorage.getItem('id');
  
  React.useEffect(()=>{
    axios.get(`${api.uri}/api/v1/favourite/${userid}`)
      .then((res)=>{
        setcatpost(res.data)
        console.log(res.data)
      })
    },[]);
  
    if(!catpost){
      <p>no catpost found</p>
    }else{
    return(
      <Row justify = "space-around">
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
export default Catpost;