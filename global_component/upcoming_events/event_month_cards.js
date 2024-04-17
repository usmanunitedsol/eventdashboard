"use client"
import React, { useEffect, useState } from 'react'
import { geteventData } from '../../helper/getevents';

import EventMonthPlaceholder from '../../placeholder/month_event';
import { getdate } from '../../helper/getdate';
import { gettime } from '../../helper/gettime';


const getmonthevent = (events) => {
  if (!events || events.length === 0) {
    return null;
  }
  
  let highestRankEvent = events[0]; // Initialize with the first event
  events.forEach(event => {
    if (event.rank > highestRankEvent.rank) {
      highestRankEvent = event;
    }
  });

  return highestRankEvent;
};

const Event_month_cards = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await geteventData();
        console.log("REsponse 2 ", eventData)
        setData(eventData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div>
 {data ?  <>
   <div className='event_month_card'>
        <div className='event_month_cnt'>
           <h2 className='month_title'>Event of the month</h2>
           <img src="assets/images/month.png" alt="" />
        </div>
        <div className='month_inner_card'>
            <div className='inner_card_cnt'>
              <a className='event_name' href='#!'>{data && getmonthevent(data.results).title}</a>
              <p>Category: {data && getmonthevent(data.results).category}</p>
               <p className='location'><span><img src="assets/images/carbon_locationfilled.png" alt="" /></span> {data && getmonthevent(data.results).country}</p>
            </div>
            <div className='time_table'>
                 <img src="assets/images/member.png" alt="" />
                 <p>{data && getdate( getmonthevent(data.results).updated)}</p>
                 <p>{data && gettime( getmonthevent(data.results).updated)}</p>
            </div>
        </div>
    </div>
    </> : <EventMonthPlaceholder/>}
    </div>
  )
}

export default Event_month_cards
