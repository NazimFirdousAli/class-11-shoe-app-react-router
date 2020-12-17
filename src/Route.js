import React from 'react';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Product from './Components/Product.js';
import ProductItem from './Components/ProductItem.js';
import Navbar from './Components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function NotFound(){
    return(
        <div>
            <h1>Page Not Found</h1>
        </div>
    )
}

function RouteConfig() {
    return (
        <div className="App">
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<ProductItem />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>

    )
}
export default RouteConfig;