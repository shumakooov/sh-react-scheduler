import React from "react";
import styles from './week.module.css'
import { isDayContainEvent } from "../../../utils/helpers";
import { DayCell } from "../DayCell/day-cell";
import { WeekHeader } from "../WeekHeader/week-header";
import { HEIGHT_DAY_CELL } from "../../../utils/constants";
import { AllDayEventsCell } from "../AllDayEventsCell/all-day-events-cell";
import { RedLine } from "../RedLine/redLine";

export const Week = ({ startingPointTime, events, updateEventByDragAndDrop, openFormHandler, view }) => {
    const countOfHours = 24;

    return (
        <div className={styles.wrapper}>
            <div className={styles.eventsListWrapper}>
                <div className={styles.timelineWrapper}>
                    <div className={styles.weekHeader}>
                        <WeekHeader startingPointTime={startingPointTime} />
                    </div>

                    <RedLine startingPointTime={startingPointTime} />

                    <div className={styles.weekCellsWrapper}>
                        {/* {
                            [...Array(countOfHours)].map((_, i) => (
                                <div className={styles.cellTimeWrapper}>{`${i}`.padStart(2, '0')}:00</div>
                            ))
                        } */}

                        {
                            [...Array(7)].map((_, i) => {
                                let currentDayEvents = events.filter(event => isDayContainEvent(event, startingPointTime.clone().startOf('week').add(i + 1, 'day')));
                                return (
                                    <div className={styles.weekDayColumn}>
                                        <AllDayEventsCell
                                            currentDayEvents={currentDayEvents}
                                            openFormHandler={openFormHandler}
                                            view={view}
                                        />
                                        <DayCell
                                            countOfHours={countOfHours}
                                            updateEventByDragAndDrop={updateEventByDragAndDrop}
                                            currentDayEvents={currentDayEvents}
                                            openFormHandler={openFormHandler}
                                            view={view}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>



                </div>
            </div>


            {/* <Form
                startingPointTime={startingPointTime}
                selectedEvent={selectedEvent}
                changeEventHandler={changeEventHandler}
                countOfHours={countOfHours}
                cancelButtonHandler={cancelButtonHandler}
                eventAction={eventAction}
                method={method}
                removeButtonHandler={removeButtonHandler}
                openFormHandler={openFormHandler}
            /> */}
        </div>
    )
}