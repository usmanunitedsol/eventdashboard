'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  
  return (

 
    <div className='sidebar'>
       
         <div className='sidebar_inner'>
            <ul className='sidebar_list'>
                <li>
                    <Link className={`bg_circle ${pathname==="/" ? "active": ""}`} href="/" > 
                      <Image src={`/assets/images/Grid.png`} alt={`events`} width={24} height={24}/>
                    </Link>
                </li>
                <li>
                   <Link className={`bg_circle ${pathname==="/favourite" ? "active": ""}`}  href="/favourite/"> 
                      <Image src={`/assets/images/fav_icon.png`} alt={`favourite`} width={24} height={24}/>
                    </Link>
                </li>
            </ul>
         </div>
     
    </div>

  )
}

export default Sidebar
