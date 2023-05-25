import React from 'react'
import 'antd/dist/reset.css'
import {Layout, Space} from 'antd'
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import Home from './home'

import Regtest from './regtest'
import Login from './login'
import Addfav from './addfav'
import Favourite from "./myfavourite"

import Staffreg from './staff_register'
import Slogin from './staffLogin'
import Logout from './logout'
import Dcat from './dcat'
import Staffprofile from "./staffprofile"
import Updatepost from "./updatepost"


import Setheader from './setheader'

import Fullupload from './fullupload'
import Deletepost from './deletepost'
import Delcat from './delcat'
import Pfile from './profile'

const {Header,Content, Footer} = Layout;

const showonStaffLogin = (
      <Router>
      <Header>
      <nav>
        <Space>
          <Setheader />
        </Space>
      </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element = { <Home />} />
          <Route path="/dcat/:id" element = { <Dcat />} />
          <Route path="/regtest" element = { <Regtest />} />
          <Route path="/login" element = { <Login />} />
          <Route path="/addfav/:id" element = { <Addfav />} />
          <Route path="/myfavourite" element = {<Favourite />} />
          
          <Route path="/staffLogin" element = { <Slogin />} />
          <Route path="/staff_register" element = { <Staffreg />} />
          <Route path="/fullupload" element = { <Fullupload />} />
          <Route path="/deletepost" element = { <Deletepost />} />
          <Route path="/delcat/:id" element = { <Delcat />} />
          <Route path="/staffprofile" element = {<Staffprofile />} />
          <Route path="/updatepost" element = {<Updatepost />} />

          
          <Route path="/profile" element = { <Pfile />} />
          
          
          
        </Routes>
      </Content>
      <Footer>
        <p>VT6003CEM</p>
      </Footer>
    </Router>
)


const website=()=>{
    if(localStorage.getItem("auth")){
      return(
        showonStaffLogin
      );
    }else if(localStorage.getItem("userauth")){
      return(
       showonStaffLogin
      );
    }else{
      return(
        showonStaffLogin
      );
    }
  
}
export default website;

