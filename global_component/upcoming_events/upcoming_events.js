"use client"
import React from 'react'
import Event_month_cards from './event_month_cards'
import Upcoming_block from './upcoming_block'

const Upcoming_events = () => {
  return (
    <div>
             <Upcoming_block/>
            <Event_month_cards/>  
    </div>
  )
}

export default Upcoming_events
