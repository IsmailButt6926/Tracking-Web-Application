import React, { useState }  from 'react'
import "./SidebarItem.css"
const SidebarItem = () => {
  const [open, setOpen] = useState(false)

  
  return (
    <>
    <div className={open ? "sidebar-item open" : "sidebar-item"}>

      
      <div className="sidebar-title">

      <i className="bi bi-gear-fill"></i>
        <span>General</span>
        <i className="bi bi-chevron-compact-down toggle-btn" onClick={() => setOpen(!open)}></i>
        
      </div>

      <div className="sidebar-content">
        <li className="list_style">Overview</li>
        <li className="list_style">FRS Lookup</li>
        <li className="list_style">FRS Management</li>
        <li className="list_style">Live Feed</li>
      </div>
    </div>
    <div>ismail</div>
    </>
  )
}

export default SidebarItem