import React from 'react';
import {Link,useParams} from 'react-router-dom'
import { api } from './common/http-common';
import axios from 'axios';
import './dcat.css'


const profile=()=>{
  const username = localStorage.getItem("login");
  const [info,setInfo] = React.useState([]);
  const user = {
    "username":`${username}`
  }

  console.log(user);
  
      axios.get(`${api.uri}/api/v1/staff/${username}`)
        .then((rest)=>{
          const data = JSON.parse(JSON.stringify(rest.data))
          setInfo(data)
          console.log(`data : ${data}`);
    })
  console.log("data!");
  localStorage.setItem("id",`${info.id}`)
  var userid = localStorage.getItem("id")
  console.log(`userid: ${userid}`)
  return (
      <div className="container">
        <main className="main">
          <div className="main-container">
            <section>
              <h1>{info.id}</h1>
              <h2>Firstname:{info.firstname}</h2>
               <h2>lastname:{info.lastname}</h2>
              <h4>Detail:{info.username}</h4>
              <h4>Email:{info.email}</h4>
              <p>dateregistered:{info.dateregistered}</p>
              </section>
          </div>
         </main>
      
      </div>
  )
}

export default profile;