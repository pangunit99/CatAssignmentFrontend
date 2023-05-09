import React from 'react';
import {Link,useParams} from 'react-router-dom'
import {Card,Col,Row} from 'antd'
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
        <p><h2>Breed:{detailcat.breed}  state:{detailcat.state}</h2></p>
        <p><h4>Detail:{detailcat.alltext}</h4></p>
        </section>
    </div>
   </main>

</div>

            
          /*  <div>{
              <div>
                <Image width={200}src={detailcat.imageurl}/>
                <div>
                  <h1>{detailcat.title}</h1>
                  <h2>Breed:{detailcat.breed}</h2>  <h2>state:{detailcat.state}</h2>
                  <p>
                  <h3>{detailcat.summary}</h3>
                  </p>
                  <p>
                  <h4>Detail:{detailcat.alltext}</h4>
                  </p>
                </div>
              </div>
            }</div>*/
          )
         
}


export default Dcat;