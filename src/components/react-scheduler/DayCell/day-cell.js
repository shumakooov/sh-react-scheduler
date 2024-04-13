import React, { useState } from "react";
import styles from './day-cell.module.css'
import { HEIGHT_DAY_CELL, views } from "../../../utils/constants";
import moment from "moment";

export const DayCell = ({ countOfHours, updateEventByDragAndDrop, currentDayEvents, openFormHandler, view }) => {
    const cells = [...Array(countOfHours)];
    const [droppedHour, setDroppedHour] = useState(null);

    const onDragEndHandler = (e, event) => {
        updateEventByDragAndDrop(event, droppedHour)
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
                    cells.map((_, i) => (
                        <div className={styles.timelineCellWrapper}
                            style={{ height: HEIGHT_DAY_CELL }}
                            onDrop={(e) => onDropHandler(e, i)}
                            onDragOver={onDragOverHandler}
                        >
                            {
                                view === views.WEEK ? null : (
                                    <div className={styles.cellTimeWrapper}>{`${i}`.padStart(2, '0')}:00</div>
                                )
                            }
                            <div className={styles.cellEventWrapper} />
                        </div>
                    ))
                }
            </div>
            {
                currentDayEvents.filter(event => event.allDay === false || event.allDay === undefined).map((event, i) => {
                    let startTime = moment(event.start);
                    let endTime = moment(event.end);
                    let duration = moment.duration(endTime.diff(startTime));

                    const EVENT_TOP = startTime.hours() * HEIGHT_DAY_CELL + startTime.minutes() / 2;
                    const EVENT_HEIGHT = duration.hours() * HEIGHT_DAY_CELL + duration.minutes() / 2;

                    return (
                        <div style={view === views.WEEK ? { left: 0, top: EVENT_TOP, height: EVENT_HEIGHT - 1 } : { left: 40, top: EVENT_TOP, height: EVENT_HEIGHT - 1 }}
                            className={styles.eventTitle}
                            onClick={() => openFormHandler('Update', event)}
                            name="event"
                            draggable
                            onDragEnd={(e) => onDragEndHandler(e, event)}
                        >
                            {event.title}
                        </div>
                    )
                })
            }
        </div>
    )
}