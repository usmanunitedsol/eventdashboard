import React from 'react'
import Sidebar from './sidebar'
import Link from 'next/link'
import Table_block from './table_block'
import Events_cards from './events_cards'
const Eventblock = () => {
  return (
    <div className='main_container'>
        <div className='section_padding'>
            <div className='events_outer'>
                <Sidebar/>
                <div className='event_inner'>
                    <Table_block/>
                    <div className='event_card_outer'>
                       <Events_cards/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eventblock
