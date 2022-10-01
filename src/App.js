import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Cards from './Component/Cards';
import Home from './Component/Home';
import React,{useState} from 'react';
function App() {
  const [Cart,setCart]=useState('');
  return (
    <div className='Home'>
      <Navbar cartItem={Cart}/>
      <Home/>
      <Cards cartItem={Cart} setFunction={setCart}/>
      <Footer/> 
    </div>

      );
}

export default App;
