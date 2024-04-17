import React from 'react';
import Logo from './logo'
import Search from './search'
import Link from 'next/link'
import Side_icon from './side_icon';
const Navbar = () => {
          
  // const [sideBar, setSideBar] = useState(false)

  // const openMobileMenu = () => {
  //     setSideBar(true);

  // }
  // const closeMobileMenu = () => {
  //     setSideBar(false);
  // }

   // for appending the pushbar overlay
  //  useEffect(() => {
  //     const sidebarOverlay = document.createElement('div');
  //     sidebarOverlay.className = `pushbar_overlay`;
  //     document.body.appendChild(sidebarOverlay);
  //     const closeSideBar = () => {
  //         setSideBar(false);
  //     }
  //     sidebarOverlay.addEventListener('click', closeSideBar)
  //     if (sideBar === true) {
  //         sidebarOverlay.classList.add('opened');
  //     }
  //     return () => {
  //         sidebarOverlay.removeEventListener('click', closeSideBar);
  //         document.body.removeChild(sidebarOverlay);
  //     };
  // }, [sideBar])
  // console.log(sideBar);
  
  return (
    <div className='white_bg'>
    <div className='main_container'>
      <div className='navbar_block'>
            <Logo/>
            <Search/>
           <Side_icon/>
       </div>     
    </div>
    </div>
  )
}

export default Navbar
