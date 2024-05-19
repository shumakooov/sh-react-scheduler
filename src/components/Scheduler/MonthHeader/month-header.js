import React from "react";
import moment from "moment";
import styles from './month-header.module.css'

export const MonthHeader = () => {
    return (
        [...Array(7)].map((_, i) => (
            <div className={styles.daysOfWeek} key={moment().day(i + 1).unix()}>
                <div className={styles.daysOfWeekText}>
                    {moment().day(i + 1).format('ddd')}
                </div>
            </div>))
    )
}