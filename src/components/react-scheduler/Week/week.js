import React from "react";
import styles from './week.module.css'
import { isDayContainEvent } from "../../../utils/helpers";
import { DayCell } from "../DayCell/day-cell";
import { WeekHeader } from "../WeekHeader/week-header";
import { HEIGHT_DAY_CELL } from "../../../utils/constants";
import { AllDayEventsCell } from "../AllDayEventsCell/all-day-events-cell";
import { RedLine } from "../RedLine/redLine";
import { Form } from "../Form/form";

export const Week = ({ startingPointTime, events, selectedEvent, method, cancelButtonHandler, eventAction, removeButtonHandler, changeEventHandler, openFormHandler, updateEventByDragAndDrop, view, setDroppedHour }) => {
    const countOfHours = 24;
    const countOfDays = 7;

    return (
        <div className={styles.wrapper}>
            <div className={styles.eventsListWrapper}>
                <div className={styles.timelineWrapper}>
                    <div className={styles.wrapperWeekHeader}>
                        <div className={styles.emptySquareInHeader} />
                        <div className={styles.weekHeader}>
                            <WeekHeader startingPointTime={startingPointTime} />
                        </div>
                    </div>

                    <RedLine startingPointTime={startingPointTime} />

                    <div className={styles.weekCellsWrapper}>
                        <div className={styles.hoursCellsWrapper}>
                            <div className={styles.cellTimeWrapper} style={{ height: HEIGHT_DAY_CELL }}>
                                All day
                            </div>
                            {
                                [...Array(countOfHours)].map((_, i) => (
                                    <div className={styles.cellTimeWrapper} style={{ height: HEIGHT_DAY_CELL }}>{`${i}`.padStart(2, '0')}:00</div>
                                ))
                            }
                        </div>

                        {
                            [...Array(countOfDays)].map((_, i) => {
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
                                            startingPointTime={startingPointTime.clone().startOf('week').add(i + 1, 'day')}
                                            setDroppedHour={setDroppedHour}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            {
                selectedEvent ? (
                    <Form
                        startingPointTime={startingPointTime}
                        selectedEvent={selectedEvent}
                        changeEventHandler={changeEventHandler}
                        countOfHours={countOfHours}
                        cancelButtonHandler={cancelButtonHandler}
                        eventAction={eventAction}
                        method={method}
                        removeButtonHandler={removeButtonHandler}
                        openFormHandler={openFormHandler}
                    />
                ) : null
            }
        </div>
    )
}