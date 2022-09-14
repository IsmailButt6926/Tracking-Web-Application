import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Sidebar.css"


const Sidebar = () => {
  
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen); 
    return (
        <>
    
            <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white  justify-content-between text-start " style={{ height: "100vh", width: isOpen ? "200px" : "81px",overflow:"hidden" }}>






                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                    {/* <span className="fs-4">Content</span> */}
                    {/* {isOpen && <span className="fs-4">Content</span>} */}
                    <svg style={{marginTop:"56px"}} xmlns="http://www.w3.org/2000/svg"  onClick={toggle}  width="36" height="36" fill="currentColor" className="list_bar bi bi-list "viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </Link>

                <ul className="nav nav-pills flex-column mb-auto">

                    {/* Home  */}
                    <li className="nav-item ">
                        <Link to="/" className="fix_side nav-link text-white">
                            {/* <svg className={"bi me-2"} width={"1"} height={"16"}> </svg> */}
                            <svg style={{marginTop:"25px"}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="lines_icon bi bi-house-fill " viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg>
                            <span style={{marginTop:"32px", marginLeft:"14px"}}>Home</span>

                        </Link>
                    </li>

                    {/* Dashboard */}
                    <li>
                        <Link to="/barchart" className="fix_side  nav-link text-white">
                            {/* <svg className={"bi me-2"} width={"1"} height={"16"}></svg> */}
                            <svg style={{marginTop:"25px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lines_icon bi bi-speedometer" viewBox="0 0 16 16">
                                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z" />
                            </svg>
                            <span style={{marginTop:"32px", marginLeft:"14px"}}>Dashboard</span>

                        </Link>
                    </li>


                    {/* Orders  */}
                    <li>
                        <Link to="/orders" className="fix_side  nav-link text-white">
                            {/* <svg className={"bi me-2"} width={"1"} height={"16"}></svg> */}
                            <svg style={{marginTop:"25px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lines_icon bi bi-clipboard-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z" />
                            </svg>
                            <span style={{marginTop:"32px", marginLeft:"14px"}}>Orders</span>
                        </Link>
                    </li>

                    {/* Products  */}
                    <li>
                        <Link to="/products" className="fix_side  nav-link text-white">
                            {/* <svg className={"bi me-2"} width={"1"} height={"16"}></svg> */}
                            <svg style={{marginTop:"25px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lines_icon bi bi-grid" viewBox="0 0 16 16">
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                            </svg>
                            <span style={{marginTop:"32px", marginLeft:"14px"}}>Products</span>

                        </Link>
                    </li>


                    {/* Customers  */}
                    <li>
                        <Link to="/management" className="fix_side  nav-link text-white">
                            {/* <svg className={"bi me-2"} width={"1"} height={"16"}></svg> */}
                            <svg style={{marginTop:"25px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lines_icon bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                            <span style={{marginTop:"32px", marginLeft:"14px"}}>Management</span>

                        </Link>
                    </li>


                    <li>
                        <Link to="/frs" className="fix_side  nav-link text-white">
                            {/* <svg className={"bi me-2"} width={"1"} height={"16"}></svg> */}
                            <svg style={{marginTop:"25px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lines_icon bi bi-graph-up" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                            </svg>
                            <span style={{marginTop:"32px", marginLeft:"14px"}}>FRS</span>

                        </Link>
                    </li>
                </ul>

               
            </div>


        </>

    )
}


export default Sidebar
