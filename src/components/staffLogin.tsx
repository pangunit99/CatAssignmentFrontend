import { useRef, useState, useEffect } from "react";
import { api } from './common/http-common';
import axios from 'axios';
import '../index.css'
import { useNavigate } from "react-router-dom";
import {Buffer} from 'buffer';
const slogin = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const status = '';

  
const handleStaffSubmit=(values:any)=>{
  values.preventDefault();
  
  const access_token =Buffer.from(`${username}:${password}`,'utf8').toString('base64')

  
    const login = {
      "login": `${username}`,
      "password":`${password}`
    }
  
  console.log(access_token)
  console.log(login);
  
  axios.post(`${api.uri}/api/v1/staff/login`,login,{
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
      console.log(res.data);
      console.log(res.status);
        localStorage.setItem("auth", `${access_token}`)
        console.log("this is localstorage save data!");
    }
      }).then(()=>{
        for (let index = 0; index < 3000; index++) {
          
        }
        navigate("/");
        window.location.replace("https://catassignmentfrontend.railpang1999.repl.co/");
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
				<input type="text" id="username" name="username" value={username} 
          onChange={(event) =>
          setUsername(event.target.value)
        }  className="input-field" required/>
				<label className="input-label">Login</label>
			</div>
      
			<div className="input">
				<input type="password" id="password" name="password" value={password} 
          onChange={(event) =>
          setPassword(event.target.value)
        } className="input-field" required/>
				<label className="input-label">Password</label>
			</div>
      
			<div className="action">
				<input type="submit" value="Login" onClick={handleStaffSubmit} ></input>
			</div>
      
		</form>
		<div className="card-info">
			<p>Not account? <br/><a href="/regtest">Click here to Sign in!</a></p>
		</div>
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