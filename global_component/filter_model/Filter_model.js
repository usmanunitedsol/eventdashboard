import React, { useEffect, useRef, useState } from 'react'

export default function Filter_model({ open, onClose,setData,filterdata }) {
  const [startdate, setstartDate] = useState('')
  const [enddate, setenddate] = useState('')

  const startRef = useRef(null)
  const endRef = useRef(null)
    const overlayBg = {
        backgroundColor: 'rgba(144, 144, 144, 0.1)',
    };
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };

    const handleClose = () => {
        onClose()

    };

        const handleDateChange = (e) =>{
      setstartDate(startRef.current.value)
    }

    const handleendDateChange = (e) =>{
  
      setenddate(endRef.current.value)
    }

  

    useEffect(() => {
      if(selectedCategory){
        const filteredResults = filterdata.filter(option => 
          option.category === selectedCategory
        );
        setData(filteredResults)
      }

      if(startdate){
        const filteredResults = filterdata.filter(option => 
          new Date(option.updated.substring(0,10)) >= new Date(startdate)
        );
      setData(filteredResults)
      }

      if(enddate){
        const filteredResults = filterdata.filter(option => 
          new Date(option.updated.substring(0,10)) <= new Date(enddate)
        );
      setData(filteredResults)
      }
    
    }, [selectedCategory, startdate, enddate])
    
  return (
    <>
    {open && (<div open={open} className='dialog_main small_dialog'>
        <div className='dialog_size filter_dilog' >
            <div className='top_cnt'>
                <button onClick={handleClose} className='dialog_btn'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 50 50">
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                </svg></button>
            </div>
            <div className='dialog_block '>
                    <div className='dialog_cnt'>
                    <label for="category">Category</label>
                    <select id="category" className='field_item' name="category" value={selectedCategory} onChange={handleChange}>
                      {Array.from(new Set(filterdata.map(option => option.category))).map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                             </select>
                     
                     <h3 className='sub_title'>Date & Time</h3>
                    <div className='date_time'>
                          <div className='from_date'>
                            <label for="fromdate">From</label>
                            <input className='field_item' type="date"  id='fromdate' onChange={handleDateChange} ref={startRef}/>
                          </div>
                          <div className='to_date'>
                           <label for="todate">To</label>
                  
                            <input className='field_item' type="date"  id='todate' onChange={handleendDateChange} ref={endRef}/>
                          </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>)
    }
</>
  )
}
