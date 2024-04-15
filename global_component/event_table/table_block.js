import React from 'react'
const Table_block = () => {
  const eventdata =[
    {id:1,serialnum:"1", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:2,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:2,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:2,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:2,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:2,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:2,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
    {id:2,serialnum:"2", Name:"Web Development",Time:"6:00 am", Date:"Thu, 26",Location:"Bahria", favourite:"assets/images/Vector.png"},
  ]
  return (
    <div>
        <div className='table_top_cnt'>
            <h2>Events List</h2>
            <div className='fiter_icon'>
              <img src="assets/images/Menu.png" alt="" />
            </div>
        </div>
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
                                eventdata.map((eventItem) =>
                                    <tr key={eventItem.id} className='body_row' >
                                       <td className='body_data'>{eventItem.serialnum}</td>
                                        <td className='body_data'>{eventItem.Name}</td>
                                        <td className='body_data'>{eventItem.Time}</td>
                                        <td className='body_data'>{eventItem.Date}</td>
                                        <td className='body_data'>{eventItem.Location}</td>
                                        <td className='body_data'><img src={eventItem.favourite} alt="Favorite" /></td>
                                      </tr>
                                )
                            }
                        </tbody>
                    
                    </table>
    </div>
  )
}

export default Table_block
