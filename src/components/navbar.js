import React from 'react';
import './navbar.css';

import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    return (
      <>
        <header className='main_container'>
          <div className='main_container_div'>
            <a>
              <img
                onClick={() => navigate("/")}
                style={{ height: "60px" }}
                src={require("../logo.png")}
                alt="logo"
              />
              {/* <span class="ml-3 text-xl">MyWorld</span> */}
            </a>
            <nav className='nav_main'>
              <a className='nav_main_components'
                onClick={() => navigate("/")}>
                Home
              </a>
              <a className='nav_main_components'
                onClick={() => navigate("/about")}
                
              >
                About
              </a>
              <a className='nav_main_components'
                onClick={() => navigate("/contact")}
                
              >
                Contact
              </a>
              <a className='nav_main_components'
                onClick={() => navigate("/registration")}
              >
                Registration
              </a>
              <a className='nav_main_components'
                onClick={() => navigate("/users")}
              >
                Manage Users
              </a>
            </nav>
              <button  onClick={() => navigate("/users/add")}>Add</button>
            
            <button 
              onClick={() => navigate("/login")}
              
            >
              {" "}
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
             
            >
              Signup
            </button>
          </div>
        </header>
      </>
    );
  
}

export default Navbar;