import { useState,React} from "react";
import { api } from './common/http-common';
import axios from 'axios';
import '../index.css'
import { useNavigate } from "react-router-dom";
import {
  Button,
  Collapse,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect
} from 'antd';

const slogin = () => {
  const { Panel } = Collapse;
  const [message, setMessage] = useState('');
  const [isSubmitted,setIsSubmitted]= useState(false);
  const navigate = useNavigate();
  const access_token = localStorage.getItem('userauth')
  const username = localStorage.getItem('username')
  const [mysend,setMysend] =  useState('');
  
  const { TextArea } = Input;
const handleStaffSubmit=(values:any)=>{
  values.preventDefault();

  const send ={
    "username":`${username}`,
    "question":`${message}`
  }
  
  axios.post(`${api.uri}/api/v1/message/`,send,{
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
        navigate("/");
        window.location.reload();
      })
}

      axios.get(`${api.uri}/api/v1/message/${username}`)
      .then((res)=>{
        setMysend(res.data)
        console.log(res.data)
      })

const onChange = (key: string | string[]) => {
    console.log(key);
}
  const sLoginForm = (
        <div className="container">
    	<div className="card">
    		<div>	
    			<h2>
    				<small>send message to contect us!</small>
    			</h2>
    		</div>
        
    		<form>
          
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
            <Button onClick={handleStaffSubmit}>Send!</Button>
    			</div>
          
    		</form>
    	</div>
    </div>
  )
  
  return(
  <div>
    {isSubmitted ? <div className="card">Wellcome {username}</div> : sLoginForm}
  </div>
  )

  }


export default slogin;