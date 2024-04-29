import React from "react";
import styles from './day-cell.module.css'
import moment from "moment";

export const DayCell = ({ countOfHours, updateEventByDragAndDrop, currentDayEvents, currentResourceAndDayEvents, openFormHandler, startingPointTime, setDroppedHour, HEIGHT_DAY_CELL, resource }) => {
    let eventsToMap;

    currentResourceAndDayEvents ? eventsToMap = currentResourceAndDayEvents : eventsToMap = currentDayEvents;

    const onDragEndHandler = (e, event) => {
        updateEventByDragAndDrop(event)
    }

    const onDropHandler = (e, i) => {
        e.preventDefault();
        setDroppedHour(i);
    }

    const onDragOverHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.dayCellWrapper}>
            <div className={styles.timeCanvas}>
                {
                    [...Array(countOfHours)].map((_, i) => (
                        <div className={styles.timelineCellWrapper}
                            style={{ height: HEIGHT_DAY_CELL }}
                            onDrop={(e) => onDropHandler(e, i)}
                            onDragOver={onDragOverHandler}
                            onDoubleClick={() => openFormHandler('Create', null, startingPointTime, i, resource)}
                        >
                            <div className={styles.cellEventWrapper} />
                        </div>
                    ))
                }
            </div>
            {
                eventsToMap?.filter(event => event.allDay === false || event.allDay === undefined).map((event, i) => {
                    let startTime = moment(event.start);
                    let endTime = moment(event.end);
                    let duration = moment.duration(endTime.diff(startTime));

                    const EVENT_TOP = startTime.hours() * HEIGHT_DAY_CELL + startTime.minutes() / 2;
                    const EVENT_HEIGHT = duration.hours() * HEIGHT_DAY_CELL + duration.minutes() / 2;

                    return (
                        <div style={{ top: EVENT_TOP, height: EVENT_HEIGHT - 1 }}
                            className={styles.eventTitle}
                            onClick={() => openFormHandler('Update', event, null, null)}
                            name="event"
                            draggable
                            onDragEnd={(e) => onDragEndHandler(e, event)}
                        >
                            {event.title}
                            {
                                EVENT_HEIGHT >= 40 ? (
                                    <div className={styles.eventTime}>
                                        {moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}
                                    </div>
                                ) : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}