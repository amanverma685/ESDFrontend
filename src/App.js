import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,
  Switch,
Routes,
Route,
Link} from "react-router-dom"

import Home from "./components/Home.js"
import Login from "./components/login.js"
import Main from './components/Main';
import Domain from './components/domain';
import Specialization from './components/specialization';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/domain/:uid" element={<Domain/>}/>
        <Route exact path="/specialization/:uid" element={<Specialization/>}/>
        <Route exact path="/main" element={<Main/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
