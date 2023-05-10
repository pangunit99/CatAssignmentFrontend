import 'antd/dist/reset.css'
import {Layout, Space} from 'antd'
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import Home from './components/home'
import Staffreg from './components/staff_register'
import Regtest from './components/regtest'
import Dcat from './components/dcat'
import Slogin from './components/staffLogin'


const {Header,Content, Footer} = Layout;

export default function App(){
  return(
    
    <Router>
      <Header>
      <nav>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/Regtest">regtest</Link>
          <Link to="/staffLogin">staffLogin</Link>
        </Space>
      </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element = { <Home />} />
          <Route path="/regtest" element = { <Regtest />} />
          <Route path="/dcat/:id" element = { <Dcat />} />
          <Route path="/staffLogin" element = { <Slogin />} />
        </Routes>
      </Content>
      <Footer>
        <p>VT6003CEM</p>
      </Footer>
    </Router>
  );
}

