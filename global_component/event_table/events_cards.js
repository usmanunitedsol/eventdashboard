"use client"
import React, { useEffect, useState } from 'react'
import { geteventData } from '../../helper/getevents';
import NumberEventPlaceholder from '../../placeholder/number_events';

const Events_cards = () => {
  const [data, setData] = useState(null)
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await geteventData();
        console.log("REsponse ", eventData)
        setData(eventData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const getmonthevent = (events) => {
   
    
    // Get the current month and year
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const currentYear = currentDate.getFullYear();
  
    // Filter events that are in the current month and year

    const currentMonthEvents = events.results.filter(event => {
     
      const eventDate = new Date(event.updated); // Assuming event date is stored in 'date' property
    
      const eventMonth = eventDate.getMonth() + 1;
      const eventYear = eventDate.getFullYear();
   
      return eventMonth === currentMonth && eventYear === currentYear;
      
    });


  
    // Return the total number of events in the current month
    return currentMonthEvents.length;
  };
  
    

  return (
   <> { data ?
    <div className='event_cards'>
       <div className='cards'>
         <h3 className='card_title'>All events</h3>
         <p className='crd_events'>{data && data.results.length}</p>
       </div>
       <div className='cards'>
         <h3 className='card_title'>This Month Events</h3>
         <p className='crd_events'>{getmonthevent(data)}</p>
       </div>
       <div className='cards'>
         <h3 className='card_title'>Favorite Events</h3>
         <p className='crd_events'>25</p>
       </div>
    </div> : <NumberEventPlaceholder/>
    }
    </>
  )
}

export default Events_cards
