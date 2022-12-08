import React from 'react'
import logo from './img/nandos-logo.svg'
import './Topmenu.css'
const Topmenu = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white navitem">
  <div className="container-fluid">
    <img src={logo} alt="logo" className='logo'width='200px'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center " id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 itemlist ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Order</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Recipes Everyday</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Eat
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Explore
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Work
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Topmenu;