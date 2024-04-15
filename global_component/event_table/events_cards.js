import React from 'react'

const Events_cards = () => {
  return (
    <div className='event_cards'>
       <div className='cards'>
         <h3 className='card_title'>All events</h3>
         <p className='crd_events'>2.10k</p>
       </div>
       <div className='cards'>
         <h3 className='card_title'>This Month Events</h3>
         <p className='crd_events'>2.10k</p>
       </div>
       <div className='cards'>
         <h3 className='card_title'>Favorite Events</h3>
         <p className='crd_events'>25</p>
       </div>
    </div>
  )
}

export default Events_cards
