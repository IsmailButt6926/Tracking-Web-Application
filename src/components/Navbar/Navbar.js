import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const Navbar = () => {
  return (
    <>


    <div className='nav_bar'>
 <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:"55px"}}>
  
  <div className="nav_items collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
  <div className='space_item' ><SearchIcon/></div>

    <div className='space_item' ><PriorityHighIcon/></div>
    <div  className='space_item' ><NotificationsIcon/></div>


    <div  className='space_item' >

    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
</svg>
    </div>


    
    
  </div>
</nav>

           
      
    </div>
    </>
  )
}

export default Navbar