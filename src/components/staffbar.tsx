import 'antd/dist/reset.css'
import {Layout, Space} from 'antd'
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import Home from './components/home'
import Staffreg from './components/staff_register'
import Regtest from './components/regtest'
import Dcat from './components/dcat'
import Slogin from './components/staffLogin'


const {Header,Content, Footer} = Layout;

const nothing = (
        <Space>
          <Link to="/">Home</Link>
          <Link to="/Regtest">regtest</Link>
          <Link to="/staffLogin">staffLogin</Link>
        </Space>
);

const usestaff=(
        <Space>
          <Link to="/">Home</Link>
        </Space>
)



const staffbar=()=>{
    if (localStorage.getItem("auth")===null) {
      return nothing;
    }else if(localStorage.getItem("userauth")!==null){
      return usestaff;
    }else{
      return usestaff;
    }
      
}

export default staffbar;