import React from "react";
import styles from './month-cell.module.css';
import { isCurrentDay, isDayContainEvent, isSelectedMonth } from "../../../utils/helpers";

export const MonthCell = ({ dayItem, events, startingPointTime }) => {
    return (
        <div className={dayItem.day() === 6 || dayItem.day() === 0 ? `${styles.cellWrapper} ${styles.cellWrapper_weekend}` : styles.cellWrapper}
            key={dayItem.unix()}
        >
            <div className={styles.rowInCell}>
                <div className={isSelectedMonth(dayItem, startingPointTime) ? `${styles.dayWrapper} ${styles.selectedMonthColor}` : styles.dayWrapper}>
                    <div className={isCurrentDay(dayItem) ? styles.currentDay : ''}>{dayItem.format('D')}</div>
                </div>
                {
                    events.length > 2 ? (
                        <div className={styles.showMoreTitle} >
                            + {events.length - 2} more
                        </div>
                    ) : null
                }
            </div>
            <div className={styles.eventWrapper}>
                {
                    events.slice(0, 2)
                        .map(event => (
                            <div className={styles.eventTitle} title={event.title}>
                                {event.title}
                            </div>
                        ))
                }
            </div>
        </div>
    )
}