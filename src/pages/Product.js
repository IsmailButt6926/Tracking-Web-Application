
import React from 'react'
import "./Product.css"
import random1 from "../components/assets/1.jpg"
import random3 from "../components/assets/3.jpg"
import random4 from "../components/assets/4.jpg"


const Product = () => {
  return (
    <>
      <div className="main_order">

        <div>
          <h1><strong>Flesh Sale</strong></h1>
        </div>



        <div className="card" style={{ width: "18rem" }}>
          <img src={random1} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title"><strong>Mobile</strong></h5>
            <p className="card-text"> 16MP+32MP Android 11 Smartphone 5G With Face ID Unlock.</p>
            <a href="/" className="btn btn-primary">Contact Supplier</a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={random3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>T-shirts</strong></h5>
            <p className="card-text">2022 Custom high quality street wear custom graphic tshirt printed T-shirt for men</p>
            <a href="/" className="btn btn-primary">Contact Supplier</a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={random4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>T-shirts</strong></h5>
            <p className="card-text">2022 Custom high quality street wear custom graphic tshirt printed T-shirt for men</p>
            <a href="/" className="btn btn-primary">Contact Supplier</a>
          </div>

        </div>

      </div>
    </>
  )
}

export default Product