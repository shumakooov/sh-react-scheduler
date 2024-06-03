import React, { useState } from "react";
import { Header } from "./Header/header";
import moment from "moment";
import styles from './index.module.css'
import { views } from '../../utils/constants'
import { Day } from "./Day/day";
import { Month } from "./Month/month";
import { Week } from "./Week/week";

function getRandomIdInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const defaultEvent = {
  title: '',
  start: moment(),
  end: moment().add(1, 'hour'),
}

const defaultEvents = [];

function Scheduler({ events, cellsHeight, resources, onEventClick, onResourceClick, onEventDrag, onRangeChange, onViewChange, onTodayClick, onEventUpdate, onEventCreate, onEventDelete }) {

  let HEIGHT_DAY_CELL = 30;

  if (events === undefined) {
    events = defaultEvents;
  }

  if (cellsHeight !== undefined) {
    HEIGHT_DAY_CELL = cellsHeight;
  }

  const [view, setView] = useState(resources ? views.DAY : views.MONTH);
  const [event, setEvent] = useState(null);
  const [startingPointTime, setStartingPointTime] = useState(moment());
  const [isShowModal, setShowModal] = useState(false);
  const [method, setMethod] = useState(null);
  const [droppedHour, setDroppedHour] = useState(null);

  const startDay = startingPointTime.clone().startOf('month').startOf('week');

  const openModalHandler = (methodName, eventForUpdate, dayItem) => {
    setShowModal(true);
    setMethod(methodName)
    setEvent(eventForUpdate || { ...defaultEvent, id: getRandomIdInRange(0, 10000), start: dayItem.startOf('hour').clone(), end: dayItem.startOf('hour').clone().add(1, 'hour') });
  }

  const openFormHandler = (methodName, eventForUpdate, dayItem, clickedHour = dayItem.hours(), resource) => {
    setMethod(methodName);
    setEvent(eventForUpdate || { ...defaultEvent, id: getRandomIdInRange(0, 10000), start: dayItem.clone().hours(clickedHour), end: dayItem.clone().hours(clickedHour).add(1, 'hour'), resourceId: resource?.id });
  }

  const cancelButtonHandler = () => {
    setShowModal(false);
    setEvent(null);
  }

  const removeButtonHandler = (eventToRemove) => {
    onEventDelete && onEventDelete(eventToRemove);
    delete eventToRemove.rank;

    const index = events.indexOf(eventToRemove);
    console.log(index);
    if (index > -1) {
      events.splice(index, 1);
    }

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
      onEventCreate && onEventCreate(event);
      setShowModal(false);
      setEvent(null);
    }

    if (method === 'Update') {
      events.find(eventGlobal => eventGlobal.id === eventToUpdate.id).title = event.title;
      events.find(eventGlobal => eventGlobal.id === eventToUpdate.id).start = event.start;
      events.find(eventGlobal => eventGlobal.id === eventToUpdate.id).end = event.end;
      events.find(eventGlobal => eventGlobal.id === eventToUpdate.id).resourceId = event.resourceId;
      onEventUpdate && onEventUpdate(event)
      setShowModal(false);
      setEvent(null);
    }
  }

  const updateEventByDragAndDrop = (eventToUpdate) => {
    let oldEndTime = moment(eventToUpdate.end);
    let oldStartTime = moment(eventToUpdate.start);
    let duration = moment.duration(oldEndTime.diff(oldStartTime));
    let newStart = oldStartTime.hours(droppedHour).minutes(0);
    let newEnd = newStart.clone().add(duration);

    let globalEventForUpdate = events.find(eventGlobal => eventGlobal.id === eventToUpdate.id);

    globalEventForUpdate.start = newStart;
    globalEventForUpdate.end = newEnd;

    onEventDrag && onEventDrag(eventToUpdate)
    setDroppedHour(null);
  }

  const prevHandler = () => {
    setStartingPointTime(prev => prev.clone().subtract(1, view));
    if (onRangeChange) {
      view == 'week' ? onRangeChange(startingPointTime.clone().subtract(1, view).startOf('isoWeek').format(), startingPointTime.clone().subtract(1, view).endOf('isoWeek').format())
        : onRangeChange(startingPointTime.clone().subtract(1, view).startOf(view).format(), startingPointTime.clone().subtract(1, view).endOf(view).format())
    }
  }

  const todayHandler = () => {
    view === views.WEEK ? setStartingPointTime(moment().subtract(1, 'day')) : setStartingPointTime(moment());
    onTodayClick && onTodayClick(moment().format());
  }

  const nextHandler = () => {
    setStartingPointTime(prev => prev.clone().add(1, view));
    if (onRangeChange) {
      view == 'week' ? onRangeChange(startingPointTime.clone().add(1, view).startOf('isoWeek').format(), startingPointTime.clone().add(1, view).endOf('isoWeek').format())
        : onRangeChange(startingPointTime.clone().add(1, view).startOf(view).format(), startingPointTime.clone().add(1, view).endOf(view).format())
    }
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
        resources={resources}
        onViewChange={onViewChange}
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
                      <button onClick={() => cancelButtonHandler()} className={styles.button}>Cancel</button>
                      <button onClick={() => eventAction(event)} className={styles.button}>{method}</button>
                      <button onClick={() => removeButtonHandler(event)} className={`${styles.button} ${styles.removeButton}`}>Remove</button>
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
                onEventClick={onEventClick}
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
              setStartingPointTime={setStartingPointTime}
              events={events}
              selectedEvent={event}
              method={method}
              cancelButtonHandler={cancelButtonHandler}
              eventAction={eventAction}
              removeButtonHandler={removeButtonHandler}
              changeEventHandler={changeEventHandler}
              openFormHandler={openFormHandler}
              updateEventByDragAndDrop={updateEventByDragAndDrop}
              view={view}
              setDroppedHour={setDroppedHour}
              HEIGHT_DAY_CELL={HEIGHT_DAY_CELL}
              setView={setView}
              onEventClick={onEventClick}
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
              setDroppedHour={setDroppedHour}
              HEIGHT_DAY_CELL={HEIGHT_DAY_CELL}
              resources={resources}
              onEventClick={onEventClick}
              onResourceClick={onResourceClick}
            />
          </div>
        ) : null
      }
    </div>
  );
}

export default Scheduler;
