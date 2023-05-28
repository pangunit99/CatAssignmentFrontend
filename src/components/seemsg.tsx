import React from "react";
import { api } from './common/http-common';
import axios from 'axios';
import '../index.css'
import { useNavigate } from "react-router-dom";


const slogin = () => {
  
  const navigate = useNavigate();
  const access_token = localStorage.getItem('userauth')
  const username = localStorage.getItem('username')
  const [mysend,setMysend] =  React.useState('');



    React.useEffect(()=>{
      axios.get(`${api.uri}/api/v1/message/${username}`)
      .then((res)=>{
        setMysend(res.data)
        console.log(res.data)
      })
  },[])

const onChange = (key: string | string[]) => {
    console.log(key);
}
  const sLoginForm = (
        <div>
    	<div>
    		<div>	
    			<h2>
    				<small>See message</small>
    			</h2>
    		</div>
          {
            mysend &&
              mysend.map(({mid,username,question,answer})=>(
              <table>
                  <p>sended : {question}</p>
                  <p>reply : {answer}</p>
                  <p></p>
              </table>
              ))
          }

    	</div>
    </div>
  )
  
  return(
    sLoginForm
  )

  }


export default slogin;