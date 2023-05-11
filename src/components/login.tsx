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

  /*
  const handleFormSubmit=(values:any)=>{
    values.preventDefault();
    
    console.log(username,password);
    const login = {
      "login": `${username}`,
      "password":`${password}`
    }
    
    axios.post(`${api.uri}/api/v1/user/login`,login)
      .then((res)=>{
      console.log(res.data)
      console.log(res.status)
      if(res.status==201){
      alert('Login successful')
    }else{
        alert('invalid username and password')
    }
    })
    
    
  }
*/
  
const handleFormSubmit=(values:any)=>{
  values.preventDefault();
  
  const access_token =Buffer.from(`${username}:${password}`,'utf8').toString('base64')
  
  const head = {
    headers: {
      'Authorization': `Basic ${access_token}`
    }
  };
  
    const login = {
      "username": `${username}`,
      "password":`${password}`
    }
  
  console.log(access_token)
  console.log(login);
  
  axios.get(`${api.uri}/api/v1/user/login`,{
    headers: {
      'Authorization': `Basic ${access_token}`
    }
  }).catch((err)=>{
    console.log(err.response)
    if(err.response){
      alert("Login or password fail");
    }
  }).then((res)=>{
    setIsSubmitted(true);
    console.log(res.data);
    console.log(res.status);
        localStorage.setItem("auth", `${access_token}`)
        console.log("this is localstorage save data!");
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
				<input type="submit" value="Login" onClick={handleFormSubmit} ></input>
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