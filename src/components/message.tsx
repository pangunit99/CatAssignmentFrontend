import { useRef, useState, useEffect } from "react";
import { api } from './common/http-common';
import axios from 'axios';
import '../index.css'
import { useNavigate } from "react-router-dom";
const slogin = () => {

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  
const handleStaffSubmit=(values:any)=>{
  values.preventDefault();
  
    const login = {
      "login": `${username}`,
      "password":`${password}`
    }
  
  console.log(access_token)
  console.log(login);
  
  axios.post(`${api.uri}/api/v1/message/`,login,{
    headers: {
      'Authorization': `Basic ${access_token}`
    }
  }).catch((err)=>{
    console.log(err.response)
    if(err.response){
      alert("Login or password fail");
    }
  }).then((res)=>{
    if(res.status==201){
      setIsSubmitted(true);

      }).then(()=>{
        for (let index = 0; index < 3000; index++) {
          
        }
        navigate("/");
        window.location.replace();
      })
  
}

  const sLoginForm = (
    <div className="container">
	<div className="card">
		<div className="card-image">	
			<h2 className="card-heading">
				<small>Staff Login</small>
			</h2>
		</div>
    
		<form className="card-form" >
      
			<div className="input">
				<input type="message" id="message" name="message" value={message} 
          onChange={(event) =>
          setMessage(event.target.value)
        } className="input-field" required/>
				<label className="input-label">Password</label>
			</div>
      
			<div className="action">
				<input type="submit" value="Login" onClick={handleStaffSubmit} ></input>
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