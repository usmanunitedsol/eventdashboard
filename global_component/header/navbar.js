import React from 'react'
import Logo from './logo'
import Search from './search'

const Navbar = () => {
  return (
    <div className='white_bg'>
    <div className='main_container'>
      <div className='navbar_block'>
            <Logo/>
            <Search/>
       </div>     
    </div>
    </div>
  )
}

export default Navbar
