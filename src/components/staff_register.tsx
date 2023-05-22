import { useRef, useState, useEffect } from "react";
import { api } from './common/http-common';
import axios from 'axios';
import '../index.css'
import { useNavigate } from "react-router-dom";

const StaffRegister = () => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] =useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

const activateLasers = (event:any) =>{
  event.preventDefault();
  const register = { "firstname" :`${fname}`, "lastname":`${lname}`,"login" : `${username}`, "password" : `${password}`, "email" : `${email}`};
  console.log(register)
     axios.post(`${api.uri}/api/v1/staff/staff`, register)
       .catch((err)=>{
        console.log(err.response)
        if(err.response){
          alert("please input all information");
        }
      }).then((res)=>{
        alert("register successful")
        window.location.replace("https://catassignmentfrontend.railpang1999.repl.co/staffLogin");
      })
}
  
  
  return(
    <div className="container">
	<div className="card">
		<div className="card-image">	
			<h2 className="card-heading">
				<small>Let create your account</small>
			</h2>
		</div>
    
		<form className="card-form" >
			<div className="input">
				<input type="text" id="fname" name="fname" value={fname} 
          onChange={(event) =>
          setFname(event.target.value)
        } className="input-field" required/>
				<label className="input-label">First name</label>
			</div>
      
      <div className="input">
				<input type="text" id="lname" name="lname" value={lname} 
          onChange={(event) =>
          setLname(event.target.value)
        } className="input-field" required/>
				<label className="input-label">Last name</label>
			</div>
      
      <div className="input">
				<input type="text" id="username" name="username" value={username} 
          onChange={(event) =>
          setUsername(event.target.value)
        }  className="input-field" required/>
				<label className="input-label">Login</label>
			</div>
      
			<div className="input">
				<input type="text" id="email" name="email" value={email} 
          onChange={(event) =>
          setEmail(event.target.value)
        } className="input-field" required/>
				<label className="input-label">Email</label>
			</div>
      
			<div className="input">
				<input type="password" id="password" name="password" value={password} 
          onChange={(event) =>
          setPassword(event.target.value)
        } className="input-field" required/>
				<label className="input-label">Password</label>
			</div>
      
			<div className="action">
				<input type="submit" value="Create account" onClick={activateLasers} ></input>
			</div>
      
		</form>
		<div className="card-info">
			<p>Have account? <br/><a href="#">Click here to login!</a></p>
		</div>
	</div>
</div>
  )
}




export default StaffRegister;
