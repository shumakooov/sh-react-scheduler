import React, { useState } from "react";
import { Header } from "./Header/header";
import { CalendarGrid } from "./CalendarGrid/calendar-grid";
import moment from "moment";
import styles from './index.module.css'

function Scheduler() {
  const [startingPointTime, setStartingPointTime] = useState(moment())
  const startDay = startingPointTime.clone().startOf('month').startOf('week');

  const prevHandler = () => {
    setStartingPointTime(prev => prev.clone().subtract(1, 'month'))
  }

  const todayHandler = () => {
    setStartingPointTime(moment())
  }

  const nextHandler = () => {
    setStartingPointTime(prev => prev.clone().add(1, 'month'))
  }

  return (
    <div className={styles.wrapper}>
      <Header
        startingPointTime={startingPointTime}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalendarGrid
        startDay={startDay}
        startingPointTime={startingPointTime}
      />
    </div>
  );
}

export default Scheduler;
