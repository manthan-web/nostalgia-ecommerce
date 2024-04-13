import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import { GlobalContextProvider } from './context/GlobalContext.jsx';
import Products from './pages/Products.jsx';
import Info from './pages/Info.jsx';
import Error from './pages/Error.jsx';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path='/products/:id' element={<Info />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  )

    

  
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
   
  </React.StrictMode>,
)
