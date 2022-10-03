import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr/>
           <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/product" element={<Product></Product>}></Route>
               <Route path="/register" element={<Register></Register>}></Route>
               <Route path='/login' element={<Login></Login>}></Route>
           </Routes>
    </div>
  );
}

export default App;
