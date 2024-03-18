import React from "react";
import styles from './calendar-grid.module.css'

const CalendarGrid = ({startDay}) => {
    const day = startDay.clone();

    const totalDays = 42;
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

    return (
        <div className={styles.gridWrapper}>
            {
                daysArray.map((dayItem) => (
                    <div className={dayItem.day() === 6 || dayItem.day() === 0 ? `${styles.cellWrapper} ${styles.cellWrapper_weekend}` : styles.cellWrapper}
                    key={dayItem.format('DDMMYYYY')}
                    > 
                        <div className={styles.rowInCell}>
                            <div className={styles.dayWrapper}>
                            {dayItem.format('D')}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export {CalendarGrid}