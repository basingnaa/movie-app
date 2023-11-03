import React from 'react'
import "./Navbar.css"
import { MdOutlineSearch } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='header'>
      <h2>weMOVIES</h2>

      <div className="searchBar">
        <input type="text" name="search" id="search" />
        <button><MdOutlineSearch /></button>
      </div>
    </div>
  )
}

export default Navbar