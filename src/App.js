import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RequirAuth from './components/RequirAuth/RequirAuth';
import Order from './components/Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr/>
           <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/product" element={<RequirAuth><Product></Product></RequirAuth>}></Route>
               <Route path="/register" element={<Register></Register>}></Route>
               <Route path="/order" element={<RequirAuth><Order></Order></RequirAuth>}></Route>
               <Route path='/login' element={<Login></Login>}></Route>
           </Routes>
    </div>
  );
}

export default App;
