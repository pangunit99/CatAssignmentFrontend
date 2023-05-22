import 'antd/dist/reset.css'
import {Layout, Space} from 'antd'
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import LogoutButton from './logout'

const {Header,Content, Footer} = Layout;

const nothing = (
        <Space>
          <Link to="/">Home</Link>
          
          <Link to="/Regtest">Signup</Link>
          <Link to="/login">Login</Link>
          
          <Link to="/staff_register">Staff register</Link>
          <Link to="/staffLogin">StaffLogin</Link>
        </Space>
);

const usestaff=(
        <Space>
          <Link to="/">Home</Link>
          <Link to="/fullupload">Uploadpost</Link>
          <Link to = "/deletepost">Delete Post</Link>
          
          <LogoutButton />
        </Space>
)
const user=(
        <Space>
          <Link to="/">Home</Link>
          <Link to="/myfavourute">Favourite</Link>
          <Link to={`/profile`}>Profile</Link>
          <LogoutButton />
        </Space>
)


const staffbar=()=>{
    if (localStorage.getItem("auth")!==null) {
      return usestaff;
    }else if(localStorage.getItem("userauth")!==null){
      return user;
    }else{
      return nothing;
    }
      
}

export default staffbar;