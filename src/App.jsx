import './App.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";

import Layout from './components/common/Layout';
import Home from './pages/users/Home'
import Foodopen from './pages/users/FoodOpen'
import Foods from './pages/users/Foods'
import Orders from './pages/users/Orders'
import Checkout from './pages/users/Checkout';
import Login from './pages/users/Login';
import Signup from './pages/users/Signup';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/foods' element={<Foods />} />
          <Route path='/view-food' element={<Foodopen />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App