import 'antd/dist/reset.css'
import {Layout, Space} from 'antd'
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import Home from './components/home'
import Staffreg from './components/staff_register'
import Regtest from './components/regtest'
import Dcat from './components/dcat'
import Slogin from './components/staffLogin'
import Setheader from './components/setheader'
import Fupload from './components/fullupload'
import Website from './components/web'
import Delcat from './components/delcat'
const {Header,Content, Footer} = Layout;

export default function App(){
  return(
    <Website />
  )
}

