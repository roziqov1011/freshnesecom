import './App.css';
import {Routes, Route, Link, useParams } from 'react-router-dom'
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Navbar from './components/Navbar/Navbar';
function App() {
  const product = useParams()
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:product' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
