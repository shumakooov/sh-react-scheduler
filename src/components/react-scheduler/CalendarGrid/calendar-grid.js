import React from "react";
import styles from './calendar-grid.module.css'
import moment from "moment";
import { CalendarGridHeader } from "../CalendarGridHeader/calendar-grid-header";
import { Month } from "../Month/month";

const CalendarGrid = ({ startDay, startingPointTime, events }) => {
    return (
        <div className={styles.gridWrapper}>
            <CalendarGridHeader />
            <Month
                startDay={startDay}
                events={events}
                startingPointTime={startingPointTime}
            />
        </div>
    )
}

export { CalendarGrid }