import React from "react";
import styles from './cells.module.css'
import moment from "moment";
import { Event } from "../Event/event";

export const Cells = ({ currentWeekEvents, startingPointTime, openModal, parentRef, onEventClick }) => {
    const countOfDays = 7;

    return (
        <div className={styles.dayCellWrapper}>
            {
                [...Array(countOfDays)].map((_, i) => {
                    let currentDayEvents = currentWeekEvents?.filter(event => moment(event.start).isSame(startingPointTime.clone().startOf('week').add(i + 1, 'day'), 'day')).sort((a, b) => moment(b.start).diff(moment(b.end)) - moment(a.start).diff(moment(a.end)))

                    if (currentDayEvents.length > 0) {
                        return (
                            <div className={styles.timelineCellWrapper}>
                                <div className={styles.dayWrapper}>
                                    {moment(currentDayEvents[0].start).format('D ddd')}
                                </div>
                                <div className={styles.eventsWrapper}>
                                    {
                                        currentDayEvents?.map((event, i) => {
                                            return (
                                                <Event event={event} parentRef={parentRef} openModal={openModal} onEventClick={onEventClick} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}