import React, { useState } from 'react'
import { getdate } from '../../helper/getdate';
import { gettime } from '../../helper/gettime';

export default function Modal({ open, onClose,data }) {

    const overlayBg = {
        backgroundColor: 'rgba(144, 144, 144, 0.1)',
    };

    const handleClose = () => {
        onClose()
    };


    console.log(data)

  return (
    <>
    {open && (<div open={open} className='dialog_main medium_dialog'>
        <div style={overlayBg} className=' overly_bg' onClick={handleClose}></div>
        <div className='dialog_size' >
            <div className='top_cnt'>
                <h2 className='primary_title'>{data.title}</h2>
                <span>{ getdate(data.updated)}, { gettime(data.updated)}</span>
           
                <button onClick={handleClose} className='dialog_btn'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 50 50">
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                </svg></button></div>
            <div className='dialog_block '>
                    <div className='dialog_cnt'>
                    <span>Category: {data.category}</span>
                    <h3>Description</h3>
                    <p>{data.description}</p>
                    </div>
                    <div className='dialog_footer'>
                        <h3><span><img src="assets/images/location.png" alt="" /></span> {data.country}</h3>
                    </div>
            </div>
        </div>
    </div>)
    }
</>
  )
}
