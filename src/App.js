import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUser from './users/AddUser';
function App() {
  
  return (

    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/addUser' element={<AddUser/>}></Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
