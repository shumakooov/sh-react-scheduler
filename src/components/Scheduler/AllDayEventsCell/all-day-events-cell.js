import React from "react";
import styles from './all-day-events-cell.module.css'

export const AllDayEventsCell = ({ currentDayEvents, currentResourceAndDayEvents, openFormHandler, view, HEIGHT_DAY_CELL }) => {
    let eventsToMap;

    currentResourceAndDayEvents ? eventsToMap = currentResourceAndDayEvents?.filter(event => event.allDay === true) : eventsToMap = currentDayEvents?.filter(event => event.allDay === true);

    return (
        <div className={styles.alldayCellWrapper} style={{ height: HEIGHT_DAY_CELL }}>
            <div className={styles.alldayCellEventWrapper}>
                {
                    eventsToMap?.map((event) => (
                        <div className={styles.eventTitle} onClick={() => openFormHandler('Update', event)}>
                            {event.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}