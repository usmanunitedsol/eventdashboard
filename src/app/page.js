import Eventblock from "../../global_component/event_table/eventblock";
import Upcoming_events from "../../global_component/upcoming_events/upcoming_events";

export default function Dashboard() {
  return (
    <>
     <div className="section_padding">
      <div className="main_container">
        <div className="dashboard_outer">
          <div className="dashboard_table"> <Eventblock/></div> 
           <div className="event_table"><Upcoming_events/></div>    
        </div>
        </div> 
    </div>
    </>
  );
}
