import React, { useState } from "react";
import styles from './day.module.css'
import { isDayContainEvent } from "../../../utils/helpers";
import moment from "moment";

export const Day = ({ events, startingPointTime, selectedEvent, method, cancelButtonHandler, eventAction, removeButtonHandler, changeEventHandler, openFormHandler }) => {
    const [showTimePickerStart, setShowTimePickerStart] = useState(false);
    const [showTimePickerEnd, setShowTimePickerEnd] = useState(false);

    const currentDayEvents = events.filter(event => isDayContainEvent(event, startingPointTime));
    const allDayEvents = currentDayEvents.filter(event => event.allDay === true);
    const countOfHours = 24;

    const cells = [...Array(countOfHours)].map((_, i) => {
        const temp = [];
        currentDayEvents.forEach(event => {
            if (+moment(event.start).format('H') === i && event.allDay !== true) {
                temp.push(event)
            }
        })
        return temp;
    })

    const setTimeStart = (i) => {
        setShowTimePickerStart(false);
        const time = moment(selectedEvent.start).hour(i).format('YYYY-MM-DDTHH:mm')
        changeEventHandler(time, 'start')
    }

    const setTimeEnd = (i) => {
        setShowTimePickerEnd(false);
        const time = moment(selectedEvent.end).hour(i).format('YYYY-MM-DDTHH:mm')
        changeEventHandler(time, 'end')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.eventsListWrapper}>
                <div className={styles.timelineWrapper}>
                    <div className={styles.alldayCellWrapper}>
                        <div className={styles.alldayCellText}>All day</div>
                        <div className={styles.alldayCellEventWrapper}>
                            {
                                allDayEvents.map((event) => (
                                    <div className={styles.eventTitle} onClick={() => openFormHandler('Update', event)}>
                                        {event.title}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {
                        cells.map((eventsList, i) => (
                            <div className={styles.timelineCellWrapper}>
                                <div className={styles.cellTimeWrapper}>{`${i}`.padStart(2, '0')}:00</div>
                                <div className={styles.cellEventWrapper}>
                                    {
                                        eventsList.map(event => (
                                            <div className={styles.eventTitle} onClick={() => openFormHandler('Update', event)}>
                                                {event.title}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.formWrapper}>
                {
                    selectedEvent ? (
                        <div>
                            <input
                                className={styles.inputTitle}
                                value={selectedEvent.title}
                                onChange={(e) => { changeEventHandler(e.target.value, 'title') }}
                                placeholder="Title"
                            />
                            <div className={styles.selectTimeWrapper}>
                                <div className={styles.dateWrapper}>
                                    <span>start</span>
                                    <span>end</span>
                                </div>
                                <div className={styles.dateWrapper}>
                                    <button>{moment(selectedEvent.start).format('dddd, D MMMM ')}</button>
                                    <button>{moment(selectedEvent.end).format('dddd, D MMMM ')}</button>
                                </div>
                                <div className={styles.timeWrapper}>
                                    <button onClick={() => setShowTimePickerStart(prevState => !prevState)}>{moment(selectedEvent.start).format('HH:mm')}</button>
                                    <button onClick={() => setShowTimePickerEnd(prevState => !prevState)}>{moment(selectedEvent.end).format('HH:mm')}</button>
                                    {
                                        showTimePickerStart ? (
                                            <ul className={styles.listOfHoursStart}>
                                                {
                                                    [...new Array(countOfHours)].map((_, i) => (
                                                        <li>
                                                            <button
                                                                className={styles.hoursButton}
                                                                onClick={() => setTimeStart(i)}
                                                            >
                                                                {`${i}`.padStart(2, '0')}:00
                                                            </button>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        ) : null
                                    }
                                    {
                                        showTimePickerEnd ? (
                                            <ul className={styles.listOfHoursEnd}>
                                                {
                                                    [...new Array(countOfHours)].map((_, i) => (
                                                        <li>
                                                            <button
                                                                className={styles.hoursButton}
                                                                onClick={() => setTimeEnd(i)}
                                                            >
                                                                {`${i}`.padStart(2, '0')}:00
                                                            </button>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        ) : null
                                    }
                                </div>
                            </div>
                            <div className={styles.buttonsWrapper}>
                                <button onClick={() => cancelButtonHandler()}>Cancel</button>
                                <button onClick={() => eventAction(selectedEvent)}>{method}</button>
                                <button onClick={() => removeButtonHandler(selectedEvent)}>Remove</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <button onClick={() => openFormHandler('Create', null, startingPointTime)}>Create new event</button>
                            <div className={styles.noEventMessage}>No event selected</div>
                        </>
                    )
                }
            </div>
        </div>
    )
}