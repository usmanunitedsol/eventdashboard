"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Modal from '../Modal/Modal';
import Filter_model from '../filter_model/Filter_model';
import { geteventData } from '../../helper/getevents';
import Loading from '@/app/loading';
import { gettime } from '../../helper/gettime';
import { getdate } from '../../helper/getdate';
import EventTablePlaceholder from '../../placeholder/tableEvent';
const Table_block = () => {

// console.log(process.env.access_token || "gXobICgcELX6VaLtJy1MHzMyTDsWyIGEYnITWovr")
const [data, setData] = useState(null)

const [fiterdata,setfiterdata]=useState(data)




  const eventdata =[
    {id:1,serialnum:"1", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:2,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:3,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:4,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:5,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:6,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:7,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:8,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
  ]
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await geteventData();
        console.log("REsponse ", eventData)
        setData(eventData.results);
        setfiterdata(eventData.results)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
    

   // State for Popup Open and Close
   const [open, setOpen] = useState(false);
   const [openfilter, setOpenfilter] = useState(false);
   const [modalData, setModalData] = useState(null)
   const handleClickOpen = (item) => {
    console.log(item)
    setModalData(item)
       setOpen(true);
       var bodyelement= document.body;
       bodyelement.style.overflow="hidden";
       bodyelement.style.paddingRight = "21px";
   };

   const handleClose = () => {
       setOpen(false)
       setOpenfilter(false)
       var bodyelement= document.body;
       bodyelement.style.overflow="auto";
       bodyelement.style.paddingRight = "0px";
   };

   const handleClickOpenfilter = () => {
    setOpenfilter(true)
    var bodyelement= document.body;
    bodyelement.style.overflow="hidden";
    bodyelement.style.paddingRight = "21px";
};

const handleClosefilter = () => {
    setOpenfilter(false)
    var bodyelement= document.body;
    bodyelement.style.overflow="auto";
    bodyelement.style.paddingRight = "0px";
};

 
  return (
    <div>
        {data ?
          <>
       <div className='table_top_cnt'>
           <h2>Events List</h2>
           <div className='fiter_icon'>
            <Link className='filter_block' href="">
             <img src="assets/images/Menu.png" alt=""  onClick={handleClickOpenfilter}/>
               <Filter_model open={openfilter} setData={setData}   filterdata={fiterdata} onClose={handleClosefilter}/>
            </Link> 
           
           </div>
       </div>
       <div className='table_outer'>
         <table  className='event_list_table scrolldown'>
                       <thead className='event_header_group'>
                           <tr className='header_row' >
                               <th className='header_title'>#</th>
                               <th className='header_title'>NAME</th>
                               <th className='header_title'>TIME</th>
                               <th className='header_title'>DATE</th>
                               <th className='header_title'>LOCATION</th>
                               <th className='header_title'></th>
                           </tr>
                       </thead>
             
                       <tbody>
                 
                           {
                           
                           data.map((item) =>
                                   <tr key={item.id} className='body_row' >
                                      <td className='body_data'>{item.rank}</td>
                                       <td className='body_data'  onClick={()=>handleClickOpen(item)}><Link href="" className='shorten-text'>{item.title}</Link></td>
                                       <td className='body_data'>{gettime(item.updated)}</td>
                                       <td className='body_data'>{getdate(item.updated)}</td>
                                       <td className='body_data'>{item.country}</td>
                                        <td className='body_data'><img src="assets/images/Vector.png" alt="Favorite" /></td>
                                     </tr>
                               )
                           }
                       </tbody>
                   
                   </table>
          </div>  </>    
    :      <EventTablePlaceholder/>  }

        <Modal open={open} data={modalData} onClose={handleClose}/>
       
    </div>
  )
}

export default Table_block
