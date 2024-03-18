import React from "react";
import { Header } from "./Header/header";
import { CalendarGrid } from "./CalendarGrid/calendar-grid";
import moment from "moment";

function Scheduler() {
    const startDay = moment().startOf('month').startOf('week');

  return (
    <div>
      <Header /> 
      <CalendarGrid startDay={startDay}/>
    </div>
  );
}

export default Scheduler;
