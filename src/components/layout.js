
import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
 return(
 <div>

   <div class="navbar">
   
   <Link to="/">Home</Link>

  <div class="dropdown">
    <button class="dropbtn">Company</button>
    <div class="dropdown-content">
    <Link to="/About">About Us</Link>
    <Link to="/Focussed_industries">Focussed industries</Link>
    <Link to="/vision_mission">Vission & Mission</Link>
    <Link to="/core_values">Core values</Link>
    <Link to="/contact">Contact Us</Link>
    </div>
  </div>


  <div class="dropdown">
    <button class="dropbtn">Services</button>
    <div class="dropdown-content">
      <div class="row">
        <div class="column">
          <h3>Oracle</h3>
      
          <Link to="/marketing">Marketing</Link>
          <Link to="/commerce">Commerce</Link>
          <Link to="/service">Service</Link>
          <Link to="/sales">Sales</Link>

        </div>
        <div class="column">
          <h3>Microsoft</h3>
          <Link to="/dynamic">Dynamic 365</Link>
          
        </div>
        <div class="column">
          <h3>Others</h3>
          <Link to="/others">AI/ML</Link>
    
        
        </div>
      </div>
    
  </div>

</div>
</div>
       {children}
       
 </div>
 )
}



export default Layout
