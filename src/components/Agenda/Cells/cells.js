import React, { useState } from "react";
import styles from './cells.module.css'
import moment from "moment";

export const Cells = ({ currentWeekEvents, startingPointTime, openModal }) => {
    const countOfDays = 7;

    const priorities = {
        high: '#E4717A',
        medium: '#E6D690',
        low: '#A8E4A0',
    }

    return (
        <div className={styles.dayCellWrapper}>
            {
                [...Array(countOfDays)].map((_, i) => {
                    let currentDayEvents = currentWeekEvents?.filter(event => moment(event.start).isSame(startingPointTime.clone().startOf('week').add(i + 1, 'day'), 'day'))

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
                                                <div className={styles.eventWrapper} onDoubleClick={() => openModal(event)}>
                                                    <div className={styles.eventPoint} style={{ background: priorities[event.priority] }}></div>
                                                    <div>
                                                        <div className={styles.eventTitle}>
                                                            {event.title}
                                                        </div>
                                                        <div className={styles.infoWrapper}>
                                                            <div className={styles.infoItem}>
                                                                {
                                                                    event.allDay ? (
                                                                        <div>All day</div>
                                                                    ) : (
                                                                        <div>{moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}</div>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className={styles.infoItem}>
                                                                Assignee: {event.assignee}
                                                            </div>
                                                            <div className={styles.infoItem}>
                                                                Priority: {event.priority}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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