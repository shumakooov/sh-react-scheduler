import React, { useState } from "react";
import { Header } from "./Header/header";
import moment from "moment";
import styles from './index.module.css'
import { views } from '../../utils/constants'
import { Day } from "./Day/day";
import { CalendarGridHeader } from "./CalendarGridHeader/calendar-grid-header";
import { Month } from "./Month/month";

function Scheduler({ events }) {
  const [view, setView] = useState(views.MONTH);
  const [event, setEvent] = useState(null);
  const [startingPointTime, setStartingPointTime] = useState(moment())

  const startDay = startingPointTime.clone().startOf('month').startOf('week');

  const prevHandler = () => {
    setStartingPointTime(prev => prev.clone().subtract(1, view))
  }

  const todayHandler = () => {
    setStartingPointTime(moment())
  }

  const nextHandler = () => {
    setStartingPointTime(prev => prev.clone().add(1, view))
  }

  return (
    <div className={styles.wrapper}>
      <Header
        startingPointTime={startingPointTime}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
        setView={setView}
        view={view}
      />
      {
        view === views.MONTH ? (
          <div className={styles.monthWrapper}>
            <CalendarGridHeader />
            <Month
              startDay={startDay}
              events={events}
              startingPointTime={startingPointTime}
              setView={setView}
            />
          </div>
        ) : null
      }
      {
        view === views.WEEK ? (
          <div>
            <div>LIST</div>
            <div>FORM</div>
          </div>
        ) : null
      }
      {
        view === views.DAY ? (
          <div>
            <Day
              startingPointTime={startingPointTime}
              events={events}
              selectedEvent={event}
              setEvent={setEvent}
            />
          </div>
        ) : null
      }
    </div>
  );
}

export default Scheduler;
