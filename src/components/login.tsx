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
  const [info,setInfo] = useState([])
  
  
const handleUserSubmit=(values:any)=>{
  values.preventDefault();
  const login = {
      "username": `${username}`
    }

  
  const access_token =Buffer.from(`${username}:${password}`,'utf8').toString('base64')
  
  const head = {
    headers: {
      'Authorization': `Basic ${access_token}`
    }
  };
  
  console.log(access_token)
  console.log(login);
  
  axios.post(`${api.uri}/api/v1/user/ulogin`,login,{
    headers: {
      'Authorization': `Basic ${access_token}`
    }
  }).catch((err)=>{
    console.log(err.response)
    if(err.response){
      alert("username or password fail");
    }
  }).then((res)=>{
    setIsSubmitted(true);
    //console.log(res);
    localStorage.setItem("userauth", `${access_token}`);
    localStorage.setItem("username",`${username}`);
    window.location.replace("https://catassignmentfrontend.railpang1999.repl.co/profile");
  })

}

  const sLoginForm = (
    <div className="container">
	<div className="card">
		<div className="card-image">	
			<h2 className="card-heading">
				<small>User Login</small>
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
				<input className="action-button" type="submit" value="Login" onClick={handleUserSubmit} ></input>
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