import React from 'react'

const Event_month_cards = () => {
  return (
    <div className='event_month_card'>
        <div className='event_month_cnt'>
           <h2 className='month_title'>Event of the month</h2>
           <img src="assets/images/month.png" alt="" />
        </div>
        <div className='month_inner_card'>
            <div className='inner_card_cnt'>
              <a className='event_name' href='#!'>Web Development</a>
              <p>Category: AI</p>
               <p className='location'><span><img src="assets/images/carbon_locationfilled.png" alt="" /></span> Bahria Intellectual Village</p>
            </div>
            <div className='time_table'>
                 <img src="assets/images/member.png" alt="" />
                 <p>Thu 2 Nov 2023</p>
                 <p>12:00am</p>
            </div>
        </div>
    </div>
  )
}

export default Event_month_cards
