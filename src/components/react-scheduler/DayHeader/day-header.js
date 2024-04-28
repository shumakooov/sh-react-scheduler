import React from "react";
import moment from "moment";
import styles from './day-header.module.css'

export const DayHeader = ({ resources }) => {
    return (
        resources?.map((resource, i) => (
            <div className={styles.resourceWrapper} key={moment().day(i + 1).unix()}>
                <div className={styles.resourceText}>
                    {resource.resource}
                </div>
            </div>
        ))
    )
}