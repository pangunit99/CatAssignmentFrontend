import React from 'react';
import {Link,useParams} from 'react-router-dom'
import { api } from './common/http-common';
import axios from 'axios';
import { Image } from 'antd';
import './dcat.css'

const Dcat= () =>{
  let params = useParams();
  console.log(params.id)
  const [detailcat,setDetailcat] = React.useState([])
  React.useEffect(()=>{
    axios.get(`${api.uri}/api/v1/catpost/${params.id}`)
    .then((res)=>{
      const data = JSON.parse(JSON.stringify(res.data))
      setDetailcat(data)
      console.log(data)
    })
  },[])

          return (
<div class="container">

  <main class="main">
    <div class="main-container
  ">
      <section>
        <Image width={200}src={detailcat.imageurl}/>
        <h1>{detailcat.title}</h1>
        <h2>Breed:{detailcat.breed}  state:{detailcat.state}</h2>
        <h4>Detail:{detailcat.alltext}</h4>
        <p>Summary:{detailcat.summary}</p>
        </section>
    </div>
   </main>

</div>
          )
         
}


export default Dcat;