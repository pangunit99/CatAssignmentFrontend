import React from "react";
import { api } from './common/http-common';
import {Link,useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
import '../index.css'
import {
  Button,
  Collapse,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber
} from 'antd';

const replymsg = () => {
  let params = useParams();
  const [message, setMessage] = React.useState('');
  const [isSubmitted,setIsSubmitted]= React.useState(false);
  const navigate = useNavigate();
  const access_token = localStorage.getItem('auth')
  const username = localStorage.getItem('login')
  const [remsg,setRemsg] =  React.useState('');
  
  const { TextArea } = Input;

  //send reply
const handleStaffSubmit=(event:any)=>{
  event.preventDefault();
  const send ={
    "answer":`${message}`
  }
  
  axios.put(`${api.uri}/api/v1/message/${params.id}`,send,{
    headers: {
      'Authorization': `Basic ${access_token}`
    }
  }).catch((err)=>{
    console.log(err.response)
    if(err.response){
      alert("error");
    }
  }).then((res)=>{
    if(res.status==201){
      setIsSubmitted(true);
      alert('sended!')
    }
  }).then(()=>{
        for (let index = 0; index < 3000; index++) {
          
        }
      })
}
  
//get msg info
    React.useEffect(()=>{
      axios.get(`${api.uri}/api/v1/message/${params.id}`)
      .then((res)=>{
        setRemsg(res.data)
        console.log(res.data)
      })
  },[])

const onChange = (key: string | string[]) => {
    console.log(key);
}
  
  const staffreply = (
        <div className="container">
    	<div className="card">
    		<div>	
    			<h2>
    				<small>Reply message!</small>
    			</h2>
    		</div>
          		<form id={remsg.mid}>
                <div>{remsg.mid}</div>
                <div>{remsg.username}</div>
                <div>{remsg.question}</div>
          			<div className="input">
          				<TextArea
                    id="message" name="message" value={message} 
                    onChange={
                      (event) =>setMessage(event.target.value)
                    }
                    autoSize={{ minRows: 3, maxRows: 7}}
                  /> 
          			</div>
          			<div className="action">
                  <Button onClick={handleStaffSubmit}>Submit</Button>
          			</div>
          		</form>
                
        
      </div>
    </div>
  )
  
  return(
  <div>
    {isSubmitted ? <div className="card">Replyed</div> : staffreply}
  </div>
  )

  }


export default replymsg;