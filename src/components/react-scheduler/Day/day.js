import React from "react";
import styles from './day.module.css'
import { isDayContainEvent } from "../../../utils/helpers";
import moment from "moment";

export const Day = ({ events, startingPointTime, selectedEvent, setEvent }) => {
    const currentDayEvents = events.filter(event => isDayContainEvent(event, startingPointTime));
    const allDayEvents = currentDayEvents.filter(event => event.allDay === true);
    const countOfHours = 24;

    const cells = [...Array(countOfHours)].map((_, i) => {
        const temp = [];
        currentDayEvents.forEach(event => {
            if (+moment(event.start).format('H') === i && event.allDay !== true) {
                temp.push(event)
            }
        })
        return temp;
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.eventsListWrapper}>
                {/* <div className={styles.eventListWrapper}>
                {
                    currentDayEvents.map(event => (
                        <div className={styles.eventWrapper}>
                            <div className={styles.eventTitle} onClick={() => setEvent(event)}>
                                {event.title}
                            </div>
                        </div>
                    ))
                }
            </div> */}
                <div className={styles.timelineWrapper}>
                    <div className={styles.alldayCellWrapper}>
                        <div className={styles.alldayCellText}>All day</div>
                        <div className={styles.alldayCellEventWrapper}>
                            {
                                allDayEvents.map((event) => (
                                    <div className={styles.eventTitle} onClick={() => setEvent(event)}>
                                        {event.title}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {
                        cells.map((eventsList, i) => (
                            <div className={styles.timelineCellWrapper}>
                                <div className={styles.cellTimeWrapper}>{`${i}`.padStart(2, '0')}:00</div>
                                <div className={styles.cellEventWrapper}>
                                    {
                                        eventsList.map(event => (
                                            <div className={styles.eventTitle} onClick={() => setEvent(event)}>
                                                {event.title}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.formWrapper}>
                {
                    selectedEvent ? (
                        <div>
                            <div>
                                {selectedEvent.title}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.noEventMessage}>No event selected</div>
                    )
                }
            </div>
        </div>
    )
}