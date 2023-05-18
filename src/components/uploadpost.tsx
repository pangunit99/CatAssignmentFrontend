import React, { useState } from 'react';
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


  
  const createpost=(event:any)=>{
    event.preventDefault();
    const cpost = {"title" :`${title}`,
                   "breed":`${breed}`,
                   "alltext" : `${alltext}`,
                   "summary" : `${summary}`,
                   "imageurl" : `${imageurl}`,
                   "staffid" : `1`};
    console.log(cpost);
    
    
    axios.post(`${api.uri}/api/v1/catpost/`,cpost,{
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
      className="card-form"
    >
      
      <Form.Item label="Title">
        <Input type="text" id="title" name="title" value={title} 
          onChange={(event) =>
          setTitle(event.target.value)
        } />
      </Form.Item>
      
      <Form.Item label="Breed">
        <Input type="text" id="breed" name="breed" value={breed}
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
        <Button onClick={createpost}>Submit</Button>
      </Form.Item>
    </Form>
  )
  return (
    <div>
    {isSubmitted ? <div className="card">Catpost are uploaded!</div>:uform}
    </div>
  );
}

export default uploadpost;