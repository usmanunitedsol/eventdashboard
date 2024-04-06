import Image from "next/image";
import Link from 'next/link'
import Eventblock from "../../global_component/event_table/eventblock";
import Upcoming_events from "../../global_component/upcoming_events/upcoming_events";

export default function Dashboard() {
  return (
    <>
    <div className="dashboard_outer">
      <Eventblock/>
      <div className="main_container">
        <Upcoming_events/>
      </div>
    </div>
    </>
  );
}
