import React from "react";
import styles from './calendar-grid.module.css'
import moment from "moment";

const CalendarGrid = ({ startDay, startingPointTime }) => {
    const day = startDay.clone();

    const totalDays = 42;
    const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

    const isCurrentDay = (day) => {
        return moment().isSame(day, 'day')
    }

    const isSelectedMonth = (day) => {
        return startingPointTime.isSame(day, 'month')
    }

    return (
        <div className={styles.gridWrapper}>
            {[...Array(7)].map((_, i) => (
                <div className={styles.daysOfWeek}>
                    <div className={styles.daysOfWeekText}>
                        {moment().day(i + 1).format('ddd')}
                    </div>
                </div>))
            }
            {
                daysArray.map((dayItem) => (
                    <div className={dayItem.day() === 6 || dayItem.day() === 0 ? `${styles.cellWrapper} ${styles.cellWrapper_weekend}` : styles.cellWrapper}
                        key={dayItem.unix()}
                    >
                        <div className={styles.rowInCell}>
                            <div className={isSelectedMonth(dayItem) ? `${styles.dayWrapper} ${styles.selectedMonthColor}` : styles.dayWrapper}>
                                <div className={isCurrentDay(dayItem) ? styles.currentDay : ''}>{dayItem.format('D')}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export { CalendarGrid }