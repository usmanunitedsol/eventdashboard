'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link"

const Side_icon = () => {
    const [sideBar, setSideBar] = useState(false)

  const openMobileMenu = () => {
      setSideBar(true);

  }
  const closeMobileMenu = () => {
      setSideBar(false);
  }

   // for appending the pushbar overlay
   useEffect(() => {
    const sidebarOverlay = document.createElement('div');
    sidebarOverlay.className = `pushbar_overlay`;
    document.body.appendChild(sidebarOverlay);
    const closeSideBar = () => {
        setSideBar(false);
    }
    sidebarOverlay.addEventListener('click', closeSideBar)
    if (sideBar === true) {
        sidebarOverlay.classList.add('opened');
    }
    return () => {
        sidebarOverlay.removeEventListener('click', closeSideBar);
        document.body.removeChild(sidebarOverlay);
    };
}, [sideBar])

  return (
    <div className='side_icon'>
                
                 <Link href=""  aria-label='Open Menu' className=' hamburger openMenu' data-pushbar-target="right" onClick={openMobileMenu}>
                        <img src="assets/images/menu2.png" alt="" />
                 </Link>
                 <aside  data-pushbar-id="right" data-pushbar-direction="right" className={sideBar ? "opened" : ''}>
                     <div className='mobile_nav'>
                     <Link  href="/" className='logo'>   <img src="assets/images/logo.png" alt="" /></Link>
                     <Link href="" className='close_btn'  onClick={closeMobileMenu}>
                        <img src="assets/images/close.png" alt="" />
                     </Link>

                        <ul className='list'>
                            <li> <Link href="/" className='item_mbd'> Dashboard </Link> </li>
                            <li> <Link href="/favourite" className='item_mbd' > Favorite Events </Link> </li>
                        </ul>
                     </div>
                 </aside>
    </div>
  )
}

export default Side_icon
