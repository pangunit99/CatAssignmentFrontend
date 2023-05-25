import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { api } from './common/http-common';
import '../index.css'
import {
  Button,
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


const uploadpost = () => {
  const [title, setTitle] = useState('');
  const [breed, setBreed] = useState('');
  const [alltext, setAlltext] = useState('');
  const [summary, setSummary] = useState('');
  const [imageurl,setImageurl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { TextArea } = Input;
  const access = localStorage.getItem('auth');
  const staffid = localStorage.getItem('id');
  const [detailcat,setDetailcat] = React.useState([])
  const [allcat,setAllcat] = React.useState([])

  const delay = ms => new Promise(res => setTimeout(res, ms));
  
  const [status, setStatus] = React.useState(null);
  React.useEffect(()=>{
    axios.get(`${api.uri}/api/v1/catpost/`)
    .then((res)=>{
      const data = JSON.parse(JSON.stringify(res.data))
      setAllcat(data)
      console.log(data)
    })
  },[])


  const findpost=(ids:any)=>{
    axios.get(`${api.uri}/api/v1/catpost/${ids}`)
    .then((res)=>{
      const data = JSON.parse(JSON.stringify(res.data))
      setDetailcat(data)
      console.log(data)
    })
  }
  function changeStatus(e:any) {
    setStatus(e.target.value);
    findpost(e.target.value);

  }


  
  const updatepost=(event:any)=>{
    event.preventDefault();
    const cpost = {"title" :`${title}`,
                   "breed":`${breed}`,
                   "alltext" : `${alltext}`,
                   "summary" : `${summary}`,
                   "imageurl" : `${imageurl}`,
                   "staffid" : `${staffid}`};
    console.log(cpost);
    
    
    axios.put(`${api.uri}/api/v1/catpost/${status}`,cpost,{
    headers: {
      'Authorization': `Basic ${access}`
    }}).catch((err)=>{
      console.log(err.response)
      if(err.response){
        alert("Please input all information");
      }
    }).then((res)=>{
      setIsSubmitted(true);
      console.log(res.data);
      console.log(res.status);
    })
  }
  
  
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const uform = (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
      className="card-form">
      
      
      <Form.Item label="Title">
        <Input type="text" id="title" name="title" value={detailcat.title} 
          onChange={(event) =>
          setTitle(event.target.value)
        } />
      </Form.Item>
      
      <Form.Item label="Breed">
        <Input type="text" id="breed" name="breed" value={detailcat.breed} 
          onChange={(event) =>
          setBreed(event.target.value)
        } />
      </Form.Item>
      
      
      <Form.Item label="Alltext">
        <Input type="text" id="alltext" name="alltext" value={alltext} 
          onChange={(event) =>
          setAlltext(event.target.value)
        } />
      </Form.Item>
      
      <Form.Item label="Summary">
        <TextArea
          id="summary" name="summary" value={summary} 
          onChange={
            (event) =>setSummary(event.target.value)
          }
          autoSize={{ minRows: 3, maxRows: 5 }}
        /> 
      </Form.Item>

      <Form.Item label="imageurl">
        <Input type="text" id="imageurl" name="imageurl" value={imageurl} 
          onChange={(event) =>
          setImageurl(event.target.value)
        } />
      </Form.Item>
      
<Form.Item label="Comfirm:">
        <Button onClick={updatepost}>Submit</Button>
      </Form.Item>
    </Form>
  )
  
  return (
    
    <div>
      <select value={status} onChange={changeStatus}>
          {
              allcat &&
              allcat.map(({title,id})=>(
                <option value={id} key={id}>{title}</option>
              ))
          }
          </select>
    {isSubmitted ? <div className="card">Catpost are uploaded!</div>:uform}
    </div>
  );
}

export default uploadpost;