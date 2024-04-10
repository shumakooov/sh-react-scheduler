import React from "react";
import styles from './all-day-events-cell.module.css'
import { HEIGHT_DAY_CELL, views } from "../../../utils/constants";

export const AllDayEventsCell = ({ currentDayEvents, openFormHandler, view }) => {
    const allDayEvents = currentDayEvents.filter(event => event.allDay === true);

    return (
        <div className={styles.alldayCellWrapper}>
            {
                view === views.WEEK ? null : (
                    <div className={styles.alldayCellText}>All day</div>
                )
            }
            <div className={styles.alldayCellEventWrapper} style={{ height: HEIGHT_DAY_CELL }}>
                {
                    allDayEvents.map((event) => (
                        <div className={styles.eventTitle} onClick={() => openFormHandler('Update', event)}>
                            {event.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}