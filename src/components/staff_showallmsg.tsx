import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {Card,Col,Row} from 'antd'
import { api } from './common/http-common';
import { catapi } from './common/cat-common';
import axios from 'axios';

const showallmsg = () => {
  const navigate = useNavigate();
  const [allmsg,setAllmsg] = React.useState(null)


  React.useEffect(()=>{
    axios.get(`${api.uri}/api/v1/message/`)
    .then((res)=>{
      setAllmsg(res.data)
      console.log(res.data)
    })
  },[])


    
    return(
      <Row justify = "space-around">
          {
            allmsg &&
              allmsg.map(({mid,username,question,answer})=>(
              <Col span={8} key={mid} >
                <Card title={username} style={{ width:300}} >
                  <p>{question}</p>
                  <p></p>
                  <Link to={`/staffreplymsg/${mid}`}>Reply</Link>
                </Card>
              </Col>
              ))
          }
          </Row>
    )
      

}

export default showallmsg;