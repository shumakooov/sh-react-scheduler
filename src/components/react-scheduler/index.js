import React, { useState } from "react";
import { Header } from "./Header/header";
import moment from "moment";
import styles from './index.module.css'
import { views } from '../../utils/constants'
import { Day } from "./Day/day";
import { Month } from "./Month/month";
import { Week } from "./Week/week";

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

  const openModalHandler = (methodName, eventForUpdate, dayItem) => {
    setShowModal(true);
    openFormHandler(methodName, eventForUpdate, dayItem);
  }

  const openFormHandler = (methodName, eventForUpdate, dayItem) => {
    setMethod(methodName);
    setEvent(eventForUpdate || { ...defaultEvent, start: dayItem.startOf('hour').clone(), end: dayItem.startOf('hour').clone().add(1, 'hour') });
  }

  const cancelButtonHandler = () => {
    setShowModal(false);
    setEvent(null);
  }

  const removeButtonHandler = (eventToRemove) => {
    setShowModal(false);
    setEvent(null);
  }

  const changeEventHandler = (text, field) => {
    setEvent(prevState => ({
      ...prevState,
      [field]: text
    }))
  }

  const eventAction = (eventToUpdate) => {
    if (method === 'Create') {
      events.push(event);
      setShowModal(false);
      setEvent(null);
    }

    if (method === 'Update') {
      events.find(eventGlobal => eventGlobal.id === eventToUpdate.id).title = event.title;
      events.find(eventGlobal => eventGlobal.id === eventToUpdate.id).start = event.start;
      events.find(eventGlobal => eventGlobal.id === eventToUpdate.id).end = event.end;
      setShowModal(false);
      setEvent(null);
    }
  }

  const updateEventByDragAndDrop = (eventToUpdate, newTimeStart) => {
    let oldEndTime = moment(eventToUpdate.end);
    let oldStartTime = moment(eventToUpdate.start);
    let duration = moment.duration(oldEndTime.diff(oldStartTime));
    let newStart = oldStartTime.hours(newTimeStart).minutes(0);
    let newEnd = newStart.clone().add(duration);

    let globalEventForUpdate = events.find(eventGlobal => eventGlobal.id === eventToUpdate.id);

    globalEventForUpdate.start = newStart;
    globalEventForUpdate.end = newEnd;
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
                      placeholder="Title"
                    />
                    <div className={styles.modalButtonsWrapper}>
                      <button onClick={() => cancelButtonHandler()}>Cancel</button>
                      <button onClick={() => eventAction(event)}>{method}</button>
                      <button onClick={() => removeButtonHandler(event)}>Remove</button>
                    </div>
                  </div>
                </div>
              ) : null
            }
            <div className={styles.monthWrapper}>
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
            <Week
              startingPointTime={startingPointTime}
              events={events}
              // selectedEvent={event}
              // method={method}
              // cancelButtonHandler={cancelButtonHandler}
              // eventAction={eventAction}
              // removeButtonHandler={removeButtonHandler}
              // changeEventHandler={changeEventHandler}
              openFormHandler={openFormHandler}
              updateEventByDragAndDrop={updateEventByDragAndDrop}
              view={view}
            />
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
              method={method}
              cancelButtonHandler={cancelButtonHandler}
              eventAction={eventAction}
              removeButtonHandler={removeButtonHandler}
              changeEventHandler={changeEventHandler}
              openFormHandler={openFormHandler}
              updateEventByDragAndDrop={updateEventByDragAndDrop}
            />
          </div>
        ) : null
      }
    </div>
  );
}

export default Scheduler;
