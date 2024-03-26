import React, { useState } from "react";
import { Header } from "./Header/header";
import moment from "moment";
import styles from './index.module.css'
import { views } from '../../utils/constants'
import { Day } from "./Day/day";
import { CalendarGridHeader } from "./CalendarGridHeader/calendar-grid-header";
import { Month } from "./Month/month";

const defaultEvent = {
  title: '',
  start: moment(),
  end: moment().add(1, 'hour'),
}

function Scheduler({ events }) {
  const [view, setView] = useState(views.MONTH);
  const [event, setEvent] = useState(null);
  const [startingPointTime, setStartingPointTime] = useState(moment());
  const [isShowModal, setShowModal] = useState(false);
  const [method, setMethod] = useState(null);

  const startDay = startingPointTime.clone().startOf('month').startOf('week');

  const openModalHandler = (methodName, eventForUpdate) => {
    setMethod(methodName);
    console.log('click', methodName);
    setEvent(eventForUpdate || defaultEvent);
    setShowModal(true);
  }

  const cancelButtonHandler = () => {
    setShowModal(false);
    setEvent(null);
  }

  const changeEventHandler = (text, field) => {
    setEvent(prevState => ({
      ...prevState,
      [field]: text
    }))
  }

  const eventAction = (eventAction) => {
    if (method === 'Create') {
      events.push(event);
    }

    if (method === 'Update') {

    }
  }

  const prevHandler = () => {
    setStartingPointTime(prev => prev.clone().subtract(1, view));
  }

  const todayHandler = () => {
    setStartingPointTime(moment());
  }

  const nextHandler = () => {
    setStartingPointTime(prev => prev.clone().add(1, view));
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
          <>
            {
              isShowModal ? (
                <div className={styles.modalPositionWrapper} onClick={() => cancelButtonHandler()}>
                  <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
                    <input
                      className={styles.modalInputTitle}
                      value={event.title}
                      onChange={(e) => { changeEventHandler(e.target.value, 'title') }}
                    />
                    <div className={styles.modalButtonsWrapper}>
                      <button
                        onClick={() => cancelButtonHandler()}
                      >
                        Cancel
                      </button>
                      <button onClick={() => eventAction(method)}>{method}</button>
                    </div>
                  </div>
                </div>
              ) : null
            }
            <div className={styles.monthWrapper}>
              <CalendarGridHeader />
              <Month
                startDay={startDay}
                events={events}
                startingPointTime={startingPointTime}
                setStartingPointTime={setStartingPointTime}
                setView={setView}
                openModalHandler={openModalHandler}
              />
            </div>
          </>
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
