import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Piano24 from './components/piano/Piano24'
import Piano88 from './components/piano/Piano88'
import Calculator from './components/calculator/Calculator';
import Webcam from './components/webcam/webcam';
import Homepage from './components/homepage/Homepage';
import Mongologin from './components/mongodblogin/client/Mongologin';
import Mongosignup from './components/mongodblogin/client/Mongosignup';
import Signup from './components/oracle/frontend_login/Signup';
import Login from './components/oracle/frontend_login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mongologin />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/piano24" element={<Piano24 />} />
          <Route path="/piano88" element={<Piano88 />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/webcam' element={<Webcam />}/>
          {/* <Route path='/mongologin' element={<Mongologin />}/> */}
          <Route path='/mongosignup' element={<Mongosignup />}/>
          <Route path='/oraclesignup' element={<Signup />}/>
          <Route path='/oraclelogin' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
