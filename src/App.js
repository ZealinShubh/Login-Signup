import './App.css';
import Forgotpass from './components/LoginSignup/Forgotpass';
import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { Button } from 'primereact/button';
// import 'primeicons/primeicons.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/forgotpassword' element={<Forgotpass/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
