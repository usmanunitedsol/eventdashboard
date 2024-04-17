"use client"
import React, { useEffect, useState } from 'react'
import Event_month_cards from './event_month_cards'
import { geteventData } from '../../helper/getevents'
import { gettime } from '../../helper/gettime'
import { getdate } from '../../helper/getdate'
import EventMonthPlaceholder from '../../placeholder/month_event'
import Upcoming_events from './upcoming_events'
import UpcomingPlaceholder from '../../placeholder/upcomingplaceholder'

const Upcoming_block = () => {

    const [upComingEvent, setUpcomingEvent] = useState(null)

    const  upcomingevent=(events)=>{
        // Get the current month and year
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const currentYear = currentDate.getFullYear();
const currentday = currentDate.getDate();
// console.log("test424",events)



const upComingEvents = events.results.filter(event => {
     
    const eventDate = new Date(event.updated); // Assuming event date is stored in 'date' property
  
    const eventMonth = eventDate.getMonth() + 1;
    const eventYear = eventDate.getFullYear();
    const eventdate = eventDate.getDate();
 
    return (eventMonth >= currentMonth)  && (eventYear >= currentYear) && (eventdate > currentday)
    
  });




// Return the total number of events in the current month
return upComingEvents;
}
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await geteventData();
        // setData(eventData);
        const data = upcomingevent(eventData)
        console.log("data test", data)
        setUpcomingEvent(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    console.log(upComingEvent)
    
  }, []);

  

  return (
  <>
  {upComingEvent ?   <div className='upcoming_block'>
  <h2 className='title'>Upcoming Events</h2>
  <div className='upcoming_inner'>
    {
         upComingEvent.length > 0 ? upComingEvent.map((item) =>
         <div className='upcoming_cards' key={item.id}>
         <div className='cnt_upcoming'>
             <div className='event_title'>
                 <a href='#!'>{item.title}</a>
             </div>
             <div className='date'>
                <p> {gettime(item.updated)} ,{getdate(item.updated)}</p>
                
             </div>
         </div>
         <div className='fav_img'><img src="assets/images/Vector.png" alt="" /></div>
       </div>
        )
        : <p>No Upcoming Event</p>
    }
  </div>
</div>
   :<UpcomingPlaceholder/>
}
</>
  )
}


export default Upcoming_block
