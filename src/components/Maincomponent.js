import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import Home from "../pages/Home"
import BarChart from "../pages/BarChart"
import Order from '../pages/Order';
import Products from "../pages/Product"
import Frs from "../pages/Frs"
import Management from "../pages/Management"

const Maincomponent = () => {
  return (
    <div>
           <div className="row">
            <div className="col-lg-2">
              <Sidebar />
            </div>
            <div className="col-lg-10">

          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/barchart" element={<BarChart />}></Route>

            <Route path="/orders" element={<Order />}> </Route>
            

            <Route path="/products" element={<Products />}> </Route>
            
            <Route path="/management" element={<Management />}> </Route>


            <Route path="/frs" element={<Frs />}> </Route>

          </Routes>

            </div>
          </div>
    </div>
  )
}

export default Maincomponent