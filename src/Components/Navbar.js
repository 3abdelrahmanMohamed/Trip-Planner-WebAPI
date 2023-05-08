import React from 'react'

function navbar() {
  return (
    <div className='navbarCont'>
        <nav className='navbar'>
            <h1> Trip Planner </h1>
            <div className='Links'>
                <a href='/'> Home </a>
                <a href='/about'> About Us </a>
                <a href='/Countries'> Countries </a>
                <a href='/Currency'> Currency</a>
            </div>
        </nav>
      
    </div>
  )
}

export default navbar
