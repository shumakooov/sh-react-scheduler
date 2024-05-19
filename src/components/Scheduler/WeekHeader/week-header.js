import React from "react";
import moment from "moment";
import styles from './week-header.module.css'
import { isCurrentDay } from "../../../utils/helpers";

export const WeekHeader = ({ startingPointTime }) => {
    return (
        [...Array(7)].map((_, i) => (
            <div className={styles.daysOfWeek} key={moment().day(i + 1).unix()}>
                <div className={styles.daysOfWeekText}>
                    {startingPointTime.clone().day(i + 1).format('ddd')}&nbsp;
                </div>
                <div className={isCurrentDay(startingPointTime.clone().day(i + 1)) ? styles.currentDay : ''}>
                    <div className={styles.daysOfWeekNumber}>
                        {startingPointTime.clone().day(i + 1).format('D')}
                    </div>
                </div>
            </div>))
    )
}